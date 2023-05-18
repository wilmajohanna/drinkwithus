<?php
    ini_set("display_errors", 1);

    function sendJSON($message, $statuscode = 200) {
        header("content-type: application/json");
        http_response_code($statuscode);
        echo json_encode($message);
    
        exit();
    }
    
    //hämta drink
    $drinkJSON = file_get_contents("../recipepage/drinksData.json");
    $all_drinks = json_decode($drinkJSON, true);

    $usersJSON = file_get_contents ("../popupbox/users.json");
    $all_users = json_decode($usersJSON, true);
    
    $requestJSON = file_get_contents("php://input");
    $requestData = json_decode($requestJSON, true);

    if (isset($requestData["username"], $requestData["name"])) {

        if ($all_drinks!= null) {
            foreach ($all_drinks as $drinks) {

                $drinkname = $drinks["id"];

                if($drinkname == $requestData["name"]) {
                    $message = ["drink_id" => $drinks["id"]];
                    
                   // foreach när den hittat rätt dricka users.json
                    // genom att hitta samma användare som har samma username som nyckeln username från datan som tagit emot


                    sendJSON($message);
                }
            }
  }
            $message = ["name" => $requestData["name"], "username" => $requestData["username"]];
            $all_drinks[] = $message;
            file_put_contents("favourite_drink", json_encode($all_users, JSON_PRETTY_PRINT));
            sendJSON($message, 200);
  
    }

    //ändra drink
    // if($SERVER["PATCH_METHOD"] == "PATCH") {
    //     if(isset($requestData[""]))
    // }

    ?>

