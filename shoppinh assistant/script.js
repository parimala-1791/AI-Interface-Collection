// ===============================
// Shopping Assistant JavaScript
// ===============================

const searchInput = document.getElementById("searchInput");
const chatSection = document.getElementById("chatSection");
const toast = document.getElementById("toast");


// Send message
function sendMessage() {

    const message = searchInput.value.trim();

    if (message === "") {
        showToast("Please enter what you are looking for.");
        return;
    }

    addUserMessage(message);

    setTimeout(() => {
        generateAIResponse(message);
    }, 500);

    searchInput.value = "";
}


// Handle Enter key
function handleEnter(event) {

    if (event.key === "Enter") {
        sendMessage();
    }
}


// Quick search buttons
function quickSearch(text) {

    searchInput.value = text;
    sendMessage();
}


// Add user message
function addUserMessage(message) {

    const userMessage = document.createElement("div");

    userMessage.className = "ai-message";

    userMessage.style.marginTop = "12px";

    userMessage.innerHTML = `
        <div class="ai-avatar">👤</div>

        <div class="message-content">
            <strong>You</strong>
            <p>${message}</p>
        </div>
    `;

    chatSection.appendChild(userMessage);

    userMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// Generate AI response
function generateAIResponse(message) {

    let response = "";

    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("laptop")) {

        response =
            "I found several laptop options for you. For studying and productivity, I recommend choosing a lightweight laptop with at least 8GB RAM and an SSD.";

    } else if (
        lowerMessage.includes("phone") ||
        lowerMessage.includes("smartphone")
    ) {

        response =
            "For smartphones, I recommend comparing camera quality, battery life, processor performance and storage before making your decision.";

    } else if (
        lowerMessage.includes("gift")
    ) {

        response =
            "I'd be happy to help with gift ideas! Consider headphones, smart accessories, books, or personalized products depending on the person's interests.";

    } else if (
        lowerMessage.includes("deal") ||
        lowerMessage.includes("discount")
    ) {

        response =
            "I recommend checking products with strong ratings, good reviews and price discounts together rather than choosing only the cheapest option.";

    } else {

        response =
            "Based on your request, I can help you compare products, find suitable options, check features, and choose products according to your budget.";
    }


    const aiResponse = document.createElement("div");

    aiResponse.className = "ai-message";

    aiResponse.style.marginTop = "12px";

    aiResponse.innerHTML = `
        <div class="ai-avatar">✦</div>

        <div class="message-content">
            <strong>ShopAI</strong>
            <p>${response}</p>
        </div>
    `;

    chatSection.appendChild(aiResponse);

    aiResponse.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// Add product to cart
function addToCart(productName) {

    showToast(productName + " added to your cart 🛒");
}


// Show category
function showCategory(category) {

    showToast(category + " section selected");

    const heading = document.querySelector(".section-heading h2");

    if (heading) {
        heading.textContent = category;
    }
}


// New chat
function newChat() {

    chatSection.innerHTML = `
        <div class="ai-message">
            <div class="ai-avatar">✦</div>

            <div class="message-content">
                <strong>ShopAI</strong>

                <p>
                    New shopping session started. What would you like to shop for?
                </p>
            </div>
        </div>
    `;

    searchInput.value = "";

    showToast("New shopping chat started");
}


// Toast notification
function showToast(message) {

    toast.textContent = message;

    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 2500);
}