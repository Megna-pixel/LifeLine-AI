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