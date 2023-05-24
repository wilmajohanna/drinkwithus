<?php
    ini_set("display_errors", 1);

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
    $requestJSON = file_get_contents("php://input");
    $requestData = json_decode($requestJSON, true);

    $message = [];

    foreach ($all_drinks as $drink) {
        $drinkname = $drink["name"];
        if ($drinkname === $requestData["drinkname"]) {
            $drinkid = $drink["id"];
            
            foreach ($all_users as &$user) {
                if ($user["username"] === $requestData["username"]) {
                    $user["fav_drinks"][] = $drinkid;
                    file_put_contents("../popupbox/users.json", json_encode($all_users, JSON_PRETTY_PRINT));
                    $message = ["message" => "Drink added to favorites successfully."];
                    sendJSON($message, 200);
                }
            }
        }
    }

    $message = ["message" => "Drink or user not found."];
    sendJSON($message, 404);
?>
