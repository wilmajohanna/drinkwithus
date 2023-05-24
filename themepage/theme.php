<?php
ini_set("dislpay_errors", 1);

$sentTheme = $_GET["theme"];
$drinksData = file_get_contents("../recipepage/drinksData.json");
$themes = json_decode($drinksData, true);

$themeData = array();

foreach ($themes as $drinks) {
    if ($drinks["theme"] == $sentTheme) {
        $theme = $drinks["theme"];
        $name = $drinks["name"];
        $theme_image = $drinks["image"];
    
        
        $object1 = ["theme" => $theme, "name" => $name, "image" => $theme_image];
        array_push($themeData, $object1);
    }
}

echo json_encode($themeData);
exit();

?>