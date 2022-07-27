const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 800,
    frame: false,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'static/scripts/preload.js')
    }
  })

  ipcMain.on('toggle-pin', (event, value) => {
    console.log(!mainWindow.isAlwaysOnTop())
    mainWindow.setAlwaysOnTop(!mainWindow.isAlwaysOnTop(), 'screen')
  })

  mainWindow.loadFile('index.html')

  
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
