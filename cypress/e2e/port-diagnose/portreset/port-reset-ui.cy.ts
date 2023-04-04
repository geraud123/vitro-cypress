import { LoginUtils } from "../../../utils/login/login-utils";
import { CommonConstants } from "../../../utils/common/common-constants";
import { RequestsInfos } from "../../../utils/requests/requests-utils/requests-infos";
import { LineTicketConstants } from "../../../utils/lineTicket/lineTicket-constants";

describe("Login", () => {
  beforeEach(() => {
    LoginUtils.login();
  });
  it("TS-1488: Testing Portdiagnose: PortReset @portreset", () => {
    //  SIMPLE- portResetResellerResponseMessage OK
    cy.log("**** SIMPLE- portResetResellerResponseMessage OK ****");
    RequestsInfos.postNewProfile_resetSim(733546, "SIMPLE");

    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Port Anfragen")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "Netcom Kassel GmbH"
    );
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.Portstatus.CAP_INVENTORY_ID).type(
      "733546"
    );
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.Portstatus.SEARCH_CAP_KUNDENNR).click();
    cy.wait(2000);
    cy.contains("Portreset").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE)
      .should(
        "contain.text",
        "Resetanfrage für Leitung DEU.NCK.TMJS4Y2JGE erfolgreich durchgeführt."
      )
      .should("contain.text", "ExecutionDate:")
      .should("contain.text", "CarrierDiagId:")
      .should("contain.text", "Confirmation Text: Port Reset durchgeführt.");
    cy.wait(2000);

    //  SIMPLE_01- portResetResellerResponseMessage with Error and errorcode list
    cy.log(
      "**** SIMPLE_01- portResetResellerResponseMessage with Error and errorcode list ****"
    );
    RequestsInfos.postNewProfile_resetSim(733546, "SIMPLE_01");
    cy.wait(2000);
    cy.contains("Portreset").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE).should(
      "contain.text",
      "Bei der Resetanfrage für Leitung DEU.NCK.TMJS4Y2JGE ist ein Fehler aufgetreten: Fehlercode '99' (Reset fehlgeschlagen. Problem beim Supplier.)."
    );
    cy.wait(2000);

    //  SIMPLE_02- portResetResellerResponseMessage with errorcode list and without portResetStatus
    cy.log(
      "**** SIMPLE_02- portResetResellerResponseMessage with errorcode list and without portResetStatus ****"
    );
    RequestsInfos.postNewProfile_resetSim(733546, "SIMPLE_02");
    cy.wait(2000);
    cy.contains("Portreset").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE).should(
      "contain.text",
      "Bei der Resetanfrage für Leitung DEU.NCK.TMJS4Y2JGE ist ein Fehler aufgetreten: Fehlercode '99' (Reset fehlgeschlagen. Problem beim Supplier.)."
    );
    cy.wait(2000);

    //  SIMPLE_03- portResetResellerResponseMessage with normal error
    cy.log(
      "**** SIMPLE_03- portResetResellerResponseMessage with normal error ****"
    );
    RequestsInfos.postNewProfile_resetSim(733546, "SIMPLE_03");
    cy.wait(2000);
    cy.contains("Portreset").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE).should(
      "contain.text",
      "Bei der Resetanfrage für Leitung DEU.NCK.TMJS4Y2JGE ist ein Fehler aufgetreten: Fehlercode '3720' (cancelled by supplier)."
    );
    cy.wait(2000);

    //  SIMPLE_04- portResetResellerResponseMessage with success true, without errorHandling
    cy.log(
      "**** SIMPLE_04- portResetResellerResponseMessage with success true, without errorHandling ****"
    );
    RequestsInfos.postNewProfile_resetSim(733546, "SIMPLE_04");
    cy.wait(2000);
    cy.contains("Portreset").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE)
      .should(
        "contain.text",
        "Resetanfrage für Leitung DEU.NCK.TMJS4Y2JGE erfolgreich durchgeführt."
      )
      .should("contain.text", "ExecutionDate:")
      .should("contain.text", "CarrierDiagId:")
      .should("contain.text", "Confirmation Text: Port Reset durchgeführt.");
    cy.wait(2000);

    //  SIMPLE_05- portResetResellerResponseMessage without error, with success false
    cy.log(
      "**** SIMPLE_05- portResetResellerResponseMessage without error, with success false\n ****"
    );
    RequestsInfos.postNewProfile_resetSim(733546, "SIMPLE_05");
    cy.wait(2000);
    cy.contains("Portreset").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE)
      .should(
        "contain.text",
        "Resetanfrage für Leitung DEU.NCK.TMJS4Y2JGE erfolgreich durchgeführt."
      )
      .should("contain.text", "ExecutionDate:")
      .should("contain.text", "CarrierDiagId:")
      .should("contain.text", "Confirmation Text: Port Reset fehlgeschlagen.");
    cy.wait(2000);

    //  SIMPLE_06- portResetResellerResponseMessage without PortResetStatusType and ErrorHandlingType
    cy.log(
      "**** SIMPLE_06- portResetResellerResponseMessage without PortResetStatusType and ErrorHandlingType ****"
    );
    RequestsInfos.postNewProfile_resetSim(733546, "SIMPLE_06");
    cy.wait(2000);
    cy.contains("Portreset").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE)
      .should(
        "contain.text",
        "Resetanfrage für Leitung DEU.NCK.TMJS4Y2JGE erfolgreich durchgeführt."
      )
      .should("contain.text", "ExecutionDate: null")
      .should("contain.text", "CarrierDiagId:")
      .should("contain.text", "Confirmation Text: Port Reset fehlgeschlagen.");
    cy.wait(2000);

    //  SIMPLE_07- portResetResellerResponseMessage with success false without ErrorHandlingType
    cy.log(
      "**** SIMPLE_07- portResetResellerResponseMessage with success false without ErrorHandlingType ****"
    );
    RequestsInfos.postNewProfile_resetSim(733546, "SIMPLE_07");
    cy.wait(2000);
    cy.contains("Portreset").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE)
      .should(
        "contain.text",
        "Resetanfrage für Leitung DEU.NCK.TMJS4Y2JGE erfolgreich durchgeführt."
      )
      .should("contain.text", "ExecutionDate:")
      .should("contain.text", "CarrierDiagId:")
      .should("contain.text", "Confirmation Text: Port Reset fehlgeschlagen.");
  });
});
