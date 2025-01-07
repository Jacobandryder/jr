const expandButton = document.getElementById("expand-button");
const deExpandButton = document.getElementById("de-expand-button");
const gameIframe = document.getElementById("game-iframe");

// Expand the game
expandButton.addEventListener("click", () => {
    gameIframe.style.display = "block"; // Show the game
    expandButton.style.display = "none"; // Hide expand button
    deExpandButton.style.display = "inline-block"; // Show de-expand button
});

// De-expand (hide) the game
deExpandButton.addEventListener("click", () => {
    gameIframe.style.display = "none"; // Hide the game
    deExpandButton.style.display = "none"; // Hide de-expand button
    expandButton.style.display = "inline-block"; // Show expand button
});
