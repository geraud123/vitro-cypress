// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

import { CreateCycleUtils } from "../utils/zephyr/createCycle-utils";
import { GetTestUtils } from "../utils/zephyr/getTest-utils";
import { InfoUtils } from "../utils/infos/info-utils";

/**
 * Zephyr-API Connector: Before-Hook.
 *
 * Before cypress starts running test-specs, it connects to the Jira-API via a login-request to get a login-session.
 * After that, it checks the date inside cycleUtils.json. If testDate is equal to todays date, it will use the Ids inside.
 * If the dates are different, it will create a whole new Zephyr testcycle and writes the Ids inside cycleUtils.json.
 *
 * @param {boolean}   zephyrReporter   Before run, set value in config file. True = report to Zephyr | False = No reporting
 */
const zephyrReporter = true;
before(() => {
  if (zephyrReporter == true) {
    cy.readFile("cypress/fixtures/cycleUtils.json").then((obj) => {
      let testDate = obj.testDate;
      let dateToday = `${new Date().getDate()}.${
        new Date().getMonth() + 1
      }.${new Date().getFullYear()}`;
      if (testDate != dateToday) {
        cy.request({
          method: "POST",
          url: "https://jira.vitroconnect.de/app", // baseUrl is prepended to url
          form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
          body: {
            username: atob("YWt3ZQ=="),
            password: atob("QXJzZW5lS3dldGU5Mygp"),
          },
        }); /* end of cy.request */
        CreateCycleUtils.createNewCycle(
          "TEST-" +
            `${new Date().getDate()}.${
              new Date().getMonth() + 1
            }.${new Date().getFullYear()}`,
          "TEST",
          "10404"
        );
      } else {
        cy.request({
          method: "POST",
          url: "https://jira.vitroconnect.de/app", // baseUrl is prepended to url
          form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
          body: {
            username: atob("YWt3ZQ=="),
            password: atob("QXJzZW5lS3dldGU5Mygp"),
          },
        }); /* end of cy.request */
      } /* end of else-loop */
    }); /* end of cy.readFile */
  } /* end of if-Config Loop */
});

/**
 * Zephyr-API Connector: AfterEach-Hook.
 *
 * Reads the test-title (it()..) and tries to find a Jira issue key and a folder location. It only reports to Zephyr, if
 * there is a valid Jira issue key. Process starts with getting the issueId via a search-request that contains the Jira issue key.
 * After that the test will be copied inside the test-cycle. Then it looks for the executionId. Last step is reporting the results.
 *
 * @param {boolean}   zephyrReporter   Before run, set value in config file. True = report to Zephyr | False = No reporting
 */
afterEach(() => {
  if (zephyrReporter == true) {
    cy.readFile("cypress/fixtures/cycleUtils.json").then((obj) => {
      const currentTest = Cypress.mocha.getRunner().suite.ctx.currentTest;
      console.log(currentTest);
      let issueKey = currentTest.title.match("(?:TS-\\d{2,4})");
      let testResult = currentTest.state;
      let folderName = currentTest.title.match("[^@]*$");
      const testCycleJSON = obj;
      let folderId = testCycleJSON.folderIds[folderName];
      console.log("readFile cycleUtils: " + testCycleJSON);
      if (issueKey != null && folderName != null) {
        GetTestUtils.getTestIdAndAddToCycle(issueKey, folderId, testResult);
      } else if (issueKey != null && folderName == null) {
        GetTestUtils.getTestIdAndAddToCycle(issueKey, null, testResult);
      }
    }); /* end of cy.readFile */
    InfoUtils.writeInfo(null, null, null);
  } /* end of if-Config Loop */
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
