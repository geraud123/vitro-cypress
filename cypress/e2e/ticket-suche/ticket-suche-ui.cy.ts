import { LoginUtils } from "../../utils/login/login-utils";
import { CommonConstants } from "../../utils/common/common-constants";
import { GenerellesTicketConstants } from "../../utils/generellesTicket/generellesTicket-constants";
import { InfoUtils } from "../../utils/infos/info-utils";

let ticketIdRes = null;
let typeValue = null;
let type = null;

describe("Login", () => {
  beforeEach(() => {
    LoginUtils.login();
  });
  it("TS-1215: Ticketsuche mit nicht existierenden Daten @ticket-suche", () => {
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    //Ticketsuche mit nicht existierender bzw. nicht berechtigter Ticket-ID
    cy.log(
      "**** 1-TICKETSUCHE MIT NICHT EXISTIERENDER BZW. NICHT BERECHTIGTER TICKET-ID ****"
    );
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "bernibell",
      { force: true }
    );
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type("53795");
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.SearchTicketForm.ERGEBNIS_LISTE).should(
      "not.contain.text",
      "Ticket-ID:"
    );

    //Ticketsuche mit nicht existierender bzw. nicht berechtigter Member-Ticket-ID
    cy.log(
      "**** 2-TICKETSUCHE MIT NICHT EXISTIERENDER BZW. NICHT BERECHTIGTER MEMBER-TICKET-ID ****"
    );
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "DTAG",
      { force: true }
    );
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.MEMBER_TICKET_ID).type(
      "0000345649804"
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.SearchTicketForm.ERGEBNIS_LISTE).should(
      "not.contain.text",
      "Ticket-ID:"
    );

    //Ticketsuche mit nicht existierender bzw. nicht berechtigter Subscriber-ID
    cy.log(
      "**** 3-TICKETSUCHE MIT NICHT EXISTIERENDER BZW. NICHT BERECHTIGTER SUBSCRIBER-ID ****"
    );
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "DTAG",
      { force: true }
    );
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.SUBSCRIBER_ID).type(
      "359138733"
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.SearchTicketForm.ERGEBNIS_LISTE).should(
      "not.contain.text",
      "Ticket-ID:"
    );

    //Ticketsuche mit nicht existierender bzw. nicht berechtigter CAP-Inventory-ID
    cy.log(
      "**** 4-TICKETSUCHE MIT NICHT EXISTIERENDER BZW. NICHT BERECHTIGTER CAP-INVENTORY-ID ****"
    );
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "bernibell",
      { force: true }
    );
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.CAP_INVENTORY_ID).type(
      "678686"
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.SearchTicketForm.ERGEBNIS_LISTE).should(
      "not.contain.text",
      "Ticket-ID:"
    );

    //Ticketsuche mit nicht existierender bzw. nicht existierenden Kundennummer(CAP)
    cy.log(
      "**** 5-TICKETSUCHE MIT NICHT EXISTIERENDER BZW. NICHT BERECHTIGTER KUNDENNUMMER(CAP) ****"
    );
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "bernibell",
      { force: true }
    );
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.KUNDENNUMMER_CAP_RESELLER
    ).type("700109");
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.SearchTicketForm.ERGEBNIS_LISTE).should(
      "not.contain.text",
      "Ticket-ID:"
    );

    //Ticketsuche mit nicht existierender bzw. nicht existierenden Kundennummer(Reseller)
    cy.log(
      "**** 6-TICKETSUCHE MIT NICHT EXISTIERENDER BZW. NICHT BERECHTIGTER KUNDENNUMMER(RESELLER) ****"
    );
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "bernibell",
      { force: true }
    );
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.KUNDENNUMMER_CAP_RESELLER
    ).type("SPAC5222X1005356");
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.SearchTicketForm.ERGEBNIS_LISTE).should(
      "not.contain.text",
      "Ticket-ID:"
    );

    //Ticketsuche mit nicht existierenden Namen
    cy.log("**** 7-TICKETSUCHE MIT NICHT EXISTIERENDEN NAMEN ****");
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect",
      { force: true }
    );
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.KUNDEN_VORNAME).type(
      "Alex"
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.KUNDEN_NACHNAME).type(
      "Momo"
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.SearchTicketForm.ERGEBNIS_LISTE).should(
      "not.contain.text",
      "Ticket-ID:"
    );
  });

  it("TS-1209: erfolgreiche Ticketsuche @ticket-suche", () => {
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    //Ticketsuche mit existierender Ticket-ID
    cy.log("**** 1-TICKETSUCHE MIT EXISTIERENDER TICKET-ID ****");
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "bernibell",
      { force: true }
    );
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type("61011");
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "Ticket-ID: 61011");

    //Ticketsuche mit existierender Member-Ticket-ID
    cy.log("**** 2-TICKETSUCHE MIT EXISTIERENDER MEMBER-TICKET-ID ****");
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "DTAG",
      { force: true }
    );
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.MEMBER_TICKET_ID).type(
      "0000345649803"
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "Ticket-ID: 57512");

    //Ticketsuche mit existierender Subscriber-ID
    cy.log("**** 3-TICKETSUCHE MIT EXISTIERENDER SUBSCRIBER-ID ****");
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "DTAG",
      { force: true }
    );
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.SUBSCRIBER_ID).type(
      "359138734"
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.EDIT_CENTER_CONTAINER)
      .find(CommonConstants.Selectors.EditTicketForm.BUTTON_PLUS)
      .last()
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.EDIT_CENTER_CONTAINER
    ).should("contain.text", "359138734");
    //cy.go('back')
    //cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET).last().click()
    //cy.get(CommonConstants.Selectors.EditTicketForm.STOERUNG_DATEN_BUTTON).click()
    //cy.get(CommonConstants.Selectors.EditTicketForm.STOERUNG_DATEN_INFO)
    //.should('contain.text', '359138734')

    //Ticketsuche mit existierender CAP-Inventory-ID
    cy.log("**** 4-TICKETSUCHE MIT EXISTIERENDER CAP-INVENTORY-ID ****");
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "bernibell",
      { force: true }
    );
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.CAP_INVENTORY_ID).type(
      "678685"
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "Ticket-ID: 59241");

    //Ticketsuche mit existierender Kundennummer(CAP)
    cy.log("**** 5-TICKETSUCHE MIT EXISTIERENDER KUNDENNUMMER(CAP) ****");
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "bernibell",
      { force: true }
    );
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.KUNDENNUMMER_CAP_RESELLER
    ).type("1379196");
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "Ticket-ID: 57726");

    //Ticketsuche mit existierender Kundennummer(RESELLER)
    cy.log("**** 6-TICKETSUCHE MIT EXISTIERENDER KUNDENNUMMER(RESELLER) ****");
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "bernibell",
      { force: true }
    );
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.KUNDENNUMMER_CAP_RESELLER
    ).type("SPAC5222X1005355");
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "Ticket-ID: 57726");

    //Ticketsuche mit existierender Vorname und Nachname
    cy.log("**** 7-TICKETSUCHE MIT EXISTIERENDER VORNAME UND NACHNAME ****");
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect",
      { force: true }
    );
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.KUNDEN_VORNAME).type(
      "Jan"
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.KUNDEN_NACHNAME).type(
      "Testkunde75"
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_NAME).should(
      "contain.text",
      "Jan Testkunde75"
    );
    cy.go("back");
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .last()
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_NAME).should(
      "contain.text",
      "Jan Testkunde75"
    );

    //Ticketsuche mit existierenden Vorname, Nachname und Status
    cy.log(
      "**** 8-TICKETSUCHE MIT EXISTIERENDEN VORNAME, NACHNAME UND STATUS ****"
    );
    cy.get(CommonConstants.Selectors.Navigation.PREVIOUS_BUTTON).click();
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect",
      { force: true }
    );
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.KUNDEN_VORNAME).type(
      "Jan"
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.KUNDEN_NACHNAME).type(
      "Testkunde75"
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.STATUS).select("Open", {
      force: true,
    });
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "Ticket-ID: 58803");

    //Ticketsuche mit Status OnHold
    cy.log("**** 9-TICKETSUCHE MIT STATUS ONHOLD ****");
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH",
      { force: true }
    );
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.STATUS).select("OnHold", {
      force: true,
    });
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(2000);
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "Ticket-ID: 61260");

    //Zuletzt geänderte Tickets suchen(1 Tag)
    cy.log("**** 10-ZULETZT GEÄNDERTE TICKETS SUCHEN(1 TAG) ****");
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Generelles Ticket")
      .click({ force: true });
    cy.wait(3000);
    cy.get(
      GenerellesTicketConstants.Selectors.GenTicketForm.RESELLER_LIST
    ).select("Reseller - bernibell");
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
        cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
          "bernibell",
          { force: true }
        );
        cy.wait(2000);
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
        cy.get(CommonConstants.Selectors.SearchTicketForm.LAST_UPDATE).select(
          "1 Tag",
          { force: true }
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
        cy.wait(2000);
        cy.get(
          CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
        ).should("contain.text", "Ticket-ID: " + ticketIdRes);
      });
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
  });
});
