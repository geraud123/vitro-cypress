import { RequestTCAUtils } from "./request-TCA-utils";
import { RequestTCAFailUtils } from "./request-TCA-fail-utils";

export abstract class RequestsQuestionCatalogInfos {
  public static getQuestionCatalogMitProductInventoryIdNichtProvisioniert(): void {
    let xmlBody;
    cy.readFile("cypress/utils/requests/requests-body/NCK_Reseller.xml").then(
      (body) => {
        cy.log("=== NCK_Reseller Request ist ===");
        cy.log(body);
        cy.wrap(body).should("not.be.undefined");

        xmlBody = body
          .replace("{productInventoryId}", 713270)
          .replace("{queryCatalogId}", "");
        let requestName = "NCK_Reseller_NP";
        RequestTCAUtils.sendXMLRequest("POST", xmlBody, requestName);
        cy.fixture("responses/NCK_Reseller_NP-Response").then((value) => {
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData
          ).to.be.not.null;
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.id
          ).to.be.eq(9);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.questions.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.questions[0].id
          ).to.be.eq(36);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.questions[0].answers.id
          ).to.be.eq(63);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.questions[1].id
          ).to.be.eq(37);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.questions[1].answers.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.questions[1].answers[0].id
          ).to.be.eq(64);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.questions[1].answers[1].id
          ).to.be.eq(65);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.questions[1].answers[2].id
          ).to.be.eq(66);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.questions[2].id
          ).to.be.eq(38);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.questions[2].answers.id
          ).to.be.eq(121);
        });
      }
    );
  }

  public static getQuestionCatalogMitProductInventoryIdLineProvisioniertVoiceNicht(): void {
    let xmlBody;
    cy.readFile("cypress/utils/requests/requests-body/NCK_Reseller.xml").then(
      (body) => {
        cy.log("=== NCK_Reseller Request ist ===");
        cy.log(body);
        cy.wrap(body).should("not.be.undefined");

        xmlBody = body
          .replace("{productInventoryId}", 808733)
          .replace("{queryCatalogId}", "");
        let requestName = "NCK_Reseller_LPVN";
        RequestTCAUtils.sendXMLRequest("POST", xmlBody, requestName);
        cy.fixture("responses/NCK_Reseller_LPVN-Response").then((value) => {
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData
          ).to.be.not.null;
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].id
          ).to.be.eq(9);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions[0].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions[1].answers.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions[2].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].id
          ).to.be.eq(289);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions.length
          ).to.be.eq(13);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[0].answers.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[1].answers.id
          ).to.be.eq(743);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[2].answers.id
          ).to.be.eq(744);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[3].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[4].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[5].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[6].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[7].answers.id
          ).to.be.eq(753);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[8].answers.id
          ).to.be.eq(754);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[9].answers.id
          ).to.be.eq(755);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[10].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[11].answers.id
          ).to.be.eq(758);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[12].answers.length
          ).to.be.eq(2);
        });
      }
    );
  }

  public static getQuestionCatalogMitProductInventoryIdGanzProvisioniert(): void {
    let xmlBody;
    cy.readFile("cypress/utils/requests/requests-body/NCK_Reseller.xml").then(
      (body) => {
        cy.log("=== NCK_Reseller Request ist ===");
        cy.log(body);
        cy.wrap(body).should("not.be.undefined");

        xmlBody = body
          .replace("{productInventoryId}", 733541)
          .replace("{queryCatalogId}", "");
        let requestName = "NCK_Reseller_GP";
        RequestTCAUtils.sendXMLRequest("POST", xmlBody, requestName);
        cy.fixture("responses/NCK_Reseller_GP-Response").then((value) => {
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData
          ).to.be.not.null;
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.length
          ).to.be.eq(4);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].id
          ).to.be.eq(9);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions[0].answers.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions[1].answers.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions[2].answers.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].id
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions.length
          ).to.be.eq(12);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[0].answers.id
          ).to.be.eq(21);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[1].answers.length
          ).to.be.eq(4);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[2].answers.id
          ).to.be.eq(22);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[3].answers.id
          ).to.be.eq(23);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[4].answers.id
          ).to.be.eq(24);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[5].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[6].answers.id
          ).to.be.eq(27);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[7].answers.id
          ).to.be.eq(28);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[8].answers.id
          ).to.be.eq(29);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[9].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[10].answers.id
          ).to.be.eq(367);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[11].answers.id
          ).to.be.eq(368);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].id
          ).to.be.eq(289);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions.length
          ).to.be.eq(13);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[0].answers.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[1].answers.id
          ).to.be.eq(743);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[2].answers.id
          ).to.be.eq(744);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[3].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[4].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[5].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[6].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[7].answers.id
          ).to.be.eq(753);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[8].answers.id
          ).to.be.eq(754);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[9].answers.id
          ).to.be.eq(755);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[10].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[11].answers.id
          ).to.be.eq(758);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[12].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[3].id
          ).to.be.eq(5);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[3].questions.answers.length
          ).to.be.eq(2);
        });
      }
    );
  }

  public static getQuestionCatalogMitProductInventoryIdLineOnly(): void {
    let xmlBody;
    cy.readFile("cypress/utils/requests/requests-body/NCK_Reseller.xml").then(
      (body) => {
        cy.log("=== NCK_Reseller Request ist ===");
        cy.log(body);
        cy.wrap(body).should("not.be.undefined");

        xmlBody = body
          .replace("{productInventoryId}", 809546)
          .replace("{queryCatalogId}", "");
        let requestName = "NCK_Reseller_LO";
        RequestTCAUtils.sendXMLRequest("POST", xmlBody, requestName);
        cy.fixture("responses/NCK_Reseller_LO-Response").then((value) => {
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData
          ).to.be.not.null;
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].id
          ).to.be.eq(9);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions[0].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions[1].answers.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions[2].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].id
          ).to.be.eq(289);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions.length
          ).to.be.eq(13);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[0].answers.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[1].answers.id
          ).to.be.eq(743);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[2].answers.id
          ).to.be.eq(744);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[3].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[4].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[5].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[6].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[7].answers.id
          ).to.be.eq(753);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[8].answers.id
          ).to.be.eq(754);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[9].answers.id
          ).to.be.eq(755);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[10].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[11].answers.id
          ).to.be.eq(758);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[12].answers.length
          ).to.be.eq(2);
        });
      }
    );
  }

  public static getQuestionCatalogMitProductInventoryIdKeineRufnummerBeiVoip(): void {
    let xmlBody;
    cy.readFile("cypress/utils/requests/requests-body/NCK_Reseller.xml").then(
      (body) => {
        cy.log("=== NCK_Reseller Request ist ===");
        cy.log(body);
        cy.wrap(body).should("not.be.undefined");

        xmlBody = body
          .replace("{productInventoryId}", 691617)
          .replace("{queryCatalogId}", "");
        let requestName = "NCK_Reseller_KRV";
        RequestTCAUtils.sendXMLRequest("POST", xmlBody, requestName);
        cy.fixture("responses/NCK_Reseller_KRV-Response").then((value) => {
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData
          ).to.be.not.null;
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].id
          ).to.be.eq(9);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions[0].answers.length
          ).to.be.eq(2);
          !expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions[0]
          ).to.not.have.nested.property("answers", "Voice");
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions[1].answers.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions[2].answers.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[0].questions[2]
          ).to.not.have.nested.property("answers", "Basis Audionet (Voice)");
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].id
          ).to.be.eq(18);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions.length
          ).to.be.eq(6);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[0].answers.id
          ).to.be.eq(380);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[1].answers.id
          ).to.be.eq(163);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[2].answers.id
          ).to.be.eq(164);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[3].answers.id
          ).to.be.eq(165);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[4].answers.id
          ).to.be.eq(166);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[1].questions[5].answers.id
          ).to.be.eq(167);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].id
          ).to.be.eq(153);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions.length
          ).to.be.eq(5);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[0].answers.length
          ).to.be.eq(4);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[1].answers.id
          ).to.be.eq(583);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[2].answers.id
          ).to.be.eq(600);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[3].answers.id
          ).to.be.eq(520);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData[2].questions[4].answers.id
          ).to.be.eq(420);
        });
      }
    );
  }

  public static getQuestionCatalogMitQueryCatalogId(): void {
    let xmlBody;
    cy.readFile("cypress/utils/requests/requests-body/NCK_Reseller.xml").then(
      (body) => {
        cy.log("=== NCK_Reseller Request ist ===");
        cy.log(body);
        cy.wrap(body).should("not.be.undefined");

        xmlBody = body
          .replace("{productInventoryId}", "")
          .replace("{queryCatalogId}", 9);
        let requestName = "NCK_Reseller_QCI";
        RequestTCAUtils.sendXMLRequest("POST", xmlBody, requestName);
        cy.fixture("responses/NCK_Reseller_QCI-Response").then((value) => {
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData
          ).to.be.not.null;
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.id
          ).to.be.eq(9);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.questions.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.questions[0].answers.length
          ).to.be.eq(6);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.questions[1].answers.length
          ).to.be.eq(3);
          expect(
            value["soap:Envelope"]["soap:Body"].questionCatalogResponse
              .questionCatalogData.questions[2]
          ).to.not.have.nested.property("answers");
        });
      }
    );
  }

  public static getQuestionCatalogMitFalschenCredentials(): void {
    let xmlBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/NCK_Reseller_Fail.xml"
    ).then((body) => {
      cy.log("=== NCK_Reseller Request ist ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      xmlBody = body
        .replace("{password}", "tertA89dg")
        .replace("{productInventoryId}", 713270)
        .replace("{queryCatalogId}", "");
      let requestName = "NCK_Reseller_FC";
      RequestTCAFailUtils.sendXMLRequest("POST", xmlBody, requestName);
      cy.fixture("responses/NCK_Reseller_FC-Response").then((value) => {
        expect(
          value["soap:Envelope"]["soap:Body"]["soap:Fault"].detail.FaultInfo
            .errorNumber
        ).to.be.eq(6374);
        expect(
          value["soap:Envelope"]["soap:Body"]["soap:Fault"].detail.FaultInfo
            .errorMessage
        ).to.be.eq("Login failed");
      });
    });
  }

  public static getQuestionCatalogMitNichtVorhandenerProductInventoryId(): void {
    let xmlBody;
    cy.readFile("cypress/utils/requests/requests-body/NCK_Reseller.xml").then(
      (body) => {
        cy.log("=== NCK_Reseller Request ist ===");
        cy.log(body);
        cy.wrap(body).should("not.be.undefined");

        xmlBody = body
          .replace("{productInventoryId}", 777777)
          .replace("{queryCatalogId}", "");
        let requestName = "NCK_Reseller_NPI";
        RequestTCAFailUtils.sendXMLRequest("POST", xmlBody, requestName);
        cy.fixture("responses/NCK_Reseller_NPI-Response").then((value) => {
          expect(
            value["soap:Envelope"]["soap:Body"]["soap:Fault"].detail.FaultInfo
              .errorNumber
          ).to.be.eq(6342);
          expect(
            value["soap:Envelope"]["soap:Body"]["soap:Fault"].detail.FaultInfo
              .errorMessage
          ).to.be.eq("Specified CAP customer data was not found");
          expect(
            value["soap:Envelope"]["soap:Body"]["soap:Fault"].detail.FaultInfo
              .additionalErrorMessage
          ).to.be.eq("No Customer found for given parameters.");
        });
      }
    );
  }
}
