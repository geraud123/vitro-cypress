export abstract class LineTicketConstants {
  public static Selectors = {
    Kundenerfassung: {
      RESELLER_LIST: "#resellerChooser\\:resSel",
      ERROR_MESSAGE: ".formErrorMsg",
      KUNDEN_WAHL: "\\:nth-child(2)> \\:nth-child(2)> .buttonLink",
      Reseller: {
        RES_KUNDENNR: "#resellerNumberForm\\:resCode",
        SEARCH_RES_KUNDENNR: "#resellerNumberForm\\:resButton",
      },
      Cap: {
        CAP_KUNDENNR: "#capNumberForm\\:resCodeCap",
        SEARCH_CAP_KUNDENNR: "#capNumberForm\\:capButton",
      },
      Personal: {
        VORNAME: "#personalDataForm\\:customerFirstName",
        NACHNAME: "#personalDataForm\\:customerLastName",
        PLZ: "#personalDataForm\\:customerPLZ",
        STADT: "#personalDataForm\\:customerCity",
        STRASSE: "#personalDataForm\\:customerStreet",
        HAUSNR: "#personalDataForm\\:customerStreetNumber",
        SEARCH_PERSONAL: "#personalDataForm\\:dataButton",
      },
      Inventory: {
        INVENTORY_ID: "#inventoryForm\\:invId",
        SEARCH_INVENTORY: "#inventoryForm\\:invButton",
      },
      Lines: {
        LEITUNG_ID: "#lineForm\\:lineId",
        SEARCH_LEISTUNG: "#lineForm\\:lineButton",
      },
    },
    Ticketerstellung: {
      KUNDEN_WAHL: "tbody> tr:eq(1)> td:eq(1)> .buttonLink",
      PRODUKT: "#createDisplayCustomerForm\\:defectiveProduct",
      KONTAKT_ART: "#createDisplayCustomerForm\\:comChannel",
    },
    TicketSpeichern: {
      TICKET_NAME: ":nth-child(9)> .hl_light> .limitTextInput> .fitHoriz",
      PROBLEM_BESCHREIBUNG:
        ":nth-child(10)> .hl_light> .limitTextInput> .fitHoriz",
      NEXT_ACTION_FAX: "#createSearchForm\\:selectedDelegation\\:1",
      NEXT_ACTION_FAXC: "#createSearchForm\\:selectedDelegation\\:0",
      ScenarioA_B: {
        MELDUNGSART_LIST: ":nth-child(2)> .hl_light> .fitHoriz",
        PRIORITAET_LIST: ":nth-child(5)> .hl_light> .fitHoriz",
      },
      ScenarioC: {
        MELDUNGSART_LIST: "#createSearchForm\\:selectMalFunction",
        PRIORITAET_LIST: "#createSearchForm\\:selectPriority",
      },
    },
    FragenKatalog: {
      FRAGEN_KATALOG_CONTAINER: ".activeQuestionHighlight",
      NEXT_BUTTON: "#qctopbuttons\\:nextButton",
      DATEPICKER: "#ui-datepicker-div",
    },
    EditTicketForm: {
      TERMIN_AKTION_BUTTON: ".buttonLink",
      datepicker: {
        MONTH: ".ui-datepicker-month",
        YEAR: ".ui-datepicker-year",
        CALENDER: "#ui-datepicker-div > .ui-datepicker-calendar",
        NEXT_MONTH: ".ui-datepicker-next",
      },
      TERMIN_WERKTAG_CONTAINER: ":nth-child(5) > .hl_light",
      AKTION_TAL_CONTAINER: ":nth-child(5) > .hl_mid",
      ERROR_MESSAGE: ".formErrorMsg",
      BESCHREIBUNG_BOX_DTAG: "#descriptionBox",
      BESCHREIBUNG_BOX1: "#descriptionBox> .catLvl3",
      BESCHREIBUNG_BOX2: "#descriptionBox> .catLvl5",
      CHECKBOX_TAL: "#editForm\\:CheckboxTalSuppressionOrder",
      TAL_PROBLEM: "#editForm\\:talProblemInput",
      CHECKBOX_TAL_TAL: "#editForm\\:CheckboxTaltalQCTal01",
      CHECKBOX_USE_TICKET_TAL: "#editForm\\:CheckboxUseTicketTalTamRequest",
    },
  };
}
