import { LoginUtils } from "../../../utils/login/login-utils";
import { LineTicketConstants } from "../../../utils/lineTicket/lineTicket-constants";
import { CommonConstants } from "../../../utils/common/common-constants";
import { InfoUtils } from "../../../utils/infos/info-utils";
import { RequestsInfos } from "../../../utils/requests/requests-utils/requests-infos";
import { RequestUtils } from "../../../utils/requests/requests-utils/request-utils";

let ticketIdRes = null;
let ticketID = null;

describe("Login", () => {
  beforeEach(() => {
    LoginUtils.login();
  });
  it("TS-1457: TCA Reseller erstellt Leitungs-Ticket bei TCA Supplier mit Steuercode $15A-S @line-Ticket(TCA_Reseller->TCA_Supplier)-Szenario15A", () => {
    ticketID = InfoUtils.getCurrentTime();
    RequestsInfos.tca_resellerCreateToTca_supplier("$15A-S", ticketID);
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Netcom Kassel GmbH",
      { force: true }
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should("contain.text", "Leitung")
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
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.EditTicketForm.REFRESH_BUTTON).click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send modify without StatusChange $15A-R");
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.EditTicketForm.REFRESH_BUTTON).click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send CANCEL $15A-S");
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.EditTicketForm.REFRESH_BUTTON).click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send CANCEL");
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.CANCEL
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.ABBRUCH
      );
  });

  it("TS-1458: TCA Reseller erstellt Leitungs-Ticket bei TCA Supplier mit Steuercode $15B-S @line-Ticket(TCA_Reseller->TCA_Supplier)-Szenario15B", () => {
    ticketID = InfoUtils.getCurrentTime();
    RequestsInfos.tca_resellerCreateToTca_supplier("$15B-S", ticketID);
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Netcom Kassel GmbH",
      { force: true }
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should("contain.text", "Leitung")
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
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.EditTicketForm.REFRESH_BUTTON).click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send CANCEL");
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.CANCEL
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.ABBRUCH
      );
  });

  it("TS-1459: TCA Reseller erstellt Leitungs-Ticket bei TCA Supplier mit Steuercode $15C-S @line-Ticket(TCA_Reseller->TCA_Supplier)-Szenario15C", () => {
    ticketID = InfoUtils.getCurrentTime();
    RequestsInfos.tca_resellerCreateToTca_supplier("$15C-S", ticketID);
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Netcom Kassel GmbH",
      { force: true }
    );
    cy.wait(1000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
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
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.EditTicketForm.REFRESH_BUTTON).click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send modify without StatusChange $15C-R");
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.EditTicketForm.REFRESH_BUTTON).click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send modify without StatusChange $15C-S");
    RequestUtils.sendDeleteToResellerScenarioRequest("15C");
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.EditTicketForm.REFRESH_BUTTON).click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send modify without StatusChange");
    RequestUtils.sendDeleteToSupplierScenarioRequest("15C");
    RequestsInfos.modifyTbkle_resolveToTam("15C");
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.EditTicketForm.REFRESH_BUTTON).click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send RESOLVE");
  });
  it("TS-1460: TCA Reseller NCK reklamiert bei TCA Supplier NCK mit Steuercode $15C-S @line-Ticket(TCA_Reseller->TCA_Supplier)-Szenario15C", () => {
    RequestsInfos.modifyReopenToTam_ant("15C");
    RequestsInfos.tca_resellerReopenToTca_supplier("$15C-S", ticketID);
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Netcom Kassel GmbH",
      { force: true }
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.REFRESH_BUTTON).click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send REOPEN $15C-S");
    cy.wait(9000);
    cy.get(CommonConstants.Selectors.EditTicketForm.REFRESH_BUTTON).click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send DISPATCH $15C-R");
    RequestsInfos.modifyTamToResolve("15C");
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.EditTicketForm.REFRESH_BUTTON).click();
    cy.get(LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG)
      .should("contain.text", "send DISPATCH $15C-S")
      .should(
        "contain.text",
        "Kundenwunschtermin: (04.01.2030 Werktags u. samstags von 08:00 - 12:00 Uhr)"
      );
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.EditTicketForm.REFRESH_BUTTON).click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send RESOLVE");
  });
  it("TS-1461: TCA Reseller NCK sendet close an TCA Supplier NCK mit Steuercode $15C-S @line-Ticket(TCA_Reseller->TCA_Supplier)-Szenario15C", () => {
    RequestsInfos.modifyResolveToClose("15C");
    RequestsInfos.tca_resellerCloseToTca_supplier("$15C-S", ticketID);
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Netcom Kassel GmbH - Lieferant",
      { force: true }
    );
    cy.wait(1000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.LAST_UPDATE).select(
      "1 Tag",
      { force: true }
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.REFRESH_BUTTON).click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send CLOSE $15C-S");
    cy.wait(7000);
    cy.get(CommonConstants.Selectors.EditTicketForm.REFRESH_BUTTON).click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
    ).should("contain.text", "send CLOSE");
    RequestsInfos.resetSupplierScenario("15CS");
    RequestsInfos.resetResellerScenario("15CR");
  });
});
