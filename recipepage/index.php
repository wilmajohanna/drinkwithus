<?php
ini_set("display_errors", 1);

function sendJSON($message, $response_code = 200) { 
    header("content-type: application/json");
    http_response_code($response_code);
    //echo json_encode($message);
    exit();
}

$sentDrink = $_GET["drink"]; 
$drinksData = file_get_contents("../recipepage/drinksData.json");
$drinks = json_decode($drinksData, true);

foreach ($drinks as $drink) {
    if ($drink["name"] == $sentDrink) {
        $name = $drink["name"];
        $image = $drink["image"];
        $ingredients = $drink["ingredients"];
        $instructions = $drink["instructions"];
        $description = $drink["description"];
        break; // Exit the loop after finding a matching drink
    }
}




function convertNewlinesToBr($text) {
    return nl2br($text);
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../index.css">
    <link rel="stylesheet" href="../popupbox/loginregister.css">
    <link rel="stylesheet" href="./recipe.css">

    <title>Drink with us</title>
</head>

<body>

    <header>
        <div id="logo">LOGO</div>

        <nav>
            <button id="about_us">About Us</button>
            <button id="heart">Favourites</button>
            <button id="login_home">Log in</button>
        </nav>
    </header>


    <div class="recipe_wrapper">
        <div class="containers" id="info_wrapper">
            <h1 id="drink_name"><?php echo $name; ?></h1>

            <div id="information">
                <div id="desc"><?php echo convertNewlinesToBr($description); ?></div>
            </div>
        </div>

        <div class="containers" id="drink_image">
            <img id="drink_bg_image" src="<?php echo $image; ?>">
        </div>

        <div class="containers" id="ingredients">
            <h1>Ingredients</h1>
            <ul id="ingredients">
                <?php
                if (!empty($ingredients)) {
                    foreach ($ingredients as $ingredient) {
                        echo "<li>$ingredient</li>";
                    }
                }
                ?>
            </ul>
        </div>

        <div class="containers" id="instructions">
            <h1>Instructions</h1>
            <ul id="instruction">
                <?php
                if (!empty($instructions)) {
                    foreach ($instructions as $instruction) {
                        echo "<li><input type='checkbox'>$instruction</li>";
                    }
                }
                ?>
            </ul>
        </div>
    </div>

    <div id="cover">
        <div id="content">
            <div id="close_button">X</div>

            <div id="register">
                <input class="registration" id="first_name" type="text" placeholder="First name">
                <input class="registration" id="last_name" type="text" placeholder="Last name">
                <input class="registration" id="reg_user" type="text" placeholder="Username">
                <input class="registration" id="reg_pass" type="password" placeholder="Password">
            </div>

            <div id="login">
                <input class="logination" id="log_user" type="text" placeholder="Username">
                <input class="logination" id="log_pass" type="password" placeholder="Password">
            </div>

            <button class="popup_button" id="login_or_register_button">Login</button>
            <p class="" id="register_link"> No account? Register</p>

        </div>

    </div>

    <script src="../popupbox/loginregister.js"></script>
    <script src="../homepage/fetchfunctions.js"></script>
    <script src="../favouritepage/favourites.js"></script>
    <script src="../pagenav.js"></script>
