import { LoginUtils } from "../../../utils/login/login-utils";
import { LineTicketConstants } from "../../../utils/lineTicket/lineTicket-constants";
import { CommonConstants } from "../../../utils/common/common-constants";
import { InfoUtils } from "../../../utils/infos/info-utils";
import { VoiceTicketConstants } from "../../../utils/voiceTicket/voiceTicket-constants";

let ticketIdRes = null;
let ticketIdSupp = null;
let typeValue = null;
let type = null;

describe("Login", () => {
  beforeEach(() => {
    LoginUtils.login();
  });
  it('TS-1113: UI Reseller erstellt Leitungs-Ticket bei DTAG (Fax)("ADSL SA.*", "VDSL.SA.*") @line-Ticket(UI_Reseller->DTAG(FAX))-Szenario10A', () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "Ecotel (1st level)"
    );
    typeValue = "Ecotel (1st level)";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "791045"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) VDSL-25"
    );
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART).select(
      "E-Mail"
    );
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Leitung");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Totalausfall");
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Portanalyse durchgeführt");
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.NEXT_BUTTON).click();
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.ScenarioC.MELDUNGSART_LIST
    ).select("Totalausfall");
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.ScenarioC.PRIORITAET_LIST
    ).select("Normal");
    cy.get(LineTicketConstants.Selectors.TicketSpeichern.TICKET_NAME).type(
      "//test"
    );
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
    ).type("Das ist eine Problembeschreibung");
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.NEXT_ACTION_FAX
    ).click();
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(2000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
        cy.get(CommonConstants.Selectors.DetailTicket.PLUS_INFO_BUTTON).click();
        cy.get("span")
          .contains("Deutsche Telekom")
          .first()
          .then(($ticketID) => {
            ticketIdSupp = $ticketID[0].innerHTML.match("^\\d{5}").toString();
            cy.get(
              CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
            ).should("contain.text", "Deutsche Telekom");
            cy.get(
              CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST
            ).select("DTAG", { force: true });
            cy.wait(3000);
            cy.get("span")
              .contains("Ticket-ID")
              .first()
              .should("contain.text", "Ticket-ID: " + ticketIdSupp);
            cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
              .first()
              .click();
            cy.get(
              CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_FAX
            )
              .should("contain.text", "DTAG Dokument hinzugefügt")
              .should("contain.text", "ADSL-standalone");
          });
      });
  });
  it("TS-1059: UI Supplier sendet resolve an UI Reseller @line-Ticket(UI_Reseller->DTAG(FAX))-Szenario10A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "DTAG",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "DTAG";
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
  it("TS-1115: UI Reseller sendet close an DTAG (FAX) @line-Ticket(UI_Reseller->DTAG(FAX))-Szenario10A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Ecotel (1st level)",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Ecotel (1st level)";
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
      "UI Reseller sendet close an DTAG (FAX)"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.CLOSE)
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES_TAL
    )
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
  it("TS-1113: UI Reseller erstellt Leitungs-Ticket bei DTAG (Fax)(singleExpress) @line-Ticket(UI_Reseller->DTAG(FAX))-Szenario10B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "Ecotel (1st level)"
    );
    typeValue = "Ecotel (1st level)";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "791045"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) VDSL-25"
    );
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART).select(
      "E-Mail"
    );
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Leitung");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Totalausfall");
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Portanalyse durchgeführt");
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.NEXT_BUTTON).click();
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.ScenarioC.MELDUNGSART_LIST
    ).select("Totalausfall");
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.ScenarioC.PRIORITAET_LIST
    ).select("Normal");
    cy.get(LineTicketConstants.Selectors.TicketSpeichern.TICKET_NAME).type(
      "//test"
    );
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
    ).type("Das ist eine Problembeschreibung");
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.NEXT_ACTION_FAX
    ).click();
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(2000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
        cy.get(CommonConstants.Selectors.DetailTicket.PLUS_INFO_BUTTON).click();
        cy.get("span")
          .contains("Deutsche Telekom")
          .first()
          .then(($ticketID) => {
            ticketIdSupp = $ticketID[0].innerHTML.match("^\\d{5}").toString();
            cy.get(
              CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
            ).should("contain.text", "Deutsche Telekom");
            cy.get(
              CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST
            ).select("DTAG", { force: true });
            cy.wait(1000);
            cy.get("span")
              .contains("Ticket-ID")
              .first()
              .should("contain.text", "Ticket-ID: " + ticketIdSupp);
            cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
              .first()
              .click();
            cy.get(
              CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_FAX
            )
              .should("contain.text", "DTAG Dokument hinzugefügt")
              .should("contain.text", "DTAG_Express");
          });
      });
  });
  it("TS-1059: UI Supplier sendet resolve an UI Reseller @line-Ticket(UI_Reseller->DTAG(FAX))-Szenario10B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "DTAG",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "DTAG";
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
  it("TS-1115: UI Reseller sendet close an DTAG (FAX) @line-Ticket(UI_Reseller->DTAG(FAX))-Szenario10B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Ecotel (1st level)",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Ecotel (1st level)";
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
      "UI Reseller sendet close an DTAG (FAX)"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.CLOSE)
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES_TAL
    )
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
  it('TS-1113: UI Reseller erstellt Leitungs-Ticket bei DTAG (Fax)("SDSL.*") @line-Ticket(UI_Reseller->DTAG(FAX))-Szenario10C', () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "vitroconnect"
    );
    typeValue = "vitroconnect";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "1329230"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) SDSL-2000"
    );
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART).select(
      "E-Mail"
    );
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Leitung");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Totalausfall");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Portanalyse durchgeführt");
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.NEXT_BUTTON).click();
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.ScenarioC.MELDUNGSART_LIST
    ).select("Totalausfall");
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.ScenarioC.PRIORITAET_LIST
    ).select("Normal");
    cy.get(LineTicketConstants.Selectors.TicketSpeichern.TICKET_NAME).type(
      "//test"
    );
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
    ).type("Das ist eine Problembeschreibung");
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.NEXT_ACTION_FAXC
    ).click();
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(2000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
        cy.get(CommonConstants.Selectors.DetailTicket.PLUS_INFO_BUTTON).click();
        cy.get("span")
          .contains("Deutsche Telekom")
          .first()
          .then(($ticketID) => {
            ticketIdSupp = $ticketID[0].innerHTML.match("^\\d{5}").toString();
            cy.get(
              CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
            ).should("contain.text", "Deutsche Telekom");
            cy.get(
              CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST
            ).select("DTAG", { force: true });
            cy.wait(1000);
            cy.get("span")
              .contains("Ticket-ID")
              .first()
              .should("contain.text", "Ticket-ID: " + ticketIdSupp);
            cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
              .first()
              .click();
            cy.get(
              CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_FAX
            )
              .should("contain.text", "DTAG Dokument hinzugefügt")
              .should("contain.text", "SDSL");
          });
      });
  });
  it("TS-1059: UI Supplier sendet resolve an UI Reseller @line-Ticket(UI_Reseller->DTAG(FAX))-Szenario10C", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "DTAG",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "DTAG";
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
  it("TS-1115: UI Reseller sendet close an DTAG (FAX) @line-Ticket(UI_Reseller->DTAG(FAX))-Szenario10C", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect";
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
      "UI Reseller sendet close an DTAG (FAX)"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.CLOSE)
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES_TAL
    )
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
});
