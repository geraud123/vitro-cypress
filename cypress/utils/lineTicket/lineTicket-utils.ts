import { LineTicketConstants } from "./lineTicket-constants";

export abstract class lineTicketUtils {
  public static repeatNextMonth(): void {
    cy.get(LineTicketConstants.Selectors.EditTicketForm.AKTION_TAL_CONTAINER)
      .find("input")
      .eq(12)
      .click();
    cy.wait(1000);
    cy.get(LineTicketConstants.Selectors.EditTicketForm.datepicker.MONTH).then(
      (month) => {
        cy.get(
          LineTicketConstants.Selectors.EditTicketForm.datepicker.YEAR
        ).then((year) => {
          if (
            (month.text() == "Februar" || month.text() == "February") &&
            year.text() == "2023"
          ) {
            cy.get(
              LineTicketConstants.Selectors.EditTicketForm.datepicker.CALENDER
            )
              .contains("28")
              .click({ force: true });
          } else {
            cy.get(
              LineTicketConstants.Selectors.EditTicketForm.datepicker.CALENDER
            ).click({ force: true });
            cy.get(
              LineTicketConstants.Selectors.EditTicketForm.datepicker.NEXT_MONTH
            ).click({ force: true });
            cy.wait(1000);
            lineTicketUtils.repeatNextMonth();
          }
        });
      }
    );
  }
}
