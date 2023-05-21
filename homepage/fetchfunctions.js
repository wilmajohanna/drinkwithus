"use strict";
const login_register_button = document.getElementById("login_or_register_button");
const login_home = document.getElementById("login_home");
refresh_page();

function refresh_page() {
  if (window.localStorage.getItem("username") !== null) {
    load_loggedOnPage();
    login_home.textContent = "Log out";
  }

};

console.log(window.localStorage);

async function login_or_register(event) {
  console.log("hej");
  const log_user_field = document.querySelector("#log_user");
  const log_pass_field = document.querySelector("#log_pass");

  const reg_user_field = document.querySelector("#reg_user");
  const reg_pass_field = document.querySelector("#reg_pass");
  const firstname_field = document.querySelector("#first_name");
  const lastname_field = document.querySelector("#last_name");

  if (login_register_button.textContent === "Login") {
    try {
      let response = await fetch("../popupbox/index.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: log_user_field.value,
          password: log_pass_field.value,
        }),
      });


      loading_alert();


      if (response.status === 200) {
        let data = await response.json();
        window.localStorage.setItem("username", data.username);
        remove_loading_alert();
        load_loggedOnPage();


        // När användaren loggar in syns html-strukturen för favorit-markörerna

        document.getElementById("cover").remove();
        // Logga in knappen ska bli log out och få en annan funktion som eventListener som loggar ut en!
      } // denna bracket stänger if-satsen.

      if (response.status === 404) {
        alert("hej wilma");
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      let response = await fetch("../popupbox/index.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: document.querySelector("#reg_user").value,
          password: document.querySelector("#reg_pass").value,
          firstname: document.querySelector("#first_name").value,
          lastname: document.querySelector("#last_name").value,
        }),
      });

      let data = await response.json();

      if (!response.ok) {
        console.log("Register Fail");
      } else {
        console.log("Register Success");
      }
      reg_user_field.value = "";
      reg_pass_field.value = "";
      firstname_field.value = "";
      lastname_field.value = "";
    } catch (error) {
      console.log("Error");
    }
  }
}

function fetch_drink_page(event) {
  const drink_name = event.target.parentElement.querySelector("h1").textContent;
  localStorage.setItem("selected_drink", drink_name);
  relocateToRecipe(localStorage.getItem("selected_drink"));

}

function load_loggedOnPage() {

  const favourite_button = document.createElement("button");
  favourite_button.id = "favourite_button";
  favourite_button.textContent = "Favourites";
  document.querySelector("nav").appendChild(favourite_button);

  if (login_home.textContent === "Log in") {
    login_home.textContent = "Log out";
  }

  if (document.getElementById("home") != null) {
    document.getElementById("home").innerHTML = `
            <h2>Need some inspiration?</h2>
  
    <div id="pics">
        <div id="summer" class="theme_container">
            <p>Summer Cocktails</p>
            <img id="summer" src="./images/summer drinks.jpg" alt="summer drink" />
  
             <span class="hearts">&#10084;</span>
        </div>
        <div id="bubbles" class="theme_container">
            <p>Bubbles Cocktails</p>
            <img class="fp_images" id="bubbles" src="./images/Grapefruit_swirl.jpg" alt="" />
          
             <span class="hearts">&#10084;</span>
        </div>
        <div id="retro" class="theme_container">
            <p>Retro Cocktails</p>
            <img  class="fp_images" id="retro" src="./images/Cucumber_gimlet.jpg" alt="" />
  
             <span class="hearts">&#10084;</span>
        </div>
        <div id="lessismore" class="theme_container">
            <p>Less is More Cocktails</p>
            <img class="fp_images" id="lessismore" src="./images/paloma.jpg" alt="" />
  
             <span class="hearts">&#10084;</span>
        </div>
        <div id="punches" class="theme_container">
            <p>Punches</p>
            <img class="fp_images" id="punches" src="./images/Packers.jpg" alt="" />
             <span class="hearts">&#10084;</span>
        </div>
    </div>
  </div>`;

    function load_content(event) {
      document.addEventListener("DOMContentLoaded", () => {
        const themeImages = document.querySelectorAll(".theme_container > .fp_images");

        // gör så att vi kan klicka på enbart bilden för att komma till theme ist för hela containern i detta fallet theme_container i theme.php
        themeImages.forEach((themeSingleImage) => {
          themeSingleImage.addEventListener("click", () => {


            // Hämta temanamn från den klickade containers p-element
            const drink_name =
              themeSingleImage.parentElement.querySelector("p").textContent;
            relocateToTheme(drink_name.replace(/ /g, ""));
            // G = global -> global e för alla drinknamn
            // Tar bort mellanrummet i drinkname

            console.log(themeSingleImage);

          });
        });
      });
    };
    document.querySelectorAll(".theme_container").forEach((item) =>
      item.addEventListener("click", fetch_drink_page)
    );



  };

}
