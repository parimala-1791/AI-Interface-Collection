
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const welcome = document.getElementById("welcome");
const results = document.getElementById("results");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const sources = document.getElementById("sources");
const followUps = document.getElementById("followUps");
const historyBox = document.getElementById("history");

const demoTopics = [
    {
        keywords: ["python", "programming"],
        title: "Python Documentation",
        description: "Learn Python syntax, concepts, and programming fundamentals.",
        url: "https://docs.python.org/3/tutorial/"
    },
    {
        keywords: ["artificial intelligence", " ai "],
        title: "Introduction to AI",
        description: "Explore artificial intelligence and its major concepts.",
        url: "https://www.ibm.com/think/topics/artificial-intelligence"
    },
    {
        keywords: ["machine learning", "ml"],
        title: "Machine Learning Guide",
        description: "Understand machine learning concepts and common applications.",
        url: "https://developers.google.com/machine-learning"
    },
    {
        keywords: ["web development", "html", "css", "javascript"],
        title: "MDN Web Docs",
        description: "Explore web development technologies and browser APIs.",
        url: "https://developer.mozilla.org/"
    }
];

let searchHistory = JSON.parse(
    localStorage.getItem("novaHistory") || "[]"
);

function getDemoResponse(query) {
    const lower = query.toLowerCase();

    const topic = demoTopics.find(item =>
        item.keywords.some(keyword => lower.includes(keyword.trim()))
    );

    if (topic) {
        return {
            text:
                `${topic.title} is a useful starting point for exploring your question.\n\n` +
                `${topic.description}\n\n` +
                `This interface demonstrates how an AI search tool could organize ` +
                `an overview and relevant resources. The content shown here is a ` +
                `sample response, not a generated or verified answer.`,
            resources: [topic]
        };
    }

    return {
        text:
            `Your question is: "${query}".\n\n` +
            `An AI search experience could break this topic into key ideas, ` +
            `provide a concise explanation, and connect the answer to useful ` +
            `resources.\n\n` +
            `This project uses a sample response to demonstrate that layout. ` +
            `Connect a real search or AI service to retrieve live, verified results.`,
        resources: [
            {
                title: "Google Search",
                description: "Explore additional information related to your query.",
                url: "https://www.google.com/"
            },
            {
                title: "Wikipedia",
                description: "Find introductory articles about a wide range of topics.",
                url: "https://www.wikipedia.org/"
            }
        ]
    };
}

function renderResources(items) {
    sources.replaceChildren();

    items.forEach(item => {
        const card = document.createElement("a");
        card.className = "source-card";
        card.href = item.url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        const label = document.createElement("small");
        label.textContent = "RESOURCE";

        const title = document.createElement("strong");
        title.textContent = item.title;

        const description = document.createElement("p");
        description.textContent = item.description;

        card.append(label, title, description);
        sources.appendChild(card);
    });
}

function renderFollowUps(query) {
    followUps.replaceChildren();

    const prompts = [
        `Explain ${query} in simple terms`,
        `Give examples of ${query}`,
        `What are the applications of ${query}?`
    ];

    prompts.forEach(prompt => {
        const button = document.createElement("button");
        button.className = "suggestion";
        button.textContent = prompt;
        button.addEventListener("click", () => performSearch(prompt));
        followUps.appendChild(button);
    });
}

function renderHistory() {
    historyBox.replaceChildren();

    if (searchHistory.length === 0) {
        const empty = document.createElement("p");
        empty.className = "empty-history";
        empty.textContent = "No recent searches";
        historyBox.appendChild(empty);
        return;
    }

    searchHistory.forEach(item => {
        const button = document.createElement("button");
        button.className = "history-item";
        button.textContent = item;
        button.title = item;
        button.addEventListener("click", () => performSearch(item));
        historyBox.appendChild(button);
    });
}

function performSearch(query) {
    const cleanQuery = query.trim();
    if (!cleanQuery) {
        searchInput.focus();
        return;
    }

    const response = getDemoResponse(cleanQuery);

    question.textContent = cleanQuery;
    answer.textContent = response.text;
    renderResources(response.resources);
    renderFollowUps(cleanQuery);

    welcome.classList.add("hidden");
    results.classList.remove("hidden");

    searchHistory = [
        cleanQuery,
        ...searchHistory.filter(item => item !== cleanQuery)
    ].slice(0, 8);

    localStorage.setItem("novaHistory", JSON.stringify(searchHistory));
    renderHistory();

    searchInput.value = "";
    document.getElementById("sidebar").classList.remove("open");
}

searchForm.addEventListener("submit", event => {
    event.preventDefault();
    performSearch(searchInput.value);
});

document.querySelectorAll(".suggestion").forEach(button => {
    button.addEventListener("click", () => {
        performSearch(button.textContent);
    });
});

document.getElementById("newSearch").addEventListener("click", () => {
    results.classList.add("hidden");
    welcome.classList.remove("hidden");
    searchInput.value = "";
    searchInput.focus();
    document.getElementById("sidebar").classList.remove("open");
});

document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "novaTheme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
});

document.getElementById("menuBtn").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("open");
});

if (localStorage.getItem("novaTheme") === "dark") {
    document.body.classList.add("dark");
}

renderHistory();