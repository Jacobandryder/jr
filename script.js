function toggleGameSize() {
    const gameContainer = document.getElementById("gameContainer");
    const expandButton = document.getElementById("expandButton");
    const showGameButton = document.getElementById("showGameButton");

    if (gameContainer.classList.contains("hidden")) {
        // Show the game
        gameContainer.classList.remove("hidden");
        showGameButton.classList.add("hidden"); // Hide "Expand" button
    } else {
        // Hide the game
        gameContainer.classList.add("hidden");
        showGameButton.classList.remove("hidden"); // Show "Expand" button
        expandButton.classList.add("hidden"); // Hide "De-expand" button
    }
}

// Update this to ensure proper button visibility
document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById("gameContainer");
    const showGameButton = document.getElementById("showGameButton");
    const expandButton = document.getElementById("expandButton");

    // Ensure proper visibility at page load
    if (gameContainer.classList.contains("hidden")) {
        showGameButton.classList.remove("hidden");
        expandButton.classList.add("hidden");
    } else {
        showGameButton.classList.add("hidden");
        expandButton.classList.remove("hidden");
    }
});
