<?php
    ini_set("display_errors", 1);

    $request_method = $_SERVER[ "REQUEST_METHOD"];

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
    if ($request_method == "PATCH") {

        // Id kopplar till drink -> läggs till i users.json
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
    }
    //Går igenom alla användare -> hittar rätt användare -> går igenom alla favoriter -> går igenom alla drinkar -> lägger till favoritdrinkar för användaren i en array och skickar den
    if($request_method == "GET") {
        $username = $_GET["un"];
        $array_fav_drinks = [];
        
        foreach($all_users as $user) {
            if( $username == $user["username"]) {
                sendJSON();
                $fav_drinks = $user["fav_drinks"];
                
                foreach($fav_drinks as $fav_drink) {
                    
                    foreach($all_drinks as $drink) {
                        if($fav_drink == $drink["id"]) {
                            $array_fav_drinks[] = $drink;
                        } 
                    }
                }
            }

            
        }
        
        sendJSON($array_fav_drinks);
    }

?>
