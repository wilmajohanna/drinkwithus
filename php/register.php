<?php 
ini_set("display_errors", 1);


$usersJSON = file_get_contents ("users.json");
$all_users = json_decode($usersJSON, true);

$requestJSON = file_get_contents("php://input");
$requestData = json_decode($requestJSON, true);

    if (isset($requestData["username"], $requestData["password"])) {

        if($all_users!= null) { // om all_users inte är tom
        foreach ($all_users as $user) { // om användaren finns
            
            $username = $user["username"];
    
            if($username == $requestData["username"]) {
                $errorMessage = ["message" => "Conflict (the username is already taken)"];
                sendJSON($errorMessage, 409);
            } 
        }
    }

    $message = ["username" => $requestData["username"], "password" => $requestData["password"]];
    $all_users[] = $message;
    file_put_contents("users.json", json_encode($all_users, JSON_PRETTY_PRINT));
    sendJSON($message, 200);
}

?>