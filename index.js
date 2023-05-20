"use strict";

// dom content loaded
document.addEventListener("DOMContentLoaded", () => {
  const themeImages = document.querySelectorAll(".theme_container > .fp_images");

  // gör så att vi kan klicka på enbart bilden för att komma till theme ist för hela containern
  themeImages.forEach((themeSingleImage) => {
    themeSingleImage.addEventListener("click", () => {
      console.log(themeSingleImage);

      // Retrieve theme name from clicked container's p element
      // Tar bort mellanrummet i drinkname

      const drink_name =
        themeSingleImage.parentElement.querySelector("p").textContent;
      relocateToTheme(drink_name.replace(/ /g, ""));
      // G = global -> global e för alla drinknamn
    });
  });
});

// Function to relocate to theme page with theme name as query parameter
function relocateToTheme(themeName) {
  window.location.replace(`../themepage/index.php?theme=${themeName}`);
}

/// -------------------------------------------------  recipe.js   ---------------------------------------------------------------- //


// Det här under bör vara med på recipe sidan.
document.querySelectorAll(".theme_container").forEach((item) => item.addEventListener("click", fetch_drink_page));

// Function to relocate to recipe page with drink name as query parameter
function relocateToRecipe(drinkName) {
  window.location.replace(`../recipepage/index.php?drink=${drinkName}`);
}
