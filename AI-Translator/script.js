const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

function translateText() {

    const text = inputText.value.trim();

    const from = document.getElementById("fromLanguage").value;
    const to = document.getElementById("toLanguage").value;

    if (text === "") {
        outputText.value = "Please enter some text to translate.";
        return;
    }

    if (from === to) {
        outputText.value = text;
        return;
    }

    // Demo translations

    const translations = {

        "Hello": {
            "Hindi": "नमस्ते",
            "Tamil": "வணக்கம்",
            "Telugu": "హలో",
            "French": "Bonjour",
            "Spanish": "Hola"
        },

        "Good morning": {
            "Hindi": "सुप्रभात",
            "Tamil": "காலை வணக்கம்",
            "Telugu": "శుభోదయం",
            "French": "Bonjour",
            "Spanish": "Buenos días"
        },

        "Thank you": {
            "Hindi": "धन्यवाद",
            "Tamil": "நன்றி",
            "Telugu": "ధన్యవాదాలు",
            "French": "Merci",
            "Spanish": "Gracias"
        },

        "How are you?": {
            "Hindi": "आप कैसे हैं?",
            "Tamil": "நீங்கள் எப்படி இருக்கிறீர்கள்?",
            "Telugu": "మీరు ఎలా ఉన్నారు?",
            "French": "Comment allez-vous ?",
            "Spanish": "¿Cómo estás?"
        }

    };

    if (
        translations[text] &&
        translations[text][to]
    ) {

        outputText.value = translations[text][to];

    } else {

        outputText.value =
            `AI Translation

From: ${from}
To: ${to}

Original:
${text}

Demo translation generated.

For real-time AI translation, connect
this interface to a translation API or
AI model.`;

    }

}

function swapLanguages() {

    const from = document.getElementById("fromLanguage");
    const to = document.getElementById("toLanguage");

    const temp = from.value;

    from.value = to.value;
    to.value = temp;

    const input = inputText.value;

    inputText.value = outputText.value;
    outputText.value = input;
}

document.getElementById("themeBtn").addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        this.textContent = "☀️";
    } else {
        this.textContent = "🌙";
    }

});