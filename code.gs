function doGet(){
  return HtmlService
      .createTemplateFromFile('INDEX.html')
      .evaluate();
}

function getData(){
  return SpreadsheetApp.openById('1IsGuLwpfnaWyPBe8kiZbA-7FS9zaIz68p4Ss662BzoA')
      .getActiveSheet()
      .getDataRange()
      .getValues();
}

function newMessage(message){
  var sheet =SpreadsheetApp.openById('1IsGuLwpfnaWyPBe8kiZbA-7FS9zaIz68p4Ss662BzoA').getActiveSheet();
  sheet.appendRow([message, Session.getActiveUser().getEmail()]);
}

function getName(){
  return Session.getActiveUser().getEmail();
}

function getCheckNum(){
  var sheet = SpreadsheetApp.openById('1IsGuLwpfnaWyPBe8kiZbA-7FS9zaIz68p4Ss662BzoA').getActiveSheet();
  var lastRow = sheet.getLastRow();
  return lastRow;
}
