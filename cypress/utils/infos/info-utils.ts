export abstract class InfoUtils {
  public static info;

  public static writeInfo(ticketId, typeValue, type): void {
    InfoUtils.info = {
      type: type,
      typeValue: typeValue,
      ticketId: ticketId,
    };
    console.log(JSON.stringify(InfoUtils.info));
    cy.writeFile(
      "cypress/fixtures/infoUtils.json",
      JSON.stringify(InfoUtils.info)
    );
  }

  public static getCurrentTime(): any {
    let currentdate = new Date();
    let datetime =
      currentdate.getDate().toString() +
      (currentdate.getMonth() + 1).toString() +
      currentdate.getFullYear().toString() +
      currentdate.getHours().toString() +
      currentdate.getMinutes().toString() +
      currentdate.getSeconds().toString();
    return datetime;
  }
}
