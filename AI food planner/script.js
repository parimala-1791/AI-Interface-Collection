// ======================================
// NutriAI - AI Food Planner
// ======================================


// Generate meal plan
function generatePlan() {

    const diet = document.getElementById("diet").value;
    const calories = document.getElementById("calories").value;
    const meals = document.getElementById("mealCount").value;
    const cooking = document.getElementById("cookingTime").value;

    const message = document.getElementById("aiMessage");

    message.innerHTML =
        `I've created a ${diet.toLowerCase()} meal plan targeting ${calories} with ${meals}. ` +
        `Your meals are designed to fit within approximately ${cooking} cooking time. ` +
        `You can adjust your preferences anytime.`;

    showToast("Your AI meal plan has been updated ✦");
}


// Create new plan
function createPlan() {

    document.getElementById("dashboard").classList.remove("hidden");

    document.querySelectorAll(".page-section").forEach(section => {

        if (section.id !== "dashboard") {
            section.classList.add("hidden");
        }

    });

    generatePlan();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Show sections
function showSection(sectionId) {

    const sections = document.querySelectorAll(".page-section");

    sections.forEach(section => {
        section.classList.add("hidden");
    });

    const selected = document.getElementById(sectionId);

    if (selected) {
        selected.classList.remove("hidden");
    }

    // Update active menu
    document.querySelectorAll(".menu-item").forEach(button => {
        button.classList.remove("active");
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Toast notification
function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 2500);
}


// Initial message
console.log("NutriAI Food Planner loaded successfully.");