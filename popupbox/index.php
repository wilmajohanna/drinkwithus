<?php
ini_set("display_errors", 1);

function sendJSON($message, $statuscode = 200)
{
    header("content-type: application/json");
    http_response_code($statuscode);
    echo json_encode($message);
    exit();
}

// Register
$usersJSON = file_get_contents("users.json");
$all_users = json_decode($usersJSON, true);

$requestJSON = file_get_contents("php://input");
$requestData = json_decode($requestJSON, true);

if (isset($requestData["firstname"], $requestData["username"], $requestData["password"], $requestData["lastname"])) {

    if ($all_users != null) { // om all_users inte är tom
        foreach ($all_users as $user) { // om användaren finns

            $username = $user["username"];

            if ($username == $requestData["username"]) {
                $errorMessage = ["message" => "Conflict (The username is already taken)"];
                sendJSON($errorMessage, 409);
            }
        }
    }

    $message = ["username" => $requestData["username"], "password" => $requestData["password"], "first_name" => $requestData["firstname"], "last_name" => $requestData["lastname"], "fav_drinks" => []];
    $all_users[] = $message;
    file_put_contents("users.json", json_encode($all_users, JSON_PRETTY_PRINT));
    sendJSON($message, 200);
}


// Login


if (isset($requestData["username"], $requestData["password"])) {
    if (isset($requestData["username"], $requestData["password"])) {
        foreach ($all_users as $user) {

            $username = $user["username"];
            $password = $user["password"];

            if ($username == $requestData["username"] and $password == $requestData["password"]) {
                $message = ["username" => $user["username"], "password" => $user["password"]];
                sendJSON($message);
            }
        }

        $errorMessage = ["message" => "User Not Found"];
        sendJSON($errorMessage, 404);
    } else {
        sendJSON("crap 2", 400);    
    }
} else {
    sendJSON("crap", 400);
}



?>