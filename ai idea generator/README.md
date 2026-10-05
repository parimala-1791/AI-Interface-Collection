```javascript
const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const ideasContainer = document.getElementById("ideasContainer");

generateBtn.addEventListener("click", function () {

    const topic = document.getElementById("topic").value;
    const category = document.getElementById("category").value;
    const style = document.getElementById("style").value;
    const count = document.getElementById("count").value;

    if (topic.trim() === "") {
        alert("Please enter a topic.");
        return;
    }

    const ideas = [
        "Smart Assistant",
        "AI Recommendation System",
        "Learning Platform",
        "Community Platform",
        "Smart Dashboard",
        "Automation Tool",
        "Personalized App"
    ];

    ideasContainer.innerHTML = "";

    for (let i = 0; i < count; i++) {

        const card = document.createElement("div");

        card.className = "idea-card";

        card.innerHTML = `
            <div class="idea-number">
                IDEA ${i + 1}
            </div>

            <h3>${ideas[i]} for ${topic}</h3>

            <p>
                Create a ${style.toLowerCase()} ${category.toLowerCase()}
                project based on ${topic}. The system can use AI to
                provide useful suggestions and improve the user experience.
            </p>

            <div class="idea-tags">
                <span class="idea-tag">${category}</span>
                <span class="idea-tag">${style}</span>
                <span class="idea-tag">AI</span>
            </div>
        `;

        ideasContainer.appendChild(card);
    }

    document.getElementById("resultsSection").scrollIntoView({
        behavior: "smooth"
    });
});


clearBtn.addEventListener("click", function () {

    document.getElementById("topic").value = "";

    ideasContainer.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">✦</div>

            <h3>Your ideas will appear here</h3>

            <p>
                Enter a topic and click Generate Ideas.
            </p>
        </div>
    `;
});
```
