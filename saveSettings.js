function saveSettings(event) {
    event.preventDefault();

    let timeout = document.querySelector("input[name=\"timeout\"]:checked").value;
    timeout = (timeout === "No timeout") ? timeout : parseInt(timeout);
    browser.storage.local.set({ timeout: timeout })
    console.log("Timeout", timeout)
}

document.querySelector("form").addEventListener("submit", saveSettings); // once settings are submitted, we save them
