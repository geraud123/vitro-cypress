import { LoginUtils } from "../../../utils/login/login-utils";
import { CommonConstants } from "../../../utils/common/common-constants";
import { RequestsInfos } from "../../../utils/requests/requests-utils/requests-infos";
import { LineTicketConstants } from "../../../utils/lineTicket/lineTicket-constants";

describe("Login", () => {
  beforeEach(() => {
    LoginUtils.login();
  });
  it("TS-1489: Testing Portdiagnose: PortStatus @portstatus", () => {
    //  SIMPLE- portStatusResellerResponseMessage OK
    cy.log("**** SIMPLE- portStatusResellerResponseMessage OK ****");
    RequestsInfos.postNewProfile_statusSim(733546, "SIMPLE");

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
    cy.get("tr").contains("Portstatus").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE)
      .should(
        "contain.text",
        "Statusanfrage für Leitung DEU.NCK.TMJS4Y2JGE erfolgreich durchgeführt."
      )
      .should("contain.text", "linestatus: up/up")
      .should(
        "contain.text",
        "Breitband:aktuelle Leitungsbitrate (Down): 100,00 MBit/s"
      )
      .should("contain.text", "ILTF:ES_Diagnose: Unterbrechung am HVT")
      .should("contain.text", "Diagnose Ergebnis: FEHLER")
      .should("contain.text", "CarrierDiagId:");
    cy.wait(2000);

    //  SIMPLE_01- portStatusResellerResponseMessage with error
    cy.log("**** SIMPLE_01- portStatusResellerResponseMessage with error ****");
    RequestsInfos.postNewProfile_statusSim(733546, "SIMPLE_01");
    cy.wait(2000);
    cy.get("tr").contains("Portstatus").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE).should(
      "contain.text",
      "Bei der Statusanfrage für Leitung DEU.NCK.TMJS4Y2JGE ist ein Fehler aufgetreten: Fehlercode '3720' (cancelled by supplier)."
    );
    cy.wait(2000);

    //  SIMPLE_02- portStatusResellerResponseMessage OK without Detail
    cy.log(
      "**** SIMPLE_02- portStatusResellerResponseMessage OK without Detail ****"
    );
    RequestsInfos.postNewProfile_statusSim(733546, "SIMPLE_02");
    cy.wait(2000);
    cy.get("tr").contains("Portstatus").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE)
      .should(
        "contain.text",
        "Statusanfrage für Leitung DEU.NCK.TMJS4Y2JGE erfolgreich durchgeführt."
      )
      .should("contain.text", "Diagnose Ergebnis: FEHLER")
      .should("contain.text", "CarrierDiagId:");
    cy.wait(2000);

    //  SIMPLE_03- portStatusResellerResponseMessage without ErrorHandlingType
    cy.log(
      "**** SIMPLE_03- portStatusResellerResponseMessage without ErrorHandlingType ****"
    );
    RequestsInfos.postNewProfile_statusSim(733546, "SIMPLE_03");
    cy.wait(2000);
    cy.get("tr").contains("Portstatus").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE)
      .should(
        "contain.text",
        "Statusanfrage für Leitung DEU.NCK.TMJS4Y2JGE erfolgreich durchgeführt."
      )
      .should(
        "contain.text",
        "MaxBandwidth: 113903/33842 kbits/s (downstream/upstream)"
      )
      .should("contain.text", "linestatus: up/up")
      .should(
        "contain.text",
        "Breitband:aktuelle Leitungsbitrate (Down): 100,00 MBit/s"
      )
      .should("contain.text", "ILTF:ES_Diagnose: Unterbrechung am HVT")
      .should("contain.text", "Diagnose Ergebnis: FEHLER")
      .should("contain.text", "CarrierDiagId:");
    cy.wait(2000);

    //  SIMPLE_04- portStatusResellerResponseMessage without DiagStatusType
    cy.log(
      "**** SIMPLE_04- portStatusResellerResponseMessage without DiagStatusType ****"
    );
    RequestsInfos.postNewProfile_statusSim(733546, "SIMPLE_04");
    cy.wait(2000);
    cy.get("tr").contains("Portstatus").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE).should(
      "contain.text",
      "Diagnose Ergebnisse nicht verfügbar."
    );
    cy.wait(2000);

    //  SIMPLE_05- portStatusResellerResponseMessage without DiagStatusType, with error without OriginalReturnCodeType
    cy.log(
      "**** SIMPLE_05- portStatusResellerResponseMessage without DiagStatusType, with error without OriginalReturnCodeType ****"
    );
    RequestsInfos.postNewProfile_statusSim(733546, "SIMPLE_05");
    cy.wait(2000);
    cy.get("tr").contains("Portstatus").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE).should(
      "contain.text",
      "Bei der Statusanfrage für Leitung DEU.NCK.TMJS4Y2JGE ist ein Fehler aufgetreten: Fehlercode '2000' (timeout when waiting for async result from diagnose provider)."
    );
    cy.wait(2000);

    //  SIMPLE_06- portStatusResellerResponseMessage with all parameter
    cy.log(
      "**** SIMPLE_06- portStatusResellerResponseMessage with all parameter ****"
    );
    RequestsInfos.postNewProfile_statusSim(733546, "SIMPLE_06");
    cy.wait(2000);
    cy.get("tr").contains("Portstatus").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE)
      .should(
        "contain.text",
        "Statusanfrage für Leitung DEU.NCK.TMJS4Y2JGE erfolgreich durchgeführt."
      )
      .should(
        "contain.text",
        "Status for lineId: DEU.NCK.TMJS4Y2JGE Identifier: IDENTIFIER"
      )
      .should("contain.text", "Linestatus: up")
      .should("contain.text", "ConfBandwidth: 240000")
      .should("contain.text", "ActBandwidth: 240000")
      .should("contain.text", "MaxBandwidth: 240000")
      .should("contain.text", "ont-pon-rx: unknown (WARNING)")
      .should("contain.text", "Breitband:Synchronitaets-Pruefung: ja")
      .should(
        "contain.text",
        "Breitband:aktuelle Leitungsbitrate (Down): 105,44 MBit/s"
      )
      .should(
        "contain.text",
        "Breitband:aktuelle Leitungsbitrate (Up): 41,14 MBit/s"
      )
      .should("contain.text", "Breitband:Gesamtleistung (Down): 10,30 dBm")
      .should("contain.text", "Breitband:Gesamtleistung (Up): 6,90 dBm")
      .should("contain.text", "Diagnose Ergebnis: FEHLERURSACHE_UNBEKANNT")
      .should("contain.text", "CarrierDiagId:");
    cy.wait(2000);

    //  SIMPLE_07- portStatusResellerResponseMessage without DiagStatusType, with error with OriginalReturnCodeType
    cy.log(
      "**** SIMPLE_07- portStatusResellerResponseMessage without DiagStatusType, with error with OriginalReturnCodeType ****"
    );
    RequestsInfos.postNewProfile_statusSim(733546, "SIMPLE_07");
    cy.wait(2000);
    cy.get("tr").contains("Portstatus").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE).should(
      "contain.text",
      "Bei der Statusanfrage für Leitung DEU.NCK.TMJS4Y2JGE ist ein Fehler aufgetreten: Fehlercode '2000' (Meldung vom Lieferanten: Es liegt bereits ein offener Entstörauftrag/Reklamation vor.)."
    );

    //  SIMPLE_08- portStatusResellerResponseMessage without DiagStatusType and ErrorHandlingType
    cy.log(
      "**** SIMPLE_08- portStatusResellerResponseMessage without DiagStatusType and ErrorHandlingType ****"
    );
    RequestsInfos.postNewProfile_statusSim(733546, "SIMPLE_08");
    cy.wait(2000);
    cy.get("tr").contains("Portstatus").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE).should(
      "contain.text",
      "Diagnose Ergebnisse nicht verfügbar."
    );
    cy.wait(2000);

    //  SIMPLE_09- portStatusResellerResponseMessage with longer returnCodeDescription and errortext
    cy.log(
      "**** SIMPLE_09- portStatusResellerResponseMessage with longer returnCodeDescription and errortext ****"
    );
    RequestsInfos.postNewProfile_statusSim(733546, "SIMPLE_09");
    cy.wait(2000);
    cy.get("tr").contains("Portstatus").click();
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.Portstatus.RESULT_DIAGNOSE)
      .should(
        "contain.text",
        "Statusanfrage für Leitung DEU.NCK.TMJS4Y2JGE erfolgreich durchgeführt."
      )
      .should("contain.text", "linestatus: up/up")
      .should(
        "contain.text",
        "Breitband:aktuelle Leitungsbitrate (Down): 100,00 MBit/s"
      )
      .should("contain.text", "ILTF:ES_Diagnose: Unterbrechung am HVT")
      .should(
        "contain.text",
        "Diagnose Ergebnis: ServerSOAPFaultException: Client received SOAP Fault from server: Error communicating with upstream server. Exception:"
      )
      .should(
        "contain.text",
        "[WebServiceIOException: I/O error: Connect to ws-wholesale-portal.telekom.de:443 [ws-wholesale-portal.telekom.de/80.158.66.60] failed: connect timed out;"
      )
      .should(
        "contain.text",
        "nested exception is org.apache.http.conn.ConnectTimeoutException: Connect to ws-wholesale-portal.telekom.de:443 [ws-wholesale-"
      )
      .should(
        "contain.text",
        "portal.telekom.de/80.158.66.60] failed: connect timed out] Please see the server log to find more d..."
      )
      .should("contain.text", "CarrierDiagId:");
  });
});
