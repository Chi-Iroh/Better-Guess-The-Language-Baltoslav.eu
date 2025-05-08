const DEFAULT_SETTINGS = {
    timeout: "No timeout"
};

var areSettingsLoaded = false;
var settings = DEFAULT_SETTINGS;

async function loadSettings() {
    browser.storage.local.get("timeout").then(timeout => {
        console.log("Timeout:", timeout);
        if (timeout === undefined) {
            return;
        }
        for (let timeoutButton of document.querySelectorAll("#timeout")) {
            if (timeoutButton.value === timeout) {
                timeoutButton.checked = true;
                break;
            }
        }
        settings.timeout = timeout;
    }).catch(err => console.error("ERROR: Cannot load settings:", err));
    console.log("Settings loaded:", settings);
}

async function saveSettings(newSettings) {
    try {
        await browser.storage.local.set({ "timeout" : newSettings.timeout });
    } catch (err) {
        console.error("Couldn't save settings:", err);
    }
    settings = newSettings;
}

document.addEventListener("DOMContentLoaded", () => {
    loadSettings();
    areSettingsLoaded = true;
});

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "saveSettings") {
        saveSettings();
    } else if (message.type === "loadSettings") {
        loadSettings.then(_ => sendResponse(settings));
    }
});