"use strict";

const register_link = document.getElementById("register_link");
const close_button = document.getElementById("close_button");
const cover_background = document.getElementById("cover");
const register_box = document.getElementById("register");
const login_box = document.getElementById("login");

function register_or_login_box(event) {

    if (cover_background.querySelector("#content").style.visibility === "hidden") { // Ifall vi stänger rutan och vill öppna den igen
        cover_background.querySelector("#content").style.visibility = "visible";
        cover_background.querySelector("#login").style.visibility = "visible";
        cover_background.querySelectorAll("#login > *").forEach(item => item.style.visibility = "visible");

        document.getElementById("login_or_register_button").textContent = "LOG IN";
        document.getElementById("register_link").textContent = "No account? Register";
        cover_background.querySelectorAll("*").forEach(dom => dom.style.visibility = "visible");
        document.getElementById("reg_pass").style.visibility = "hidden";
        document.getElementById("first_name").style.visibility = "hidden";

        register_link.style.visibility = "visible";
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
        register_link.style.visibility = "visible";

    } else {
        cover_background.style.visibility = "visible";
    }
};

function login_or_logout(event) {
    if (cover_background.style.visibility === "hidden") {
        cover_background.style.visibility = "visible";
    }
    if (login_home.textContent === "LOG IN") {
        register_or_login_box();
        popup_box();
        document.querySelectorAll(".hearts").forEach(heart => heart.style.visibility = "hidden");
    } else {
        localStorage.clear();
        document.querySelectorAll(".hearts").forEach(heart => heart.remove());
        login_home.textContent = "LOG IN";
        favourite_button.remove();
        location.reload();
    }
}

login_home.addEventListener("click", login_or_logout); // click event till login_home


function x_button(event) {
    cover_background.style.visibility = "hidden";
    cover_background.querySelectorAll("*").forEach(dom => dom.style.visibility = "hidden");
    document.querySelector("#register_link").style.visibility = "visible";
    register_link.style.visibility = "hidden";

};

close_button.addEventListener("click", x_button);


function css_switch(event) {

    let register_link = document.querySelector("#register_link");
    let login_or_register_button = document.querySelector("#login_or_register_button");
    let register_box = document.getElementById("register");
    let login_box = document.getElementById("login");

    if (register_link.textContent === "Already have an account? Login") {
        register_box.style.visibility = "hidden";
        login_box.style.visibility = "visible";
        register_link.textContent = "No account? Register";
        login_or_register_button.textContent = "LOG IN";
        document.querySelectorAll(".registration").forEach(reg_input => reg_input.style.visibility = "hidden");
        document.querySelectorAll(".logination").forEach(log_input => log_input.style.visibility = "visible");
    } else {
        login_box.style.visibility = "hidden";
        register_box.style.visibility = "visible";
        register_link.textContent = "Already have an account? Login";
        login_or_register_button.textContent = "REGISTER";
        document.querySelectorAll(".logination").forEach(reg_input => reg_input.style.visibility = "hidden");
        document.querySelectorAll(".registration").forEach(log_input => log_input.style.visibility = "visible");
    }
};

register_link.addEventListener("click", css_switch); // Ändrar från Login till registrering


if (login_home.textContent === "LOG IN") {

    document.querySelectorAll(".hearts").forEach(heart => { heart.style.visibility = "hidden" });
} else {
    document.querySelectorAll(".hearts").forEach(heart => { heart.style.visibility = "visible" });
    favourite_button.addEventListener("click", relocateToFavourites);

}
/*----------------------------*/

if (document.getElementById("see_all") !== null) {
    const see_all_button = document.getElementById("see_all");
    see_all_button.addEventListener("click", relocateToAllRecipes);
}