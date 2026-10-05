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
    < div;
