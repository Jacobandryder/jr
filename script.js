// Populate footer year dynamically
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Game Expand/De-expand Functionality
const expandButton = document.getElementById("expandButton");
const showGameButton = document.getElementById("showGameButton");
const gameContainer = document.getElementById("gameContainer");

// Expand the game
expandButton.addEventListener("click", () => {
    gameContainer.style.display = "block"; // Show the game container
    showGameButton.style.display = "none"; // Hide the "Expand" button
    expandButton.textContent = "De-expand"; // Update button text
});

// De-expand (hide) the game
expandButton.addEventListener("click", () => {
    if (expandButton.textContent === "De-expand") {
        gameContainer.style.display = "none"; // Hide the game container
        showGameButton.style.display = "block"; // Show the "Expand" button
        expandButton.textContent = "Expand"; // Update button text
    }
});

// Alternate expand button when game is hidden
showGameButton.addEventListener("click", () => {
    gameContainer.style.display = "block"; // Show the game container
    showGameButton.style.display = "none"; // Hide this button
    expandButton.textContent = "De-expand"; // Update button text
});

// Form Submission Alert
function submitForm() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}! Your message: "${message}" has been received.`);
    document.getElementById('submitButton').disabled = true; // Prevent duplicate submission
}

// Profile Name Functionality
function toggleDropdown() {
    const userName = prompt("Enter your name:");
    if (userName) {
        document.getElementById("userName").textContent = userName; // Display name next to the Profile button
    }
}
