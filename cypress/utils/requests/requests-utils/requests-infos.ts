import { RequestUtils } from "./request-utils";
import { RequestTCAUtils } from "./request-TCA-utils";

export abstract class RequestsInfos {
  public static tca_resellerCreateToTca_supplier(
    descriptionCode,
    ticketID
  ): void {
    let xmlBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/TCA_Reseller2TCA_Supplier.xml"
    ).then((body) => {
      cy.log("=== TCA Reseller erstellt Leitungs-Ticket bei TCA Supplier ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      xmlBody = body
        .replace("{descriptionCode}", descriptionCode)
        .replace("{currentTime}", ticketID);
      cy.wrap(RequestTCAUtils.sendXMLRequestWithoutResponse("POST", xmlBody));
    });
  }

  public static tca_resellerReopenToTca_supplier(
    descriptionCode,
    ticketID
  ): void {
    let xmlBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/TCA_Reseller_Reopen_TCA_Supplier.xml"
    ).then((body) => {
      cy.log("=== TCA Reseller send REOPEN bei TCA Supplier ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      xmlBody = body
        .replace("{descriptionCode}", descriptionCode)
        .replace("{currentTime}", ticketID);
      cy.wrap(RequestTCAUtils.sendXMLRequestWithoutResponse("POST", xmlBody));
    });
  }

  public static tca_resellerCloseToTca_supplier(
    descriptionCode,
    ticketID
  ): void {
    let xmlBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/TCA_Reseller_Close_TCA_Supplier.xml"
    ).then((body) => {
      cy.log("=== TCA Reseller send CLOSE bei TCA Supplier ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      xmlBody = body
        .replace("{descriptionCode}", descriptionCode)
        .replace("{currentTime}", ticketID);
      cy.wrap(RequestTCAUtils.sendXMLRequestWithoutResponse("POST", xmlBody));
    });
  }

  public static tamTest(
    externStoerungsnummer,
    entstoerungsAuftragsnummer
  ): void {
    let xmlBody;
    cy.readFile("cypress/utils/requests/requests-body/TAM_Test.xml").then(
      (body) => {
        cy.log("=== TAM_Test Request ist ===");
        cy.log(body);
        cy.wrap(body).should("not.be.undefined");

        xmlBody = body
          .replace("{externeStoerungsnummer}", externStoerungsnummer)
          .replace("{entstoerungsAuftragsnummer}", entstoerungsAuftragsnummer);
        cy.wrap(RequestUtils.sendXMLRequest("POST", xmlBody));
      }
    );
  }

  public static erlmTestMitMeldecode7022(
    externStoerungsnummer,
    entstoerungsAuftragsnummer
  ): void {
    let xmlBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/ERLM_Test_Meldecode_7022.xml"
    ).then((body) => {
      cy.log("=== ERLM_Test_Meldecode_7022 Request ist ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      xmlBody = body
        .replace("{externeStoerungsnummer}", externStoerungsnummer)
        .replace("{entstoerungsAuftragsnummer}", entstoerungsAuftragsnummer);
      cy.wrap(RequestUtils.sendXMLRequest("POST", xmlBody));
    });
  }

  public static entmTest(
    externStoerungsnummer,
    entstoerungsAuftragsnummer
  ): void {
    let xmlBody;
    cy.readFile("cypress/utils/requests/requests-body/ENTM_Test.xml").then(
      (body) => {
        cy.log("=== ENTM_Test Request ist ===");
        cy.log(body);
        cy.wrap(body).should("not.be.undefined");

        xmlBody = body
          .replace("{externeStoerungsnummer}", externStoerungsnummer)
          .replace("{entstoerungsAuftragsnummer}", entstoerungsAuftragsnummer);
        cy.wrap(RequestUtils.sendXMLRequest("POST", xmlBody));
      }
    );
  }

  public static abbmTest(
    externStoerungsnummer,
    entstoerungsAuftragsnummer
  ): void {
    let xmlBody;
    cy.readFile("cypress/utils/requests/requests-body/ABBM_Test.xml").then(
      (body) => {
        cy.log("=== ABBM_Test Request ist ===");
        cy.log(body);
        cy.wrap(body).should("not.be.undefined");

        xmlBody = body
          .replace("{externeStoerungsnummer}", externStoerungsnummer)
          .replace("{entstoerungsAuftragsnummer}", entstoerungsAuftragsnummer);
        cy.wrap(RequestUtils.sendXMLRequest("POST", xmlBody));
      }
    );
  }

  public static zwmTest(
    externStoerungsnummer,
    entstoerungsAuftragsnummer
  ): void {
    let xmlBody;
    cy.readFile("cypress/utils/requests/requests-body/ZWM_Test.xml").then(
      (body) => {
        cy.log("=== ZWM_Test Request ist ===");
        cy.log(body);
        cy.wrap(body).should("not.be.undefined");

        xmlBody = body
          .replace("{externeStoerungsnummer}", externStoerungsnummer)
          .replace("{entstoerungsAuftragsnummer}", entstoerungsAuftragsnummer);
        cy.wrap(RequestUtils.sendXMLRequest("POST", xmlBody));
      }
    );
  }

  public static erlmTest(
    externStoerungsnummer,
    entstoerungsAuftragsnummer
  ): void {
    let xmlBody;
    cy.readFile("cypress/utils/requests/requests-body/ERLM_Test.xml").then(
      (body) => {
        cy.log("=== ERLM_Test Request ist ===");
        cy.log(body);
        cy.wrap(body).should("not.be.undefined");

        xmlBody = body
          .replace("{externeStoerungsnummer}", externStoerungsnummer)
          .replace("{entstoerungsAuftragsnummer}", entstoerungsAuftragsnummer);
        cy.wrap(RequestUtils.sendXMLRequest("POST", xmlBody));
      }
    );
  }

