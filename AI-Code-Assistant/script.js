const output = document.getElementById("output");
const codeInput = document.getElementById("codeInput");
const language = document.getElementById("language");

function generateCode() {

    const question = codeInput.value.toLowerCase();
    const lang = language.value;

    if (question.trim() === "") {
        output.textContent = "Please enter a coding question.";
        return;
    }

    if (question.includes("largest")) {

        if (lang === "Python") {
            output.textContent =
                `# Find the largest number

numbers = [10, 25, 7, 45, 18]

largest = max(numbers)

print("Largest number:", largest)`;
        } else {
            output.textContent =
                `// Example solution

Find the maximum value from the given array
and display the result.`;
        }

    } else if (question.includes("reverse")) {

        output.textContent =
            `# Reverse a string

text = "Hello World"

reversed_text = text[::-1]

print(reversed_text)`;

    } else {

        output.textContent =
            `AI Code Assistant

Language: ${lang}

Suggested approach:

1. Understand the problem.
2. Break the problem into smaller steps.
3. Write the required function.
4. Test the program with sample input.
5. Check edge cases.

Your question:
${codeInput.value}

Note:
This is a frontend AI demo. Connect an AI API
for real AI-generated responses.`;
    }
}

function explainCode() {

    const code = codeInput.value;

    if (code.trim() === "") {
        output.textContent = "Please enter some code to explain.";
        return;
    }

    output.textContent =
        `📖 Code Explanation

The AI would analyze your code and explain:

• What the code does
• How each section works
• Important variables
• Functions used
• Possible improvements

Code provided:
${code}`;
}

function debugCode() {

    const code = codeInput.value;

    if (code.trim() === "") {
        output.textContent = "Please enter code that you want to debug.";
        return;
    }

    output.textContent =
        `🐞 Debugging Assistant

Your code has been received.

The AI would normally check:

✓ Syntax errors
✓ Logical errors
✓ Incorrect variables
✓ Missing brackets
✓ Incorrect functions
✓ Possible improvements

Code:
${code}`;
}

function setQuestion(question) {
    codeInput.value = question;
}

function copyCode() {

    navigator.clipboard.writeText(output.textContent);

    alert("AI response copied!");
}

document.getElementById("themeBtn").addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        this.textContent = "☀️";
    } else {
        this.textContent = "🌙";
    }

});

document.getElementById("clearBtn").addEventListener("click", function () {

    codeInput.value = "";
    output.textContent = "Your AI coding response will appear here.";

});