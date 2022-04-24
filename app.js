const electron = require('electron'); //ELECTRON MODULE IMPORT (Saved in a var to use it later).
const {app, BrowserWindow, dialog, Notification} = electron; //ELECTRON PARTS IMPORT.
const path = require('path'); //PATH MODULE IMPORT.
const url = require('url'); //URL MODULE IMPORT.

const os = require('os'); //OS MODULE IMPORT.
const user_name = os.userInfo().username; //This estract's the device username.

let mainW; //This let... it's the var where the window data is stored.

function mainWCreate(Wwidth, Wheight, WcontextIsolation) { //This funcion is evoked on line:29.
    mainW = new BrowserWindow({ //Creates a new BrowserWindow.
        title: "Better Git GUI - " + user_name, //Set's the MainWindow title adding the Username of the Device.
        width: Wwidth, //Set's the width of the MainWindow.
        height: Wheight, //Set's the height of the MainWindow.
        webPreferences: {
            contextIsolation: WcontextIsolation //Enable's the use of NodeJS outside of the file!
        }
    });
    
    mainW.loadURL(url.format({
        protocol: 'file', //Type of protocol used to read url.
        pathname: path.join(__dirname, './src/views/index.html'), //Show view file on path.
        slashes: false //Idk what this does... but I learned it... so I use it!
    }));
}

app.whenReady().then(() => { //Check if app is ready.
    mainWCreate(800, 600, false); //CreateMainWindow Function
});