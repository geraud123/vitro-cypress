import { LoginUtils } from "../../../utils/login/login-utils";
import { LineTicketConstants } from "../../../utils/lineTicket/lineTicket-constants";
import { CommonConstants } from "../../../utils/common/common-constants";
import { InfoUtils } from "../../../utils/infos/info-utils";
import { RequestsInfos } from "../../../utils/requests/requests-utils/requests-infos";
import { VoiceTicketConstants } from "../../../utils/voiceTicket/voiceTicket-constants";

let ticketIdRes = null;
let ticketIdSupp = null;
let typeValue = null;
let type = null;
let entstoerauftragsnummer, entstoerauftragsnummer2, entstoerauftragsnummer3;

describe("UI_Reseller->DTAG(ESS)", () => {
  beforeEach(() => {
    LoginUtils.login();
  });
  it("TS-1150: UI Reseller erstellt Leitungs-Ticket bei DTAG (ESS)(Steuercode T-QEN) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9A", () => {
    //cy.intercept("POST", "/spring/!*").as("service");
    cy.intercept(
      "POST",
      new RegExp(`^\/spring\/customerCreate-flow\\?execution=[a-zA-Z0-9]{4}$`)
    ).as("service");

    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST
        ).select("Ecotel (1st level)");
      })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR
        ).type("791158");
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
        ).click();
      })
      .then(() => {
        cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
          "1) VDSL-100"
        );
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART
        ).select("E-Mail");
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Leitung");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Ja");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Totalausfall");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Portanalyse durchgeführt");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("input")
          .eq(1)
          .clear()
          .type("Lukas T-QEN");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(LineTicketConstants.Selectors.FragenKatalog.NEXT_BUTTON).click();
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.ScenarioC
            .MELDUNGSART_LIST
        ).select("Totalausfall");
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.ScenarioC
            .PRIORITAET_LIST
        ).select("Normal");
        cy.get(LineTicketConstants.Selectors.TicketSpeichern.TICKET_NAME).type(
          "//test"
        );
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
        ).type("Das ist eine Problembeschreibung");
        cy.get(
          CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP
        ).click();
      })
      .then(() => {
        cy.get("span")
          .contains("Ticket-ID")
          .first()
          .then(($ticketID) => {
            ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
            InfoUtils.writeInfo(ticketIdRes, typeValue, type);
          });
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should("contain.text", "Leitung")
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
          )
          .should("contain.text", "Deutsche Telekom");
      });
    cy.wait(100000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click()
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
        )
          .should("contain.text", "(QEB)")
          .should("contain.text", "(ERLM)")
          .should("contain.text", "ENTM");
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
      });
  });
  it("TS-1111: UI Reseller bestätigt close @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9A", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("Ecotel (1st level)", { force: true })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG
        ).type("UI Reseller bestätigt close");
        cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
          .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.CLOSE)
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES
        )
          .contains(
            CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket
              .SPEICHERN
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM
        ).click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM
        ).click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdRes
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
      })
      .then(() => {
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

  it("TS-1151: UI Reseller erstellt Leitungs-Ticket bei DTAG (ESS)(Steuercode T-QA) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9B", () => {
    cy.intercept(
      "POST",
      new RegExp(`^\/spring\/customerCreate-flow\\?execution=[a-zA-Z0-9]{4}$`)
    ).as("service");

    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST
        ).select("Ecotel (1st level)");
      })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR
        ).type("791158");
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
        ).click();
      })
      .then(() => {
        cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
          "1) VDSL-100"
        );
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART
        ).select("E-Mail");
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Leitung");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Ja");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Totalausfall");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Portanalyse durchgeführt");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("input")
          .eq(1)
          .clear()
          .type("Lukas T-QA");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(LineTicketConstants.Selectors.FragenKatalog.NEXT_BUTTON).click();
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.ScenarioC
            .MELDUNGSART_LIST
        ).select("Totalausfall");
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.ScenarioC
            .PRIORITAET_LIST
        ).select("Normal");
        cy.get(LineTicketConstants.Selectors.TicketSpeichern.TICKET_NAME).type(
          "//test"
        );
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
        ).type("Das ist eine Problembeschreibung");
        cy.get(
          CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP
        ).click();
      })
      .then(() => {
        cy.get("span")
          .contains("Ticket-ID")
          .first()
          .then(($ticketID) => {
            ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
            InfoUtils.writeInfo(ticketIdRes, typeValue, type);
          });
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should("contain.text", "Leitung")
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
          )
          .should("contain.text", "Deutsche Telekom");
        cy.wait(100000);
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click()
          .then(() => {
            cy.get(
              LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
            )
              .should("contain.text", "(QEB)")
              .should("contain.text", "ABBM");
            cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
              .should(
                "contain.text",
                CommonConstants.Selectors.EditTicketForm.Status.OPENE
              )
              .should(
                "contain.text",
                CommonConstants.Selectors.EditTicketForm.Status.ABBRUCH
              );
          });
      });
  });
  it("TS-1049: UI Reseller bestätigt Abbruch @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9B", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("Ecotel (1st level)", { force: true })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.ABBRUCH
          );
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG
        ).type("UI Reseller bestätigt Abbruch");
        cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
          .contains(
            CommonConstants.Selectors.EditTicketForm.Status_edit.ABGEBROCHEN
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES
        )
          .contains(
            CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket
              .SPEICHERN
          )
          .click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM
        ).click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM
        ).click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdRes
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
      })
      .then(() => {
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

  it("TS-1152: UI Reseller erstellt Leitungs-Ticket bei DTAG (ESS)(Steuercode T-F) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9C", () => {
    cy.intercept(
      "POST",
      new RegExp(`^\/spring\/customerCreate-flow\\?execution=[a-zA-Z0-9]{4}$`)
    ).as("service");

    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST
        ).select("Ecotel (1st level)");
      })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR
        ).type("791158");
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
        ).click();
      })
      .then(() => {
        cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
          "1) VDSL-100"
        );
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART
        ).select("E-Mail");
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Leitung");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Ja");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Totalausfall");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Portanalyse durchgeführt");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("input")
          .eq(1)
          .clear()
          .type("Lukas T-F");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(LineTicketConstants.Selectors.FragenKatalog.NEXT_BUTTON).click();
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.ScenarioC
            .MELDUNGSART_LIST
        ).select("Totalausfall");
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.ScenarioC
            .PRIORITAET_LIST
        ).select("Normal");
        cy.get(LineTicketConstants.Selectors.TicketSpeichern.TICKET_NAME).type(
          "//test"
        );
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
        ).type("Das ist eine Problembeschreibung");
        cy.get(
          CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP
        ).click();
      })
      .then(() => {
        cy.get("span")
          .contains("Ticket-ID")
          .first()
          .then(($ticketID) => {
            ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
            InfoUtils.writeInfo(ticketIdRes, typeValue, type);
          });
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should("contain.text", "Leitung")
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
          )
          .should("contain.text", "Deutsche Telekom");
      });
    cy.wait(35000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click()
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
        )
          .first()
          .should("contain.text", "FAM");
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
      });
  });
  it("TS-1111: UI Reseller bestätigt close @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9C", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("Ecotel (1st level)", { force: true })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG
        ).type("UI Reseller bestätigt close");
        cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
          .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.CLOSE)
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES
        )
          .contains(
            CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket
              .SPEICHERN
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM
        ).click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM
        ).click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdRes
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
      })
      .then(() => {
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

  it("TS-1167: UI Reseller erstellt Leitungs-Ticket bei DTAG (ESS)(Steuercode T-Q) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9D", () => {
    cy.intercept(
      "POST",
      new RegExp(`^\/spring\/customerCreate-flow\\?execution=[a-zA-Z0-9]{4}$`)
    ).as("service");

    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST
        ).select("Ecotel (1st level)");
      })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR
        ).type("791158");
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
        ).click();
      })
      .then(() => {
        cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
          "1) VDSL-100"
        );
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART
        ).select("E-Mail");
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Leitung");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Ja");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Totalausfall");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Portanalyse durchgeführt");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("input")
          .eq(1)
          .clear()
          .type("Lukas T-Q");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(LineTicketConstants.Selectors.FragenKatalog.NEXT_BUTTON).click();
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.ScenarioC
            .MELDUNGSART_LIST
        ).select("Totalausfall");
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.ScenarioC
            .PRIORITAET_LIST
        ).select("Normal");
        cy.get(LineTicketConstants.Selectors.TicketSpeichern.TICKET_NAME).type(
          "//test"
        );
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
        ).type("Das ist eine Problembeschreibung");
        cy.get(
          CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP
        ).click();
      })
      .then(() => {
        cy.get("span")
          .contains("Ticket-ID")
          .first()
          .then(($ticketID) => {
            ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
            InfoUtils.writeInfo(ticketIdRes, typeValue, type);
          });
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should("contain.text", "Leitung")
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
          )
          .should("contain.text", "Deutsche Telekom");
      });
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click()
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
        ).should("contain.text", "(QEB)");
        cy.get(LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX2)
          .contains("(QEB) Entstörauftragsnummer")
          .first()
          .then(($Entstoerauftrag) => {
            entstoerauftragsnummer = $Entstoerauftrag[0].innerHTML
              .match("\\d{13}")
              .toString();
            cy.log(entstoerauftragsnummer);
          });
      });
  });
  it("TS-1168: UI Reseller sendet cancel an DTAG (ESS) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9D", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("Ecotel (1st level)", { force: true })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
          );
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG
        ).type("UI Reseller sendet cancel an Vitroconnect mit TAL");
        cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
          .contains(
            CommonConstants.Selectors.EditTicketForm.Status_edit.ABGEBROCHEN
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES
        )
          .contains(
            CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket
              .SPEICHERN
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM
        ).click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM
        ).click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdRes
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
      })
      .then(() => {
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
  it("TS-1169: DTAG sendet ZWM an UI Reseller @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9D", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        cy.get("span")
          .contains("Ticket-ID")
          .first()
          .then(($ticketID) => {
            ticketIdSupp = $ticketID[0].innerHTML.match("\\d{5}$").toString();
            cy.log(ticketIdSupp);
            typeValue = "DTAG";
            type = "supplier";
            InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
            cy.get(
              CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
            )
              .should(
                "contain.text",
                CommonConstants.Selectors.EditTicketForm.Status.OPENE
              )
              .should(
                "contain.text",
                CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
              );
            RequestsInfos.zwmTest(ticketIdSupp, entstoerauftragsnummer);
            cy.wait(5000);
          });
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
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
          .first()
          .should("contain.text", "Ess Meldung Type: ZWM")
          .should(
            "contain.text",
            "Entstörauftragsnummer: " + entstoerauftragsnummer
          );
      });
  });
  it("TS-1170: DTAG sendet ERLM an UI Reseller @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9D", () => {
    RequestsInfos.erlmTest(ticketIdSupp, entstoerauftragsnummer);
    cy.wait(10000);
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        typeValue = "DTAG";
        type = "supplier";
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.RESOLVED
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GELOEST
          );
        cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
          .first()
          .should(
            "contain.text",
            "(ERLM) Entstörauftragsnummer: " + entstoerauftragsnummer
          );
      });
  });
  it("TS-1193: DTAG sendet ENTM an UI Reseller @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9D", () => {
    RequestsInfos.entmTest(ticketIdSupp, entstoerauftragsnummer);
    cy.wait(5000);
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        typeValue = "DTAG";
        type = "supplier";
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdSupp
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.CLOSE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
        cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
          .first()
          .should("contain.text", "Ess Meldung Type: ENTM")
          .should(
            "contain.text",
            "Entstörauftragsnummer: " + entstoerauftragsnummer
          );
      });
  });

  it("TS-1172: UI Reseller erstellt Leitungs-Ticket bei DTAG (ESS)(Steuercode T-QE) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9E", () => {
    cy.intercept(
      "POST",
      new RegExp(`^\/spring\/customerCreate-flow\\?execution=[a-zA-Z0-9]{4}$`)
    ).as("service");

    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST
        ).select("Ecotel (1st level)");
      })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR
        ).type("791158");
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
        ).click();
      })
      .then(() => {
        cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
          "1) VDSL-100"
        );
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART
        ).select("E-Mail");
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Leitung");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Ja");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Totalausfall");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Portanalyse durchgeführt");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("input")
          .eq(1)
          .clear()
          .type("Lukas T-QE");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(LineTicketConstants.Selectors.FragenKatalog.NEXT_BUTTON).click();
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.ScenarioC
            .MELDUNGSART_LIST
        ).select("Totalausfall");
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.ScenarioC
            .PRIORITAET_LIST
        ).select("Normal");
        cy.get(LineTicketConstants.Selectors.TicketSpeichern.TICKET_NAME).type(
          "//test"
        );
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
        ).type("Das ist eine Problembeschreibung");
        cy.get(
          CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP
        ).click();
      })
      .then(() => {
        cy.get("span")
          .contains("Ticket-ID")
          .first()
          .then(($ticketID) => {
            ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
            InfoUtils.writeInfo(ticketIdRes, typeValue, type);
          });
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should("contain.text", "Leitung")
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
          )
          .should("contain.text", "Deutsche Telekom");
      });
    cy.wait(85000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click()
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
        )
          .should("contain.text", "(QEB)")
          .should("contain.text", "(ERLM)");
        cy.get(LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX2)
          .contains("(QEB) Entstörauftragsnummer")
          .first()
          .then(($Entstoerauftrag) => {
            entstoerauftragsnummer = $Entstoerauftrag[0].innerHTML
              .match("\\d{13}")
              .toString();
            cy.log(entstoerauftragsnummer);
          });
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GELOEST
          );
      });
  });
  it("TS-1173: UI Reseller reklamiert bei DTAG (ESS) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9E", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("Ecotel (1st level)", { force: true })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GELOEST
          );
      })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG
        ).type(
          "UI Reseller reklamiert bei Vitroconnect mit TAL (ohne Kundenwunschtermin)"
        );
        cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
          .contains(
            CommonConstants.Selectors.EditTicketForm.Status_edit.REKLAMIERT
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm
            .WEITERLEITUNG_CONTAINER_RES_TAL
        )
          .contains(
            CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket
              .SPEICHERN
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM
        ).click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM
        ).click();
      })
      .then(() => {
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
  });
  it("TS-1174: DTAG sendet QEB an UI Reseller nach REK @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9E", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        cy.get("span")
          .contains("Ticket-ID")
          .first()
          .then(($ticketID) => {
            ticketIdSupp = $ticketID[0].innerHTML.match("\\d{5}$").toString();
            cy.get(
              CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
            )
              .should(
                "contain.text",
                CommonConstants.Selectors.EditTicketForm.Status.OPENE
              )
              .should(
                "contain.text",
                CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
              );
            entstoerauftragsnummer2 =
              "0" +
              (parseInt(entstoerauftragsnummer) + 200000000000).toString();
            RequestsInfos.qebTestRek(ticketIdSupp, entstoerauftragsnummer2);
            cy.wait(10000);
            typeValue = "DTAG";
            type = "supplier";
            InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
          });
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click()
          .then(() => {
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
              .first()
              .should(
                "contain.text",
                "(QEB) Entstörauftragsnummer: " + entstoerauftragsnummer2
              );
          });
      });
  });
  it("TS-1175: DTAG sendet ERLM an UI Reseller nach REK @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9E", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
          );
        RequestsInfos.erlmTestRek(ticketIdSupp, entstoerauftragsnummer2);
        cy.wait(10000);
        typeValue = "DTAG";
        type = "supplier";
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.RESOLVED
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GELOEST
          );
        cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
          .first()
          .should(
            "contain.text",
            "(ERLM) Entstörauftragsnummer: " + entstoerauftragsnummer2
          );
      });
  });
  it("TS-1171: DTAG sendet ENTM an UI Reseller @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9E", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdSupp
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.RESOLVED
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GELOEST
          );
      })
      .then(() => {
        RequestsInfos.entmTest(ticketIdSupp, entstoerauftragsnummer);
        cy.wait(10000);
        typeValue = "DTAG";
        type = "supplier";
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdSupp
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.CLOSE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
        cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
          .first()
          .should("contain.text", "Ess Meldung Type: ENTM")
          .should(
            "contain.text",
            "Entstörauftragsnummer: " + entstoerauftragsnummer
          );
      });
  });
  it("TS-1176: DTAG sendet ENTM an UI Reseller nach REK(2. Auftrag) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9E", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdSupp
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.CLOSE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
      })
      .then(() => {
        RequestsInfos.entmTest(ticketIdSupp, entstoerauftragsnummer2);
        cy.wait(10000);
        typeValue = "DTAG";
        type = "supplier";
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.CLOSE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
        cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
          .first()
          .should("contain.text", "Ess Meldung Type: ENTM")
          .should(
            "contain.text",
            "Entstörauftragsnummer: " + entstoerauftragsnummer2
          );
      });
  });
  it("TS-1111: UI Reseller bestätigt close @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9E", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("Ecotel (1st level)", { force: true })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG
        ).type("UI Reseller bestätigt close");
        cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
          .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.CLOSE)
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES
        )
          .contains(
            CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket
              .SPEICHERN
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM
        ).click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM
        ).click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdRes
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
      })
      .then(() => {
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

  it("TS-1167: UI Reseller erstellt Leitungs-Ticket bei DTAG (ESS)(Steuercode T-Q) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9F", () => {
    cy.intercept(
      "POST",
      new RegExp(`^\/spring\/customerCreate-flow\\?execution=[a-zA-Z0-9]{4}$`)
    ).as("service");

    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST
        ).select("Ecotel (1st level)");
      })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR
        ).type("791158");
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
        ).click();
      })
      .then(() => {
        cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
          "1) VDSL-100"
        );
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART
        ).select("E-Mail");
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Leitung");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Ja");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Totalausfall");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Portanalyse durchgeführt");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("input")
          .eq(1)
          .clear()
          .type("Lukas T-Q");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        //cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(LineTicketConstants.Selectors.FragenKatalog.NEXT_BUTTON).click();
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.ScenarioC
            .MELDUNGSART_LIST
        ).select("Totalausfall");
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.ScenarioC
            .PRIORITAET_LIST
        ).select("Normal");
        cy.get(LineTicketConstants.Selectors.TicketSpeichern.TICKET_NAME).type(
          "//test"
        );
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
        ).type("Das ist eine Problembeschreibung");
        cy.get(
          CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP
        ).click();
      })
      .then(() => {
        cy.get("span")
          .contains("Ticket-ID")
          .first()
          .then(($ticketID) => {
            ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
            InfoUtils.writeInfo(ticketIdRes, typeValue, type);
          });
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should("contain.text", "Leitung")
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
          )
          .should("contain.text", "Deutsche Telekom");
      });
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click()
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
        ).should("contain.text", "(QEB)");
        cy.get(LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX2)
          .contains("(QEB) Entstörauftragsnummer")
          .first()
          .then(($Entstoerauftrag) => {
            entstoerauftragsnummer = $Entstoerauftrag[0].innerHTML
              .match("\\d{13}")
              .toString();
            cy.log(entstoerauftragsnummer);
          });
      });
  });
  it("TS-1177: DTAG sendet TAM zu UI Reseller @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9F", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        cy.get("span")
          .contains("Ticket-ID")
          .first()
          .then(($ticketID) => {
            ticketIdSupp = $ticketID[0].innerHTML.match("\\d{5}$").toString();
            cy.log(ticketIdSupp);
            typeValue = "DTAG";
            type = "supplier";
            InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
            cy.get(
              CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
            )
              .should(
                "contain.text",
                CommonConstants.Selectors.EditTicketForm.Status.OPENE
              )
              .should(
                "contain.text",
                CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
              );
            RequestsInfos.tamTest(ticketIdSupp, entstoerauftragsnummer);
            cy.wait(5000);
          });
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
          );
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX
        ).should("contain.text", "(TAM)");
      });
  });
  it("TS-1178: UI Reseller sendet TAM-ANT an DTAG (ESS) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9F", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("Ecotel (1st level)", { force: true })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
          );
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG
        ).type(
          "UI Reseller sendet TAM-ANT über Vitroconnect an DTAG (ESS/TAL)"
        );
        cy.get(
          LineTicketConstants.Selectors.EditTicketForm.TERMIN_WERKTAG_CONTAINER
        )
          .contains("Mo-Fr 08:00 - 14:00")
          .click();
        cy.get(
          LineTicketConstants.Selectors.EditTicketForm.TERMIN_WERKTAG_CONTAINER
        )
          .find("input")
          .eq(3)
          .type("04.01.2030");
        cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
          .contains(
            CommonConstants.Selectors.EditTicketForm.Status_edit.WEITERGELEITET
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm
            .WEITERLEITUNG_CONTAINER_RES_TAL
        )
          .contains(
            CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket
              .SPEICHERN
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM
        ).click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM
        ).click();
      })
      .then(() => {
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
  });
  it("TS-1169: DTAG sendet ZWM an UI Reseller @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9F", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
          );
      })
      .then(() => {
        typeValue = "DTAG";
        type = "supplier";
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
        RequestsInfos.zwmTest(ticketIdSupp, entstoerauftragsnummer);
        cy.wait(5000);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
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
          .first()
          .should("contain.text", "Ess Meldung Type: ZWM")
          .should(
            "contain.text",
            "Entstörauftragsnummer: " + entstoerauftragsnummer
          );
      });
  });
  it("TS-1170: DTAG sendet ERLM an UI Reseller @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9F", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
          );
      })
      .then(() => {
        typeValue = "DTAG";
        type = "supplier";
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
        RequestsInfos.erlmTest(ticketIdSupp, entstoerauftragsnummer);
        cy.wait(10000);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.RESOLVED
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GELOEST
          );
        cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
          .first()
          .should(
            "contain.text",
            "(ERLM) Entstörauftragsnummer: " + entstoerauftragsnummer
          );
      });
  });
  it("TS-1179: UI Reseller bestätigt ERLM von DTAG mit close (ESS) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9F", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("Ecotel (1st level)", { force: true })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GELOEST
          );
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG
        ).type("UI Reseller bestätigt ERLM von DTAG mit close (ESS)");
        cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
          .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.CLOSE)
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm
            .WEITERLEITUNG_CONTAINER_RES_TAL
        )
          .contains(
            CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket
              .SPEICHERN
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM
        ).click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM
        ).click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdRes
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
      })
      .then(() => {
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
  it("TS-1171: DTAG sendet ENTM an UI Reseller @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9F", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdSupp
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.CLOSE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
      })
      .then(() => {
        RequestsInfos.entmTest(ticketIdSupp, entstoerauftragsnummer);
        cy.wait(10000);
        typeValue = "DTAG";
        type = "supplier";
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdSupp
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.CLOSE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
        cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
          .first()
          .should("contain.text", "Ess Meldung Type: ENTM")
          .should(
            "contain.text",
            "Entstörauftragsnummer: " + entstoerauftragsnummer
          );
      });
  });

  it("TS-1167: UI Reseller erstellt Leitungs-Ticket bei DTAG (ESS)(Steuercode T-Q) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9G", () => {
    cy.intercept(
      "POST",
      new RegExp(`^\/spring\/customerCreate-flow\\?execution=[a-zA-Z0-9]{4}$`)
    ).as("service");

    cy.get(CommonConstants.Selectors.MenuTicketSystem.MENU_FORM)
      .contains("Störungs Ticket")
      .click({ force: true })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.RESELLER_LIST
        ).select("Ecotel (1st level)");
      })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.Cap.CAP_KUNDENNR
        ).type("791158");
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Kundenerfassung.Cap.SEARCH_CAP_KUNDENNR
        ).click();
      })
      .then(() => {
        cy.get(LineTicketConstants.Selectors.Ticketerstellung.PRODUKT).select(
          "1) VDSL-100"
        );
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.Ticketerstellung.KONTAKT_ART
        ).select("E-Mail");
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.Navigation.NEXT_BUTTON).click();
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Leitung");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Ja");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Totalausfall");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("select")
          .first()
          .select("Portanalyse durchgeführt");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .find("input")
          .eq(1)
          .clear()
          .type("Lukas T-Q");
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(
          VoiceTicketConstants.Selectors.FragenKatalog.FRAGEN_KATALOG_CONTAINER
        )
          .contains("OK")
          .first()
          .click();
        cy.wait("@service").its("response.statusCode").should("not.eq", 400);
      })
      .then(() => {
        cy.get(LineTicketConstants.Selectors.FragenKatalog.NEXT_BUTTON).click();
      })
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.ScenarioC
            .MELDUNGSART_LIST
        ).select("Totalausfall");
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.ScenarioC
            .PRIORITAET_LIST
        ).select("Normal");
        cy.get(LineTicketConstants.Selectors.TicketSpeichern.TICKET_NAME).type(
          "//test"
        );
        cy.get(
          LineTicketConstants.Selectors.TicketSpeichern.PROBLEM_BESCHREIBUNG
        ).type("Das ist eine Problembeschreibung");
        cy.get(
          CommonConstants.Selectors.Navigation.CREATE_TICKET_SAVE_UP
        ).click();
      })
      .then(() => {
        cy.get("span")
          .contains("Ticket-ID")
          .first()
          .then(($ticketID) => {
            ticketIdRes = $ticketID[0].innerHTML.match("\\d{5}$").toString();
            InfoUtils.writeInfo(ticketIdRes, typeValue, type);
          });
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should("contain.text", "Leitung")
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
          )
          .should("contain.text", "Deutsche Telekom");
      });
    cy.wait(20000);
    cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
      .first()
      .click()
      .then(() => {
        cy.get(
          LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX_DTAG
        ).should("contain.text", "(QEB)");
        cy.get(LineTicketConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX2)
          .contains("(QEB) Entstörauftragsnummer")
          .first()
          .then(($Entstoerauftrag) => {
            entstoerauftragsnummer = $Entstoerauftrag[0].innerHTML
              .match("\\d{13}")
              .toString();
            cy.log(entstoerauftragsnummer);
          });
      });
  });
  it("TS-1177: DTAG sendet TAM zu UI Reseller @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        cy.get("span")
          .contains("Ticket-ID")
          .first()
          .then(($ticketID) => {
            ticketIdSupp = $ticketID[0].innerHTML.match("\\d{5}$").toString();
            cy.log(ticketIdSupp);
            typeValue = "DTAG";
            type = "supplier";
            InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
            cy.get(
              CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET
            )
              .should(
                "contain.text",
                CommonConstants.Selectors.EditTicketForm.Status.OPENE
              )
              .should(
                "contain.text",
                CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
              );
            RequestsInfos.tamTest(ticketIdSupp, entstoerauftragsnummer);
            cy.wait(5000);
          });
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
          );
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX
        ).should("contain.text", "(TAM)");
      });
  });
  it("TS-1178: UI Reseller sendet TAM-ANT an DTAG (ESS) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("Ecotel (1st level)", { force: true })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
          );
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG
        ).type(
          "UI Reseller sendet TAM-ANT über Vitroconnect an DTAG (ESS/TAL)"
        );
        cy.get(
          LineTicketConstants.Selectors.EditTicketForm.TERMIN_WERKTAG_CONTAINER
        )
          .contains("Mo-Fr 08:00 - 14:00")
          .click();
        cy.get(
          LineTicketConstants.Selectors.EditTicketForm.TERMIN_WERKTAG_CONTAINER
        )
          .find("input")
          .eq(3)
          .type("04.01.2030");
        cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
          .contains(
            CommonConstants.Selectors.EditTicketForm.Status_edit.WEITERGELEITET
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm
            .WEITERLEITUNG_CONTAINER_RES_TAL
        )
          .contains(
            CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket
              .SPEICHERN
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM
        ).click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM
        ).click();
      })
      .then(() => {
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
  });
  it("TS-1169: DTAG sendet ZWM an UI Reseller @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
          );
      })
      .then(() => {
        typeValue = "DTAG";
        type = "supplier";
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
        RequestsInfos.zwmTest(ticketIdSupp, entstoerauftragsnummer);
        cy.wait(5000);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
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
          .first()
          .should("contain.text", "Ess Meldung Type: ZWM")
          .should(
            "contain.text",
            "Entstörauftragsnummer: " + entstoerauftragsnummer
          );
      });
  });
  it("TS-1060: UI Reseller Nachricht (weitergeleitet) an UI Supplier 1 @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("Ecotel (1st level)", { force: true })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.WEITERGELEITET
          );
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG
        ).type("UI Reseller Nachricht (weitergeleitet) an UI Supplier");
        cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER)
          .contains(
            CommonConstants.Selectors.EditTicketForm.Status_edit.WEITERGELEITET
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.WEITERLEITUNG_CONTAINER_RES
        )
          .contains(
            CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket
              .SPEICHERN
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM
        ).click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM
        ).click();
      })
      .then(() => {
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
  });
  it("TS-1170: DTAG sendet ERLM an UI Reseller @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
          );
      })
      .then(() => {
        typeValue = "DTAG";
        type = "supplier";
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
        RequestsInfos.erlmTest(ticketIdSupp, entstoerauftragsnummer);
        cy.wait(10000);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.RESOLVED
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GELOEST
          );
        cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
          .first()
          .should(
            "contain.text",
            "(ERLM) Entstörauftragsnummer: " + entstoerauftragsnummer
          );
      });
  });
  it("TS-1173: UI Reseller reklamiert bei DTAG (ESS) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("Ecotel (1st level)", { force: true })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GELOEST
          );
      })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG
        ).type("UI Reseller reklamiert bei DTAG (ESS)");
        cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
          .contains(
            CommonConstants.Selectors.EditTicketForm.Status_edit.REKLAMIERT
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm
            .WEITERLEITUNG_CONTAINER_RES_TAL
        )
          .contains(
            CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket
              .SPEICHERN
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM
        ).click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM
        ).click();
      })
      .then(() => {
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
  });
  it("TS-1174: DTAG sendet QEB an UI Reseller nach REK @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        typeValue = "DTAG";
        type = "supplier";
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
          );
      })
      .then(() => {
        entstoerauftragsnummer2 =
          "0" + (parseInt(entstoerauftragsnummer) + 200000000000).toString();
        RequestsInfos.qebTestRek(ticketIdSupp, entstoerauftragsnummer2);
        cy.wait(10000);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
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
          .first()
          .should(
            "contain.text",
            "(QEB) Entstörauftragsnummer: " + entstoerauftragsnummer2
          );
      });
  });
  it("TS-1175: DTAG sendet ERLM an UI Reseller nach REK @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        typeValue = "DTAG";
        type = "supplier";
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
          );
      })
      .then(() => {
        RequestsInfos.erlmTestRek(ticketIdSupp, entstoerauftragsnummer2);
        cy.wait(10000);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.RESOLVED
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GELOEST
          );
        cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
          .first()
          .should(
            "contain.text",
            "(ERLM) Entstörauftragsnummer: " + entstoerauftragsnummer2
          );
      });
  });
  it("TS-1188: UI Reseller reklamiert bei DTAG mit Termin (ESS) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("Ecotel (1st level)", { force: true })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GELOEST
          );
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG
        ).type("UI Reseller reklamiert bei DTAG mit Termin (ESS)");
        cy.get(
          LineTicketConstants.Selectors.EditTicketForm.TERMIN_WERKTAG_CONTAINER
        )
          .contains("Mo-Fr 08:00 - 14:00")
          .click();
        cy.get(
          LineTicketConstants.Selectors.EditTicketForm.TERMIN_WERKTAG_CONTAINER
        )
          .find("input")
          .eq(3)
          .type("04.01.2030");
        cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
          .contains(
            CommonConstants.Selectors.EditTicketForm.Status_edit.REKLAMIERT
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm
            .WEITERLEITUNG_CONTAINER_RES_TAL
        )
          .contains(
            CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket
              .SPEICHERN
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM
        ).click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM
        ).click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
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
          .should("contain.text", "(04.01.2030 Mo-Fr 08:00 - 14:00)");
      });
  });
  it("TS-1189: DTAG sendet QEB an UI Reseller nach REK (Kundentermin wurde übergeben) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        typeValue = "DTAG";
        type = "supplier";
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
          );
      })
      .then(() => {
        entstoerauftragsnummer3 =
          "0" + (parseInt(entstoerauftragsnummer2) + 100000000000).toString();
        RequestsInfos.qebTestRek(ticketIdSupp, entstoerauftragsnummer3);
        cy.wait(10000);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
          );
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
          .first()
          .should(
            "contain.text",
            "(QEB) Entstörauftragsnummer: " + entstoerauftragsnummer3
          )
          .should(
            "contain.text",
            "Als Wunschtermin wurde der [04.01.2030 XDSL1] angefragt."
          );
      });
  });
  it("TS-1175: DTAG sendet ERLM an UI Reseller nach REK @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        typeValue = "DTAG";
        type = "supplier";
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.VERANTWORTLICH
          );
      })
      .then(() => {
        RequestsInfos.erlmTestRek(ticketIdSupp, entstoerauftragsnummer3);
        cy.wait(10000);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.RESOLVED
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GELOEST
          );
        cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
          .first()
          .should(
            "contain.text",
            "(ERLM) Entstörauftragsnummer: " + entstoerauftragsnummer3
          );
      });
  });
  it("TS-1179: UI Reseller bestätigt ERLM von DTAG mit close (ESS) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("Ecotel (1st level)", { force: true })
      .then(() => {
        typeValue = "Ecotel (1st level)";
        type = "reseller";
        InfoUtils.writeInfo(ticketIdRes, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.OPENE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GELOEST
          );
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.EditTicketForm.PROBLEM_BESCHREIBUNG
        ).type("UI Reseller bestätigt ERLM von DTAG mit close (ESS)");
        cy.get(CommonConstants.Selectors.EditTicketForm.STATUS_CONTAINER_TAL)
          .contains(CommonConstants.Selectors.EditTicketForm.Status_edit.CLOSE)
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm
            .WEITERLEITUNG_CONTAINER_RES_TAL
        )
          .contains(
            CommonConstants.Selectors.EditTicketForm.Weiterleitung_ticket
              .SPEICHERN
          )
          .click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_VALID_FORM
        ).click();
        cy.get(
          CommonConstants.Selectors.EditTicketForm.BUTTON_SAVE_FORM
        ).click();
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdRes
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
      })
      .then(() => {
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
  it("TS-1171: DTAG sendet ENTM an UI Reseller @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdSupp
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.CLOSE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
      })
      .then(() => {
        RequestsInfos.entmTest(ticketIdSupp, entstoerauftragsnummer);
        cy.wait(10000);
        typeValue = "DTAG";
        type = "supplier";
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdSupp
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.CLOSE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
        cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
          .first()
          .should("contain.text", "Ess Meldung Type: ENTM")
          .should(
            "contain.text",
            "Entstörauftragsnummer: " + entstoerauftragsnummer
          );
      });
  });
  it("TS-1176: DTAG sendet ENTM an UI Reseller nach REK(2. Auftrag) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdSupp
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.CLOSE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
      })
      .then(() => {
        RequestsInfos.entmTest(ticketIdSupp, entstoerauftragsnummer2);
        cy.wait(10000);
        typeValue = "DTAG";
        type = "supplier";
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.CLOSE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
        cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
          .first()
          .should("contain.text", "Ess Meldung Type: ENTM")
          .should(
            "contain.text",
            "Entstörauftragsnummer: " + entstoerauftragsnummer2
          );
      });
  });
  it("TS-1195: DTAG sendet ENTM an UI Reseller nach REK(3. Auftrag) @line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9G", () => {
    cy.get(CommonConstants.Selectors.MenuTicketSystem.RESELLER_LIST)
      .select("DTAG", { force: true })
      .then(() => {
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_BUTTON
        ).click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.SearchTicketForm.TICKET_ID).type(
          ticketIdSupp
        );
        cy.get(
          CommonConstants.Selectors.SearchTicketForm.TICKET_SUCHE_CONTAINER
        )
          .contains("Suchen")
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.FIRST_ROW_LIST_TICKET)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.CLOSE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
      })
      .then(() => {
        RequestsInfos.entmTest(ticketIdSupp, entstoerauftragsnummer3);
        cy.wait(10000);
        typeValue = "DTAG";
        type = "supplier";
        InfoUtils.writeInfo(ticketIdSupp, typeValue, type);
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.BUTTON_EDIT_TICKET)
          .first()
          .click();
      })
      .then(() => {
        cy.get(CommonConstants.Selectors.EditTicketForm.TICKET_INFO_LINE)
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.CLOSE
          )
          .should(
            "contain.text",
            CommonConstants.Selectors.EditTicketForm.Status.GESCHLOSSEN
          );
        cy.get(CommonConstants.Selectors.EditTicketForm.BESCHREIBUNG_BOX)
          .first()
          .should("contain.text", "Ess Meldung Type: ENTM")
          .should(
            "contain.text",
            "Entstörauftragsnummer: " + entstoerauftragsnummer3
          );
      });
  });
});
