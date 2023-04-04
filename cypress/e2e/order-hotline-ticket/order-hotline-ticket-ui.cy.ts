import { LoginUtils } from "../../utils/login/login-utils";
import { InfoUtils } from "../../utils/infos/info-utils";
import { CommonConstants } from "../../utils/common/common-constants";
import { OrderHotlineTicketConstants } from "../../utils/orderHotlineTicket/orderHotlineTicket-constants";

let ticketIdRes = null;
let ticketIdSupp = null;
let typeValue = null;
let type = null;

describe("Login", () => {
  beforeEach(() => {
    LoginUtils.login();
  });
  it("TS-1054: Erstellen Order Hotline Ticket(nicht prov. / fertig prov. Produkt) mit falschen Daten @order-hotline-Ticket-Szenario2A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Order Hotline Ticket")
      .click({ force: true });
    cy.wait(1000);
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST
    ).select("Ecotel (1st level)");
    typeValue = "Ecotel (1st level)";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);

    //Suchen mit falscher Reseller-Kundennummer
    cy.log("**** 1-SUCHEN MIT FALSCHER RESELLER-KUNDENNUMMER ****");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Reseller
        .RES_KUNDENNR
    ).type("69a62efa-7068-483a-ac9c-7d57e292e469");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Reseller
        .SEARCH_RES_KUNDENNR
    ).click();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.ERROR_MESSAGE
    ).should("contain", "Keinen Kunden für diese Anfrage gefunden.");

    //Suchen mit falscher CAP-Kundennummer
    cy.log("**** 2-SUCHEN MIT FALSCHER CAP-KUNDENNUMMER ****");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Reseller
        .RES_KUNDENNR
    ).clear();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR
    ).type("798125");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Cap
        .SEARCH_CAP_KUNDENNR
    ).click();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.ERROR_MESSAGE
    ).should("contain", "Keinen Kunden für diese Anfrage gefunden.");

    //Suchen mit falscher Cap-inventory ID
    cy.log("**** 3-SUCHEN MIT FALSCHER CAP-INVENTORY-ID ****");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR
    ).clear();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Inventory
        .INVENTORY_ID
    ).type("798126");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Inventory
        .SEARCH_INVENTORY
    ).click();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.ERROR_MESSAGE
    ).should("contain", "Keinen Kunden für diese Anfrage gefunden.");

    //Suchen mit falschem Kunden-Name
    cy.log("**** 4-SUCHEN MIT FALSCHEM KUNDEN-NAME ****");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Inventory
        .INVENTORY_ID
    ).clear();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Personal.VORNAME
    ).type("Simon");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Personal.NACHNAME
    ).type("Malo");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Personal
        .SEARCH_PERSONAL
    ).click();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.ERROR_MESSAGE
    ).should("contain", "Keinen Kunden für diese Anfrage gefunden.");

    //Suchen mit falscher Kunden-Adresse
    cy.log("**** 5-SUCHEN MIT FALSCHER KUNDEN-ADRESSE ****");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Personal.VORNAME
    ).clear();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Personal.NACHNAME
    ).clear();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Personal.PLZ
    ).type("47445");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Personal.STADT
    ).type("Hildesheim");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Personal.STRASSE
    ).type("Friesenstraße");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Personal.HAUSNR
    ).type("24");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Personal
        .SEARCH_PERSONAL
    ).click();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.ERROR_MESSAGE
    ).should("contain", "Keinen Kunden für diese Anfrage gefunden.");

    //Suchen mit Strasse, Hausnummer ohne Kundenname oder Ort
    cy.log(
      "**** 6-SUCHEN MIT STRASSE, HAUSNUMMER OHNE KUNDENNAME ODER ORT ****"
    );
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Personal.PLZ
    ).clear();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Personal.STADT
    ).clear();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Personal.STRASSE
    ).type("Friesenstraße");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Personal.HAUSNR
    ).type("24");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Personal
        .SEARCH_PERSONAL
    ).click();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.ERROR_MESSAGE
    ).should("contain", "Bitte weitere Ortsangaben angeben.");

    //Suchen richtige Kundennummer für einen falschen Reseller
    cy.log(
      "**** 7-SUCHEN RICHTIGE KUNDENNUMMER FÜR EINEN FALSCHEN RESELLER ****"
    );
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Personal.STRASSE
    ).clear();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Personal.HAUSNR
    ).clear();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST
    ).select("Easybell");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Reseller
        .RES_KUNDENNR
    ).type("69a62efa-7068-483a-ac9c-7d57e292e468");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.ERROR_MESSAGE
    ).should("contain", "Bitte weitere Ortsangaben angeben.");

    //Suchen mit falscher Leitung ID
    cy.log("**** 8-SUCHEN MIT FALSCHER LEITUNG ID ****");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Reseller
        .RES_KUNDENNR
    ).clear();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST
    ).select("Ecotel (1st level)");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Lines.LEITUNG_ID
    ).type("DEU.DTAG.DPAIRYLLCS");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Lines
        .SEARCH_LEISTUNG
    ).click();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.ERROR_MESSAGE
    ).should("contain", "Keinen Kunden für diese Anfrage gefunden.");
  });
  it("TS-1053: Erfolgreich Order Hotline Ticket(nicht prov. Produkt) erstellen @order-hotline-Ticket-Szenario2A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Order Hotline Ticket")
      .click({ force: true });
    cy.wait(1000);
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST
    ).select("Ecotel (1st level)");
    typeValue = "Ecotel (1st level)";
    type = "reseller";
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Reseller
        .RES_KUNDENNR
    ).type("69a62efa-7068-483a-ac9c-7d57e292e468");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Reseller
        .SEARCH_RES_KUNDENNR
    ).click();
    cy.wait(1000);
    cy.get(
      OrderHotlineTicketConstants.Selectors.Ticketerstellung.PRODUKT
    ).select("1) 1U1_FTTC_VDSL_100_40");
    cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
    cy.wait(1000);
    cy.get(
      OrderHotlineTicketConstants.Selectors.TicketSpeichern.ScenarioA_B
        .MELDUNGSART_LIST
    ).select("Provisionierungsanfrage");
    cy.get(
      OrderHotlineTicketConstants.Selectors.TicketSpeichern.ScenarioA_B
        .PRIORITAET_LIST
    ).select("Normal");
    cy.get(
      OrderHotlineTicketConstants.Selectors.TicketSpeichern.TICKET_NAME
    ).type("//test");
    cy.get(
      OrderHotlineTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
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
    ).should("contain.text", "Order-Management");
  });
  it("TS-1061: UI Supplier Nachricht (verantwortlich) an UI Reseller @order-hotline-Ticket-Szenario2A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Order-Management",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Order-Management";
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
  it("TS-1060: UI Reseller Nachricht (weitergeleitet) an UI Supplier 1 @order-hotline-Ticket-Szenario2A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Ecotel (1st level)",
      { force: true }
    );
    cy.wait(5000);
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
  it("TS-1083: UI Supplier Nachricht (weitergeleitet) an UI Reseller @order-hotline-Ticket-Szenario2A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Order-Management",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Order-Management";
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
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdSupp = $ticketID[0].innerHTML.match("\\d{5}$").toString();
      });
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
  it("TS-1048: UI Reseller Nachricht (weitergeleitet) an UI Supplier 2 @order-hotline-Ticket-Szenario2A", () => {
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
  it("TS-1059: UI Supplier sendet resolve an UI Reseller @order-hotline-Ticket-Szenario2A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Order-Management",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Order-Management";
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
  it("TS-1058: UI Reseller reklamiert bei UI Supplier @order-hotline-Ticket-Szenario2A", () => {
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
  it("TS-1059: UI Supplier sendet resolve an UI Reseller @order-hotline-Ticket-Szenario2A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Order-Management",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Order-Management";
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
  it("TS-1057: UI Reseller sendet close an UI Supplier @order-hotline-Ticket-Szenario2A", () => {
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
      "UI Reseller sendet close an UI Supplier"
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
  it("TS-1056: UI Supplier bestätigt close von UI Reseller @order-hotline-Ticket-Szenario2A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Order-Management",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Order-Management";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.RESOLVED
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
      "UI Supplier bestätigt close von UI Reseller"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.CLOSE)
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_SUP)
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
  });
  it("TS-1052: Erfolgreich Order Hotline Ticket(fertig prov. Produkt) erstellen @order-hotline-Ticket-Szenario2B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Order Hotline Ticket")
      .click({ force: true });
    cy.wait(1000);
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST
    ).select("Ecotel (1st level)");
    typeValue = "Ecotel (1st level)";
    type = "reseller";
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Lines.LEITUNG_ID
    ).type("DEU.DTAG.DPAIRYLLCW");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Lines
        .SEARCH_LEISTUNG
    ).click();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Ticketerstellung.PRODUKT
    ).select("1) VDSL-100");
    cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
    cy.wait(1000);
    cy.get(
      OrderHotlineTicketConstants.Selectors.TicketSpeichern.ScenarioA_B
        .MELDUNGSART_LIST
    ).select("Technikertermin");
    cy.get(
      OrderHotlineTicketConstants.Selectors.TicketSpeichern.ScenarioA_B
        .PRIORITAET_LIST
    ).select("Normal");
    cy.get(
      OrderHotlineTicketConstants.Selectors.TicketSpeichern.TICKET_NAME
    ).type("//test");
    cy.get(
      OrderHotlineTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
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
    ).should("contain.text", "Order-Management");
  });
  it("TS-1051: UI Supplier sendet cancel an UI Reseller @order-hotline-Ticket-Szenario2B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Order-Management",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Order-Management";
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
      "UI Supplier sendet cancel an UI Reseller"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.ABGEBROCHEN
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
    cy.get(CommonConstants.Selectors.DetailTicket.PLUS_INFO_BUTTON).click();
    cy.get("span")
      .contains("Order-Management")
      .first()
      .then(($ticketID) => {
        ticketIdSupp = $ticketID[0].innerHTML.match("^\\d{5}").toString();
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdSupp
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
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
  it("TS-1049: UI Reseller bestätigt Abbruch @order-hotline-Ticket-Szenario2B", () => {
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

  it("TS-1050: Erfolgreich Order Hotline Ticket(Weg über Störungsticket) erstellen @order-hotline-Ticket-Szenario2C", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(1000);
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST
    ).select("Ecotel (1st level)");
    typeValue = "Ecotel (1st level)";
    type = "reseller";
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Reseller
        .RES_KUNDENNR
    ).type("69a62efa-7068-483a-ac9c-7d57e292e468");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Kundenerfassung.Reseller
        .SEARCH_RES_KUNDENNR
    ).click();
    cy.get(
      OrderHotlineTicketConstants.Selectors.Ticketerstellung.PRODUKT
    ).select("1) 1U1_FTTC_VDSL_100_40");
    cy.get(
      OrderHotlineTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART
    ).select("E-Mail");
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
    cy.wait(1000);
    cy.get(
      OrderHotlineTicketConstants.Selectors.FragenKatalog
        .FRAGEN_KATALOG_CONTAINER
    )
      .find("select")
      .select("Provisionierung");
    cy.wait(1000);
    cy.get(
      OrderHotlineTicketConstants.Selectors.FragenKatalog
        .FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.get(
      OrderHotlineTicketConstants.Selectors.FragenKatalog.NEXT_BUTTON
    ).click();
    cy.wait(1000);
    cy.get(
      OrderHotlineTicketConstants.Selectors.TicketSpeichern.ScenarioC
        .MELDUNGSART_LIST
    ).select("Provisionierungsanfrage");
    cy.get(
      OrderHotlineTicketConstants.Selectors.TicketSpeichern.ScenarioC
        .PRIORITAET_LIST
    ).select("Normal");
    cy.get(
      OrderHotlineTicketConstants.Selectors.TicketSpeichern.TICKET_NAME
    ).type("//test");
    cy.get(
      OrderHotlineTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
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
    ).should("contain.text", "Order-Management");
  });
  it("TS-1059: UI Supplier sendet resolve an UI Reseller @order-hotline-Ticket-Szenario2C", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Order-Management",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Order-Management";
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
        CommonConstants.Selectors.EditTicketForm.Status.RESOLVED
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
  });
  it("TS-1057: UI Reseller sendet close an UI Supplier @order-hotline-Ticket-Szenario2C", () => {
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
      "UI Reseller sendet close an UI Supplier"
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
  it("TS-1056: UI Supplier bestätigt close von UI Reseller @order-hotline-Ticket-Szenario2C", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Order-Management",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Order-Management";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.RESOLVED
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
      "UI Supplier bestätigt close von UI Reseller"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.CLOSE)
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_SUP)
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
  });
});
