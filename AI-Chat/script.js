const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const messages = document.getElementById("messages");
const newChatButton = document.getElementById("newChat");
const themeToggle = document.getElementById("themeToggle");
const suggestions = document.querySelectorAll(".suggestion");


// ===============================
// SEND MESSAGE
// ===============================

function sendMessage(text = null) {

    const message = text || messageInput.value.trim();

    if (message === "") {
        return;
    }

    // Remove welcome screen after first message
    const welcome = document.querySelector(".welcome");
    const suggestionBox = document.querySelector(".suggestions");

    if (welcome) {
        welcome.remove();
    }

    if (suggestionBox) {
        suggestionBox.remove();
    }

    // Add user message
    addMessage(message, "user");

    // Clear input
    messageInput.value = "";

    // Show typing indicator
    showTyping();

    // Generate AI response
    setTimeout(() => {

        removeTyping();

        const response = generateResponse(message);

        addMessage(response, "ai");

    }, 800);
}


// ===============================
// ADD MESSAGE
// ===============================

function addMessage(text, sender) {

    const messageDiv = document.createElement("div");

    messageDiv.className =
        `message ${sender === "user" ? "user" : ""}`;

    const avatar = document.createElement("div");

    avatar.className = "message-avatar";

    avatar.textContent =
        sender === "user" ? "You" : "✦";

    const content = document.createElement("div");

    content.className = "message-content";

    content.textContent = text;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);

    messages.appendChild(messageDiv);

    messages.scrollTop = messages.scrollHeight;
}


// ===============================
// TYPING INDICATOR
// ===============================

function showTyping() {

    const typing = document.createElement("div");

    typing.className = "message";

    typing.id = "typing";

    typing.innerHTML = `
        <div class="message-avatar">✦</div>
        <div class="message-content">
            AI is typing...
        </div>
    `;

    messages.appendChild(typing);

    messages.scrollTop = messages.scrollHeight;
}


// ===============================
// REMOVE TYPING
// ===============================

function removeTyping() {

    const typing = document.getElementById("typing");

    if (typing) {
        typing.remove();
    }
}


// ===============================
// AI RESPONSE SYSTEM
// ===============================

