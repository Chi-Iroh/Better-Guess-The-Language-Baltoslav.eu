browser.runtime.sendMessage({ action: "loadSettings" }).then(listenToSettingsSubmit);

async function saveSettings(event, settings) {
    event.preventDefault();

    let timeout = document.querySelector("input[name=\"options\"]:checked").value;
    timeout = (timeout === "No timeout") ? timeout : parseInt(timeout);
    settings.timeout = timeout;
    await sendMessage({
        action: "saveSettings",
        settings: settings,
        from: "popup"
    }).error(err => console.error("Couldn't save settings:", err));
}

function listenToSettingsSubmit(settings) {
    document.getElementById("settings-form").addEventListener("submit", event => saveSettings(event, settings)); // once settings are submitted, we save them
}
