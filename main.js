import(browser.runtime.getURL("./languages.js")).then(languages => {
    if (isOnLossPage()) {
        languages.displayHint();
    }
})

function isOnMainPage() { // the game uses only a index.php page, so we must identify is we're on the main page to leave it untouched
    return document.getElementsByName("vyniki").length > 0; // there's a <a name="vyniki"> anchor to go to your results, if no vyniki then we're not in the main page (so in game)
}

function isOnLossPage() { // wheen we lose a point, the correct answer and its words are displayed, also in a <table> element, in that case we don't want to hide it
    return document.getElementsByClassName("prawy ziel").length > 0; // prawy ziel and prawy czer classes only appear when we just lost a point
}

if (!isOnMainPage() && !isOnLossPage()) {
    const table = document.querySelector("table");
    setTimeout(() => {
        table.style.opacity = "0"; // still displayed but invisible, to avoid below buttons to move up
        table.style.pointerEvents = "none"; // disables any interactions with the mouse pointer
    }, 1000); // disappear after one second
}
