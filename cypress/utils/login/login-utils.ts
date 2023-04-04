import { LoginConstants } from "./login-constants";

export abstract class LoginUtils {
  public static login(): void {
    //Login
    cy.visit("https://ticketsystem.test.vc.vtnx.net/spring/");
    cy.get(LoginConstants.Selectors.LoginUI.USERNAME).type("akwe", {
      log: false,
    });
    cy.get(LoginConstants.Selectors.LoginUI.PASSWORD).type("Pe1xitai", {
      log: false,
    });
    cy.get("#loginForm").find(".ui-button-text").click();
  }
}
