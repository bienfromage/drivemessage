//Drive message by bienfromage
//*****************************************************************************
//Make sure to replace "identification" with the id number of your google sheet
//*****************************************************************************

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
  if(!message.match(/^\s*$/))
    sheet.appendRow([message, Session.getActiveUser().getEmail().replace("@hsnet.ahsd.org","")]);
}


function getName(){
  return Session.getActiveUser().getEmail();
}

function getCheckNum(){
  var sheet = SpreadsheetApp.openById(identification).getActiveSheet();
  var lastRow = sheet.getLastRow();
  return lastRow;
}
