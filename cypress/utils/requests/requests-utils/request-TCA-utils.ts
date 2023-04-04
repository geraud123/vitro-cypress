import { XMLParser } from "fast-xml-parser";

const options = {
  ignoreAttributes: false,
};
const parser = new XMLParser(options);

export abstract class RequestTCAUtils {
  public static sendXMLRequest(method, xmlBody, requestName): String {
    let responseSTR;
    let responseJSON;

    async function asyncSendRequest() {
      cy.log("=== REQUEST WIRD GESENDET ===");
      cy.log(xmlBody);
      cy.request({
        method: method,
        url: "https://ticketsystem.test.vc.vtnx.net/soap-api/CAP/coupling",
        headers: {
          ContentType: "text/xml; charset=utf-8",
        },
        body: xmlBody,
      }).then((response) => {
        responseSTR = response.body;
        responseJSON = JSON.stringify(parser.parse(responseSTR));
        expect(response.status, "status").to.equal(200);
        assert(responseSTR != null);
        // cy.writeFile('cypress/fixtures/responses/'+requestName+'-Response.xml', response.body);
        cy.writeFile(
          "cypress/fixtures/responses/" + requestName + "-Response.json",
          responseJSON,
          "utf8"
        );
      });
      cy.log("=== RESPONSE ERHALTEN ===");
    }
    cy.wrap(null).then(() => asyncSendRequest());
    return responseJSON;
  }

  public static sendXMLRequestWithoutResponse(method, xmlBody): any {
    async function asyncSendRequest() {
      cy.log("=== REQUEST WIRD GESENDET ===");
      cy.log(xmlBody);
      cy.request({
        method: method,
        url: "https://ticketsystem.test.vc.vtnx.net/soap-api/CAP/coupling",
        headers: {
          ContentType: "text/xml; charset=utf-8",
        },
        body: xmlBody,
      });
    }
    cy.wrap(null).then(() => asyncSendRequest());
  }
}
