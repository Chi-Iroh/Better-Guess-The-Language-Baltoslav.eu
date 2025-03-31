const writingSystems = new Map([
    ["Hebrew", ["Hebrew", "Yiddish"]],
    ["Bengali alphabet", ["Bengali", "Assamese"]],
    ["Greek", ["Greek"]],
    ["Georgian", ["Georgian"]],
    ["Armenian", ["Armenian"]],
    ["Cyrillic", [
        "Muscovite",
        "Ukrainian",
        "Bulgarian",
        "Serbian",
        "Belarusian",
        "Tajik",
        "Kyrgyz",
        "Kazakh",
        "Mongolian",
        "Macedonian",

        "Adyghe", "Abkhaz", "Avar",
        "Bashkir",
        "Chechen", "Chuvash",
        "Dargin",
        "Erzya", "Evenki",
        "Hill Mari",
        "Ingush",
        "Kabardino-Cherkess", "Karachay-Balkar", "Kalmyk", "Komi",
        "Lak", "Lezgi",
        "Mari", "Moksha",
        "Ossetian",
        "Tabasaran", "Tatar",
        "Udmurt",
        "Yakut"
    ]],
    ["Coptic", ["Coptic"]],
    ["Vai", ["Vai"]],
    ["Japanese", ["Japanese,", "Ainu"]],
    ["Korean", ["Korean"]],
    ["Arabic", ["Arabic", "Persian", "Pashto"]],
    ["Inuktitut", ["Inuktitut"]],
    ["Tamazight", ["Tamazight"]],
    ["Lao script", ["Lao"]],
    ["Khmer script", ["Khmer"]],
    ["Thai", ["Thai"]],
    ["Cherokee", ["Cherokee"]],
    ["Amharic", ["Amharic"]],
    ["Hindi", ["Hindi", "Nepali"]],
    ["Oriya", ["Oriya"]],
    ["Punjabi", ["Punjabi"]],
    ["Santali", ["Santali"]],
    ["Aramaic", ["Aramaic"]],
    ["Latin alphabet", [
        "French",
        "Breton",
        "Basque",
        "Corsican",

        "English",
        "Cornish",
        "Welsh",
        "Manx",
        "Scottish Gaelic",
        "Irish",

        "Spanish",
        "Catalan",
        "Galician",

        "Italian",
        "Friulian",
        "Sardinian",

        "German",
        "Luxembourgish",
        "Romansh",

        "Dutch",
        "West Frisian",

        "Portuguese",
        "Czech",
        "Slovenian",
        "Slovakian",
        "Polish",
        "Kashubian",
        "Vilamovian",
        "Lower Sorbian",
        "Upper Sorbian",
        "Albanian",
        "Croatian",
        "Romanian",
        "Hungarian",
        "Danish",
        "Norwegian",
        "Icelandic",
        "Faroese",
        "Swedish",
        "Greenlandic",
        "Finnish",
        "Estonian",
        "Latvian",
        "Lithuanian",
        "Latgalian",
        "Livonian",
        "Maltese",

        "Turkish",
        "Karakalpak",
        "Kurdish",
        "Azerbaijani",
        "Crimean tatar",
        "Uzbek",
        "Turkmen",
        "Vietnamese",
        "Indonesian",
        "Cebuano",
        "Javanese",

        "Maori",

        "Hawaiian",
        "Navajo",
        "Nahuatl",
        "Maldivian",
        "Aymara",
        "Guarani",
        "Quechua",
        "Papiamentu",

        "Lingala",
        "Swahili",
        "Xhosa",
        "Hausa",

        "Esperanto"
    ]],
    ["Tamil", ["Tamil"]],
    ["Sinhalese", ["Sinhalese"]],
    ["Telugu", ["Kannada", "Telugu"]],
    ["Sylheti", ["Sylheti"]],
    ["Malayalam", ["Malayalam"]],
    ["Gujarati", ["Gujarati"]],
    ["Tibetan", ["Tibetan"]],
    ["Tai Nuea", ["Tai Nuea"]],
    ["Nuosu", ["Nuosu"]],
    ["Old Church Slavonic", ["Old Church Slavonic"]],
    ["Burmese", ["Burmese"]],
    ["Osage", ["Osage"]]
]);

function alphabetOf(language) {
    for (let [alphabet, languages] of writingSystems.entries()) {
        if (languages.includes(language)) {
            return alphabet;
        }
    }
    return `'${language}' is an invalid language !`;
}

function parseSolution() {
    const table = document.querySelector("table");
    // table's 1st row = <empty space> | You've picked | Correct answer
    // table's 2nd row = <empty space> | French | Dutch
    const languageToGuess = table.rows[1].cells[1].innerText;
    const languageGuessed = table.rows[1].cells[2].innerText;
    let expectedWords = {};
    let guessedWords = {};

    for (let nthRow = 2; nthRow < table.rows.length; nthRow++) {
        const row = table.rows[nthRow];
        const word = row.cells[0].innerText;
        expectedWords[word] = row.cells[1].innerText;
        guessedWords[word] = row.cells[2].innerText;
    }
    return {
        languageToGuess: {
            name: languageToGuess,
            alphabet: alphabetOf(languageToGuess)
        },
        languageGuessed: {
            name: languageGuessed,
            alphabet: alphabetOf(languageGuessed)
        },
        expectedWords: expectedWords,
        guessedWords: guessedWords
    }
}

export function displayHint() {
    const solution = parseSolution();
    let hintText = "";
    if (solution.languageToGuess.alphabet !== solution.languageGuessed.alphabet) {
        hintText = `${solution.languageToGuess.name} use ${solution.languageToGuess.alphabet}, but ${solution.languageGuessed.name} use ${solution.languageGuessed.alphabet} instead !`;
    }
    const hint = document.createTextNode(hintText);
    document.querySelector(".pojemnik").appendChild(hint);
    // form div containing both the table and the "next" button, so the hint is displayed beneath them
}
