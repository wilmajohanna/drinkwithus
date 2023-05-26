<?php
ini_set("display_errors", 1);

$request_method = $_SERVER["REQUEST_METHOD"];

function sendJSON($message, $statuscode = 200)
{
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

if ($request_method == "PATCH") {
    // Retrieve the received information
    $incomingData = json_decode(file_get_contents("php://input"), true);
    $incomingUsername = $incomingData["username"];
    $incomingDrinkName = $incomingData["drinkname"];
    $incomingDrinkID;

    $message = [];
    $favorite_drinks = [];

    foreach ($all_drinks as $drink) {
        if ($drink["name"] == $incomingDrinkName) {
            $incomingDrinkID = $drink["id"];
        }
    }

    foreach ($all_users as $index => $user) {

        if ($incomingUsername == $user["username"]) {
            $fav_drinks = $user["fav_drinks"];

            if (count($fav_drinks) != 0) {

                for ($i = 0; $i < count($fav_drinks); $i++) {

                    // If-satsen är för att det ej ska bli dupletter.
                    // Den kollar om ID:n redan finns och ifall det gör det tar bort det.
                    if ($fav_drinks[$i] == $incomingDrinkID) {
                        array_splice($fav_drinks, $i, 1);
                        $user["fav_drinks"] = $fav_drinks;
                        // sendJSON($user); Avkommentera detta för att se vad det är som skickas tillbaka
                        $all_users[$index] = $user;
                        file_put_contents("../popupbox/users.json", json_encode($all_users, JSON_PRETTY_PRINT));
                        $message = ["Notification" => "Drink removed!"];
                        sendJSON($message);
                    }

                }
            }


            // Om drickan inte redan finns med i arrayen.
            // Då lägger den till drickan i användarens array.
            $fav_drinks[] = $incomingDrinkID;
            $user["fav_drinks"] = $fav_drinks;
            $all_users[$index] = $user;
            file_put_contents("../popupbox/users.json", json_encode($all_users, JSON_PRETTY_PRINT));
            $message = ["Notification" => "Success"];
            sendJSON($message);

        }
    }
    $message = ["message" => "User not found or has no favorite drinks."];
    sendJSON($message, 404);
}

if ($request_method == "GET") {

    $drinksData = file_get_contents("../recipepage/drinksData.json");
    $all_drinks = json_decode($drinksData, true);
    $sentUsername = $_GET["username"];
    $userDrinkNames = [];
    $userDrinkIDs;

    foreach ($all_users as $index => $user) {
        if ($user["username"] == $sentUsername) {
            $userDrinkIDs = $user["fav_drinks"];
        }
    }

    foreach ($all_drinks as $drink) {
        for ($i = 0; $i < count($userDrinkIDs); $i++) {
            if ($drink["id"] == $userDrinkIDs[$i]) {
                $userDrinkNames[] = $drink;
            }
        }
    }
    sendJSON($userDrinkNames);

    } else {
    $errorMessage = ["error" => "User not found or has no favorite drinks."];
    sendJSON($errorMessage, 404);
    };




?>