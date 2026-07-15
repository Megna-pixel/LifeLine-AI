// Home Page Emergency Cards

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", () => {

        const title = card.querySelector("h3").innerText.trim();

      if (title.includes("Heart Attack")) {
    localStorage.setItem("emergency", "Heart Attack");
}
else if (title.includes("Burns")) {
    localStorage.setItem("emergency", "Burns");
}
else if (title.includes("Snake Bite")) {
    localStorage.setItem("emergency", "Snake Bite");
}
else if (title.includes("Electric Shock")) {
    localStorage.setItem("emergency", "Electric Shock");
}
else if (title.includes("Heavy Bleeding")) {
    localStorage.setItem("emergency", "Heavy Bleeding");
}
else if (title.includes("Choking")) {
    localStorage.setItem("emergency", "Choking");
}

window.location.href = "symptoms.html";

    });
});

// Analyze Button

const analyzeBtn = document.getElementById("analyzeBtn");

if (analyzeBtn) {

    analyzeBtn.addEventListener("click", () => {

        const checkedSymptoms = document.querySelectorAll(
            '#symptomsContainer input[type="checkbox"]:checked'
        );

        const score = checkedSymptoms.length;

        localStorage.setItem("riskScore", score);
        localStorage.setItem("selectedEmergency", localStorage.getItem("emergency"));

        console.log(localStorage.getItem("selectedEmergency"));

        document.body.innerHTML = `
        <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        background:#0B1220;
        color:white;
        font-family:Poppins,sans-serif;
        ">

        <h1 style="color:#ef4444;">🤖 AI is analyzing...</h1>

        <p>Please wait a moment.</p>

        </div>
        `;

        setTimeout(() => {
           window.location.href = "result.html";
        }, 2000);

    });

}

// Dynamic Symptoms

const symptomsContainer = document.getElementById("symptomsContainer");

if (symptomsContainer) {

    const emergency = localStorage.getItem("emergency");

    console.log(emergency);

    const symptoms = {
        "Heart Attack":[
            "❤️ Chest Pain",
            "🫁 Difficulty Breathing",
            "💦 Sweating",
            "😵 Dizziness",
            "💪 Left Arm Pain",
            "🤢 Nausea"
        ],

        "Burns":[
            "🔥 Skin Burn",
            "💥 Blisters",
            "😣 Severe Pain",
            "🩹 Swelling",
            "🥵 Red Skin",
            "🤕 Tissue Damage"
        ],

        "Snake Bite":[
            "🐍 Bite Marks",
            "🩹 Swelling",
            "🤢 Vomiting",
            "😵 Dizziness",
            "🫁 Difficulty Breathing",
            "💓 Fast Heartbeat"
        ],

        "Electric Shock":[
            "⚡ Burn Marks",
            "😵 Unconscious",
            "💪 Muscle Pain",
            "🫁 Breathing Problem",
            "❤️ Chest Pain",
            "🤕 Confusion"
        ],

        "Heavy Bleeding":[
            "🩸 Heavy Blood Loss",
            "😵 Dizziness",
            "🤍 Pale Skin",
            "💔 Deep Cut",
            "🥶 Cold Skin",
            "💓 Fast Pulse"
        ],

        "Choking":[
            "😮 Can't Speak",
            "🫁 Can't Breathe",
            "💙 Blue Lips",
            "🤧 Coughing",
            "😨 Panic",
            "🤲 Holding Neck"
        ]
    };

    symptomsContainer.innerHTML = "";

    symptoms[emergency].forEach((item,index)=>{

        symptomsContainer.innerHTML += `
        <label class="card">
            <input type="checkbox" id="s${index}">
            <h3>${item}</h3>
        </label>
        `;

    });

}

const askAI = document.getElementById("askAI");

if (askAI) {

askAI.addEventListener("click", () => {

const question = document
.getElementById("userQuestion")
.value
.toLowerCase();

let answer = "";


if (
    question.includes("heart") ||
    question.includes("heart attack") ||
    question.includes("chest pain") ||
    question.includes("gunde") ||
    question.includes("gunde noppi")
) {

    answer = "❤️ Stay calm, call 108 immediately, chew aspirin only if advised by a doctor, and do not drive yourself.";

}

else if (
    question.includes("burn") ||
    question.includes("burnt") ||
    question.includes("fire") ||
    question.includes("kalindi") ||
    question.includes("kaalindi")
) {

    answer = "🔥 Cool the burn under running water for 20 minutes. Do not apply ice or toothpaste.";

}

else if (
    question.includes("snake") ||
    question.includes("snake bite") ||
    question.includes("paamu") ||
    question.includes("paamu karichindi")
) {

    answer = "🐍 Keep the person still. Do not cut or suck the wound. Call 108 immediately.";

}

else if (
    question.includes("bleeding") ||
    question.includes("blood") ||
    question.includes("cut") ||
    question.includes("cutting") ||
    question.includes("wound") ||
    question.includes("cheyi cut") ||
    question.includes("hand cut") ||
    question.includes("raktham")
) {

    answer = "🩸 Wash the wound with clean water, apply firm pressure using a clean cloth, cover it with a sterile bandage, and call 108 if bleeding is severe.";

}

else if (
    question.includes("electric") ||
    question.includes("shock") ||
    question.includes("current") ||
    question.includes("karent")
) {

    answer = "⚡ Turn off the electricity first. Never touch the victim until the power is disconnected.";

}

else if (
    question.includes("choking") ||
    question.includes("can't breathe") ||
    question.includes("cant breathe") ||
    question.includes("can't speak") ||
    question.includes("food stuck") ||
    question.includes("oopiri") ||
    question.includes("gonthulo")
) {

    answer = "🫁 Encourage coughing. If severe, perform the Heimlich maneuver if trained and call 108 immediately.";

}

else {

    answer = "🤖 I couldn't understand. Please contact emergency services or ask another first-aid question.";

}


document.getElementById("aiAnswer").innerHTML = `

<div style="
margin-top:20px;
padding:20px;
background:#1e293b;
border-radius:10px;
color:white;
">

${answer}

</div>

`;

});

}


const startAssessment = document.getElementById("startAssessment");

if (startAssessment) {
    startAssessment.addEventListener("click", () => {

        // Default emergency
        localStorage.setItem("emergency", "Heart Attack");

        window.location.href = "symptoms.html";
    });
}