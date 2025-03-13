browser.runtime.sendMessage({ action: "loadSettings" }).then(listenToSettingsSubmit);

async function saveSettings(event, settings) {
    event.preventDefault();
    log("helloworld");
    console.log("'toured")
    await browser.runtime.sendMessage({ action: "log", log: "hellotg'knr" })
    let timeout = document.querySelector("input[name=\"options\"]:checked").value;
    timeout = (timeout === "No timeout") ? timeout : parseInt(timeout);
    try {
        await browser.storage.local.set({
            timeout: timeout
        });
    } catch (err) {
        error("ERROR: Cannot save settings:", err);
        return;
    }
    settings.timeout = timeout;
    try {
        await browser.runtime.sendMessage({ action: "saveSettings", settings: settings });
    } catch (err) {
        error("Couldn't save settings:", err);
    }
}

function listenToSettingsSubmit(settings) {
    document.getElementById("settings-form").addEventListener("submit", event => saveSettings(event, settings)); // once settings are submitted, we save them
}

browser.runtime.sendMessage({ action: "log", log: "hello" });
