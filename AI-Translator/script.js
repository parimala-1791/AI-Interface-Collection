const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const fromLanguage = document.getElementById("fromLanguage");
const toLanguage = document.getElementById("toLanguage");


// Demo Translation Data

const translations = {

    "hello": {
        "Hindi": "नमस्ते",
        "Telugu": "హలో",
        "Tamil": "வணக்கம்",
        "French": "Bonjour",
        "Spanish": "Hola"
    },

    "good morning": {
        "Hindi": "सुप्रभात",
        "Telugu": "శుభోదయం",
        "Tamil": "காலை வணக்கம்",
        "French": "Bonjour",
        "Spanish": "Buenos días"
    },

    "thank you": {
        "Hindi": "धन्यवाद",
        "Telugu": "ధన్యవాదాలు",
        "Tamil": "நன்றி",
        "French": "Merci",
        "Spanish": "Gracias"
    },

    "how are you?": {
        "Hindi": "आप कैसे हैं?",
        "Telugu": "మీరు ఎలా ఉన్నారు?",
        "Tamil": "நீங்கள் எப்படி இருக்கிறீர்கள்?",
        "French": "Comment allez-vous ?",
        "Spanish": "¿Cómo estás?"
    }

};


// Translate Function

function translateText() {

    let text = inputText.value.trim();

    if (text === "") {
        outputText.value = "Please enter text to translate.";
        return;
    }

    let from = fromLanguage.value;
    let to = toLanguage.value;

    if (from === to) {
        outputText.value = text;
        return;
    }

    let key = text.toLowerCase();

    if (translations[key] && translations[key][to]) {

        outputText.value = translations[key][to];

    } else {

        outputText.value =
            `Demo Translation

From: ${from}
To: ${to}

Original Text:
${text}

This is a frontend demo translator.

Connect a translation API or AI model
to translate any sentence automatically.`;

    }

}


// Swap Languages

function swapLanguages() {

    let tempLanguage = fromLanguage.value;

    fromLanguage.value = toLanguage.value;
    toLanguage.value = tempLanguage;


    let tempText = inputText.value;

    inputText.value = outputText.value;
    outputText.value = tempText;

}


// Clear Text

function clearText() {

    inputText.value = "";
    outputText.value = "";

}


// Copy Translation

function copyTranslation() {

    if (outputText.value === "") {

        alert("No translation to copy.");

        return;
    }

    navigator.clipboard.writeText(outputText.value);

    alert("Translation copied!");

}


// Example Buttons

function setExample(text) {

    inputText.value = text;

}


// Dark Mode

document.getElementById("themeBtn")
    .addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            this.textContent = "☀️";

        } else {

            this.textContent = "🌙";

        }

    });