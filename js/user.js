"use strict";



login_register_button.addEventListener("click", login_or_register) // Event Listenern till Login/Register knapparna

async function login_or_register(event) {

    if (event.target.textContent === "Login") {
        console.log("LOG ME IN"); 7

        try {
            let response = await fetch("../php/login.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: user.username,
                    password: user.password,
                })
            })
        } catch (err) {
            console.log("kss");
        }

        let data = await response.json();

        if (response.status === 200) {
            document.querySelector("#css_file").href = "."
        };

        // Anropa funktionen som loggar in!
    } else {


        try {

            let response = await fetch("../php/register.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: document.querySelector("#reg_user").value,
                    password: document.querySelector("#reg_pass").value,
                    firstname: document.querySelector("#first_name").value,
                    lastname: document.querySelector("#last_name").value
                }),
            });

            let data = await response.json();

            if (!response.ok) {
                console.log("Register fail!");
            } else {
                console.log("Register sucess!");

            }
        } catch (error) {
            console.log("error!")

        }

        user_field.value = "";
        pass_field.value = "";

    }

}