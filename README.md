# drivemessage
## Use Google Sheets as a chat application
This program uses the Google Apps Script API and a custom HTML interface to send messages between Google users.

By applying the code in bienfromage's [code.gs](https://github.com/bienfromage/drivemessage/blob/master/code.gs) file, it is theoretically possible to program a wide variety of multi-user applications without creating a server or buying hosting space. The only absolutely necessary item is a gmail account.

Please note that this form of database is not fast. It would not be appropriate for, say, a live-action MMORPG. However, it is very useful for applications that do not require speed. For instance, bienfromage recently used a similar program in Google Scripts to create an online scoreboard.

## Steps for implementation:
1. Create a Google Script Project at https://www.google.com/script/start/
1. Click "File > New > HTML file." Call the new file "INDEX" in all caps
1. Copy the [INDEX.html](https://github.com/bienfromage/drivemessage/blob/master/INDEX.html) file from this repository to the code.js file on your project
1. Copy the [code.gs](https://github.com/bienfromage/drivemessage/blob/master/code.gs) file from this repository to the code.js file on your project
1. Create a Google Sheet. Take note of the URL
1. Replace the parts of the code.gs file labeled "identification" with the id code from your google sheet. 
  ex: https://docs.google.com/spreadsheets/d/google/ **id is here** /edit
1. Publish your web application by clicking "Deploy > Deploy as Web App..." Under "Project Version" select "New." For "Execute the app as" select "Me." Finally, under "Who has access to the app" choose "Anyone."
1. Copy the URL for the web app and distribute it to anyone with a gmail account. The app will automatically use their email address as their username in your chat room.
1. Star this project
