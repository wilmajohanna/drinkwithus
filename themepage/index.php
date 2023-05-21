
<?php

ini_set("dislpay_errors", 1);

$sentTheme = $_GET["theme"];
$drinksData = file_get_contents ("../recipepage/drinksData.json");
$themes = json_decode ($drinksData, true);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../index.css">
    <link rel="stylesheet" href="../popupbox/loginregister.css">
    <link rel="stylesheet" href="../recipepage/recipe.css">
    <link rel="stylesheet" href="./theme.css">

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
    <script src="../homepage/fetchfunctions.js"></script>
    <script src="../popupbox/loginregister.js"></script>
    <script src="../allfunctions.js"></script>
    <script src="../pagenav.js"></script>



</body>

</html>