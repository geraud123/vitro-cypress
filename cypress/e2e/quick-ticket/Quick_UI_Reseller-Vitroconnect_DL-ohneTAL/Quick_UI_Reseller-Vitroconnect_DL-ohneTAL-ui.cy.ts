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
  it("TS-1123: Easybell QuickTicket bei UI Supplier Vitroconnect (DL) ohne TAL(No Sync Neuschaltung) @quick-Ticket(UI_Reseller->Vitroconnect_DL(ohne TAL))-Szenario28A", () => {
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
    ).type("1326367");
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
      "5) VC-FTTHB-50-VOIP"
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
      .should("contain.text", "vitroconnect");
  });
  it("TS-1125: UI Reseller sendet cancel an Vitroconnect ohne TAL @quick-Ticket(UI_Reseller->Vitroconnect_DL(ohne TAL))-Szenario28A", () => {
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
      "UI Reseller sendet cancel an Vitroconnect ohne TAL"
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
  it("TS-1126: Easybell QuickTicket bei UI Supplier Vitroconnect (DL) ohne TAL(No Sync Bestandskunde) @quick-Ticket(UI_Reseller->Vitroconnect_DL(ohne TAL))-Szenario28B", () => {
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
    ).type("1326367");
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
      "5) VC-FTTHB-50-VOIP"
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
      .should("contain.text", "vitroconnect");
  });
  it("TS-1125: UI Reseller sendet cancel an Vitroconnect ohne TAL @quick-Ticket(UI_Reseller->Vitroconnect_DL(ohne TAL))-Szenario28B", () => {
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
      "UI Reseller sendet cancel an Vitroconnect ohne TAL"
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
  it("TS-1128: Easybell QuickTicket bei UI Supplier Vitroconnect (DL) ohne TAL(Performanceeinschränkung) @quick-Ticket(UI_Reseller->Vitroconnect_DL(ohne TAL))-Szenario28C", () => {
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
    ).type("1326367");
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
      "5) VC-FTTHB-50-VOIP"
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
      .should("contain.text", "vitroconnect");
  });
  it("TS-1125: UI Reseller sendet cancel an Vitroconnect ohne TAL @quick-Ticket(UI_Reseller->Vitroconnect_DL(ohne TAL))-Szenario28C", () => {
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
      "UI Reseller sendet cancel an Vitroconnect ohne TAL"
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
  it("TS-1130: Easybell QuickTicket bei UI Supplier Vitroconnect (DL) ohne TAL(Verbindungsabrüche) @quick-Ticket(UI_Reseller->Vitroconnect_DL(ohne TAL))-Szenario28D", () => {
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
    ).type("1326367");
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
      "5) VC-FTTHB-50-VOIP"
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
      .should("contain.text", "vitroconnect");
  });
  it("TS-1125: UI Reseller sendet cancel an Vitroconnect ohne TAL @quick-Ticket(UI_Reseller->Vitroconnect_DL(ohne TAL))-Szenario28D", () => {
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
      "UI Reseller sendet cancel an Vitroconnect ohne TAL"
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
  it("TS-1131: GVG Glasfaser QuickTicket bei UI Supplier Vitroconnect (DL) @quick-Ticket(UI_Reseller->Vitroconnect_DL(ohne TAL))-Szenario28E", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("QT GVG")
      .click({ force: true });
    cy.wait(1000);
    cy.get(QuickTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "GVG Glasfaser GmbH"
    );
    typeValue = "GVG Glasfaser GmbH";
    type = "reseller";
    cy.get(
      QuickTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR
    ).type("1329447");
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
      "1) P_MSH_FTTH-50-50"
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
        "der Kunde hat ein Problem mit der Leitung.\n" +
        "\n" +
        "Mit freundlichen Grüßen\n" +
        "GVG Glasfaser GmbH\n" +
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
      .should("contain.text", "vitroconnect");
  });
  it("TS-1125: UI Reseller sendet cancel an Vitroconnect ohne TAL @quick-Ticket(UI_Reseller->Vitroconnect_DL(ohne TAL))-Szenario28E", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "GVG Glasfaser GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "GVG Glasfaser GmbH";
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
      "UI Reseller sendet cancel an Vitroconnect ohne TAL"
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
