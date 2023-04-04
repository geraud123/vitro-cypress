import { LoginUtils } from "../../utils/login/login-utils";
import { GenerellesTicketConstants } from "../../utils/generellesTicket/generellesTicket-constants";
import { CommonConstants } from "../../utils/common/common-constants";
import { InfoUtils } from "../../utils/infos/info-utils";

let ticketIdRes = null;
let ticketIdSupp = null;
let typeValue = null;
let type = null;

describe("Login", () => {
  beforeEach(() => {
    LoginUtils.login();
  });
  it("TS-1062: Generelles Ticket erstellen ohne Ticketname @generelles-Ticket-Szenario1A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Generelles Ticket")
      .click({ force: true });
    cy.wait(1000);
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.RESELLER_LIST
    ).select("Reseller - bernibell");
    typeValue = "bernibell";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.MELDUNGSART_LIST
    ).select("Provisionierungsanfrage");
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.PRIORITAET_LIST
    ).select("Normal");
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.PROBLEM_BESCHREIBUNG
    ).type("Das ist eine Problembeschreibung");
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.WEITERLEITUNG_CONTAINER
    )
      .contains(
        GenerellesTicketConstants.Selectors.GenTicketForm.Weiterleitung_ticket
          .WEITERLEITUNG_2L
      )
      .click();
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_TOP).click();
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.ERROR_MESSAGE
    ).should("contain", "Ticketname muss gesetzt werden.");
  });
  it("TS-1063: Generelles Ticket erstellen ohne Problembeschreibung @generelles-Ticket-Szenario1A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Generelles Ticket")
      .click({ force: true });
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.RESELLER_LIST
    ).select("Reseller - bernibell");
    typeValue = "bernibell";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.MELDUNGSART_LIST
    ).select("Provisionierungsanfrage");
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.PRIORITAET_LIST
    ).select("Normal");
    cy.get(GenerellesTicketConstants.Selectors.GenTicketForm.TICKET_NAME).type(
      "test generelles Ticket"
    );
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.WEITERLEITUNG_CONTAINER
    )
      .contains(
        GenerellesTicketConstants.Selectors.GenTicketForm.Weiterleitung_ticket
          .WEITERLEITUNG_2L
      )
      .click();
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_TOP).click();
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.ERROR_MESSAGE
    ).should("contain", "Problembeschreibung muss gesetzt werden.");
  });
  it("TS-1067: Erstellen generelles Ticket mit mehr 3000 Zeichen bei Problembeschreibung @generelles-Ticket-Szenario1A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Generelles Ticket")
      .click({ force: true });
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.RESELLER_LIST
    ).select("Reseller - bernibell");
    typeValue = "bernibell";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.MELDUNGSART_LIST
    ).select("Provisionierungsanfrage");
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.PRIORITAET_LIST
    ).select("Normal");
    cy.get(GenerellesTicketConstants.Selectors.GenTicketForm.TICKET_NAME).type(
      "test generelles Ticket"
    );
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.PROBLEM_BESCHREIBUNG
    ).type(
      "Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung.Das ist eine Problembeschreibung."
    );
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.WEITERLEITUNG_CONTAINER
    )
      .contains(
        GenerellesTicketConstants.Selectors.GenTicketForm.Weiterleitung_ticket
          .WEITERLEITUNG_2L
      )
      .click();
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_TOP).click();
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.ERROR_MESSAGE
    ).should(
      "contain",
      "Problembeschreibung darf nicht mehr als 3000 Zeichen haben."
    );
  });
  it("TS-1065: Vorzeitiges Abbrechen während dem Erstellen eines generellen Tickets @generelles-Ticket-Szenario1A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Generelles Ticket")
      .click({ force: true });
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.RESELLER_LIST
    ).select("Reseller - bernibell");
    typeValue = "bernibell";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.MELDUNGSART_LIST
    ).select("Provisionierungsanfrage");
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.PRIORITAET_LIST
    ).select("Normal");
    cy.get(GenerellesTicketConstants.Selectors.GenTicketForm.TICKET_NAME).type(
      "test generelles Ticket"
    );
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.PROBLEM_BESCHREIBUNG
    ).type("Das ist eine Problembeschreibung");
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.WEITERLEITUNG_CONTAINER
    )
      .contains(
        GenerellesTicketConstants.Selectors.GenTicketForm.Weiterleitung_ticket
          .WEITERLEITUNG_2L
      )
      .click();
    cy.get(
      CommonConstants.Selectors.Navigation.CREATE_TICKET_CLOSE_TOP
    ).click();
  });
  it("TS-1066: Erfolgreich generelles Ticket erstellen @generelles-Ticket-Szenario1A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Generelles Ticket")
      .click({ force: true });
    cy.wait(3000);
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.RESELLER_LIST
    ).select("Reseller - bernibell");
    typeValue = "bernibell";
    type = "reseller";
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.MELDUNGSART_LIST
    ).select("Provisionierungsanfrage");
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.PRIORITAET_LIST
    ).select("Normal");
    cy.get(GenerellesTicketConstants.Selectors.GenTicketForm.TICKET_NAME).type(
      "test generelles Ticket"
    );
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.PROBLEM_BESCHREIBUNG
    ).type("Das ist eine Problembeschreibung");
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.WEITERLEITUNG_CONTAINER
    )
      .contains(
        GenerellesTicketConstants.Selectors.GenTicketForm.Weiterleitung_ticket
          .WEITERLEITUNG_2L
      )
      .click();
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_TOP).click();
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      });
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "vitroconnect Störungs-Support");
  });
  it("TS-1061: UI Supplier Nachricht (verantwortlich) an UI Reseller @generelles-Ticket-Szenario1A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect Störungs-Support",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect Störungs-Support";
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
  it("TS-1060: UI Reseller Nachricht (weitergeleitet) an UI Supplier 1 @generelles-Ticket-Szenario1A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "bernibell",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "bernibell";
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
  it("TS-1083: UI Supplier Nachricht (weitergeleitet) an UI Reseller @generelles-Ticket-Szenario1A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect Störungs-Support",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect Störungs-Support";
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
  it("TS-1048: UI Reseller Nachricht (weitergeleitet) an UI Supplier 2 @generelles-Ticket-Szenario1A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "bernibell",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "bernibell";
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
  it("TS-1059: UI Supplier sendet resolve an UI Reseller @generelles-Ticket-Szenario1A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect Störungs-Support",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect Störungs-Support";
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
  it("TS-1058: UI Reseller reklamiert bei UI Supplier @generelles-Ticket-Szenario1A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "bernibell",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "bernibell";
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
  it("TS-1059: UI Supplier sendet resolve an UI Reseller @generelles-Ticket-Szenario1A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect Störungs-Support",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect Störungs-Support";
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
  it("TS-1057: UI Reseller sendet close an UI Supplier @generelles-Ticket-Szenario1A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "bernibell",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "bernibell";
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
  it("TS-1056: UI Supplier bestätigt close von UI Reseller @generelles-Ticket-Szenario1A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect Störungs-Support",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect Störungs-Support";
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

  it("TS-1064: Generelles Ticket erstellen ohne Delegation @generelles-Ticket-Szenario1B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Generelles Ticket")
      .click({ force: true });
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.RESELLER_LIST
    ).select("Reseller - bernibell");
    typeValue = "bernibell";
    type = "reseller";
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.MELDUNGSART_LIST
    ).select("Provisionierungsanfrage");
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.PRIORITAET_LIST
    ).select("Normal");
    cy.get(GenerellesTicketConstants.Selectors.GenTicketForm.TICKET_NAME).type(
      "test generelles Ticket"
    );
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.PROBLEM_BESCHREIBUNG
    ).type("Das ist eine Problembeschreibung");
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.WEITERLEITUNG_CONTAINER
    )
      .contains(
        GenerellesTicketConstants.Selectors.GenTicketForm.Weiterleitung_ticket
          .SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_TOP).click();
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      });
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("not.contain.text", "vitroconnect Störungs-Support");
  });
  it("TS-1055: UI Reseller sendet cancel an UI Supplier @generelles-Ticket-Szenario1B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "bernibell",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "bernibell";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.EROEFFNET
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller sendet cancel an UI Supplier"
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
