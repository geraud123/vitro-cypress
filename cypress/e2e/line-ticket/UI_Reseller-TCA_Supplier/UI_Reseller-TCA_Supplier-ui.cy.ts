import { LoginUtils } from "../../../utils/login/login-utils";
import { LineTicketConstants } from "../../../utils/lineTicket/lineTicket-constants";
import { CommonConstants } from "../../../utils/common/common-constants";
import { InfoUtils } from "../../../utils/infos/info-utils";
import { RequestsInfos } from "../../../utils/requests/requests-utils/requests-infos";
import { VoiceTicketConstants } from "../../../utils/voiceTicket/voiceTicket-constants";

let ticketIdRes = null;
let ticketIdSupp = null;
let typeValue = null;
let type = null;

describe("Login", () => {
  beforeEach(() => {
    LoginUtils.login();
  });
  it("TS-1419: UI Reseller erstellt Leitungs-Ticket mit Steuercode $11A bei NCK (TCA) @line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "Netcom Kassel GmbH"
    );
    typeValue = "Netcom Kassel GmbH";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "733540"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) NCKS-FTTC-VDSL-50-10-VOIP-BASIC"
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
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
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
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(5000);
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
    ).type("UI Reseller erstellt Leitungs-Ticket bei NCK (TCA) $11A");
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(2000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      });
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should("contain.text", "Leitung")
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      )
      .should("contain.text", "Netcom Kassel GmbH");
    cy.wait(30000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG)
      .should("contain.text", "send CLOSE")
      .should("contain.text", "send RESOLVE");
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
      );
  });
  it("TS-1111: UI Reseller bestätigt close @line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Netcom Kassel GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Netcom Kassel GmbH";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller bestätigt close"
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

  it("TS-1421: UI Reseller erstellt Leitungs-Ticket mit Steuercode $11B bei NCK (TCA) @line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "Netcom Kassel GmbH"
    );
    typeValue = "Netcom Kassel GmbH";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "733540"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) NCKS-FTTC-VDSL-50-10-VOIP-BASIC"
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
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
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
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(5000);
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
    ).type("UI Reseller erstellt Leitungs-Ticket bei NCK (TCA) $11B");
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(2000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      });
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should("contain.text", "Leitung")
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      )
      .should("contain.text", "Netcom Kassel GmbH");
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send CANCEL");
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.ABBRUCH
      );
  });
  it("TS-1049: UI Reseller bestätigt Abbruch @line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Netcom Kassel GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Netcom Kassel GmbH";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.ABBRUCH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller bestätigt Abbruch"
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

  it("TS-1422: UI Reseller erstellt Leitungs-Ticket mit Steuercode $11C bei NCK (TCA) @line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11C", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "Netcom Kassel GmbH"
    );
    typeValue = "Netcom Kassel GmbH";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "733540"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) NCKS-FTTC-VDSL-50-10-VOIP-BASIC"
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
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
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
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(5000);
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
    ).type("UI Reseller erstellt Leitungs-Ticket bei NCK (TCA) $11C");
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(2000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      });
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should("contain.text", "Leitung")
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      )
      .should("contain.text", "Netcom Kassel GmbH");
    cy.wait(30000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG)
      .should("contain.text", "send modify without StatusChange")
      .should("contain.text", "send DISPATCH");
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
  });
  it("TS-1423: UI Reseller sendet TAM-ANT an TCA Supplier NCK @line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11C", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Netcom Kassel GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Netcom Kassel GmbH";
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
      "UI Reseller sendet TAM-ANT an TCA Supplier NCK $11C"
    );
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.TERMIN_WERKTAG_CONTAINER
    )
      .contains("Mo-Sa 08:00 - 12:00")
      .click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.TERMIN_WERKTAG_CONTAINER
    )
      .find("input")
      .eq(2)
      .type("04.01.2030");
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.WEITERGELEITET
      )
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
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.wait(30000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG)
      .should("contain.text", "send RESOLVE")
      .should("contain.text", "send CLOSE");
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
      );
  });
  it("TS-1111: UI Reseller bestätigt close @line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11C", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Netcom Kassel GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Netcom Kassel GmbH";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller bestätigt close"
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

  it("TS-1425: UI Reseller erstellt Leitungs-Ticket mit Steuercode $11D bei NCK (TCA) @line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11D", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "Netcom Kassel GmbH"
    );
    typeValue = "Netcom Kassel GmbH";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "733540"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) NCKS-FTTC-VDSL-50-10-VOIP-BASIC"
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
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
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
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(5000);
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
    ).type("UI Reseller erstellt Leitungs-Ticket bei NCK (TCA) $11D");
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(2000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      });
    cy.get("span")
      .contains("Netcom Kassel GmbH - Lieferant")
      .first()
      .invoke("text")
      .then((text) => {
        ticketIdSupp = text.split(" ")[0];
      });
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should("contain.text", "Leitung")
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      )
      .should("contain.text", "Netcom Kassel GmbH");
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send RESOLVE");
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
  });
  it("TS-1426: UI Reseller reklamiert bei TCA Supplier NCK @line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11D", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Netcom Kassel GmbH",
      { force: true }
    );
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
    typeValue = "Netcom Kassel GmbH";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller reklamiert bei TCA Supplier NCK $11D"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.REKLAMIERT)
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
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send RESOLVE");
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
  });
  it("TS-1427: UI Reseller sendet close an TCA Supplier NCK @line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11D", () => {
    RequestsInfos.modifyScenario("11D");
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Netcom Kassel GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Netcom Kassel GmbH";
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
      "UI Reseller sendet close an TCA Supplier NCK $11D"
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
    cy.wait(10000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
      ticketIdSupp
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
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send CLOSE");
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.CLOSE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
      );
    RequestsInfos.resetSupplierScenario("11D");
  });

  it("TS-1431: UI Reseller erstellt Leitungs-Ticket mit Steuercode $11E bei NCK (TCA) @line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11E", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "Netcom Kassel GmbH"
    );
    typeValue = "Netcom Kassel GmbH";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "733540"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) NCKS-FTTC-VDSL-50-10-VOIP-BASIC"
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
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
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
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(5000);
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
    ).type("UI Reseller erstellt Leitungs-Ticket bei NCK (TCA) $11E");
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(2000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      });
    cy.get("span")
      .contains("Netcom Kassel GmbH - Lieferant")
      .first()
      .invoke("text")
      .then((text) => {
        ticketIdSupp = text.split(" ")[0];
      });
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should("contain.text", "Leitung")
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      )
      .should("contain.text", "Netcom Kassel GmbH");
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send modify without StatusChange");
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
  });
  it("TS-1435: UI Reseller Nachricht (weitergeleitet) an TCA Supplier NCK @line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11E", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Netcom Kassel GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Netcom Kassel GmbH";
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
      "UI Reseller Nachricht (weitergeleitet) an TCA Supplier NCK $11E"
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
    cy.wait(30000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG)
      .should("contain.text", "send DISPATCH")
      .should("contain.text", "send modify without StatusChange");
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
  });
  it("TS-1436: UI Reseller Nachricht (verantwortlich) an TCA Supplier NCK @line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11E", () => {
    RequestsInfos.modifyScenario("11E");
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Netcom Kassel GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Netcom Kassel GmbH";
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
      "UI Reseller Nachricht (verantwortlich) an TCA Supplier NCK"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.VERANTWORTLICH
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
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
  });
  it("TS-1437: UI Reseller Nachricht (weitergeleitet) an TCA Supplier NCK mit Response RESOLVE,CLOSE @line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11E", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Netcom Kassel GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Netcom Kassel GmbH";
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
      "UI Reseller Nachricht (weitergeleitet) an TCA Supplier NCK mit Response RESOLVE,CLOSE $11E"
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
    cy.wait(30000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG)
      .should("contain.text", "send RESOLVE")
      .should("contain.text", "send CLOSE");
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
      );
    RequestsInfos.resetSupplierScenario("11E");
  });
  it("TS-1111: UI Reseller bestätigt close @line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11E", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Netcom Kassel GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Netcom Kassel GmbH";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller bestätigt close"
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
});
