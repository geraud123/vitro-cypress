export abstract class GetAndUpateExecutionUtils {
  public static getAndUpateExecution(issueKey, testResult): void {
    let body;
    let executionId;
    cy.request({
      method: "GET",
      headers: {
        "Set-Cookie": "",
        "User-Agent": "TEST",
      },
      auth: {
        username: atob("YWt3ZQ=="),
        password: atob("QXJzZW5lS3dldGU5Mygp"),
      },
      url:
        "https://jira.vitroconnect.de/app/rest/zapi/latest/traceability/executionsByTest?testIdOrKey=" +
        issueKey,
    })
      .then((response) => {
        let jsonResponse = response.body;
        cy.log("GET Request erfolgreich");
        cy.log(response.body);
        console.log(response.body);
        //Get Parameters and create body for new cycle
        executionId = jsonResponse.executions[0].execution.id;
        cy.readFile("cypress/fixtures/infoUtils.json").then((obj) => {
          if (testResult == "PASSED" || testResult == "passed") {
            if (obj.ticketId != null && obj.type == "reseller") {
              body = {
                status: "1",
                comment:
                  "TestDaten: \n" +
                  "   Reseller: " +
                  obj.typeValue +
                  "\n" +
                  "   Ticket-ID: " +
                  obj.ticketId,
              };
            }
            if (obj.ticketId == null && obj.type == "reseller") {
              body = {
                status: "1",
                comment:
                  "TestDaten: \n" +
                  "   Reseller: " +
                  obj.typeValue +
                  "\n" +
                  "   Info: Der Test generiert keine Ticket-ID",
              };
            }
            if (obj.ticketId != null && obj.type == "supplier") {
              body = {
                status: "1",
                comment:
                  "TestDaten: \n" +
                  "   Supplier: " +
                  obj.typeValue +
                  "\n" +
                  "   Ticket-ID: " +
                  obj.ticketId,
              };
            }
            if (obj.ticketId == null && obj.type == "supplier") {
              body = {
                status: "1",
                comment:
                  "TestDaten: \n" +
                  "   Supplier: " +
                  obj.typeValue +
                  "\n" +
                  "   Info: Der Test generiert keine Ticket-ID",
              };
            }
            if (obj.ticketId == null && obj.type == null) {
              body = {
                status: "1",
                comment:
                  "Info: Der Test generiert keine Ticket-ID und braucht keinen Reseller oder Supplier",
              };
            }
          }
          if (testResult == "FAILED" || testResult == "failed") {
            if (obj.ticketId != null && obj.type == "reseller") {
              body = {
                status: "2",
                comment:
                  "TestDaten: \n" +
                  "   Reseller: " +
                  obj.typeValue +
                  "\n" +
                  "   Ticket-ID: " +
                  obj.ticketId,
              };
            }
            if (obj.ticketId == null && obj.type == "reseller") {
              body = {
                status: "2",
                comment:
                  "TestDaten: \n" +
                  "   Reseller: " +
                  obj.typeValue +
                  "\n" +
                  "   Info: Der Test hat keine Ticket-ID generiert",
              };
            }
            if (obj.ticketId != null && obj.type == "supplier") {
              body = {
                status: "2",
                comment:
                  "TestDaten: \n" +
                  "   Supplier: " +
                  obj.typeValue +
                  "\n" +
                  "   Ticket-ID: " +
                  obj.ticketId,
              };
            }
            if (obj.ticketId == null && obj.type == "supplier") {
              body = {
                status: "2",
                comment:
                  "TestDaten: \n" +
                  "   Supplier: " +
                  obj.typeValue +
                  "\n" +
                  "   Info: Der Test hat keine Ticket-ID generiert",
              };
            }
            if (obj.ticketId == null && obj.type == null) {
              body = {
                status: "2",
                comment:
                  "Info: Der Test generiert keine Ticket-ID und braucht keinen Reseller oder Supplier",
              };
            }
          }
        });
      })
      .then(() => {
        cy.request({
          method: "PUT",
          headers: {
            "Set-Cookie": "",
            "User-Agent": "TEST",
          },
          auth: {
            username: atob("YWt3ZQ=="),
            password: atob("QXJzZW5lS3dldGU5Mygp"),
          },
          url:
            "https://jira.vitroconnect.de/app/rest/zapi/latest/execution/" +
            executionId +
            "/execute",
          body,
        }).then((response) => {
          let jsonResponse = response.body;
          console.log(jsonResponse);
        });
      });
  }
}
