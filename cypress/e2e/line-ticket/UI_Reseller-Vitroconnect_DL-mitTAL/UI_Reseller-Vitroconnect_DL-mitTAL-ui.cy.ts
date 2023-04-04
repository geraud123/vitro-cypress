import { LoginUtils } from "../../../utils/login/login-utils";
import { lineTicketUtils } from "../../../utils/lineTicket/lineTicket-utils";
import { LineTicketConstants } from "../../../utils/lineTicket/lineTicket-constants";
import { FakerUtils } from "../../../utils/faker-utils";
import { CommonConstants } from "../../../utils/common/common-constants";
import { InfoUtils } from "../../../utils/infos/info-utils";
import { RequestsInfos } from "../../../utils/requests/requests-utils/requests-infos";
import { VoiceTicketConstants } from "../../../utils/voiceTicket/voiceTicket-constants";

let ticketIdRes = null;
let ticketIdSupp = null;
let typeValue = null;
let type = null;
let entstoerauftragsnummer;

describe("Login", () => {
  beforeEach(() => {
    LoginUtils.login();
  });
  it("TS-1190: UI Reseller erstellt Leitungs-Ticket bei Vitroconnect (DL) mit TAL @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "Easybell"
    );
    typeValue = "Easybell";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "1328954"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) VC-VDSL-50-VOIP"
    );
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART).select(
      "E-Mail"
    );
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Leitung");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Totalausfall");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("sichergestellt");
    cy.wait(3000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("input")
      .eq(1)
      .clear()
      .type(
        FakerUtils.faker.name.firstName() +
          " " +
          FakerUtils.faker.name.lastName()
      );
    cy.wait(3000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(3000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("input")
      .eq(1)
      .type("01234567890");
    cy.wait(3000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(3000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(3000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(3000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(3000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(3000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(5000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.NEXT_BUTTON).click();
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.ScenarioC.MELDUNGSART_LIST
    ).select("Totalausfall");
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.ScenarioC.PRIORITAET_LIST
    ).select("Normal");
    cy.get(LineTicketConstants.Selectors.TicketSpeichern.TICKET_NAME).type(
      "//test"
    );
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
    ).type("Das ist eine Problembeschreibung");
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(2000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      });
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "vitroconnect");
  });
  it("TS-1191: Vitroconnect macht einen TAL-Auftrag(Entstörauftrag TAL TC) @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(2000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "Vitroconnect macht einen TAL-Auftrag(Entstörauftrag TAL TC)"
    );
    cy.get(LineTicketConstants.Selectors.EditTicketForm.CHECKBOX_TAL).click();
    cy.get(LineTicketConstants.Selectors.EditTicketForm.TAL_PROBLEM).type(
      "Störung... wurde beobachtet"
    );
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.CHECKBOX_TAL_TAL
    ).click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.CHECKBOX_USE_TICKET_TAL
    ).click();
    cy.get(LineTicketConstants.Selectors.EditTicketForm.AKTION_TAL_CONTAINER)
      .contains("Mo-Sa 08:00 - 12:00")
      .click();
    lineTicketUtils.repeatNextMonth();
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.VERANTWORTLICH
      )
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_SUP_TAL
    )
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(5000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.wait(90000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdSupp = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      });
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX2)
      .should("contain.text", "(QEB)")
      .should("contain.text", "(ERLM)")
      .should("contain.text", "Ess Meldung Type: ENTM");
    cy.get(LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX1)
      .contains("(QEB) Entstörauftragsnummer")
      .first()
      .then(($Entstoerauftrag) => {
        entstoerauftragsnummer = $Entstoerauftrag[0].innerHTML
          .match("\\d{13}")
          .toString();
      });
  });
  it("TS-1177: DTAG sendet TAM zu UI Reseller @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8A", () => {
    RequestsInfos.tamTest(ticketIdSupp, entstoerauftragsnummer);
    cy.wait(5000);
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX2).should(
      "contain.text",
      "(TAM)"
    );
  });
  it("TS-1197: UI Reseller sendet TAM-ANT über Vitroconnect an DTAG (ESS/TAL) @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Easybell",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Easybell";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller sendet TAM-ANT über Vitroconnect an DTAG (ESS/TAL)"
    );
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.TERMIN_WERKTAG_CONTAINER
    )
      .contains("Mo-Sa 08:00 - 12:00")
      .click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.TERMIN_WERKTAG_CONTAINER
    )
      .find("input")
      .eq(2)
      .type("04.01.2030");
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.WEITERGELEITET
      )
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES_TAL
    )
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
  });
  it("TS-1198: DTAG sendet ZWM bei TAL an Vitroconnect (DL) @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8A", () => {
    RequestsInfos.zwmTest(ticketIdSupp, entstoerauftragsnummer);
    cy.wait(5000);
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX2)
      .first()
      .should("contain.text", "Ess Meldung Type: ZWM")
      .should(
        "contain.text",
        "Entstörauftragsnummer: " + entstoerauftragsnummer
      );
  });
  it("TS-1083: UI Supplier Nachricht (weitergeleitet) an UI Reseller @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "Supplier Nachricht (weitergeleitet) an UI Reseller"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.WEITERGELEITET
      )
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_SUP_TAL
    )
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
  });
  it("TS-1199: UI Reseller Nachricht (weitergeleitet) an Vitroconnect mit TAL @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Easybell",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Easybell";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller Nachricht (weitergeleitet) an Vitroconnect mit TAL"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.WEITERGELEITET
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
  });
  it("TS-1200: DTAG sendet ERLM bei TAL an Vitroconnect (DL) @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8A", () => {
    RequestsInfos.erlmTest(ticketIdSupp, entstoerauftragsnummer);
    cy.wait(5000);
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX2)
      .first()
      .should(
        "contain.text",
        "(ERLM) Entstörauftragsnummer: " + entstoerauftragsnummer
      );
  });
  it("TS-1059: UI Supplier sendet resolve an UI Reseller @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Supplier sendet resolve an UI Reseller"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.GELOEST)
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_SUP_TAL
    )
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.RESOLVED
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
  });
  it("TS-1201: UI Reseller reklamiert bei Vitroconnect mit TAL (ohne Kundenwunschtermin) @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Easybell",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Easybell";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller reklamiert bei Vitroconnect mit TAL (ohne Kundenwunschtermin)"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.REKLAMIERT)
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES_TAL
    )
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
  });
  it("TS-1059: UI Supplier sendet resolve an UI Reseller @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Supplier sendet resolve an UI Reseller"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.GELOEST)
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_SUP_TAL
    )
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.RESOLVED
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
  });
  it("TS-1202: UI Reseller reklamiert bei Vitroconnect mit TAL (mit Kundenwunschtermin) @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Easybell",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Easybell";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller reklamiert bei Vitroconnect mit TAL (mit Kundenwunschtermin)"
    );
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.TERMIN_WERKTAG_CONTAINER
    )
      .contains("Mo-Sa 08:00 - 12:00")
      .click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.TERMIN_WERKTAG_CONTAINER
    )
      .find("input")
      .eq(2)
      .type("04.01.2030");
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.REKLAMIERT)
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES_TAL
    )
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX3)
      .first()
      .should("contain.text", "(04.01.2030 Mo-Sa 08:00 - 12:00)");
  });
  it("TS-1191: Vitroconnect macht einen TAL-Auftrag(Entstörauftrag TAL TC) @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(2000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "Vitroconnect macht einen TAL-Auftrag(Entstörauftrag TAL TC)"
    );
    cy.get(LineTicketConstants.Selectors.EditTicketForm.CHECKBOX_TAL).click();
    cy.get(LineTicketConstants.Selectors.EditTicketForm.TAL_PROBLEM).type(
      "Störung... wurde beobachtet"
    );
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.CHECKBOX_TAL_TAL
    ).click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.CHECKBOX_USE_TICKET_TAL
    ).click();
    cy.get(LineTicketConstants.Selectors.EditTicketForm.AKTION_TAL_CONTAINER)
      .contains("Mo-Sa 08:00 - 12:00")
      .click();
    lineTicketUtils.repeatNextMonth();
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.VERANTWORTLICH
      )
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_SUP_TAL
    )
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM2).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.wait(90000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdSupp = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      });
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX2)
      .should("contain.text", "(QEB)")
      .should("contain.text", "(ERLM)")
      .should("contain.text", "Ess Meldung Type: ENTM");
    cy.get(LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX1)
      .contains("(QEB) Entstörauftragsnummer")
      .first()
      .then(($Entstoerauftrag) => {
        entstoerauftragsnummer = $Entstoerauftrag[0].innerHTML
          .match("\\d{13}")
          .toString();
        cy.log(entstoerauftragsnummer);
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      });
  });
  it("TS-1059: UI Supplier sendet resolve an UI Reseller @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Supplier sendet resolve an UI Reseller"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.GELOEST)
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_SUP_TAL
    )
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.RESOLVED
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
  });
  it("TS-1203: UI Reseller sendet close an Vitroconnect mit TAL @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Easybell",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Easybell";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller sendet close an Vitroconnect mit TAL"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.CLOSE)
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES_TAL
    )
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
      ticketIdRes
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.CLOSE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
      );
  });
  it("TS-1056: UI Supplier bestätigt close von UI Reseller @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.RESOLVED
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Supplier bestätigt close von UI Reseller"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.CLOSE)
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_SUP_TAL
    )
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
      ticketIdSupp
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.CLOSE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
      );
  });

  it("TS-1190: UI Reseller erstellt Leitungs-Ticket bei Vitroconnect (DL) mit TAL @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "Easybell"
    );
    typeValue = "Easybell";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "1328954"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) VC-VDSL-50-VOIP"
    );
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART).select(
      "E-Mail"
    );
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Leitung");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Totalausfall");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("sichergestellt");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("input")
      .eq(1)
      .clear()
      .type(
        FakerUtils.faker.name.firstName() +
          " " +
          FakerUtils.faker.name.lastName()
      );
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("input")
      .eq(1)
      .type("01234567890");
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.NEXT_BUTTON).click();
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.ScenarioC.MELDUNGSART_LIST
    ).select("Totalausfall");
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.ScenarioC.PRIORITAET_LIST
    ).select("Normal");
    cy.get(LineTicketConstants.Selectors.TicketSpeichern.TICKET_NAME).type(
      "//test"
    );
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
    ).type("Das ist eine Problembeschreibung");
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(2000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      });
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "vitroconnect");
  });
  it("TS-1191: Vitroconnect macht einen TAL-Auftrag(Entstörauftrag TAL TC) @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(2000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "Vitroconnect macht einen TAL-Auftrag(Entstörauftrag TAL TC)"
    );
    cy.get(LineTicketConstants.Selectors.EditTicketForm.CHECKBOX_TAL).click();
    cy.get(LineTicketConstants.Selectors.EditTicketForm.TAL_PROBLEM).type(
      "Störung... wurde beobachtet"
    );
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.CHECKBOX_TAL_TAL
    ).click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.CHECKBOX_USE_TICKET_TAL
    ).click();
    cy.get(LineTicketConstants.Selectors.EditTicketForm.AKTION_TAL_CONTAINER)
      .contains("Mo-Sa 08:00 - 12:00")
      .click();
    lineTicketUtils.repeatNextMonth();
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.VERANTWORTLICH
      )
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_SUP_TAL
    )
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM2).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.wait(90000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdSupp = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      });
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX2)
      .should("contain.text", "(QEB)")
      .should("contain.text", "(ERLM)")
      .should("contain.text", "Ess Meldung Type: ENTM");
    cy.get(LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX1)
      .contains("(QEB) Entstörauftragsnummer")
      .first()
      .then(($Entstoerauftrag) => {
        entstoerauftragsnummer = $Entstoerauftrag[0].innerHTML
          .match("\\d{13}")
          .toString();
        cy.log(entstoerauftragsnummer);
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      });
  });
  it("TS-1196: DTAG sendet ABBM bei TAL an Vitroconnect (DL) @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8B", () => {
    RequestsInfos.abbmTest(ticketIdSupp, entstoerauftragsnummer);
    cy.wait(5000);
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX2)
      .first()
      .should("contain.text", "Ess Meldung Type: ABBM")
      .should(
        "contain.text",
        "Entstörauftragsnummer: " + entstoerauftragsnummer
      );
  });
  it("TS-1051: UI Supplier sendet cancel an UI Reseller @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Supplier sendet cancel an UI Reseller"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.ABGEBROCHEN
      )
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_SUP_TAL
    )
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
      ticketIdSupp
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.CANCEL
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.ABBRUCH
      );
  });
  it("TS-1049: UI Reseller bestätigt Abbruch @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Easybell",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Easybell";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.ABBRUCH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller bestätigt Abbruch"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.ABGEBROCHEN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
      ticketIdRes
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.CANCEL
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.ABBRUCH
      );
  });

  it("TS-1190: UI Reseller erstellt Leitungs-Ticket bei Vitroconnect (DL) mit TAL @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8C", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "Easybell"
    );
    typeValue = "Easybell";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "1328954"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) VC-VDSL-50-VOIP"
    );
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART).select(
      "E-Mail"
    );
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Leitung");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Totalausfall");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("sichergestellt");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("input")
      .eq(1)
      .clear()
      .type(
        FakerUtils.faker.name.firstName() +
          " " +
          FakerUtils.faker.name.lastName()
      );
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("input")
      .eq(1)
      .type("01234567890");
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER)
      .find("select")
      .first()
      .select("Ja");
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.FragenKatalog.NEXT_BUTTON).click();
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.ScenarioC.MELDUNGSART_LIST
    ).select("Totalausfall");
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.ScenarioC.PRIORITAET_LIST
    ).select("Normal");
    cy.get(LineTicketConstants.Selectors.TicketSpeichern.TICKET_NAME).type(
      "//test"
    );
    cy.get(
      LineTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
    ).type("Das ist eine Problembeschreibung");
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(2000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      });
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "vitroconnect");
  });
  it("TS-1191: Vitroconnect macht einen TAL-Auftrag(Entstörauftrag TAL TC) @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8C", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(2000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "Vitroconnect macht einen TAL-Auftrag(Entstörauftrag TAL TC)"
    );
    cy.get(LineTicketConstants.Selectors.EditTicketForm.CHECKBOX_TAL).click();
    cy.get(LineTicketConstants.Selectors.EditTicketForm.TAL_PROBLEM).type(
      "Störung... wurde beobachtet"
    );
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.CHECKBOX_TAL_TAL
    ).click();
    cy.get(
      LineTicketConstants.Selectors.EditTicketForm.CHECKBOX_USE_TICKET_TAL
    ).click();
    cy.get(LineTicketConstants.Selectors.EditTicketForm.AKTION_TAL_CONTAINER)
      .contains("Mo-Sa 08:00 - 12:00")
      .click();
    lineTicketUtils.repeatNextMonth();
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.VERANTWORTLICH
      )
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_SUP_TAL
    )
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM2).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.wait(90000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdSupp = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      });
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX2)
      .should("contain.text", "(QEB)")
      .should("contain.text", "(ERLM)")
      .should("contain.text", "Ess Meldung Type: ENTM");
    cy.get(LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX1)
      .contains("(QEB) Entstörauftragsnummer")
      .first()
      .then(($Entstoerauftrag) => {
        entstoerauftragsnummer = $Entstoerauftrag[0].innerHTML
          .match("\\d{13}")
          .toString();
        cy.log(entstoerauftragsnummer);
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      });
  });
  it("TS-1177: DTAG sendet TAM zu UI Reseller @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8C", () => {
    RequestsInfos.tamTest(ticketIdSupp, entstoerauftragsnummer);
    cy.wait(5000);
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX2).should(
      "contain.text",
      "(TAM)"
    );
  });
  it("TS-1192: DTAG sendet ERLM bei TAL an Vitroconnect (DL) mit Meldecode 7022 @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8C", () => {
    RequestsInfos.erlmTestMitMeldecode7022(
      ticketIdSupp,
      entstoerauftragsnummer
    );
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX2)
      .first()
      .should(
        "contain.text",
        "(ERLM) Entstörauftragsnummer: " + entstoerauftragsnummer
      );
  });
  it("TS-1193: DTAG sendet ENTM bei TAL an Vitroconnect (DL) @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8C", () => {
    RequestsInfos.entmTest(ticketIdSupp, entstoerauftragsnummer);
    cy.wait(5000);
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX2)
      .first()
      .should("contain.text", "Ess Meldung Type: ENTM")
      .should(
        "contain.text",
        "Entstörauftragsnummer: " + entstoerauftragsnummer
      );
  });
  it("TS-1094: UI Reseller sendet cancel an Vitroconnect mit TAL @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8C", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "Easybell",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "Easybell";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller sendet cancel an Vitroconnect mit TAL"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.ABGEBROCHEN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
      ticketIdRes
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.CANCEL
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.ABBRUCH
      );
  });
  it("TS-1092: UI Supplier bestätigt Storno @line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8C", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "vitroconnect (DL)",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "vitroconnect (DL)";
    type = "supplier";
    InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.ABBRUCH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Supplier bestätigt Storno"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Status_edit.ABGEBROCHEN
      )
      .click();
    cy.get(
      CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_SUP_TAL
    )
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
    cy.wait(2000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(1000);
    cy.get(
      CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
    ).click();
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
      ticketIdSupp
    );
    cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER)
      .contains("Suchen")
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.CANCEL
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.ABBRUCH
      );
  });
});
