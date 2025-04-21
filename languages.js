const writingSystems = new Map([
    ["Hebrew alphabet", ["Hebrew", "Yiddish"]],
    ["Bengali script", ["Bengali", "Assamese"]],
    ["Greek alphabet", ["Greek"]],
    ["Georgian alphabet", ["Georgian"]],
    ["Armenian alphabet", ["Armenian"]],
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
    ["Tifinagh", ["Tamazight"]],
    ["Lao script", ["Lao"]],
    ["Khmer alphabet", ["Khmer"]],
    ["Thai script", ["Thai"]],
    ["Cherokee", ["Cherokee"]],
    ["Amharic", ["Amharic"]],
    ["Devanāgarī", ["Hindi", "Nepali"]],
    ["Oriya", ["Oriya"]],
    ["Gurmukhi", ["Punjabi"]],
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
        "Slovak",

        "Polish",
        "Kashubian",
        "Vilamovian",
        "Lower Sorbian",
        "Upper Sorbian",

        "Albanian",
        "Croatian",
        "Romanian",
        "Hungarian",
        "Norwegian",
        "Icelandic",
        "Swedish",
        "Finnish",
        "Estonian",
        "Maltese",

        "Danish",
        "Faroese",
        "Greenlandic",

        "Latvian",
        "Lithuanian",
        "Latgalian",
        "Livonian",

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
    ["Gujarati script", ["Gujarati"]],
    ["Tibetan script", ["Tibetan"]],
    ["Tai Nuea", ["Tai Nuea"]],
    ["Nuosu", ["Nuosu"]],
    ["Old Church Slavonic", ["Old Church Slavonic"]],
    ["Burmese", ["Burmese"]],
    ["Osage", ["Osage"]]
]);
// Crimean Tatar has some words in cyrillic, but everything else in latin alphabet
// so that exception must be handled (isn't for now)

const commonCharacters = new Map([
    ["Latin alphabet", "abcdefghijklmnopqrstuvwxyz"],
    ["Cyrillic alphabet", "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШ"],
    ["Arabic script", "أابتثجحخدذرزسشصضطظعغفقكلمنهؤوئىيء"],
    ["Bengali script", "অআকাকিকীউকুঊকূঋকৃএকেঐকৈওকোঔকৌক ত্‍কংকঃকঁকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরৰলৱশষসহয়ড়ঢ়০১২৩৪৫৬৭৮৯"],
    ["Devanāgarī", "अआइईउऊऋॠऌॡऍऎएऐऑऒओओकखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसह०१२३४५६७८९प्पँपंपःप़पऽ"],
    ["Gurmukhi", "ਅਆਇਈਉਊਏਐਓਔਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਲ਼ਵਸ਼ਸਹ"],
    ["Gujarati script", "અઆઇઈઉઊઋઌઍએઐઑઓઔકખગઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલળવશષસહૠૡૢૣ"],
    ["Tibetan script", "ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ"],
    ["Greek alphabet", "αβγδεζηθικλμνξοπρσςτυφχψω"],
    ["Hebrew alphabet", "אבגדהוזחטיכלמנסעפצקרשת"],
    ["Khmer alphabet", "កខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមសហយរលឡអវអ្កអ្ខអ្គអ្ឃអ្ងអ្ចអ្ឆអ្ឈអ្ញអ្ឌអ្ឋអ្ឌអ្ឃអ្ណអ្តអ្ថអ្ទអ្ធអ្នអ្បអ្ផអ្ពអ្ភអ្មអ្សអ្ហអ្យអ្រអ្យអ្លអ្អអ្វអក្សរខ្មែរ"],
    ["Armenian alphabet", "ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖ"],
    ["Georgian alphabet", "აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵჶჷჸ"],
    ["Thai script", "กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะา฿เแโใไๅๆ๏๐๑๒๓๔๕๖๗๘๙๚๛"],
    ["Tifinagh", "ⴰⴱⴲⴳⴴⴵⴶⴷⴸⴹⴺⴻⴼⴽⴾⴿⵀⵁⵂⵃⵄⵅⵆⵇⵈⵉⵊⵋⵌⵍⵎⵐⵑⵒⵓⵔⵕⵖⵗⵘⵙⵚⵛⵜⵝⵞⵠⵡⵢⵣⵤⵥⵦⵧ"]
]);

