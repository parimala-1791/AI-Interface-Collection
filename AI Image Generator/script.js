// ========================================
// AI IMAGE GENERATOR - COLLEGE DEMO
// ========================================

let currentImage = null;


// ========================================
// SUGGESTION BUTTONS
// ========================================

function usePrompt(prompt) {
    document.getElementById("prompt").value = prompt;
    document.getElementById("prompt").focus();
}


// ========================================
// GENERATE IMAGE
// ========================================

function generateImage() {

    const promptBox = document.getElementById("prompt");
    const placeholder = document.getElementById("placeholder");
    const result = document.getElementById("result");
    const resultPrompt = document.getElementById("resultPrompt");
    const button = document.querySelector(".generate-btn");

    const prompt = promptBox.value.trim();

    if (prompt === "") {
        alert("Please describe the image first!");
        return;
    }

    // Loading
    button.disabled = true;
    button.innerHTML = "⏳ Generating...";

    setTimeout(() => {

        placeholder.classList.add("hidden");
        result.classList.remove("hidden");

        resultPrompt.textContent = "Prompt: " + prompt;

        createImage(prompt);

        button.disabled = false;
        button.innerHTML = "✨ Generate Image";

    }, 1000);
}


// ========================================
// CREATE DIFFERENT VISUALS
// ========================================

