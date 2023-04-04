import { GetAndUpateExecutionUtils } from "./getAndUpateExecution-utils";

export abstract class GetTestUtils {
  public static getTestIdAndAddToCycle(issueKey, cypressFolder, testResult) {
    let issueId;
    let folderId = cypressFolder;
    let projectId;
    let cycleId;
    let testCaseName;
    const cycleUtilsJSON = "cypress/fixtures/cycleUtils.json";
    console.log("FolderValue: " + cypressFolder);
    console.log("folderId " + folderId);
    cy.readFile(cycleUtilsJSON).then((obj) => {
      let jsonResponse = obj;
      cycleId = jsonResponse.cycleId;
      projectId = jsonResponse.projectId;
      console.log("cycleId " + cycleId);
      console.log("projectId " + projectId);
    });

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
        "https://jira.vitroconnect.de/app/rest/zapi/latest/traceability/testsByRequirement?requirementIdOrKeyList=" +
        issueKey,
    })
      .then((response) => {
        let jsonResponse = response.body;
        console.log("Request response is ...");
        console.log(jsonResponse);
        issueId = jsonResponse[0].requirement.id;
        testCaseName = jsonResponse[0].requirement.summary;
        let body = {
          issues: issueKey,
          cycleId: cycleId,
          method: "1",
          projectId: projectId,
          assigneeType: "assignee",
          assignee: "akwe",
          versionId: -1,
          folderId: folderId,
        };
        GetTestUtils.addTestcaseToCycle(body);
      })
      .then((response) => {
        GetAndUpateExecutionUtils.getAndUpateExecution(issueKey, testResult);
      });
  }

  public static addTestcaseToCycle(body) {
    body = JSON.stringify(body);
    cy.request({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "",
        "User-Agent": "TEST",
      },
      auth: {
        username: atob("YWt3ZQ=="),
        password: atob("QXJzZW5lS3dldGU5Mygp"),
      },
      url: "https://jira.vitroconnect.de/app/rest/zapi/latest/execution/addTestsToCycle/",
      body,
    }).then((response) => {
      //UPDATE EXECUTION
      let jsonResponse = response.body;
      console.log("Request response is ...");
      console.log(jsonResponse);
    });
  }
}