const specialCharacters = new Map([
    ["Dutch", "àäèéëïĳöü"],
    ["West Frisian", "êôúû"],
    ["Danish", "æøå"],
    ["Norwegian", "æøå"],
    ["Finnish", "äöšž"],
    ["Swedish", "åäöé"],
    ["Estonian", "äöõüšž"],
    ["German", "äöüß"],
    ["Kurdish", "çêîşû"],
    ["Romanian", "ăâîșț"],
    ["Welsh", "âêîôûŵŷáéíïóúẃýàèìòùẁỳäëöüẅÿ"],
    ["Esperanto", "ĉĝĥĵŝŭ"],
    ["Turkish", "çğıöşü"],
    ["Icelandic", "áðéíóúýþæö"],
    ["Faroese", "áðíóúýæø"],
    ["Hungarian", "áéíóöőúüű"],
    ["Catalan", "àçéèíóòúüï·"],
    ["French", "àâæçéèêëîïôœùûüÿ"],
    ["Portuguese", "ãõçáéíóúâêôà"],
    ["Spanish", "áéíñóúü¡¿"],
    ["Italian", "àéèìòù"],
    ["Guarani", "áéíóúýãẽĩõũỹñg̃"],
    ["Navajo", "áąą́éęę́íįį́łńóǫǫ́"],
    ["Polish", "ąćęłńóśźż"],
    ["Kashubian", "ąłńóżãéëòôù"],
    ["Slovene", "šžč"],
    ["Croatian", "šžčćđ"],
    ["Czech", "šžčáďéěíňóřťúůý"],
    ["Slovak", "šžčáäďéíľĺňóôŕťúý"],
    ["Latvian", "šžčāēģīķļņōŗū"],
    ["Lithuanian", "šžčąęėįųū"],
    ["Vietnamese", "đàảãáạăằẳẵắặâầẩẫấậèẻẽéẹêềểễếệìỉĩíịòỏõóọồổỗốơờởỡớợùủũúụưừửữứựỳỷỹýỵ"],
    ["Hawaiian", "āēīōū"],
    ["Maori", "āēīōū"],
    ["Basque", "ñ"],
    ["Persian", "پچژگ"],
    ["Yiddish", "פֿ"], // Add letters with dots

    // Here are uppercase letters, must lower them
    ["Bulgarian", "ЙЩЬЮЯЪ"],
    ["Belarusian", "ЙЬЮЯЫЭёЎІ"],
    ["Muscovite", "ЫЭёЪ"],
    ["Ukrainian", "ҐЄІЇ"],
    ["Macedonian", "ЉЊЏЈЃЌЅ"],
    ["Serbian", "ЉЊЏЈЋЂ"]
    // Cyrillic end
]);

var allSpecialCharacters = [];

function initSpecialCharacters() {
    for (const [language, _specialCharacters] of specialCharacters.entries()) {
        for (const char of _specialCharacters) {
            if (!allSpecialCharacters.includes(char)) {
                allSpecialCharacters.push(char);
                console.log(`${language} adds special character '${char}'`);
            }
        }
    }
    console.log(allSpecialCharacters)
}
initSpecialCharacters();

function getSpecialCharacters(solution) {
    let _specialCharacters = [];

    for (const [englishWord, unknownWord] of solution.expectedWords.entries()) {
        for (const char of unknownWord) {
            if (allSpecialCharacters.includes(char)) {
                _specialCharacters.push(char);
            }
        }
    }
    console.log("special characters", _specialCharacters, "in words", solution.expectedWords);
    return _specialCharacters;
}

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
    const languageGuessed = table.rows[1].cells[1].innerText;
    const languageToGuess = table.rows[1].cells[2].innerText;
    let expectedWords = [];
    let guessedWords = [];

    for (let nthRow = 2; nthRow < table.rows.length; nthRow++) {
        const row = table.rows[nthRow];
        const word = row.cells[0].innerText;
        guessedWords.push([word, row.cells[1].innerText]);
        expectedWords.push([word, row.cells[2].innerText]);
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
        expectedWords: new Map(expectedWords),
        guessedWords: new Map(guessedWords)
    }
}

function specialCharactersHint(solution, visibleSpecialCharactersInLanguageToGuess) {
    console.log("special chars in solution: ", visibleSpecialCharactersInLanguageToGuess)
    const specialCharactersInGuessedLanguage = specialCharacters[solution.languageGuessed.name];
    const hasGuessedLanguageNoSpecialCharacter = [null, undefined].includes(specialCharactersInGuessedLanguage);

    for (const specialChar of visibleSpecialCharactersInLanguageToGuess) {
        if (hasGuessedLanguageNoSpecialCharacter || !specialCharactersInGuessedLanguage.includes(specialChar)) {
            return `${solution.languageGuessed.name} hasn't the special character '${specialChar}' !`;
        }
    }
    return "";
}

window.displayHint = function () { // cannot use ES6 import/export for content scripts, so we define window constants. this script must appear before content.js in manifest.json
    const solution = parseSolution();
    let hintText = "";
    if (solution.languageToGuess.alphabet !== solution.languageGuessed.alphabet) {
        hintText = `${solution.languageToGuess.name} uses ${solution.languageToGuess.alphabet}, but ${solution.languageGuessed.name} uses ${solution.languageGuessed.alphabet} instead !`;
    } else {
        hintText += specialCharactersHint(solution, getSpecialCharacters(solution));
    }
    console.log(hintText)
    const hint = document.createTextNode(hintText);
    document.querySelector(".pojemnik").appendChild(hint);
    // form div containing both the table and the "next" button, so the hint is displayed beneath them
}
