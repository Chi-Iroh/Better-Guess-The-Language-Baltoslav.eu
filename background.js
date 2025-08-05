browser.runtime.onMessage.addListener(
    message => {
        console.log("Received message:", message);
        if (message.action === "openSettings") {
            browser.runtime.openOptionsPage();
        }
    }
);
