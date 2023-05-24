<?php
ini_set("display_errors", 1);

$request_method = $_SERVER["REQUEST_METHOD"];

function sendJSON($message, $statuscode = 200) {
    header("Content-Type: application/json");
    http_response_code($statuscode);
    echo json_encode($message);
    exit();
}

// Retrieve drink data
$drinkJSON = file_get_contents("../recipepage/drinksData.json");
$all_drinks = json_decode($drinkJSON, true);

// Retrieve user data
$usersJSON = file_get_contents("../popupbox/users.json"); 
$all_users = json_decode($usersJSON, true);

// Retrieve the received information
$username = $_GET["un"];

$message = [];
$favorite_drinks = [];

foreach ($all_users as $user) {
    if ($username == $user["username"]) {
        $fav_drinks = $user["fav_drinks"];

        foreach ($fav_drinks as $fav_drink) {
            foreach ($all_drinks as $drink) {
                if ($fav_drink == $drink["id"]) {
                    $favorite_drinks[] = $drink;
                }
            }
        }

        sendJSON($favorite_drinks);
    }
}

$message = ["message" => "User not found or has no favorite drinks."];
sendJSON($message, 404);
?>
