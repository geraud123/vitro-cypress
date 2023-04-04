export abstract class GenerellesTicketConstants {
  public static Selectors = {
    GenTicketForm: {
      RESELLER_LIST: ":nth-child(1)> .hl_light> .fitHoriz",
      MELDUNGSART_LIST: ":nth-child(3)> .hl_light> .fitHoriz",
      PRIORITAET_LIST: ":nth-child(6)> .hl_light> .fitHoriz",
      TICKET_NAME: ":nth-child(9)> .hl_light> .limitTextInput> .fitHoriz",
      PROBLEM_BESCHREIBUNG:
        ":nth-child(10)> .hl_light> .limitTextInput> .fitHoriz",
      WEITERLEITUNG_CONTAINER: ":nth-of-type(11) > .hl_light",
      Weiterleitung_ticket: {
        SPEICHERN: "Speichern (ggf. Auto-Synchronisation)",
        WEITERLEITUNG_2L: "Weiterleitung zum vitroconnect 2nd Level",
      },
      HISTORIE: ":nth-child(1) > .limitTextInput > .fitHoriz",
      ERROR_MESSAGE: ".formErrorMsg",
    },
  };
}
