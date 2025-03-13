const DEFAULT_SETTINGS = {
    timeout: "No timeout"
};

var areSettingsLoaded = false;
var settings = DEFAULT_SETTINGS;

browser.runtime.onMessage.addListener((message, sender, sendResponse) => { // Don't make that callback async:
    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse
    if (message.action === "loadSettings") {
        loadSettings().then(    // async
            () => sendResponse({
                timeout: settings.timeout
            }),
            error
        );
    } else if (message.action === "getSettings") {
        while (!areSettingsLoaded) {}
        sendResponse({
            timeout: settings.timeout
        });
    } else if (message.action === "saveSettings") {
        saveSettings(message.settings);
    }
    return true;
});

async function loadSettings() {
    browser.storage.local.get("timeout").then(timeout => {
        log("Timeout:", timeout);
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
    }).catch(err => error("ERROR: Cannot load settings:", err));
    log("Settings loaded:", settings);
}

async function saveSettings(newSettings) {
    try {
        await browser.storage.local.set({ "timeout" : newSettings.timeout });
    } catch (err) {
        error("Couldn't save settings:", err);
    }
    settings = newSettings;
}

document.addEventListener("DOMContentLoaded", () => {
    loadSettings();
    areSettingsLoaded = true;
});
