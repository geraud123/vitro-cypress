export abstract class CreateCycleUtils {
  public static cycleUtils; //contains everything we need for further requests
  public static cycleAndProjectId: { cycleId: any; projectId: any };
  public static testDate;
  public static folderIdsArray = [];
  public static folderNamesArray = [
    "generelles-Ticket-Szenario1A",
    "generelles-Ticket-Szenario1B",
    "order-hotline-Ticket-Szenario2A",
    "order-hotline-Ticket-Szenario2B",
    "order-hotline-Ticket-Szenario2C",
    "voice-Ticket-Szenario4A",
    "voice-Ticket-Szenario4B",
    "line-Ticket(UI_Reseller->UI_Supplier)-Szenario6A",
    "line-Ticket(UI_Reseller->UI_Supplier)-Szenario6B",
    "line-Ticket(UI_Reseller->UI_Supplier)-Szenario6C",
    "line-Ticket(UI_Reseller->UI_Supplier)-Szenario6D",
    "line-Ticket(UI_Reseller->UI_Supplier)-Szenario6E",
    "line-Ticket(UI_Reseller->Vitroconnect_DL(ohne TAL))-Szenario7A",
    "line-Ticket(UI_Reseller->Vitroconnect_DL(ohne TAL))-Szenario7B",
    "line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8A",
    "line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8B",
    "line-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario8C",
    "line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9A",
    "line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9B",
    "line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9C",
    "line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9D",
    "line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9E",
    "line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9F",
    "line-Ticket(UI_Reseller->DTAG(ESS))-Szenario9G",
    "line-Ticket(UI_Reseller->DTAG(FAX))-Szenario10A",
    "line-Ticket(UI_Reseller->DTAG(FAX))-Szenario10B",
    "line-Ticket(UI_Reseller->DTAG(FAX))-Szenario10C",
    "line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11A",
    "line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11B",
    "line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11C",
    "line-Ticket(UI_Reseller->TCA-Supplier)-Szenario11E",
    "line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12A",
    "line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12B",
    "line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12C",
    "line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12D",
    "line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12E",
    "line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12F",
    "line-Ticket(UI Reseller->Deutsche Glasfaser)-Szenario12G",
    "line-Ticket(TCA_Reseller->TCA_Supplier)-Szenario15A",
    "line-Ticket(TCA_Reseller->TCA_Supplier)-Szenario15B",
    "line-Ticket(TCA_Reseller->TCA_Supplier)-Szenario15C",
    "quick-Ticket(UI_Reseller->Vitroconnect_DL(ohne TAL))-Szenario28A",
    "quick-Ticket(UI_Reseller->Vitroconnect_DL(ohne TAL))-Szenario28B",
    "quick-Ticket(UI_Reseller->Vitroconnect_DL(ohne TAL))-Szenario28C",
    "quick-Ticket(UI_Reseller->Vitroconnect_DL(ohne TAL))-Szenario28D",
    "quick-Ticket(UI_Reseller->Vitroconnect_DL(ohne TAL))-Szenario28E",
    "quick-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario29A",
    "quick-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario29B",
    "quick-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario29C",
    "quick-Ticket(UI_Reseller->Vitroconnect_DL(mit TAL))-Szenario29D",
    "quick-Ticket(UI_Reseller->DTAG(ESS))-Szenario30A",
    "quick-Ticket(UI_Reseller->DTAG(ESS))-Szenario30B",
    "quick-Ticket(UI_Reseller->DTAG(ESS))-Szenario30C",
    "quick-Ticket(UI_Reseller->DTAG(ESS))-Szenario30D",
    "ticket-suche",
    "fragen-kataloge",
    "product-suche",
    "portstatus",
    "portreset",
  ];
  public static folderIds = {};

  public static createNewCycle(build, environment, projectId): void {
    console.log("Create a new cycle");

    let body = JSON.stringify(
      CreateCycleUtils.createCycleBody(build, environment, projectId)
    );
    console.log("POST-Request createNewCycle body: " + body);

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
      url: "https://jira.vitroconnect.de/app/rest/zapi/latest/cycle",
      body,
    }).then((response) => {
      let jsonResponse = response.body;
      console.log("Request response is ...");
      console.log(jsonResponse);

      CreateCycleUtils.cycleAndProjectId = {
        cycleId: jsonResponse.id,
        projectId: projectId,
      };

      CreateCycleUtils.testDate = `${new Date().getDate()}.${
        new Date().getMonth() + 1
      }.${new Date().getFullYear()}`;

      console.log("cycleAndProjectId " + CreateCycleUtils.cycleAndProjectId);
      console.log("testDate " + CreateCycleUtils.testDate);

      CreateCycleUtils.createFolder(
        CreateCycleUtils.cycleAndProjectId.cycleId,
        CreateCycleUtils.cycleAndProjectId.projectId
      );
    });
  }

  public static createFolder(cycleId, projectId): void {
    for (let i = 0; i < CreateCycleUtils.folderNamesArray.length; i++) {
      let body = JSON.stringify(
        CreateCycleUtils.createFolderBody(
          cycleId,
          projectId,
          CreateCycleUtils.folderNamesArray[i]
        )
      );

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
        url: "https://jira.vitroconnect.de/app/rest/zapi/latest/folder/create",
        body,
      }).then((response) => {
        console.log("Request response is ...");
        console.log(response.body);

        let addArray = CreateCycleUtils.folderIdsArray.push(response.body.id);

        console.log(
          "Added folderId " + response.body.id + " to folderIdsArray"
        );
        console.log("folderIdsArray Length: " + addArray);
        console.log(CreateCycleUtils.folderIdsArray.toString());

        if (CreateCycleUtils.folderIdsArray.length == 59) {
          CreateCycleUtils.createCycleUtils();
        }
      });
    }
  }

  public static createCycleBody(build, environment, projectId): any {
    const date = new Date();
    const months = [
      "Jan",
      "Feb",
      "Mär",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez",
    ];
    const today =
      date.getDate() +
      "/" +
      months[date.getMonth()] +
      "/" +
      date.getFullYear().toString().slice(2);
    let body = {
      name:
        "TS-Testautomation: " +
        `${new Date().getDate()}.${
          new Date().getMonth() + 1
        }.${new Date().getFullYear()}`,
      build: build,
      environment: environment,
      description: "Management-Platform Jenkins Build: #???",
      startDate: today.toString(),
      endDate: null,
      projectId: projectId,
      versionId: -1,
    };
    return body;
  }

  public static createFolderBody(cycleId, projectId, folderNamesArray): any {
    let body = {
      cycleId: cycleId,
      name: folderNamesArray,
      description:
        "This folder contains every executed testcase for this topic",
      projectId: projectId,
      versionId: -1,
    };
    return body;
  }

  public static createCycleUtils(): void {
    for (let i = 0; i < CreateCycleUtils.folderIdsArray.length; i++) {
      CreateCycleUtils.folderIds[CreateCycleUtils.folderNamesArray[i]] =
        CreateCycleUtils.folderIdsArray[i];
      console.log(CreateCycleUtils.folderIds[i]);
    }
    CreateCycleUtils.cycleUtils = {
      cycleId: CreateCycleUtils.cycleAndProjectId.cycleId,
      projectId: CreateCycleUtils.cycleAndProjectId.projectId,
      testDate: CreateCycleUtils.testDate,
      folderIds: CreateCycleUtils.folderIds,
    };
    console.log(JSON.stringify(CreateCycleUtils.cycleUtils));
    cy.writeFile(
      "cypress/fixtures/cycleUtils.json",
      JSON.stringify(CreateCycleUtils.cycleUtils)
    );
  }
}
