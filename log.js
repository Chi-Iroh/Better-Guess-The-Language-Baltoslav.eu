function baseLog(error, ...args) {
    let _args = [];

    for (let arg of args) {
        if (args === undefined) {
            _args.push("undefined")
        } else if (args === null) {
            _args.push("null");
        } else if (typeof arg === "string") {
            _args.push(arg);
        } else if (typeof arg === "number") {
            _args.push(arg.toString());
        } else {
            _args.push(JSON.stringify(arg));
        }
    }
    const message = error ?
        { action: "log", log: output } :
        { action: "error", error: output };
    const logFunction = error ? console.error : console.log;
    browser.runtime.sendMessage(message);
    logFunction(...args);
}

function log(...args) {
    baseLog(false, ...args);
}

function error(...args) {
    baseLog(true, "ERROR:", ...args);
}
