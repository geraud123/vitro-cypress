export abstract class QuickTicketConstants {
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
      PARTNER_NUMMER: "#createDisplayCustomerForm\\:additionalComPhoneNumber",
      PARTNER_VORNAME: "#createDisplayCustomerForm\\:additionalComFirstName",
      PARTNER_NACHNAME: "#createDisplayCustomerForm\\:additionalComLastName",
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
      FRAGE_ANTWORT: "#doIter\\:0\\:doForm\\:j_idt281",
      FRAGE_ANTWORT2: "#doIter\\:0\\:doForm\\:j_idt283",
      FRAGE_ANTWORT3: "#doIter\\:0\\:doForm\\:j_idt284",
      VALID_PROBLEM_BUTTON: ":nth-child(3)> .buttonLink",
      NEXT_BUTTON: "#qctopbuttons\\:nextButton",
      CURRENT_DATE_BUTTON: ".ui-datepicker-current",
      CLOSE_DATE_BUTTON: ".ui-datepicker-close",
    },
    EditTicketForm: {
      TERMIN_AKTION_BUTTON: ".buttonLink",
      TERMIN_ANFORD_DATUM: "#editForm\\:j_idt153_input",
      TERMIN_ANFORD_ZEITRAUM: "#editForm\\:j_idt151",
      ERROR_MESSAGE: ".formErrorMsg",
      BESCHREIBUNG_BOX_DTAG: "#descriptionBox",
    },
  };
}