  public static qebTestRek(
    externStoerungsnummer,
    entstoerungsAuftragsnummer
  ): void {
    let xmlBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/QEB_Test_nach_REK.xml"
    ).then((body) => {
      cy.log("=== QEB_Test_nach_REK Request ist ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      xmlBody = body
        .replace("{externeStoerungsnummer}", externStoerungsnummer)
        .replace("{entstoerungsAuftragsnummer}", entstoerungsAuftragsnummer);
      cy.wrap(RequestUtils.sendXMLRequest("POST", xmlBody));
    });
  }

  public static erlmTestRek(
    externStoerungsnummer,
    entstoerungsAuftragsnummer
  ): void {
    let xmlBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/ERLM_Test_nach_REK.xml"
    ).then((body) => {
      cy.log("=== ERLM_Test_nach_REK Request ist ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      xmlBody = body
        .replace("{externeStoerungsnummer}", externStoerungsnummer)
        .replace("{entstoerungsAuftragsnummer}", entstoerungsAuftragsnummer);
      cy.wrap(RequestUtils.sendXMLRequest("POST", xmlBody));
    });
  }

  public static modifyScenario(scenario): void {
    RequestUtils.sendDeleteToSupplierScenarioRequest(scenario);

    let jsonBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/modify" + scenario + ".json"
    ).then((body) => {
      cy.log("=== Add Scenario Request ist ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      jsonBody = body;
      cy.wrap(
        RequestUtils.sendAddToSupplierScenarioRequest(jsonBody, scenario)
      );
    });
  }

  public static resetSupplierScenario(scenario): void {
    let jsonBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/reset" + scenario + ".json"
    ).then((body) => {
      cy.log("=== Add Scenario Request ist ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      jsonBody = body;
      cy.wrap(
        RequestUtils.sendAddToSupplierScenarioRequest(jsonBody, scenario)
      );
    });
  }

  public static resetResellerScenario(scenario): void {
    let jsonBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/reset" + scenario + ".json"
    ).then((body) => {
      cy.log("=== Add Scenario Request ist ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      jsonBody = body;
      cy.wrap(
        RequestUtils.sendAddToResellerScenarioRequest(jsonBody, scenario)
      );
    });
  }

  public static modifyZwmToReopen(scenario): void {
    let jsonBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/modifyZwmToReopen.json"
    ).then((body) => {
      cy.log("=== Modify Scenario Request ist ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      jsonBody = body;
      cy.wrap(
        RequestUtils.sendAddToResellerScenarioRequest(jsonBody, scenario)
      );
    });
  }

  public static modifyTbkle_resolveToTam(scenario): void {
    let jsonBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/modifyTbkle_resolveToTam.json"
    ).then((body) => {
      cy.log("=== Modify Scenario Request ist ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      jsonBody = body;
      cy.wrap(
        RequestUtils.sendAddToSupplierScenarioRequest(jsonBody, scenario)
      );
    });
  }

  public static modifyReopenToTam_ant(scenario): void {
    let jsonBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/modifyReopenToTam_ant.json"
    ).then((body) => {
      cy.log("=== Modify Scenario Request ist ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      jsonBody = body;
      cy.wrap(
        RequestUtils.sendAddToResellerScenarioRequest(jsonBody, scenario)
      );
    });
  }

  public static modifyTamToResolve(scenario): void {
    let jsonBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/modifyTamToResolve.json"
    ).then((body) => {
      cy.log("=== Modify Scenario Request ist ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      jsonBody = body;
      cy.wrap(
        RequestUtils.sendAddToSupplierScenarioRequest(jsonBody, scenario)
      );
    });
  }

  public static modifyTam_antToClose(scenario): void {
    let jsonBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/modifyTam_antToClose.json"
    ).then((body) => {
      cy.log("=== Modify Scenario Request ist ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      jsonBody = body;
      cy.wrap(
        RequestUtils.sendAddToResellerScenarioRequest(jsonBody, scenario)
      );
    });
  }

  public static modifyResolveToClose(scenario): void {
    let jsonBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/modifyResolveToClose.json"
    ).then((body) => {
      cy.log("=== Modify Scenario Request ist ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      jsonBody = body;
      cy.wrap(
        RequestUtils.sendAddToSupplierScenarioRequest(jsonBody, scenario)
      );
    });
  }

  public static postNewProfile_resetSim(
    productInventoryId,
    simulationProfile
  ): void {
    let jsonBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/profile/" +
        simulationProfile +
        ".json"
    ).then((body) => {
      cy.log("=== Add Scenario Request ist ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      jsonBody = body;
      cy.wrap(
        RequestUtils.sendAddProductRequest_resetSim(
          jsonBody,
          productInventoryId
        )
      );
    });
  }

  public static postNewProfile_statusSim(
    productInventoryId,
    simulationProfile
  ): void {
    let jsonBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/profile/" +
        simulationProfile +
        ".json"
    ).then((body) => {
      cy.log("=== Add Scenario Request ist ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      jsonBody = body;
      cy.wrap(
        RequestUtils.sendAddProductRequest_statusSim(
          jsonBody,
          productInventoryId
        )
      );
    });
  }
}
