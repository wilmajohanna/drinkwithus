"use strict";
/* document.querySelector("#login_home").addEventListener("click", popup_box, register_or_login_box);
document.querySelector("#close_button").addEventListener("click", x_button);
document.querySelector("#register_link").addEventListener("click", css_switch); */


const login_home = document.getElementById("login_home");
const register_link = document.getElementById("register_link");
const close_button = document.getElementById("close_button");
const cover_background = document.getElementById("cover");
/* const register_box = document.getElementById("register");
const login_box = document.getElementById("login"); */
const login_register_button = document.getElementById("login_or_register_button");

function register_or_login_box(event) {

    if (cover_background.querySelector("#content").style.visibility === "hidden") { // Ifall vi stänger rutan och vill öppna den igen
        cover_background.querySelector("#content").style.visibility = "visible";
        cover_background.querySelector("#login").style.visibility = "visible";
        cover_background.querySelectorAll("#login > *").forEach(item => item.style.visibility = "visible");
    }
};

function popup_box(event) { // Gör så att popup_boxen dyker upp

    if (cover_background.querySelector("#content").style.visibility === "hidden") {
        cover_background.style.visibility = "visible";
        cover_background.querySelector("#content").style.visibility = "visible";
        cover_background.querySelector("#login").style.visibility = "visible";
        cover_background.querySelectorAll("#login > *").forEach(item => item.style.visibility = "visible");
        cover_background.querySelector("#content").querySelectorAll(".popup_button").forEach(button => button.style.visibility = "visible");
        close_button.style.visibility = "visible";
    } else {
        cover_background.style.visibility = "visible";
    }
};

login_home.addEventListener("click", popup_box, register_or_login_box); // click event till login_home


function x_button(event) {
    cover_background.style.visibility = "hidden";
    cover_background.querySelectorAll("*").forEach(dom => dom.style.visibility = "hidden");
};



function css_switch(event) {

    let register_link = document.querySelector("#register_link");
    let login_or_register_button = document.querySelector("#login_or_register_button");
    let register_box = document.getElementById("register");
    let login_box = document.getElementById("login");

    if (register_link.textContent === "No account? Register here") {
        register_box.style.visibility = "hidden";
        login_box.style.visibility = "visible";
        register_link.textContent = "No account? Register";
        login_or_register_button.textContent = "Login";
        document.querySelectorAll(".registration").forEach(reg_input => reg_input.style.visibility = "hidden");
        document.querySelectorAll(".logination").forEach(log_input => log_input.style.visibility = "visible");


        let register_element = document.querySelectorAll(".registration")
        register_element.forEach(show_register);

        function show_register(register_elements) {
            register_elements.style.visibility = "visible";
            console.log(register_element)
        }
        /*
        1. Skapar en array av alla element som har klassen "registration" genom querySelectorAll
        2. Kör en forEach på den arrayen och anropar funktionen "visa_elementen_med_klassen_register" på varje element i arrayen.
        3. Funktionen gör bara att de elementen får visiblity = visible
        */
        document.querySelectorAll(".logination").forEach(log_input => log_input.style.visibility = "hidden");
    } else {
        login_box.style.visibility = "hidden";
        register_box.style.visibility = "visible";
        register_link.textContent = "Already have an account? Login";
        login_or_register_button.textContent = "Register";

    }
}

register_link.addEventListener("click", css_switch); // Ändrar från Login till registrering
