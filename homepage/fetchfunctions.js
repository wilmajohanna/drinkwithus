"use strict";
const login_register_button = document.getElementById("login_or_register_button");
const login_home = document.getElementById("login_home");
refresh_page();
const home_button = document.getElementById("home_button");

function refresh_page() {
  if (window.localStorage.getItem("username") !== null) {
    load_loggedOnPage();
    login_home.textContent = "LOG OUT";
  }
};

console.log(window.localStorage);

async function login_or_register(event) {
  console.log("Welcome");
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

      if (response.status === 200) {
        let data = await response.json();
        window.localStorage.setItem("username", data.username);
        load_loggedOnPage();
        favourite_button.addEventListener("click", relocateToFavourites);
        alert("Welcome!")


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
        alert("Error");
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

function load_loggedOnPage() {
  const favourite_button = document.createElement("button");
  favourite_button.id = "favourite_button";
  favourite_button.textContent = "FAVORITES";
  document.querySelector("nav").appendChild(favourite_button);

  if (login_home.textContent === "LOG IN") {
    login_home.textContent = "LOG OUT";
  }
}

async function fetchThemeRecipe(request) {
  let response = await fetch(request);
  let resource = response.json();
  return resource;
}


async function delete_account() {
  const userToDelete = {
    username: localStorage.getItem("username")
  }

  const response = await fetch("./homepage/account_management.php", {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(userToDelete)
  });

  if (response.ok) {
    const resource = await response.json();
    console.log(resource);
  }
}

document.getElementById("delete_p").addEventListener("click", delete_account);