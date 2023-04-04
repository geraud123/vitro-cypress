import { RequestTCAUtils } from "./request-TCA-utils";
import { RequestTCAFailUtils } from "./request-TCA-fail-utils";

export abstract class RequestsProductSucheInfos {
  public static getCustomerProductMitCapCustomerNumber(): void {
    let xmlBody;
    cy.readFile("cypress/utils/requests/requests-body/EWE_Reseller.xml").then(
      (body) => {
        cy.log("=== EWE_kon_retail_Reseller Request ist ===");
        cy.log(body);
        cy.wrap(body).should("not.be.undefined");

        xmlBody = body
          .replace("{capCustomerNumber}", 738761)
          .replace("{capInventoryId}", "");
        let requestName = "EWE_Reseller_CCN";
        RequestTCAUtils.sendXMLRequest("POST", xmlBody, requestName);
        cy.fixture("responses/EWE_Reseller_CCN-Response").then((value) => {
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData
          ).to.be.not.null;
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData.productInventoryId
          ).to.be.eq(738762);
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData.productName
          ).to.be.eq("20070015 TDG BSA L2 VDSL 50 LT");
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData.productClass
          ).to.be.eq("VDSL");
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData.lineType.lineId
          ).to.be.eq("DEU.DTAG.1FNFQ5FNQ");
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData.lineType.provisioningStatus
          ).to.be.eq("Fertig provisioniert");
        });
      }
    );
  }

  public static getCustomerProductsMitCapCustomerNumber(): void {
    let xmlBody;
    cy.readFile("cypress/utils/requests/requests-body/VC_Reseller.xml").then(
      (body) => {
        cy.log("=== VC_Reseller Request ist ===");
        cy.log(body);
        cy.wrap(body).should("not.be.undefined");

        xmlBody = body
          .replace("{capCustomerNumber}", 669093)
          .replace("{capInventoryId}", "");
        let requestName = "VC_Reseller_CCN";
        RequestTCAUtils.sendXMLRequest("POST", xmlBody, requestName);
        cy.fixture("responses/VC_Reseller_CCN-Response").then((value) => {
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData
          ).to.be.not.null;
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData.length
          ).to.be.eq(2);
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData[0].productInventoryId
          ).to.be.eq(669094);
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData[0].productName
          ).to.be.eq("NC_FTTC_VDSL_25_5");
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData[0].productClass
          ).to.be.eq("NC-FTTC-VDSL");
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData[0].lineType.lineId
          ).to.be.eq("DEU.GELNET.12345");
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData[0].lineType.provisioningStatus
          ).to.be.eq("Cancel-Vorgang - in Richtung Schnittstelle gesendet");
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData[1].productInventoryId
          ).to.be.eq(730423);
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData[1].productName
          ).to.be.eq("VDSL-50");
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData[1].productClass
          ).to.be.eq("VDSL");
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData[1].lineType.supplierTag
          ).to.be.eq("DTAG");
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData[1].lineType.provisioningStatus
          ).to.be.eq("Auftrag angenommen");
        });
      }
    );
  }

  public static getCustomerProductMitCapInventoryId(): void {
    let xmlBody;
    cy.readFile("cypress/utils/requests/requests-body/EWE_Reseller.xml").then(
      (body) => {
        cy.log("=== EWE_kon_retail_Reseller Request ist ===");
        cy.log(body);
        cy.wrap(body).should("not.be.undefined");

        xmlBody = body
          .replace("{capCustomerNumber}", "")
          .replace("{capInventoryId}", 738762);
        let requestName = "EWE_Reseller_CII";
        RequestTCAUtils.sendXMLRequest("POST", xmlBody, requestName);
        cy.fixture("responses/EWE_Reseller_CII-Response").then((value) => {
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData
          ).to.be.not.null;
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData.productInventoryId
          ).to.be.eq(738762);
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData.productName
          ).to.be.eq("20070015 TDG BSA L2 VDSL 50 LT");
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData.productClass
          ).to.be.eq("VDSL");
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData.lineType.lineId
          ).to.be.eq("DEU.DTAG.1FNFQ5FNQ");
          expect(
            value["soap:Envelope"]["soap:Body"].customerProductResponse
              .customerProductData.lineType.provisioningStatus
          ).to.be.eq("Fertig provisioniert");
        });
      }
    );
  }

  public static getCustomerProductMitFalscherOderUnpassenderCapCustomerNumber(): void {
    let xmlBody;
    cy.readFile("cypress/utils/requests/requests-body/EWE_Reseller.xml").then(
      (body) => {
        cy.log("=== EWE_kon_retail_Reseller Request ist ===");
        cy.log(body);
        cy.wrap(body).should("not.be.undefined");

        xmlBody = body
          .replace("{capCustomerNumber}", 999999)
          .replace("{capInventoryId}", "");
        let requestName = "EWE_Reseller_CCNF";
        RequestTCAFailUtils.sendXMLRequest("POST", xmlBody, requestName);
        cy.fixture("responses/EWE_Reseller_CCNF-Response").then((value) => {
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

  public static getCustomerProductMitFalscherOderUnpassenderCapInventoryId(): void {
    let xmlBody;
    cy.readFile("cypress/utils/requests/requests-body/EWE_Reseller.xml").then(
      (body) => {
        cy.log("=== EWE_kon_retail_Reseller Request ist ===");
        cy.log(body);
        cy.wrap(body).should("not.be.undefined");

        xmlBody = body
          .replace("{capCustomerNumber}", "")
          .replace("{capInventoryId}", 999999);
        let requestName = "EWE_Reseller_CIIF";
        RequestTCAFailUtils.sendXMLRequest("POST", xmlBody, requestName);
        cy.fixture("responses/EWE_Reseller_CIIF-Response").then((value) => {
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

  public static getCustomerProductMitUngueltigenPasswort(): void {
    let xmlBody;
    cy.readFile(
      "cypress/utils/requests/requests-body/EWE_Reseller_Fail.xml"
    ).then((body) => {
      cy.log("=== EWE_kon_retail_Reseller Request ist ===");
      cy.log(body);
      cy.wrap(body).should("not.be.undefined");

      xmlBody = body
        .replace("{password}", "gdu5Dbct4")
        .replace("{capCustomerNumber}", 738761)
        .replace("{capInventoryId}", "");
      let requestName = "EWE_Reseller_FC";
      RequestTCAFailUtils.sendXMLRequest("POST", xmlBody, requestName);
      cy.fixture("responses/EWE_Reseller_FC-Response").then((value) => {
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
}
