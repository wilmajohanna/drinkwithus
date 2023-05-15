/*"use strict";

// Add event listener to theme container
document.addEventListener("DOMContentLoaded", () => {
    const themeWrapper = document.getElementById("theme_wrapper");

    // Fetch the JSON data
    fetch("../JSON/drinksData.json")
        .then(response => response.json())
        .then(data => {
            // Filter data for a specific theme
            const filteredData = data.filter(theme => theme.theme === themeName);
            // Create theme containers for the filtered data
            filteredData.slice(0, 2).forEach(theme => {
                const themeContainer = document.createElement("div");
                themeContainer.classList.add("theme_container");

                const themeImage = document.createElement("img");
                themeImage.classList.add("theme_pic");
                themeImage.src = theme.image;
                themeImage.alt = "";

                const themeText = document.createElement("div");
                themeText.classList.add("theme_text");

                const themeName = document.createElement("h1");
                themeName.classList.add("theme_name");
                themeName.textContent = theme.name;

                themeText.appendChild(themeName);
                themeContainer.appendChild(themeImage);
                themeContainer.appendChild(themeText);
                themeWrapper.appendChild(themeContainer);
            });
        })
        .catch(error => {
            console.log("Error fetching the data:", error);
        });
}); */

"use strict";

// Retrieve theme name from query parameter
const urlParams = new URLSearchParams(window.location.search);
const themeName = urlParams.get("theme");

// Fetch the JSON data
fetch("../JSON/drinksData.json")
    .then(response => response.json())
    .then(data => {
        // Filter data for the specified theme
        const filteredData = data.filter(theme => theme.theme === themeName);

        // Create theme containers for the filtered data
        const themeWrapper = document.getElementById("theme_wrapper");

        filteredData.slice(0, 2).forEach(theme => {
            const themeContainer = document.createElement("div");
            themeContainer.classList.add("theme_container");

            const themeImage = document.createElement("img");
            themeImage.classList.add("theme_pic");
            themeImage.src = theme.image;
            themeImage.alt = "";

            const themeText = document.createElement("div");
            themeText.classList.add("theme_text");

            const themeName = document.createElement("h1");
            themeName.classList.add("theme_name");
            themeName.textContent = theme.name;

            themeText.appendChild(themeName);
            themeContainer.appendChild(themeImage);
            themeContainer.appendChild(themeText);
            themeWrapper.appendChild(themeContainer);
        });
    })
    .catch(error => {
        console.log("Error fetching the data:", error);
    });

