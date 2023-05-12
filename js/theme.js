
"use strict";

/*
function innerhtml_fetch() {
    fetch("../JSON/drinksData.json")
        .then(response => response.json())
        .then(resource => {
            const pic_container = document.getElementsByClassName("theme_container");
            for (let i = 0; i < 3; i++) {
                pic_container.innerHTML += ` <div
            style="background: url(${resource[0].image}); background-size: cover; background-position: center;" id="summer"
            dataset-theme="bubbles">

            <div class="theme_container">
                <div class="theme_text">
                    <h1 class="theme_name">DRINK</h1>
                </div>
            </div>


            <div class="theme_container">
                <div class="theme_text">
                    <h1 class="theme_name">DRINK</h1>
                </div>
            </div>

            `;
            }
        })
        .catch(err => console.log(err));
}

innerhtml_fetch();
*/