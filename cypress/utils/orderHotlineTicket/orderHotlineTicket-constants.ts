export abstract class OrderHotlineTicketConstants {
  public static Selectors = {
    Kundenerfassung: {
      RESELLER_LIST: "#resellerChooser\\:resSel",
      ERROR_MESSAGE: ".formErrorMsg",
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
      PRODUKT: "#createDisplayCustomerForm\\:defectiveProduct",
      KONTAKT_ART: "#createDisplayCustomerForm\\:comChannel",
    },
    TicketSpeichern: {
      TICKET_NAME: ":nth-child(9)> .hl_light> .limitTextInput> .fitHoriz",
      PROBLEM_BESCHREIBUNG:
        ":nth-child(10)> .hl_light> .limitTextInput> .fitHoriz",
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
    },
  };
}
