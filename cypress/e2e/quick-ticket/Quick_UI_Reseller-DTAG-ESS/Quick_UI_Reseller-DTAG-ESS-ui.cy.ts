import { LoginUtils } from "../../../utils/login/login-utils";
import { QuickTicketConstants } from "../../../utils/quickTicket/quickTicket-constants";
import { FakerUtils } from "../../../utils/faker-utils";
import { CommonConstants } from "../../../utils/common/common-constants";
import { InfoUtils } from "../../../utils/infos/info-utils";

let ticketIdRes = null;
let typeValue = null;
let type = null;

describe("Login", () => {
  beforeEach(() => {
    LoginUtils.login();
  });
  it("TS-1137: Easybell QuickTicket bei DTAG per ESS(No Sync Neuschaltung) @quick-Ticket(UI_Reseller->DTAG(ESS))-Szenario30A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("QT No Sync Neuschaltung")
      .click({ force: true });
    cy.wait(1000);
    cy.get(QuickTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "Easybell"
    );
    typeValue = "Easybell";
    type = "reseller";
    cy.get(
      QuickTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR
    ).type("861039");
    cy.get(
      QuickTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(1000);
    cy.get(QuickTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART).select(
      "E-Mail"
    );
    cy.wait(1000);
    cy.get(QuickTicketConstants.Selectors.Ticketerstellung.PARTNER_NUMMER).type(
      "01234567890"
    );
    cy.wait(1000);
    cy.get(
      QuickTicketConstants.Selectors.Ticketerstellung.PARTNER_VORNAME
    ).type(FakerUtils.faker.name.firstName());
    cy.wait(1000);
    cy.get(
      QuickTicketConstants.Selectors.Ticketerstellung.PARTNER_NACHNAME
    ).type(FakerUtils.faker.name.lastName());
    cy.wait(1000);
    cy.get(QuickTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) VDSL-25"
    );
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
    cy.wait(1000);
    cy.get(
      QuickTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
    ).should(
      "contain.text",
      "Hallo Telefonica,\n" +
        "\n" +
        "wir sehen den Anschluss des Kunden nicht\n" +
        "synchron.\n" +
        "\n" +
        "Aktuell sind uns keine DMM-Messungen für diesen Anschluss\n" +
        "möglich.\n" +
        "\n" +
        "Die CPE des Kunden wurde bereits resettet und ist dauerhaft\n" +
        "angeschlossen und eingeschaltet.\n" +
        "\n" +
        "Wir bitten um Prüfung.\n" +
        "\n" +
        "Freundliche Grüße,\n" +
        "Easybell"
    );
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
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
      .should("contain.text", "Deutsche Telekom");
    cy.wait(98000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.get(QuickTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG)
      .should("contain.text", "(QEB)")
      .should("contain.text", "(ERLM)")
      .should("contain.text", "ENTM");
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
  it("TS-1111: UI Reseller bestätigt close @quick-Ticket(UI_Reseller->DTAG(ESS))-Szenario30A", () => {
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
  it("TS-1138: Easybell QuickTicket bei DTAG per ESS(No Sync Bestandskunde) @quick-Ticket(UI_Reseller->DTAG(ESS))-Szenario30B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("QT No Sync Bestandskunde")
      .click({ force: true });
    cy.wait(1000);
    cy.get(QuickTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "Easybell"
    );
    typeValue = "Easybell";
    type = "reseller";
    cy.get(
      QuickTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR
    ).type("861039");
    cy.get(
      QuickTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(1000);
    cy.get(QuickTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART).select(
      "E-Mail"
    );
    cy.wait(1000);
    cy.get(QuickTicketConstants.Selectors.Ticketerstellung.PARTNER_NUMMER).type(
      "01234567890"
    );
    cy.wait(1000);
    cy.get(
      QuickTicketConstants.Selectors.Ticketerstellung.PARTNER_VORNAME
    ).type(FakerUtils.faker.name.firstName());
    cy.wait(1000);
    cy.get(
      QuickTicketConstants.Selectors.Ticketerstellung.PARTNER_NACHNAME
    ).type(FakerUtils.faker.name.lastName());
    cy.wait(1000);
    cy.get(QuickTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) VDSL-25"
    );
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
    cy.wait(1000);
    cy.get(
      QuickTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
    ).should(
      "contain.text",
      "Hallo Telefonica,\n" +
        "\n" +
        "wir sehen den Anschluss des Kunden nicht\n" +
        "synchron.\n" +
        "\n" +
        "Aktuell sind uns keine DMM-Messungen für diesen Anschluss\n" +
        "möglich.\n" +
        "\n" +
        "Die CPE des Kunden wurde bereits resettet und ist dauerhaft\n" +
        "angeschlossen und eingeschaltet.\n" +
        "\n" +
        "Wir bitten um Prüfung.\n" +
        "\n" +
        "Freundliche Grüße,\n" +
        "Easybell"
    );
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
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
      .should("contain.text", "Deutsche Telekom");
    cy.wait(98000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.get(QuickTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG)
      .should("contain.text", "(QEB)")
      .should("contain.text", "(ERLM)")
      .should("contain.text", "ENTM");
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
  it("TS-1111: UI Reseller bestätigt close @quick-Ticket(UI_Reseller->DTAG(ESS))-Szenario30B", () => {
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
  it("TS-1139: Easybell QuickTicket bei DTAG per ESS(Performanceeinschränkung) @quick-Ticket(UI_Reseller->DTAG(ESS))-Szenario30C", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("QT Performanceeinschränkung")
      .click({ force: true });
    cy.wait(1000);
    cy.get(QuickTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "Easybell"
    );
    typeValue = "Easybell";
    type = "reseller";
    cy.get(
      QuickTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR
    ).type("861039");
    cy.get(
      QuickTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(1000);
    cy.get(QuickTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART).select(
      "E-Mail"
    );
    cy.wait(1000);
    cy.get(QuickTicketConstants.Selectors.Ticketerstellung.PARTNER_NUMMER).type(
      "01234567890"
    );
    cy.wait(1000);
    cy.get(
      QuickTicketConstants.Selectors.Ticketerstellung.PARTNER_VORNAME
    ).type(FakerUtils.faker.name.firstName());
    cy.wait(1000);
    cy.get(
      QuickTicketConstants.Selectors.Ticketerstellung.PARTNER_NACHNAME
    ).type(FakerUtils.faker.name.lastName());
    cy.wait(1000);
    cy.get(QuickTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) VDSL-25"
    );
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
    cy.wait(1000);
    cy.get(
      QuickTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
    ).should(
      "contain.text",
      "Sehr geehrte Damen und Herren,\n" +
        "\n" +
        "die Bandbreite des Kunden liegt deutlich unterhalb der im Rahmen der Verfügbarkeitsprüfung prognostizierten Bandbreite. Konfiguration und Verkabelung haben wir überprüft. Ein Splitter oder eine außergewöhnliche Verkabelung wird nicht genutzt.\n" +
        "\n" +
        "Die CPE wurde bereits resettet und ist dauerhaft angeschlossen, eingeschaltet und auf Dauereinwahl konfiguriert.\n" +
        "\n" +
        "Mit freundlichen Grüßen\n" +
        "easybell Troubleshooting\n" +
        "    "
    );
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
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
      .should("contain.text", "Deutsche Telekom");
    cy.wait(98000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.get(QuickTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG)
      .should("contain.text", "(QEB)")
      .should("contain.text", "(ERLM)")
      .should("contain.text", "ENTM");
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
  it("TS-1111: UI Reseller bestätigt close @quick-Ticket(UI_Reseller->DTAG(ESS))-Szenario30C", () => {
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
  it("TS-1141: Easybell QuickTicket bei DTAG per ESS(Verbindungsabrüche) @quick-Ticket(UI_Reseller->DTAG(ESS))-Szenario30D", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("QT Verbindungsabrüche")
      .click({ force: true });
    cy.wait(1000);
    cy.get(QuickTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "Easybell"
    );
    typeValue = "Easybell";
    type = "reseller";
    cy.get(
      QuickTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR
    ).type("861039");
    cy.get(
      QuickTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(1000);
    cy.get(QuickTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART).select(
      "E-Mail"
    );
    cy.wait(1000);
    cy.get(QuickTicketConstants.Selectors.Ticketerstellung.PARTNER_NUMMER).type(
      "01234567890"
    );
    cy.wait(1000);
    cy.get(
      QuickTicketConstants.Selectors.Ticketerstellung.PARTNER_VORNAME
    ).type(FakerUtils.faker.name.firstName());
    cy.wait(1000);
    cy.get(
      QuickTicketConstants.Selectors.Ticketerstellung.PARTNER_NACHNAME
    ).type(FakerUtils.faker.name.lastName());
    cy.wait(1000);
    cy.get(QuickTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) VDSL-25"
    );
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
    cy.wait(1000);
    cy.get(
      QuickTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
    ).should(
      "contain.text",
      "Sehr geehrte Damen und Herren,\n" +
        "\n" +
        "die Synchronisation des Kunden wird häufig unterbrochen. Wir haben bereits durch Profilwechsel die Bandbreite reduziert sowie ein Profil mit höherem Störabstand ausgewählt. Die Maßnahmen brachten keine Verbesserung.\n" +
        "\n" +
        "Die CPE wurde bereits resettet und ist dauerhaft angeschlossen, eingeschaltet und auf Dauereinwahl konfiguriert.\n" +
        "\n" +
        "\n" +
        "Mit freundlichen Grüßen\n" +
        "easybell Troubleshooting\n" +
        " "
    );
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
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
      .should("contain.text", "Deutsche Telekom");
    cy.wait(98000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.get(QuickTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG)
      .should("contain.text", "(QEB)")
      .should("contain.text", "(ERLM)")
      .should("contain.text", "ENTM");
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
  it("TS-1111: UI Reseller bestätigt close @quick-Ticket(UI_Reseller->DTAG(ESS))-Szenario30D", () => {
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
