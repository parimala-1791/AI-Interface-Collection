// Show toast message
function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


// Save recommendation
function saveItem(button) {

    button.classList.toggle("saved");

    if (button.classList.contains("saved")) {

        button.textContent = "♥";

        showToast("Recommendation saved!");

        updateSavedMessage();

    } else {

        button.textContent = "♡";

        showToast("Recommendation removed.");
    }
}


// Explore recommendation
function exploreItem(itemName) {

    showToast("Opening " + itemName + "...");

}


// Filter recommendations
function filterItems(category, button) {

    const cards = document.querySelectorAll(".recommendation-card");

    const filters = document.querySelectorAll(".filter");

    filters.forEach(filter => {
        filter.classList.remove("active");
    });

    button.classList.add("active");


    cards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });
}


// Refresh recommendations
function refreshRecommendations() {

    const grid = document.getElementById("recommendationGrid");

    grid.style.opacity = "0.4";

    showToast("AI is finding new recommendations...");

    setTimeout(() => {

        grid.style.opacity = "1";

        showToast("Recommendations updated!");

    }, 1200);
}


// AI insight
function showInsight() {

    showToast(
        "AI found a strong interest in Technology and Design."
    );
}


// Update saved section
function updateSavedMessage() {

    const savedItems =
        document.querySelectorAll(".save-btn.saved");

    const message =
        document.getElementById("savedMessage");

    if (savedItems.length > 0) {

        message.textContent =
            savedItems.length +
            " recommendation(s) saved to your collection.";

    } else {

        message.textContent =
            "You haven't saved any recommendations yet.";
    }
}