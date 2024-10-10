const questions = [
    "Do you value being right and ethical over everything else?",
    "Do you strive to be helpful and loved by those around you?",
    "Do you often think about achieving success and being recognized?",
    "Do you value your individuality and feel that you see things differently from others?",
    "Do you seek knowledge and understanding above all else?",
    "Do you value security and avoid uncertainty?",
    "Do you crave experiences, excitement, and spontaneity?",
    "Do you feel strongly about protecting yourself and others, especially in situations that seem unjust?",
    "Do you value peace, comfort, and prefer to avoid conflicts?"
];

const descriptions = [
    "Type 1: The Reformer - Rational, idealistic, and principled.",
    "Type 2: The Helper - Caring, nurturing, and always putting others first.",
    "Type 3: The Achiever - Driven, success-oriented, and loves to be recognized.",
    "Type 4: The Individualist - Creative, introspective, and values uniqueness.",
    "Type 5: The Investigator - Knowledgeable, perceptive, and curious.",
    "Type 6: The Loyalist - Committed, responsible, and likes security.",
    "Type 7: The Enthusiast - Spontaneous, adventurous, and always seeking excitement.",
    "Type 8: The Challenger - Assertive, strong-willed, and protective of themselves and others.",
    "Type 9: The Peacemaker - Easygoing, agreeable, and dislikes conflicts."
];

let currentQuestion = 0;
let scores = new Array(9).fill(0);

document.addEventListener("DOMContentLoaded", function() {
    displayQuestion();
});

function displayQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question").textContent = questions[currentQuestion];
    } else {
        displayResult();
    }
}

function answer(response) {
    if (response === 'yes') {
        scores[currentQuestion]++;
    }
    currentQuestion++;
    displayQuestion();
}

function displayResult() {
    const maxScore = Math.max(...scores);
    const personalityType = scores.indexOf(maxScore) + 1;
    const resultMessage = "Your Enneagram personality type is: Type " + personalityType + "\n" + descriptions[personalityType - 1];
    document.getElementById("quiz-container").innerHTML = `<h2>${resultMessage}</h2>`;
}
