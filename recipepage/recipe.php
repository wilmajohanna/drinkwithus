<?php
ini_set("display_errors", 1);

function sendJSON($message, $response_code = 200) { 
    header("content-type: application/json");
    http_response_code($response_code);
    echo json_encode($message);
    exit();
}

$name = "";
$image = "";
$ingredients = array();
$instructions = array();
$description = "";

$sentDrink = $_GET["drink"]; 
$drinksData = file_get_contents("../recipepage/drinksData.json");
$drinks = json_decode($drinksData, true);

foreach ($drinks as $drink) {
    if ($drink["name"] == $sentDrink) {
        $name = $drink["name"];
        $image = $drink["image"];
        $ingredients = $drink["ingredients"] ?? array();
        $instructions = $drink["instructions"] ?? array();
        $description = $drink["description"];
        break;
    }
}

if (empty($name)) {
    $errorMessage = ["error" => "Drink not found"];
    sendJSON($errorMessage, 404);
}


// Skapa en array med relevant data
$response = array(
    "name" => $name,
    "image" => $image,
    "ingredients" => array_values($ingredients),
    "instructions" => array_values($instructions),
    "description" => $description
);

// Skicka JSON response till JavaScript (recipe.js)
sendJSON($response);

?>