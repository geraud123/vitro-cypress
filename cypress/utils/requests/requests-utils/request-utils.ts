export abstract class RequestUtils {
  public static sendXMLRequest(method, xmlBody): any {
    let responseSTR;

    async function asyncSendRequest() {
      cy.log("=== REQUEST WIRD GESENDET ===");
      cy.log(xmlBody);
      cy.request({
        method: method,
        url: "https://ticketsystem.test.vc.vtnx.net/soap-api/ess/v4/carrier",
        headers: {
          ContentType: "text/xml; charset=utf-8",
        },
        body: xmlBody,
      }).then((response) => {
        responseSTR = response.body;
        expect(response.status, "status").to.equal(200);
        assert(responseSTR != null);
      });
    }

    cy.wrap(null).then(() => asyncSendRequest());
  }

  public static sendAddToResellerScenarioRequest(jsonBody, scenario): any {
    let responseSTR;

    async function asyncSendRequest() {
      cy.log("=== REQUEST WIRD GESENDET ===");
      cy.log(jsonBody);
      cy.request({
        method: "POST",
        url:
          "https://tca-simulator.test.vc.vtnx.net/simulation/resellerModify/" +
          scenario,
        body: jsonBody,
      }).then((response) => {
        responseSTR = response.body;
        expect(response.status, "status").to.equal(200);
      });
    }

    cy.wrap(null).then(() => asyncSendRequest());
  }

  public static sendAddToSupplierScenarioRequest(jsonBody, scenario): any {
    let responseSTR;

    async function asyncSendRequest() {
      cy.log("=== REQUEST WIRD GESENDET ===");
      cy.log(jsonBody);
      cy.request({
        method: "POST",
        url:
          "https://tca-simulator.test.vc.vtnx.net/simulation/supplierModify/" +
          scenario,
        body: jsonBody,
      }).then((response) => {
        responseSTR = response.body;
        expect(response.status, "status").to.equal(200);
      });
    }

    cy.wrap(null).then(() => asyncSendRequest());
  }

  public static sendDeleteToSupplierScenarioRequest(scenario) {
    let responseSTR;

    async function asyncSendRequest() {
      cy.log("=== REQUEST WIRD GESENDET ===");
      cy.request({
        method: "DELETE",
        url:
          "https://tca-simulator.test.vc.vtnx.net/simulation/supplierModify/" +
          scenario,
      }).then((response) => {
        responseSTR = response.body;
        expect(response.status, "status").to.equal(200);
      });
    }

    cy.wrap(null).then(() => asyncSendRequest());
  }

  public static sendDeleteToResellerScenarioRequest(scenario) {
    let responseSTR;

    async function asyncSendRequest() {
      cy.log("=== REQUEST WIRD GESENDET ===");
      cy.request({
        method: "DELETE",
        url:
          "http://tca-simulator.test.vc.vtnx.net/simulation/resellerModify/" +
          scenario,
      }).then((response) => {
        responseSTR = response.body;
        expect(response.status, "status").to.equal(200);
      });
    }

    cy.wrap(null).then(() => asyncSendRequest());
  }

  public static sendAddProductRequest_resetSim(
    jsonBody,
    productInventoryId
  ): any {
    let responseSTR;

    async function asyncSendRequest() {
      cy.log("=== REQUEST WIRD GESENDET ===");
      cy.log(jsonBody);
      cy.request({
        method: "POST",
        url:
          "http://portdiagnose-simulator.test.vc.vtnx.net/actuator/portresetsimulator/" +
          productInventoryId,
        body: jsonBody,
      }).then((response) => {
        responseSTR = response.body;
        expect(response.status, "status").to.equal(204);
      });
    }

    cy.wrap(null).then(() => asyncSendRequest());
  }

  public static sendAddProductRequest_statusSim(
    jsonBody,
    productInventoryId
  ): any {
    let responseSTR;

    async function asyncSendRequest() {
      cy.log("=== REQUEST WIRD GESENDET ===");
      cy.log(jsonBody);
      cy.request({
        method: "POST",
        url:
          "http://portdiagnose-simulator.test.vc.vtnx.net/actuator/portstatussimulator/" +
          productInventoryId,
        body: jsonBody,
      }).then((response) => {
        responseSTR = response.body;
        expect(response.status, "status").to.equal(204);
      });
    }

    cy.wrap(null).then(() => asyncSendRequest());
  }
}
