/**
 * Toggles the display of an individual team member's bio
 * @param {string} bioId - The ID of the bio section to show or hide
 * @param {HTMLButtonElement} button - The button that triggered the action
 */
function toggleBio(bioId, button) {
    const bio = document.getElementById(bioId);

    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";
        button.textContent = "Hide Bio";
    } else {
        bio.style.display = "none";
        button.textContent = "Show Bio";
    }
}

/**
 * Shows the specified section ('bios' or 'vision') and hides the other
 * @param {string} sectionId - The ID of the section to display
 * @param {HTMLButtonElement} button - The active navigation button
 */
function showSection(sectionId, button) {
    const biosSection = document.getElementById("bios");
    const visionSection = document.getElementById("vision");
    const navButtons = document.querySelectorAll(".nav-button");

    navButtons.forEach((navButton) => navButton.classList.remove("active"));
    button.classList.add("active");

    if (sectionId === "bios") {
        biosSection.style.display = "grid";
        visionSection.style.display = "none";
    } else if (sectionId === "vision") {
        biosSection.style.display = "none";
        visionSection.style.display = "grid";
    }
}
