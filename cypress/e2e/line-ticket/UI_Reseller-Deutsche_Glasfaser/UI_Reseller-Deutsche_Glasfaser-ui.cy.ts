import { LoginUtils } from "../../../utils/login/login-utils";
import { LineTicketConstants } from "../../../utils/lineTicket/lineTicket-constants";
import { FakerUtils } from "../../../utils/faker-utils";
import { CommonConstants } from "../../../utils/common/common-constants";
import { InfoUtils } from "../../../utils/infos/info-utils";
import { VoiceTicketConstants } from "../../../utils/voiceTicket/voiceTicket-constants";

let ticketIdRes = null;
let ticketIdSupp = null;
let typeValue = null;
let type = null;

describe("Login", () => {
  beforeEach(() => {
    LoginUtils.login();
  });
  it("TS-1100: UI Reseller erstellt Leitung-Ticket bei Deutsche Glasfaser(error code description) @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH"
    );
    typeValue = "ENTEGA Medianet GmbH";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "847921"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) DG L3 FTTH ETH 400 200"
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.internet.email());
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.name.firstName());
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.name.lastName());
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
      .find("input")
      .eq(1)
      .type("+49 607456789");
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.internet.email());
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
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
    ).type(
      "Das ist eine Problembeschreibung $IRA-NACK IRA_B-02 'error code description' PT20S"
    );
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(2000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      });
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "Deutsche Glasfaser");
    cy.wait(55000);
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
        CommonConstants.Selectors.EditTicketForm.Status.ABBRUCH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
      .first()
      .should("contain.text", "Message: IRA-NACK")
      .should("contain.text", "State: DENIED");
  });
  it("TS-1049: UI Reseller bestätigt Abbruch @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "ENTEGA Medianet GmbH";
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
  it("TS-1102: UI Reseller erstellt Leitung-Ticket bei Deutsche Glasfaser(ohne Steuercode) @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH"
    );
    typeValue = "ENTEGA Medianet GmbH";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "847921"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) DG L3 FTTH ETH 400 200"
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.internet.email());
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.name.firstName());
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.name.lastName());
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
      .find("input")
      .eq(1)
      .type("+49 607456789");
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.internet.email());
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
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
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "Deutsche Glasfaser");
    cy.wait(68000);
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
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
      .first()
      .should("contain.text", "Message: IRA-ACK")
      .should("contain.text", "State: ACCEPTED");
  });
  it("TS-1103: UI Reseller sendet cancel (ICAN) an Deutsche Glasfaser(ohne Steuercode) @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "ENTEGA Medianet GmbH";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller sendet cancel an UI Supplier"
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
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(65000);
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
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.CANCEL
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.ABBRUCH
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
      .first()
      .should("contain.text", "Message: ICANA-ACK")
      .should("contain.text", "State: CANCELLED");
  });
  it("TS-1102: UI Reseller erstellt Leitung-Ticket bei Deutsche Glasfaser(ohne Steuercode) @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12C", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH"
    );
    typeValue = "ENTEGA Medianet GmbH";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "847921"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) DG L3 FTTH ETH 400 200"
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.internet.email());
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.name.firstName());
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.name.lastName());
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
      .find("input")
      .eq(1)
      .type("+49 607456789");
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.internet.email());
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
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
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "Deutsche Glasfaser");
    cy.wait(68000);
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
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
      .first()
      .should("contain.text", "Message: IRA-ACK")
      .should("contain.text", "State: ACCEPTED");
  });
  it("TS-1104: UI Reseller sendet cancel (ICAN) an Deutsche Glasfaser(mit Steuercode) @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12C", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "ENTEGA Medianet GmbH";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller sendet cancel an UI Supplier $ICANA-NACK ICANA-99 'error code description' PT10S $IHO PT10S"
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
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(65000);
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
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.CANCEL
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
      .should("contain.text", "Message: ICANA-NACK")
      .should("contain.text", "State: ACCEPTED")
      .should("contain.text", "Message: IHO")
      .should("contain.text", "State: SOLVED");
  });
  it("TS-1105: UI Reseller erstellt Leitung-Ticket bei Deutsche Glasfaser(Termin gefunden) @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12D", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH"
    );
    typeValue = "ENTEGA Medianet GmbH";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "847921"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) DG L3 FTTH ETH 400 200"
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.internet.email());
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.name.firstName());
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.name.lastName());
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
      .find("input")
      .eq(1)
      .type("+49 607456789");
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.internet.email());
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
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
    ).type(
      "Das ist eine Problembeschreibung $IRA-ACK PT20S $IPLAN IPLAN-01 'Termin gefunden' PT10S"
    );
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(2000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      });
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "Deutsche Glasfaser");
    cy.wait(70000);
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
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
      .should("contain.text", "Message: IRA-ACK")
      .should("contain.text", "State: ACCEPTED")
      .should("contain.text", "Message: IPLAN")
      .should("contain.text", "State: ACCEPTED");
  });
  it("TS-1106: UI Reseller sendet Nachricht (IUPDATE) an Deutsche Glasfaser(ohne Steuercode) @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12D", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "ENTEGA Medianet GmbH";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller sendet Nachricht (IUPDATE) an Deutsche Glasfaser"
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
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(50000);
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
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
      .should("contain.text", "Message: IUPDATE")
      .should("contain.text", "State: OPEN");
  });
  it("TS-1107: UI Reseller sendet Nachricht (IUPDATE) an Deutsche Glasfaser($IHO PT10S) @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12D", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "ENTEGA Medianet GmbH";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller sendet Nachricht (IUPDATE) an Deutsche Glasfaser $IHO PT10S"
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
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(50000);
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
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
      .should("contain.text", "Message: IHO")
      .should("contain.text", "State: SOLVED");
  });
  it("TS-1108: UI Reseller reklamiert (IHOA-NACK) bei Deutsche Glasfaser @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12D", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "ENTEGA Medianet GmbH";
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
      "UI Reseller reklamiert (IHOA-NACK) bei Deutsche Glasfaser"
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
  it("TS-1107: UI Reseller sendet Nachricht (IUPDATE) an Deutsche Glasfaser($IHO PT10S) @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12D", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "ENTEGA Medianet GmbH";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller sendet Nachricht (IUPDATE) an Deutsche Glasfaser $IHO PT10S"
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
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(50000);
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
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
      .should("contain.text", "Message: IHO")
      .should("contain.text", "State: SOLVED");
  });
  it("TS-1109: UI Reseller sendet close (IHOA-ACK) an Deutsche Glasfaser @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12D", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "ENTEGA Medianet GmbH";
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
      "UI Reseller sendet close (IHOA-ACK) an Deutsche Glasfaser"
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
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(50000);
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
    cy.get(CommonConstants.Selectors.DetailTicket.PLUS_INFO_BUTTON).click();
    cy.get("span")
      .contains("Deutsche Glasfaser")
      .first()
      .then(($ticketID) => {
        ticketIdSupp = $ticketID[0].innerHTML.match("^\\d{5}").toString();
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.CLOSE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
        cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
          "Deutsche Glasfaser",
          { force: true }
        );
        cy.wait(1000);
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdSupp
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
        cy.wait(1000);
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
        cy.wait(1000);
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.CLOSE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX
        ).should("contain.text", "Ticket geschlossen");
      });
  });
  it("TS-1110: UI Reseller erstellt Leitung-Ticket bei Deutsche Glasfaser(aNotAllowed) @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12E", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH"
    );
    typeValue = "ENTEGA Medianet GmbH";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "847921"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) DG L3 FTTH ETH 400 200"
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.internet.email());
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.name.firstName());
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.name.lastName());
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
      .find("input")
      .eq(1)
      .type("+49 607456789");
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.internet.email());
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
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
    ).type(
      "Das ist eine Problembeschreibung $IRA-ACK PT20S $IHO 'ihoaNotAllowed' PT10S"
    );
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(2000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      });
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "Deutsche Glasfaser");
    cy.wait(85000);
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
        CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
      .should("contain.text", "Message: IRA-ACK")
      .should("contain.text", "State: ACCEPTED")
      .should("contain.text", "Message: IHO")
      .should("contain.text", "State: SOLVED")
      .should("contain.text", "Ticket geschlossen");
  });
  it("TS-1111: UI Reseller bestätigt close @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12E", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "ENTEGA Medianet GmbH";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
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
      "UI Reseller bestätigt close"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.CLOSE)
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
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
  it("TS-1112: UI Reseller erstellt Leitung-Ticket bei Deutsche Glasfaser($IRA-ACK, $IHOLD-06, $IRESUME, $IHO) @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12F", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH"
    );
    typeValue = "ENTEGA Medianet GmbH";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "847921"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) DG L3 FTTH ETH 400 200"
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.internet.email());
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.name.firstName());
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.name.lastName());
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
      .find("input")
      .eq(1)
      .type("+49 607456789");
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.internet.email());
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
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
    ).type(
      "Das ist eine Problembeschreibung $IRA-ACK PT30S $IHOLD IHOLD-06 PT10S $IRESUME PT10S $IHO PT10S"
    );
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(2000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      });
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "Deutsche Glasfaser");
    cy.wait(100000);
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
        CommonConstants.Selectors.EditTicketForm.Status.GELOEST
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
      .should("contain.text", "Message: IRA-ACK")
      .should("contain.text", "State: ACCEPTED")
      .should("contain.text", "Message: IHOLD")
      .should("contain.text", "State: HOLD")
      .should("contain.text", "Code: IHOLD-06")
      .should("contain.text", "Message: IRESUME")
      .should("contain.text", "State: ACCEPTED")
      .should("contain.text", "Message: IHO")
      .should("contain.text", "State: SOLVED");
  });
  it("TS-1109: UI Reseller sendet close (IHOA-ACK) an Deutsche Glasfaser @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12F", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "ENTEGA Medianet GmbH";
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
      "UI Reseller sendet close (IHOA-ACK) an Deutsche Glasfaser"
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
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(50000);
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
    cy.get(CommonConstants.Selectors.DetailTicket.PLUS_INFO_BUTTON).click();
    cy.get("span")
      .contains("Deutsche Glasfaser")
      .first()
      .then(($ticketID) => {
        ticketIdSupp = $ticketID[0].innerHTML.match("^\\d{5}").toString();
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.CLOSE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
        cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
          "Deutsche Glasfaser",
          { force: true }
        );
        cy.wait(1000);
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdSupp
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
        cy.wait(1000);
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
        cy.wait(1000);
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.CLOSE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX
        ).should("contain.text", "Ticket geschlossen");
      });
  });
  it("TS-1112: UI Reseller erstellt Leitung-Ticket bei Deutsche Glasfaser($IRA-ACK, $IHOLD-01) @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true });
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH"
    );
    typeValue = "ENTEGA Medianet GmbH";
    type = "reseller";
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR).type(
      "847921"
    );
    cy.wait(2000);
    cy.get(
      LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
    ).click();
    cy.wait(2000);
    cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
      "1) DG L3 FTTH ETH 400 200"
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.internet.email());
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.name.firstName());
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.name.lastName());
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
      .find("input")
      .eq(1)
      .type("+49 607456789");
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
      .find("input")
      .eq(1)
      .type(FakerUtils.faker.internet.email());
    cy.get(
      VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
    )
      .contains("OK")
      .first()
      .click();
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
    ).type(
      "Das ist eine Problembeschreibung $IRA-ACK PT30S $IHOLD IHOLD-01 PT10S"
    );
    cy.get(CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP).click();
    cy.wait(2000);
    cy.get("span")
      .contains("Ticket-ID")
      .first()
      .then(($ticketID) => {
        ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      });
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(
      CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
    ).should("contain.text", "Deutsche Glasfaser");
    cy.wait(60000);
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
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
      .should("contain.text", "Message: IRA-ACK")
      .should("contain.text", "State: ACCEPTED")
      .should("contain.text", "Message: IHOLD")
      .should("contain.text", "State: HOLD")
      .should("contain.text", "Code: IHOLD-01");
  });
  it("TS-1228: UI Reseller sendet TAM-ANT (IUPDATE) an Deutsche Glasfaser @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "ENTEGA Medianet GmbH";
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
      "UI Reseller sendet TAM-ANT (IUPDATE) an Deutsche Glasfaser"
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
    cy.wait(30000);
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
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
      .should("contain.text", "Message: IRESUME")
      .should("contain.text", "State: ACCEPTED");
  });
  it("TS-1229: UI Reseller sendet Nachricht (IUPDATE) an Deutsche Glasfaser($IHO 'ihoaNotAllowed' PT10S) @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "ENTEGA Medianet GmbH";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
      )
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click();
    cy.wait(1000);
    cy.get(CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG).type(
      "UI Reseller sendet Nachricht (IUPDATE) an Deutsche Glasfaser $IHO 'ihoaNotAllowed' PT10S"
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
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM).click();
    cy.wait(50000);
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
        CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
      );
    cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
      .should("contain.text", "Message: IHO")
      .should("contain.text", "State: SOLVED")
      .should("contain.text", "Ticket geschlossen");
  });
  it("TS-1111: UI Reseller bestätigt close @line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST).select(
      "ENTEGA Medianet GmbH",
      { force: true }
    );
    cy.wait(1000);
    typeValue = "ENTEGA Medianet GmbH";
    type = "reseller";
    InfoUtils.writeInfo(ticketIdRes, typeValue, type);
    cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
      .should(
        "contain.text",
        CommonConstants.Selectors.EditTicketForm.Status.OPENE
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
      "UI Reseller bestätigt close"
    );
    cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
      .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.CLOSE)
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES)
      .contains(
        CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket.SPEICHERN
      )
      .click();
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM).click();
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
});
