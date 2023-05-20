"use strict";

console.log(login_register_button.textContent);
login_register_button.addEventListener("click", login_or_register); // Event Listenern till Login/Register knapparna

async function login_or_register(event) {
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


        // När användaren loggar in syns html-strukturen för favorit-markörerna
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

        document.addEventListener("DOMContentLoaded", () => {
          const themeImages = document.querySelectorAll(
            ".theme_container > .fp_images"
          );

          // Gör så att vi kan klicka på enbart bilden för att komma till theme istället för hela containern
          themeImages.forEach((themeSingleImage) => {
            themeSingleImage.addEventListener("click", () => {
              console.log(themeSingleImage);
              const drink_name =
                themeSingleImage.parentElement.querySelector("p").textContent;
              relocateToTheme(drink_name);

              // Retrieve theme name from clicked container's p element
              // Tar bort mellanrummet i drinkname
            });
          });
        });

        // Lägger eventlistener på like-knapparna
        const like_buttons = document.querySelectorAll(".hearts");
        like_buttons.forEach((like_button) =>
          addEventListener("click", send_to_favorites)
        );

        async function send_to_favorites(event) {
          // Hämtar värdet av "name" inuti den klickade containern
          console.log(event.target.parentElement.querySelector("p").textContent);

          // LocalStorage är ett objekt. Här hämtar vi namnet på användarens namn som vi har sparat i nyckeln "username".
          let current_username = localStorage.getItem("username");
          let drink_name = event.target.parentElement.querySelector("p").textContent;

          let data_to_send = {
            username: current_username,
            drinkname: drink_name,
          };

          await fetch("../favouritepage/favourites.php", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data_to_send),
          });
        }

        document.getElementById("cover").remove();
        // Logga in knappen ska bli log out och få en annan funktion som eventListener som loggar ut en!
      } // denna bracket stänger if-satsen.
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

//Be Adam förklara
function fetch_drink_page(event) {
  const drink_name = event.target.parentElement.querySelector("h1").textContent;
  localStorage.setItem("selected_drink", drink_name);
  relocateToRecipe(localStorage.getItem("selected_drink"));

}
