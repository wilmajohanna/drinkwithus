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
        favourite_button.addEventListener("click", relocateToFavourites);


        document.getElementById("cover").remove();
        document.querySelectorAll(".hearts").forEach(heart => {
          if (login_home.textContent === "Log in") {
            heart.style.visibility = "hidden";
          } else {
            heart.style.visibility = "visible";
          }
        })
      }

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
};

function fetch_drink_page(event) {
  const drink_name = event.target.parentElement.querySelector("p").textContent;
  localStorage.setItem("selected_drink", drink_name);
  relocateToRecipe(localStorage.getItem("selected_drink"));
};

function load_loggedOnPage() {

  const favourite_button = document.createElement("button");
  favourite_button.id = "favourite_button";
  favourite_button.textContent = "Favourites";
  document.querySelector("nav").appendChild(favourite_button);

  if (login_home.textContent === "Log in") {
    login_home.textContent = "Log out";
  }

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
  // document.querySelectorAll(".theme_container").forEach((item) =>
  //   item.addEventListener("click", fetch_drink_page)
  // );
};
