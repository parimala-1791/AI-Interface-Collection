```javascript
const githubButton = document.querySelector(".github-btn");

githubButton.addEventListener("click", function () {
    alert("GitHub repository link can be added here.");
});

const cards = document.querySelectorAll(".template-card");

cards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {
        card.style.cursor = "pointer";
    });

});
```
