const electron = require('electron'); //ELECTRON MODULE IMPORT (Saved in a var to use it later).
const {app, BrowserWindow, dialog, Notification, Menu} = electron; //ELECTRON PARTS IMPORT.
const path = require('path'); //PATH MODULE IMPORT.
const url = require('url'); //URL MODULE IMPORT.

const fs = require('fs'); //FS MODULE IMPORT.

const os = require('os'); //OS MODULE IMPORT.
const user_name = os.userInfo().username; //This estract's the device username.

const session_uuid = require('crypto'); //CRYPTO MODULE IMPORT.
const { stringify } = require('querystring'); //STRINGIFY MODULE IMPORT.

let mainW; //This let... it's the var where the window data is stored.

//Session Manager
let s_uuid = "" //S_UUID.
let s_uuid_list = []; //S_UUID_LIST (Here we store all the sessions uuid's).

const gen_uuid = () => {
    s_uuid = session_uuid.randomUUID(); //Generates the UUID
    s_uuid_list.push(s_uuid); //Add's the UUID to the list
    console.log(s_uuid_list); //This show's the session uuid
}

//Session Manager (UUID Save)
fs.writeFile('')


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

//Check if is in Dev or Production:
if(process.env.NODE_ENV === "production") {
    Menu.setApplicationMenu(null)
} else if(process.env.NODE_ENV !== "production") {
    
}


app.whenReady().then(() => { //Check if app is ready.
    mainWCreate(800, 600, false); //CreateMainWindow Function
    gen_uuid(); //Generates and saves the session_uuid
});

//Jus't for dev Reasons:
if(process.env.NODE_ENV !== "production") {
    console.log(stringify(process.env.NODE_ENV));
}