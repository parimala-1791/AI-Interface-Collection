const documentText = document.getElementById("documentText");
const wordCount = document.getElementById("wordCount");


// WORD COUNT

documentText.addEventListener("input", updateWordCount);

function updateWordCount() {

    const text = documentText.value.trim();

    if (text === "") {
        wordCount.textContent = "0 words";
        return;
    }

    const words = text.split(/\s+/);

    wordCount.textContent =
        words.length + (words.length === 1 ? " word" : " words");
}


// SUMMARIZE

function summarizeDocument() {

    const text = documentText.value.trim();

    if (text === "") {

        alert("Please enter some document text first.");

        return;
    }


    const sentences = text
        .split(/[.!?]+/)
        .map(sentence => sentence.trim())
        .filter(sentence => sentence.length > 0);


    if (sentences.length <= 2) {

        showSummary(sentences.join(". ") + ".");

        return;
    }


    /*
        Simple demo AI summarization:

        The program selects important sentences
        based on their length and position.
    */

    const stopWords = [
        "the", "is", "a", "an", "and",
        "of", "to", "in", "for", "on",
        "with", "this", "that", "are",
        "was", "were", "as", "by"
    ];


    const words = text
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .split(/\s+/);


    const frequency = {};


    words.forEach(word => {

        if (
            word.length > 3 &&
            !stopWords.includes(word)
        ) {

            frequency[word] =
                (frequency[word] || 0) + 1;
        }

    });


    const scoredSentences = sentences.map(
        (sentence, index) => {

            const sentenceWords =
                sentence
                    .toLowerCase()
                    .replace(/[^\w\s]/g, "")
                    .split(/\s+/);


            let score = 0;


            sentenceWords.forEach(word => {

                if (frequency[word]) {
                    score += frequency[word];
                }

            });


            // Give slightly more importance
            // to the first sentences.

            if (index === 0) {
                score += 2;
            }


            return {
                sentence: sentence,
                score: score,
                index: index
            };

        }
    );


    const summaryCount =
        Math.max(
            2,
            Math.ceil(sentences.length * 0.35)
        );


    const selected =
        scoredSentences
            .sort((a, b) => b.score - a.score)
            .slice(0, summaryCount)
            .sort((a, b) => a.index - b.index);


    const summary =
        selected
            .map(item => item.sentence)
            .join(". ") + ".";


    showSummary(summary);
}


// SHOW SUMMARY

function showSummary(summary) {

    const summaryBox =
        document.getElementById("summaryBox");

    const summaryInfo =
        document.getElementById("summaryInfo");

    const summaryWords =
        document.getElementById("summaryWords");


    summaryBox.innerHTML = `
        <div class="summary-text">

            <h3>✨ AI Generated Summary</h3>

            <p>${summary}</p>

        </div>
    `;


    const words =
        summary
            .split(/\s+/)
            .filter(word => word.length > 0);


    summaryWords.textContent =
        words.length + " words";


    summaryInfo.classList.remove("hidden");
}


// CLEAR

function clearText() {

    documentText.value = "";

    updateWordCount();


    document.getElementById("summaryBox").innerHTML = `

        <div class="empty-state">

            <div class="empty-icon">✨</div>

            <h3>Your summary will appear here</h3>

            <p>
                Add some text and click
                "Summarize Document".
            </p>

        </div>

    `;


    document
        .getElementById("summaryInfo")
        .classList.add("hidden");
}


// COPY SUMMARY

function copySummary() {

    const summary =
        document.querySelector(".summary-text p");


    if (!summary) {
        return;
    }


    navigator.clipboard.writeText(
        summary.textContent
    );


    alert("Summary copied!");
}


// SAMPLE DOCUMENTS

function loadExample(number) {

    let text = "";


    if (number === 1) {

        text = `
        Technology has changed the way people communicate, work, and learn.
        Modern computers and smartphones allow people to access information quickly.
        The internet connects people around the world and provides access to online education.
        Artificial intelligence is also becoming an important part of modern technology.
        These technologies continue to improve productivity and make everyday tasks easier.
        `;

    }


    else if (number === 2) {

        text = `
        Environmental protection is important for maintaining a healthy planet.
        Pollution, deforestation, and climate change are major environmental challenges.
        Planting trees can help improve air quality and protect biodiversity.
        People can also reduce waste by recycling and using reusable products.
        Governments and communities must work together to create a sustainable future.
        `;

    }


    else if (number === 3) {

        text = `
        Artificial intelligence is a technology that enables computers to perform tasks
        that normally require human intelligence.
        AI can analyze large amounts of data, recognize patterns, understand language,
        and generate useful information.
        It is used in healthcare, education, transportation, entertainment, and many other fields.
        As AI continues to develop, responsible and ethical use of the technology is becoming important.
        `;

    }


    documentText.value = text.trim();

    updateWordCount();
}