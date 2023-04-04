export abstract class CommonUtils {
  public static getDate(): String {
    var today = new Date();
    var date =
      today.getDate() +
      "." +
      (today.getMonth() + 1) +
      "." +
      today.getFullYear();

    return date;
  }
}
