/* const login_home = document.getElementById("login_home");
const register_link = document.getElementById("register_link");
 */
/* register_link.addEventListener("click, css_switch"); // Ändrar från Login till registrering

login_home.addEventListener("click", register_or_login_box); // click event till login_home

close_button.addEventListener("click", (event) => { // Event Listenern till stänga knappen
    cover_background.style.visibility = "hidden";
    cover_background.querySelectorAll("*").forEach(dom => dom.style.visibility = "hidden");
}); */
"use strict"

document.querySelector("#register_link").addEventListener("click", css_switch);

document.querySelector("#login_home").addEventListener("click", register_or_login_box);

document.querySelector("#close_button").addEventListener("click", x_button);
