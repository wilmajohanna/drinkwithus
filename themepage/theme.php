<?php
ini_set("dislpay_errors", 1);

function sendJSON($message, $statuscode = 200)
{
    header("Content-Type: application/json");
    http_response_code($statuscode);
    echo json_encode($message);
    exit();
}

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