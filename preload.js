const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    pinWindow: () => ipcRenderer.send('toggle-pin')
})