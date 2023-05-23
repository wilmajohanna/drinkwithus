"use strict";

document.querySelectorAll(".theme_container").forEach((item) =>
    item.addEventListener("click", fetch_drink_page)
);

// Funktion för att flytta till temasida med temanamn som query parameter
function relocateToTheme(themeName) {
    const previousPage = window.location.href; // Spara den nuvarande sidans URL som den föregående sidan
    window.history.pushState({ previousPage }, "", ""); // Lägg till den föregående sidan i webbläsarens historikstack
    window.location.replace(`../themepage/theme.php?theme=${themeName}`); // Byt till den nya sidan
};
