
<?php

ini_set("dislpay_errors", 1);

$sentTheme = $_GET["theme"];
$drinksData = file_get_contents ("../recipepage/drinksData.json");
$themes = json_decode ($drinksData, true);


    /* <div id="theme_wrapper">
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
  
    */