const promptInput = document.getElementById("promptInput");
const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");
const responseContent = document.getElementById("responseContent");
const responseStatus = document.getElementById("responseStatus");
const themeBtn = document.getElementById("themeBtn");


// Generate AI response

generateBtn.addEventListener("click", function () {

    const prompt = promptInput.value.trim();

    if (prompt === "") {
        alert("Please enter a prompt first.");
        promptInput.focus();
        return;
    }

    responseStatus.textContent = "Generating...";

    responseContent.innerHTML = `
        <div class="empty-response">
            <div class="empty-icon">⏳</div>
            <h3>Generating your response...</h3>
            <p>Please wait a moment.</p>
        </div>
    `;

    setTimeout(function () {

        const tone = document.getElementById("tone").value;
        const length = document.getElementById("length").value;

        responseStatus.textContent = "Generated";

        responseContent.innerHTML = `
            <div class="generated-response">

                <h3>AI Response</h3>

                <p>
                    Here is a simulated AI response based on your prompt:
                </p>

                <p>
                    <strong>Your prompt:</strong>
                    ${escapeHTML(prompt)}
                </p>

                <p>
                    The AI would process your request using a
                    <strong>${tone}</strong> tone and provide a
                    <strong>${length.toLowerCase()}</strong> response.
                    This interface demonstrates how an AI prompt
                    workspace can work without connecting to a real AI API.
                </p>

            </div>
        `;

    }, 1000);
});


// Clear prompt

clearBtn.addEventListener("click", function () {

    promptInput.value = "";

    responseStatus.textContent = "Ready";

    responseContent.innerHTML = `
        <div class="empty-response">
            <div class="empty-icon">✦</div>

            <h3>Your response will appear here</h3>

            <p>
                Enter a prompt above and click
                <strong>Generate Response</strong>.
            </p>
        </div>
    `;

});


// Prompt suggestions

const suggestions = document.querySelectorAll(".suggestion");

suggestions.forEach(function (button) {

    button.addEventListener("click", function () {

        const title = button.querySelector("strong").textContent;

        if (title === "Summarize") {
            promptInput.value =
                "Summarize the following document and explain the main points clearly.";
        }

        else if (title === "Generate Ideas") {
            promptInput.value =
                "Generate five creative ideas for a modern technology project.";
        }

        else if (title === "Write Code") {
            promptInput.value =
                "Write a simple JavaScript program and explain how it works.";
        }

        else if (title === "Explain") {
            promptInput.value =
                "Explain artificial intelligence in simple words with examples.";
        }

        promptInput.focus();
    });

});


// Copy response

copyBtn.addEventListener("click", function () {

    const text = responseContent.innerText;

    if (text.trim() === "") {
        return;
    }

    navigator.clipboard.writeText(text);

    copyBtn.textContent = "Copied!";

    setTimeout(function () {
        copyBtn.textContent = "Copy";
    }, 1500);

});


// Dark mode

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀";
    } else {
        themeBtn.textContent = "☾";
    }

});


// Prevent HTML injection in displayed prompt

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}