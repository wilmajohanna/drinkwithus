<?php
    ini_set("display_errors", 1);

    function sendJSON($message, $statuscode = 200) {
        header("content-type: application/json");
        http_response_code($statuscode);
        echo json_encode($message);
        
        exit();
    }

    $usersJSON = file_get_contents("users.json");
    $all_users = json_decode($usersJSON, true);

    $requestJSON = file_get_contents("php://input");
    $requestData = json_decode($requestJSON, true);

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if(isset($requestData["username"], $requestData["password"])) {
            foreach ($all_users as $user) {

                $username = $user["username"];
                $password = $user["password"];

                if ($username == $requestData["username"] and $password == $requestData["password"]) {  
                    sendJSON($user); 
                }
            }

            $errorMessage = ["message" => "User Not Found"];
            sendJSON($errorMessage,404);
        }
    }

?>