function generateResponse(message) {

    const text = message.toLowerCase();


    // -------------------------------
    // GREETING
    // -------------------------------

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return "Hello! 👋 I'm your AI Assistant. How can I help you today?";
    }


    // -------------------------------
    // PYTHON
    // -------------------------------

    if (text.includes("python") && !text.includes("code")) {

        return "🐍 Python is a high-level programming language known for its simple syntax. It is widely used in web development, data science, artificial intelligence, automation and machine learning.";
    }


    // -------------------------------
    // ADDITION PYTHON CODE
    // -------------------------------

    if (
        text.includes("addition") &&
        text.includes("python")
    ) {

        return `🐍 Python program for addition:

a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

sum = a + b

print("Sum =", sum)

Example:
Enter first number: 5
Enter second number: 3
Sum = 8`;
    }


    // -------------------------------
    // SUBTRACTION PYTHON CODE
    // -------------------------------

    if (
        text.includes("subtraction") &&
        text.includes("python")
    ) {

        return `🐍 Python program for subtraction:

a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

difference = a - b

print("Difference =", difference)

Example:
Enter first number: 10
Enter second number: 4
Difference = 6`;
    }


    // -------------------------------
    // MULTIPLICATION PYTHON CODE
    // -------------------------------

    if (
        text.includes("multiplication") &&
        text.includes("python")
    ) {

        return `🐍 Python program for multiplication:

a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

product = a * b

print("Product =", product)

Example:
Enter first number: 5
Enter second number: 4
Product = 20`;
    }


    // -------------------------------
    // DIVISION PYTHON CODE
    // -------------------------------

    if (
        text.includes("division") &&
        text.includes("python")
    ) {

        return `🐍 Python program for division:

a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

if b != 0:
    result = a / b
    print("Result =", result)
else:
    print("Cannot divide by zero.")`;
    }


    // -------------------------------
    // FACTORIAL PYTHON CODE
    // -------------------------------

    if (
        text.includes("factorial") &&
        text.includes("python")
    ) {

        return `🐍 Python program to find factorial:

n = int(input("Enter a number: "))

factorial = 1

for i in range(1, n + 1):
    factorial = factorial * i

print("Factorial =", factorial)

Example:
Enter a number: 5
Factorial = 120`;
    }


    // -------------------------------
    // PALINDROME PYTHON CODE
    // -------------------------------

    if (
        text.includes("palindrome") &&
        text.includes("python")
    ) {

        return `🐍 Python program to check palindrome:

text = input("Enter a word: ")

if text == text[::-1]:
    print("Palindrome")
else:
    print("Not a palindrome")`;
    }


    // -------------------------------
    // EVEN OR ODD
    // -------------------------------

    if (
        (text.includes("even") || text.includes("odd")) &&
        text.includes("python")
    ) {

        return `🐍 Python program to check even or odd:

number = int(input("Enter a number: "))

if number % 2 == 0:
    print("Even number")
else:
    print("Odd number")`;
    }


    // -------------------------------
    // C PROGRAMMING
    // -------------------------------

    if (
        text.includes("c code") ||
        text.includes("c program")
    ) {

        return `💻 C programming example:

#include <stdio.h>

int main() {

    int a, b, sum;

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    sum = a + b;

    printf("Sum = %d", sum);

    return 0;
}`;
    }


    // -------------------------------
    // STUDY / EXAM
    // -------------------------------

    if (
        text.includes("study") ||
        text.includes("exam")
    ) {

        return "📚 I can help you prepare for your exam. You can ask me for explanations, important questions, revision notes, examples, or a study plan.";
    }


    // -------------------------------
    // DATA STRUCTURES
    // -------------------------------

    if (
        text.includes("data structure") ||
        text.includes("linked list") ||
        text.includes("stack") ||
        text.includes("queue")
    ) {

        return "📚 Data Structures are methods of organizing and storing data efficiently. Common examples include arrays, linked lists, stacks, queues, trees and graphs.";
    }


    // -------------------------------
    // ADDITION EXPLANATION
    // -------------------------------

    if (text.includes("addition")) {

        return "➕ Addition is a mathematical operation used to combine two or more numbers. For example, 5 + 3 = 8.";
    }


    // -------------------------------
    // SUBTRACTION EXPLANATION
    // -------------------------------

    if (text.includes("subtraction")) {

        return "➖ Subtraction is a mathematical operation used to find the difference between numbers. For example, 10 - 4 = 6.";
    }


    // -------------------------------
    // MULTIPLICATION EXPLANATION
    // -------------------------------

    if (text.includes("multiplication")) {

        return "✖️ Multiplication is repeated addition. For example, 5 × 4 = 20.";
    }


    // -------------------------------
    // CODE REQUEST
    // -------------------------------

    if (
        text.includes("code") ||
        text.includes("program")
    ) {

        return `💻 Sure! I can provide programming examples.

Try asking:

• Give me Python code for addition
• Give me Python code for factorial
• Give me Python code for multiplication
• Give me Python code for subtraction
• Give me a C program for addition
• Give me Python code for palindrome`;
    }


    // -------------------------------
    // THANK YOU
    // -------------------------------

    if (
        text.includes("thank") ||
        text.includes("thanks")
    ) {

        return "You're welcome! 😊 I'm always happy to help.";
    }


    // -------------------------------
    // DEFAULT RESPONSE
    // -------------------------------

    return `✨ That's an interesting question!

I can currently help you with:

• Python programming
• C programming
• Basic mathematics
• Data Structures
• Study and exam preparation
• Programming examples

Try asking me something specific!`;
}


// ===============================
// SUGGESTION BUTTONS
// ===============================

suggestions.forEach(button => {

    button.addEventListener("click", () => {

        const text = button.textContent
            .replace("💡", "")
            .replace("💻", "")
            .replace("📝", "")
            .replace("🎓", "")
            .trim();

        messageInput.value = text;

        messageInput.focus();

    });

});


// ===============================
// SEND BUTTON
// ===============================

sendButton.addEventListener("click", () => {

    sendMessage();

});


// ===============================
// ENTER KEY
// ===============================

messageInput.addEventListener("keydown", (event) => {

    if (
        event.key === "Enter" &&
        !event.shiftKey
    ) {

        event.preventDefault();

        sendMessage();

    }

});


// ===============================
// NEW CHAT
// ===============================

newChatButton.addEventListener("click", () => {

    location.reload();

});


// ===============================
// DARK / LIGHT THEME
// ===============================

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (
        document.body.classList.contains("dark")
    ) {

        themeToggle.textContent = "☀️ Light Theme";

    } else {

        themeToggle.textContent = "🌙 Change Theme";

    }

});