function createImage(prompt) {

    const text = prompt.toLowerCase();

    let svg;

    // ------------------------------------
    // MAN + FLOWERS
    // ------------------------------------

    if (
        text.includes("man") ||
        text.includes("boy") ||
        text.includes("handsome") ||
        text.includes("flower")
    ) {

        svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="700" height="500">

            <defs>
                <linearGradient id="bg" x1="0" y1="0"
                                x2="0" y2="1">
                    <stop offset="0%" stop-color="#ffd6e7"/>
                    <stop offset="100%" stop-color="#fff4df"/>
                </linearGradient>
            </defs>

            <rect width="700" height="500"
                  fill="url(#bg)"/>

            <!-- Sun -->
            <circle cx="570" cy="100"
                    r="55"
                    fill="#ffd86b"/>

            <!-- Person head -->
            <circle cx="350" cy="170"
                    r="55"
                    fill="#d49a78"/>

            <!-- Hair -->
            <path d="M295 165
                     Q305 100 355 110
                     Q405 105 410 165
                     Q385 135 350 140
                     Q320 135 295 165"
                  fill="#38251f"/>

            <!-- Body -->
            <path d="M260 470
                     Q270 280 350 270
                     Q430 280 440 470"
                  fill="#334155"/>

            <!-- Shirt -->
            <path d="M310 280
                     L350 330
                     L390 280"
                  fill="#475569"/>

            <!-- Arms -->
            <path d="M275 310
                     Q220 350 250 390"
                  stroke="#d49a78"
                  stroke-width="30"
                  fill="none"/>

            <path d="M425 310
                     Q480 350 450 390"
                  stroke="#d49a78"
                  stroke-width="30"
                  fill="none"/>

            <!-- Flowers -->
            <g>
                <line x1="350" y1="405"
                      x2="350" y2="320"
                      stroke="#3b7a45"
                      stroke-width="8"/>

                <circle cx="350" cy="315"
                        r="18"
                        fill="#ef4444"/>

                <circle cx="330" cy="325"
                        r="18"
                        fill="#f472b6"/>

                <circle cx="370" cy="325"
                        r="18"
                        fill="#facc15"/>

                <circle cx="350" cy="335"
                        r="18"
                        fill="#a855f7"/>
            </g>

            <text x="350" y="465"
                  text-anchor="middle"
                  font-family="Arial"
                  font-size="20"
                  fill="white">
                AI Generated Concept
            </text>

        </svg>`;
    }


    // ------------------------------------
    // ROBOT
    // ------------------------------------

    else if (
        text.includes("robot") ||
        text.includes("android")
    ) {

        svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="700" height="500">

            <defs>
                <linearGradient id="robotbg"
                    x1="0" y1="0"
                    x2="1" y2="1">
                    <stop offset="0%" stop-color="#c4b5fd"/>
                    <stop offset="100%" stop-color="#67e8f9"/>
                </linearGradient>
            </defs>

            <rect width="700" height="500"
                  fill="url(#robotbg)"/>

            <!-- Robot antenna -->
            <line x1="350" y1="100"
                  x2="350" y2="60"
                  stroke="#1e293b"
                  stroke-width="8"/>

            <circle cx="350" cy="50"
                    r="12"
                    fill="#ef4444"/>

            <!-- Robot head -->
            <rect x="245" y="110"
                  width="210"
                  height="150"
                  rx="35"
                  fill="#e2e8f0"
                  stroke="#334155"
                  stroke-width="8"/>

            <!-- Eyes -->
            <circle cx="305" cy="175"
                    r="22"
                    fill="#22d3ee"/>

            <circle cx="395" cy="175"
                    r="22"
                    fill="#22d3ee"/>

            <!-- Mouth -->
            <rect x="310" y="215"
                  width="80"
                  height="15"
                  rx="8"
                  fill="#334155"/>

            <!-- Body -->
            <rect x="275" y="280"
                  width="150"
                  height="150"
                  rx="25"
                  fill="#94a3b8"
                  stroke="#334155"
                  stroke-width="8"/>

            <!-- Arms -->
            <line x1="275" y1="315"
                  x2="210" y2="380"
                  stroke="#64748b"
                  stroke-width="30"/>

            <line x1="425" y1="315"
                  x2="490" y2="380"
                  stroke="#64748b"
                  stroke-width="30"/>

            <text x="350" y="470"
                  text-anchor="middle"
                  font-family="Arial"
                  font-size="20"
                  fill="#ffffff">
                AI Generated Robot
            </text>

        </svg>`;
    }


    // ------------------------------------
    // FUTURISTIC CITY
    // ------------------------------------

    else if (
        text.includes("city") ||
        text.includes("futuristic") ||
        text.includes("building")
    ) {

        svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="700" height="500">

            <defs>
                <linearGradient id="citybg"
                    x1="0" y1="0"
                    x2="0" y2="1">
                    <stop offset="0%" stop-color="#111827"/>
                    <stop offset="100%" stop-color="#312e81"/>
                </linearGradient>
            </defs>

            <rect width="700"
                  height="500"
                  fill="url(#citybg)"/>

            <!-- Moon -->
            <circle cx="570"
                    cy="100"
                    r="50"
                    fill="#fde68a"/>

            <!-- Buildings -->

            <rect x="30" y="250"
                  width="90"
                  height="250"
                  fill="#1e293b"/>

            <rect x="140" y="180"
                  width="100"
                  height="320"
                  fill="#334155"/>

            <rect x="260" y="230"
                  width="90"
                  height="270"
                  fill="#475569"/>

            <rect x="370" y="140"
                  width="110"
                  height="360"
                  fill="#1e293b"/>

            <rect x="500" y="210"
                  width="90"
                  height="290"
                  fill="#334155"/>

            <rect x="610" y="170"
                  width="70"
                  height="330"
                  fill="#475569"/>

            <!-- Windows -->

            <g fill="#67e8f9">

                <rect x="55" y="280"
                      width="20" height="20"/>

                <rect x="90" y="280"
                      width="20" height="20"/>

                <rect x="165" y="220"
                      width="20" height="20"/>

                <rect x="200" y="220"
                      width="20" height="20"/>

                <rect x="285" y="270"
                      width="20" height="20"/>

                <rect x="395" y="180"
                      width="20" height="20"/>

                <rect x="435" y="180"
                      width="20" height="20"/>

                <rect x="525" y="250"
                      width="20" height="20"/>

                <rect x="640" y="210"
                      width="18" height="18"/>

            </g>

            <text x="350" y="465"
                  text-anchor="middle"
                  font-family="Arial"
                  font-size="20"
                  fill="#67e8f9">
                AI FUTURISTIC CITY
            </text>

        </svg>`;
    }


    // ------------------------------------
    // BEACH
    // ------------------------------------

    else if (
        text.includes("beach") ||
        text.includes("sea") ||
        text.includes("ocean")
    ) {

        svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="700" height="500">

            <defs>
                <linearGradient id="beach"
                    x1="0" y1="0"
                    x2="0" y2="1">
                    <stop offset="0%" stop-color="#7dd3fc"/>
                    <stop offset="100%" stop-color="#bae6fd"/>
                </linearGradient>
            </defs>

            <rect width="700"
                  height="500"
                  fill="url(#beach)"/>

            <circle cx="560" cy="100"
                    r="60"
                    fill="#fde68a"/>

            <!-- Ocean -->
            <rect y="260"
                  width="700"
                  height="130"
                  fill="#38bdf8"/>

            <!-- Sand -->
            <rect y="390"
                  width="700"
                  height="110"
                  fill="#facc15"/>

            <!-- Palm tree -->
            <rect x="120" y="210"
                  width="25"
                  height="210"
                  fill="#92400e"/>

            <path d="M130 220
                     Q70 170 40 190
                     Q90 210 130 235
                     Q90 150 75 135
                     Q125 160 140 215
                     Q145 150 190 135
                     Q175 185 145 220"
                  fill="#15803d"/>

            <text x="350" y="465"
                  text-anchor="middle"
                  font-family="Arial"
                  font-size="20"
                  fill="#78350f">
                AI BEACH CONCEPT
            </text>

        </svg>`;
    }


    // ------------------------------------
    // GALAXY / SPACE
    // ------------------------------------

    else if (
        text.includes("galaxy") ||
        text.includes("space") ||
        text.includes("star") ||
        text.includes("planet")
    ) {

        svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="700" height="500">

            <rect width="700"
                  height="500"
                  fill="#09090b"/>

            <!-- Stars -->

            <g fill="white">

                <circle cx="80" cy="80" r="3"/>
                <circle cx="150" cy="140" r="4"/>
                <circle cx="230" cy="70" r="3"/>
                <circle cx="310" cy="130" r="4"/>
                <circle cx="420" cy="70" r="3"/>
                <circle cx="520" cy="150" r="4"/>
                <circle cx="620" cy="80" r="3"/>
                <circle cx="100" cy="300" r="4"/>
                <circle cx="600" cy="320" r="3"/>

            </g>

            <!-- Planet -->

            <circle cx="350"
                    cy="250"
                    r="110"
                    fill="#8b5cf6"/>

            <ellipse cx="350"
                     cy="250"
                     rx="170"
                     ry="40"
                     fill="none"
                     stroke="#c4b5fd"
                     stroke-width="12"/>

            <text x="350" y="450"
                  text-anchor="middle"
                  font-family="Arial"
                  font-size="20"
                  fill="#c4b5fd">
                AI SPACE CONCEPT
            </text>

        </svg>`;
    }


    // ------------------------------------
    // FOREST
    // ------------------------------------

    else if (
        text.includes("forest") ||
        text.includes("tree") ||
        text.includes("nature")
    ) {

        svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="700" height="500">

            <defs>
                <linearGradient id="forest"
                    x1="0" y1="0"
                    x2="0" y2="1">
                    <stop offset="0%" stop-color="#86efac"/>
                    <stop offset="100%" stop-color="#166534"/>
                </linearGradient>
            </defs>

            <rect width="700"
                  height="500"
                  fill="url(#forest)"/>

            <!-- Trees -->

            <g fill="#14532d">

                <polygon points="100,420 180,180 260,420"/>
                <polygon points="230,420 310,150 390,420"/>
                <polygon points="380,420 460,170 540,420"/>
                <polygon points="500,420 580,200 660,420"/>

            </g>

            <!-- Sun -->

            <circle cx="350"
                    cy="90"
                    r="50"
                    fill="#fde047"/>

            <text x="350" y="465"
                  text-anchor="middle"
                  font-family="Arial"
                  font-size="20"
                  fill="white">
                AI NATURE CONCEPT
            </text>

        </svg>`;
    }


    // ------------------------------------
    // DEFAULT
    // ------------------------------------

    else {

        svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="700" height="500">

            <defs>
                <linearGradient id="default"
                    x1="0" y1="0"
                    x2="1" y2="1">
                    <stop offset="0%" stop-color="#c7d2fe"/>
                    <stop offset="50%" stop-color="#ddd6fe"/>
                    <stop offset="100%" stop-color="#fbcfe8"/>
                </linearGradient>
            </defs>

            <rect width="700"
                  height="500"
                  fill="url(#default)"/>

            <circle cx="350"
                    cy="240"
                    r="120"
                    fill="#ffffff"
                    opacity="0.7"/>

            <text x="350"
                  y="235"
                  text-anchor="middle"
                  font-family="Arial"
                  font-size="45"
                  font-weight="bold"
                  fill="#4f46e5">
                AI
            </text>

            <text x="350"
                  y="280"
                  text-anchor="middle"
                  font-family="Arial"
                  font-size="20"
                  fill="#475569">
                Generated Concept
            </text>

        </svg>`;
    }


    // ========================================
    // DISPLAY IMAGE
    // ========================================

    const imageURL =
        "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(svg);

    currentImage = imageURL;

    const generatedImage =
        document.querySelector(".generated-image");

    generatedImage.innerHTML = `
        <img
            src="${imageURL}"
            alt="AI Generated Image"
            style="
                width:100%;
                height:100%;
                object-fit:cover;
                border-radius:12px;
                display:block;
            "
        >
    `;
}


// ========================================
// DOWNLOAD
// ========================================

function downloadImage() {

    if (!currentImage) {
        alert("Please generate an image first!");
        return;
    }

    const link = document.createElement("a");

    link.href = currentImage;

    link.download = "AI-Generated-Image.svg";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}