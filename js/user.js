"use strict";



login_register_button.addEventListener("click", login_or_register) // Event Listenern till Login/Register knapparna

async function login_or_register(event) {

    const log_user_field = document.querySelector("#log_user");
    const log_pass_field = document.querySelector("#log_pass");

    const reg_user_field = document.querySelector("#reg_user");
    const reg_pass_field = document.querySelector("#reg_pass");
    const firstname_field = document.querySelector("#first_name");
    const lastname_field = document.querySelector("#last_name")

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
            let data = await response.json();

            /*  if (response.status === 200) {
                 document.querySelector("#css_file").href = "."
             }; */

            log_user_field.value = "";
            log_pass_field.value = "";

        } catch (error) {
            console.log("error");
        }


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
            reg_user_field.value = "";
            reg_pass_field.value = "";
            firstname_field.value = "";
            lastname_field.value = "";

        } catch (error) {
            console.log("error!")

        }



    }

}