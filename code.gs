function doGet(){
  return HtmlService
      .createTemplateFromFile('INDEX.html')
      .evaluate();
}

function getData(){
  return SpreadsheetApp.openById(identification)
      .getActiveSheet()
      .getDataRange()
      .getValues();
}

function newMessage(message){
  var sheet =SpreadsheetApp.openById(identification).getActiveSheet();
  sheet.appendRow([message, Session.getActiveUser().getEmail()]);
}

function getName(){
  return Session.getActiveUser().getEmail();
}

function getCheckNum(){
  var sheet = SpreadsheetApp.openById(identification).getActiveSheet();
  var lastRow = sheet.getLastRow();
  return lastRow;
}
