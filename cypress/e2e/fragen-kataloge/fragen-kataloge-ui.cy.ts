import { RequestsQuestionCatalogInfos } from "../../utils/requests/requests-utils/requests-questionCatalog-infos";
import { InfoUtils } from "../../utils/infos/info-utils";

let ticketIdRes = null;
let typeValue = null;
let type = null;

describe("Fragen-Kataloge", () => {
  it("TS-1274: TCA getQuestionCatalog mit productInventoryId (line - nicht provisioniert) @fragen-kataloge", () => {
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    RequestsQuestionCatalogInfos.getQuestionCatalogMitProductInventoryIdNichtProvisioniert();
  });

  it("TS-1283: TCA getQuestionCatalog mit productInventoryId (Line provisioniert-Voice nicht) @fragen-kataloge", () => {
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    RequestsQuestionCatalogInfos.getQuestionCatalogMitProductInventoryIdLineProvisioniertVoiceNicht();
  });

  it("TS-1278: TCA getQuestionCatalog mit productInventoryId (komplett provisioniert: line+voice) @fragen-kataloge", () => {
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    RequestsQuestionCatalogInfos.getQuestionCatalogMitProductInventoryIdGanzProvisioniert();
  });

  it("TS-1279: TCA getQuestionCatalog mit productInventoryId (Line only - provisioniert) @fragen-kataloge", () => {
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    RequestsQuestionCatalogInfos.getQuestionCatalogMitProductInventoryIdLineOnly();
  });

  it("TS-1280: TCA getQuestionCatalog mit productInventoryId (komplett provisioniert - keine Rufnummer bei VOIP) @fragen-kataloge", () => {
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    RequestsQuestionCatalogInfos.getQuestionCatalogMitProductInventoryIdKeineRufnummerBeiVoip();
  });

  it("TS-1282: TCA getQuestionCatalog mit queryCatalogId @fragen-kataloge", () => {
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    RequestsQuestionCatalogInfos.getQuestionCatalogMitQueryCatalogId();
  });

  it("TS-1284: TCA getQuestionCatalog mit falschen Testdaten @fragen-kataloge", () => {
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    // TCA getQuestionCatalog mit falschen Credentials
    RequestsQuestionCatalogInfos.getQuestionCatalogMitFalschenCredentials();
    // TCA getQuestionCatalog mit nicht vorhandener ProductInventoryId
    RequestsQuestionCatalogInfos.getQuestionCatalogMitNichtVorhandenerProductInventoryId();
  });
});
