
//for..in loop för checkboxarna/instructions

for (const inst in random_drink_instructions) {
    document.getElementById("instructions").innerHTML += `
    <input type="checkbox"><a>${random_drink_instructions[inst]}</a>
    <br>`
}

document.querySelector("img").src = random_drink.image;