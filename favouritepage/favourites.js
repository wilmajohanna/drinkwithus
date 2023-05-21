"use strict";

document.addEventListener("DOMContentLoaded", () => {
  
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

    try {
      await fetch("../favouritepage/favourites.php", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data_to_send),
      });
    } catch (error) {
      console.log("An error occurred:", error);
    }
  }

  // Lägger eventlistener på like-knapparna
  const like_buttons = document.querySelectorAll(".hearts");
  like_buttons.forEach((like_button) =>
    like_button.addEventListener("click", send_to_favorites)
  );
});
