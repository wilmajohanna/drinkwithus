<?php

ini_set("dislpay_errors", 1);

$sentTheme = $_GET["theme"];
$drinksData = file_get_contents ("../JSON/drinksData.json");
$themes = json_decode ($drinksData, true);

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
    <link rel="stylesheet" href="../css/theme.css">
    <title>Document</title>
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

    <div id="theme_wrapper">
        <?php 
            foreach ($themes as $drinks) {
                if($drinks["theme"] == $sentTheme){
                    
                    $theme = $drinks ["theme"];
                    $name = $drinks ["name"];
                    $theme_image = $drinks ["image"];
        
                    echo  "<div class='theme_container'>";
                        echo "<img class='theme_pic' src= $theme_image alt=''>";
                        echo "<div class='theme_text'>";
                            echo "<h1  class='theme_name'>$name</h1>";
                        echo "</div>";
                    echo "</div>";
                }  
            }?>
    </div>

    <script src="../js/theme.js"></script>


</body>

</html>