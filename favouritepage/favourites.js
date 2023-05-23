"use strict";

document.addEventListener("DOMContentLoaded", () => {

  async function send_to_favorites(event) {
    // Hämtar värdet av "name" inuti den klickade containern
    event.target.style.color = "red";

    // LocalStorage är ett objekt. Här hämtar vi namnet på användarens namn som vi har sparat i nyckeln "username".
    let current_username = localStorage.getItem("username");
    let drink_name = event.target.parentElement.querySelector("p").textContent;
    console.log(drink_name);

    let data_to_send = {
      username: current_username,
      drinkname: drink_name,
    };

    try {
      await fetch("../favouritepage/favourites.php", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data_to_send)

      })

/* 
        .then(response => response.json())
        .then(data => {


          document.getElementById("container").innerHTML =
            <p>User ID: $()</p>;


        }); */



    } catch (error) {
      console.log("An error occurred:", error);
    }
    
    load_loggedOnPage()
  }

  // Lägger eventlistener på like-knapparna
  const like_buttons = document.querySelectorAll(".hearts");
  like_buttons.forEach((like_button) =>
    like_button.addEventListener("click", send_to_favorites)
  );

});

/* function retrieve_favourites(event) {
  const container = document.getElementById("container");



}
 */