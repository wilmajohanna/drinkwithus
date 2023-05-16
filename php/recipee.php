<?php
ini_set("display_errors", 1);

$sentDrink = $_GET["drink"];
$drinksData = file_get_contents("../JSON/drinksData.json");
$drinks = json_decode($drinksData, true);

$name = null;
$image = null;
$ingredients = null;
$instructions = null;
$description = null;

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
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/index.css">
    <link rel="stylesheet" href="../css/home.css">
    <link rel="stylesheet" href="../css/recipe.css">

    <title>Drink with us</title>
</head>

<body>

    <header>
        <div id="logo">LOGO</div>

        <nav>
            <button id="about_us">About Us</button>
            <button id="login_home">Log in</button>
        </nav>
    </header>

    <div id="options">
        <div class="find"> Find a cocktail</div>
        <div class="make"> Make your own drink</div>
        <div class="inspire"> Need some Inspiration? </div>
        <div class="favourites"> Favourites </div>
    </div>

    <div class="recipe_wrapper">
        <div class="containers" id="info_wrapper">
            <h1 id="drink_name"><?php echo $name; ?></h1>

            <div id="information">
                <div id="desc"><?php echo $description; ?></div>
            </div>
        </div>

        <div class="containers" id="drink_image">
            <img id="drink_bg_image" src="<?php echo $image; ?>">
        </div>

        <div class="containers">
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

        <div class="containers">
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

    <script src="../js/loginregister.js"></script>
    <script src="../js/index.js"></script>
