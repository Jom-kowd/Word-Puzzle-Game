// Topics and word lists
const topics = {
    fruits: ["apple", "banana", "cherry", "orange", "grape", "mango"],
    animals: ["tiger", "elephant", "giraffe", "monkey", "lion", "zebra"],
    vehicles: ["car", "truck", "bicycle", "airplane", "scooter", "submarine"],
};

let currentWord = ""; // Holds the original word
let currentTopic = ""; // Holds the selected topic

// Function to shuffle the letters of a word
function shuffleWord(word) {
    return word.split("").sort(() => Math.random() - 0.5).join("");
}

// Function to select a topic
function selectTopic(topic) {
    currentTopic = topic;
    document.getElementById("topic-selection").style.display = "none";
    document.getElementById("game").style.display = "block";
    startGame();
}

// Start a new game
function startGame() {
    if (!currentTopic) return;

    const wordList = topics[currentTopic];
    currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    const shuffledWord = shuffleWord(currentWord);

    document.getElementById("shuffled-word").textContent = shuffledWord;
    document.getElementById("guess").value = "";
    document.getElementById("feedback").textContent = "";
}

// Check the player's guess
function checkGuess() {
    const guess = document.getElementById("guess").value.toLowerCase();
    const feedback = document.getElementById("feedback");

    if (guess === currentWord) {
        feedback.textContent = "Correct! 🎉";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Wrong guess, try again!";
        feedback.style.color = "red";
    }
}

// Initialize the game when the page loads
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("game").style.display = "none";
});