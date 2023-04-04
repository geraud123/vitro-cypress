import { LoginUtils } from "../../utils/login/login-utils";
import { CommonConstants } from "../../utils/common/common-constants";
import { VoiceTicketConstants } from "../../utils/voiceTicket/voiceTicket-constants";
import { InfoUtils } from "../../utils/infos/info-utils";

let ticketIdRes = null;
let ticketIdSupp = null;
let typeValue = null;
let type = null;

describe("Login", () => {
  beforeEach(() => {
    LoginUtils.login();
  });
  it("TS-1070: Erfolgreich Voice-Ticket erstellen @voice-Ticket-Szenario4A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(1000);
    cy.get(VoiceTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "Easybell"
    );
    typeValue = "Easybell";
    type = "reseller";
    cy.get(
      VoiceTicketConstants.Selectors.Kundenerfassung.Reseller.RES_KUNDENNR
    ).type("1267564");
    cy.get(
      VoiceTicketConstants.Selectors.Kundenerfassung.Reseller
        .SEARCH_RES_KUNDENNR
    ).click();
    cy.get(VoiceTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) VC-VDSL-50-VOIP"
    );
    cy.get(VoiceTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART).select(
      "E-Mail"
    );
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .find("select")
      .first()
      .select("Voice");
    cy.wait(1000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .find("select")
      .first()
      .select("Ja");
    cy.wait(1000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .find("input")
      .eq(1)
      .type("Heute");
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(1000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .find("select")
      .first()
      .select("Eingehende Telefonie");
    cy.wait(1000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .find("input")
      .eq(1)
      .clear()
      .type(
        "A: 004920541234567; B: 004920542359684; Zeitpunkt: 24.10.2012 13:30"
      );
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(1000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .find("input")
      .eq(1)
      .type("Temporarely not available");
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(1000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .find("select")
      .first()
      .select("Permanent");
    cy.wait(1000);
    cy.get(VoiceTicketConstants.Selectors.FragenKatalog.NEXT_BUTTON).click();
    cy.wait(1000);
    cy.get(
      VoiceTicketConstants.Selectors.TicketSpeichern.ScenarioC.MELDUNGSART_LIST
    ).select("Totalausfall");
    cy.get(
      VoiceTicketConstants.Selectors.TicketSpeichern.ScenarioC.PRIORITAET_LIST
    ).select("Normal");
    cy.get(VoiceTicketConstants.Selectors.TicketSpeichern.TICKET_NAME).type(
      "//test"
    );
    cy.get(
      VoiceTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
    ).type("Das ist eine Problembeschreibung");
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(1000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      });
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "Basis Audionet");
  });
  it("TS-1061: UI Supplier Nachricht (verantwortlich) an UI Reseller @voice-Ticket-Szenario4A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "basisaudionet",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "basisaudionet";
    type = "supplier";
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "Supplier Nachricht (verantwortlich) an UI Reseller"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.VERANTWORTLICH
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_SUP)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdSupp = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      });
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
  });
  it("TS-1060: UI Reseller Nachricht (weitergeleitet) an UI Supplier 1 @voice-Ticket-Szenario4A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Easybell",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Easybell";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller Nachricht (weitergeleitet) an UI Supplier"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.WEITERGELEITET
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
  });
  it("TS-1083: UI Supplier Nachricht (weitergeleitet) an UI Reseller @voice-Ticket-Szenario4A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "basisaudionet",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "basisaudionet";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "Supplier Nachricht (weitergeleitet) an UI Reseller"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.WEITERGELEITET
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_SUP)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
  });
  it("TS-1048: UI Reseller Nachricht (weitergeleitet) an UI Supplier 2 @voice-Ticket-Szenario4A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Easybell",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Easybell";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller Nachricht (weitergeleitet) an UI Supplier"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.WEITERGELEITET
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
  });
  it("TS-1059: UI Supplier sendet resolve an UI Reseller @voice-Ticket-Szenario4A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "basisaudionet",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "basisaudionet";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Supplier sendet resolve an UI Reseller"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.GELOEST)
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_SUP)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.RESOLVED
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
  });
  it("TS-1058: UI Reseller reklamiert bei UI Supplier @voice-Ticket-Szenario4A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Easybell",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Easybell";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller reklamiert bei UI Supplier"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.REKLAMIERT)
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
  });
  it("TS-1059: UI Supplier sendet resolve an UI Reseller @voice-Ticket-Szenario4A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "basisaudionet",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "basisaudionet";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Supplier sendet resolve an UI Reseller"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.GELOEST)
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_SUP)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.RESOLVED
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
  });
  it("TS-1072: UI Reseller sendet close an BasisAudionet @voice-Ticket-Szenario4A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Easybell",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Easybell";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller sendet close an BasisAudionet"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.CLOSE)
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
      ticketIdRes
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.CLOSE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
      );
  });
  it("TS-1070: Erfolgreich Voice-Ticket erstellen @voice-Ticket-Szenario4A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(1000);
    cy.get(VoiceTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "Easybell"
    );
    typeValue = "Easybell";
    type = "reseller";
    cy.get(
      VoiceTicketConstants.Selectors.Kundenerfassung.Reseller.RES_KUNDENNR
    ).type("1267564");
    cy.get(
      VoiceTicketConstants.Selectors.Kundenerfassung.Reseller
        .SEARCH_RES_KUNDENNR
    ).click();
    cy.get(VoiceTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) VC-VDSL-50-VOIP"
    );
    cy.get(VoiceTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART).select(
      "E-Mail"
    );
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .find("select")
      .first()
      .select("Voice");
    cy.wait(1000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .find("select")
      .first()
      .select("Ja");
    cy.wait(1000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .find("input")
      .eq(1)
      .type("Heute");
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(1000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .find("select")
      .first()
      .select("Eingehende Telefonie");
    cy.wait(1000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .find("input")
      .eq(1)
      .clear()
      .type(
        "A: 004920541234567; B: 004920542359684; Zeitpunkt: 24.10.2012 13:30"
      );
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(1000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .find("input")
      .eq(1)
      .type("Temporarely not available");
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(1000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .find("select")
      .first()
      .select("Permanent");
    cy.wait(1000);
    cy.get(VoiceTicketConstants.Selectors.FragenKatalog.NEXT_BUTTON).click();
    cy.wait(1000);
    cy.get(
      VoiceTicketConstants.Selectors.TicketSpeichern.ScenarioC.MELDUNGSART_LIST
    ).select("Totalausfall");
    cy.get(
      VoiceTicketConstants.Selectors.TicketSpeichern.ScenarioC.PRIORITAET_LIST
    ).select("Normal");
    cy.get(VoiceTicketConstants.Selectors.TicketSpeichern.TICKET_NAME).type(
      "//test"
    );
    cy.get(
      VoiceTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
    ).type("Das ist eine Problembeschreibung");
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(1000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      });
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "Basis Audionet");
  });
  it("TS-1073: UI Reseller sendet cancel an BasisAudionet @voice-Ticket-Szenario4B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Easybell",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Easybell";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller sendet cancel an BasisAudionet"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.ABGEBROCHEN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
      ticketIdRes
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.CANCEL
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.ABBRUCH
      );
  });
});
