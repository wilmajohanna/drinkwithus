<?php
    ini_set("display_errors", 1);

    ?>

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="#">
        <link rel="stylesheet" href="/favouritepage/favorites.css">
        <link rel="stylesheet" href="./css/index.css">
        <link rel="stylesheet" href="./css/loginregister.css">
        <link rel="stylesheet" href="./css/home.css">
    
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

    <div id="section">
      <div id="container">
        <div id="favorites_list">
            <p>You have no favored drinks</p>
          <ul></ul>
        </div>
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
    
    
        <script src="../poupbox/loginregister.js"></script>
        <script src="../homepage/user.js"></script>
        <script src="./index.js"></script>
    
    </body>
    
    </html>
