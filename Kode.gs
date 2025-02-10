function doGet() {
  return HtmlService.createHtmlOutputFromFile("Login");
}

function checkLogin(username, password) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Database");
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) { // Mulai dari 1 untuk melewati header
    if (data[i][1] == username && data[i][2] == password) {
      return {
        success: true,
        name: data[i][0],
        link: data[i][3] // Kolom LINK
      };
    }
  }
  return { success: false };
}
