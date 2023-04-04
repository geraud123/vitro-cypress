import { RequestsProductSucheInfos } from "../../utils/requests/requests-utils/requests-productSuche-infos";
import { InfoUtils } from "../../utils/infos/info-utils";

let ticketIdRes = null;
let typeValue = null;
let type = null;

describe("Fragen-Kataloge", () => {
  it("TS-1302: TCA getCustomerProduct mit capCustomerNumber @product-suche", () => {
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    // Der Kunde hat nur ein Produkt
    RequestsProductSucheInfos.getCustomerProductMitCapCustomerNumber();
    // Der Kunde hat zwei Produkte
    RequestsProductSucheInfos.getCustomerProductsMitCapCustomerNumber();
  });
  it("TS-1303: TCA getCustomerProduct mit capInventoryId @product-suche", () => {
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    RequestsProductSucheInfos.getCustomerProductMitCapInventoryId();
  });
  it("TS-1304: TCA getQuestionCatalog mit falschen Testdaten @product-suche", () => {
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    // TCA getCustomerProduct mit falscher oder für den Reseller unpassender capCustomerNumber
    RequestsProductSucheInfos.getCustomerProductMitFalscherOderUnpassenderCapCustomerNumber();
    // TCA getCustomerProduct mit falscher oder für den Reseller unpassender capInventoryId
    RequestsProductSucheInfos.getCustomerProductMitFalscherOderUnpassenderCapInventoryId();
    // TCA getCustomerProduct mit ungültigen Passwort
    RequestsProductSucheInfos.getCustomerProductMitUngueltigenPasswort();
  });
});
