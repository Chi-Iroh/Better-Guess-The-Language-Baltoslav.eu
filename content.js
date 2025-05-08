function isOnMainPage() { // the game uses only a index.php page, so we must identify is we're on the main page to leave it untouched
    return document.getElementsByName("vyniki").length > 0; // there's a <a name="vyniki"> anchor to go to your results, if no vyniki then we're not in the main page (so in game)
}

function isOnLossPage() { // wheen we lose a point, the correct answer and its words are displayed, also in a <table> element, in that case we don't want to hide it
    return document.getElementsByClassName("prawy ziel").length > 0; // prawy ziel and prawy czer classes only appear when we just lost a point
}

function main() {
    if (isOnLossPage()) {
        window.displayHint(); // languages.js
    } else if (!isOnMainPage() && !isOnLossPage()) {
        const table = document.querySelector("table");
        if (table) {
            console.log(settings);
            console.log("Timeout:", settings.timeout);
            if (settings.timeout !== "No timeout") {
                setTimeout(() => {
                    table.style.opacity = "0"; // still displayed but invisible, to avoid below buttons to move up
                    table.style.pointerEvents = "none"; // disables any interactions with the mouse pointer
                }, settings.timeout); // disappear after one second
            }
        }
    }
}

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Received message: ", message);
    if (message.action === "log") {
        console.log(message.message);
    } else if (message.action === "error") {
        console.error(message.error);
    } else if (message.action === "loadSettings") {
        window.load
    }
});

console.log("hello")
browser.runtime.sendMessage({ action: "loadSettings" }).then(main, console.error)
