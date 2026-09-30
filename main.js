const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 300,
        height: 300,

        // 移除 Windows 標題列
        frame: false,

        // 不顯示在工作列
        skipTaskbar: true,

        // 可以調整大小
        resizable: true,

        // 背景透明
        transparent: true,

        // 顯示在其他視窗上方
        alwaysOnTop: false,

        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile("index.html");
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
