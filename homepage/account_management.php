<?php
ini_set("display_errors", 1);

function sendJSON($message, $statuscode = 200)
{
    header("Content-Type: application/json");
    http_response_code($statuscode);
    echo json_encode($message);
    exit();
}


$all_users = json_decode(file_get_contents("../popupbox/users.json"), true); //hämtar innehållet från user.json
$incomingUser = json_decode(file_get_contents("php://input"), true); //decodar från JSON till associativ array och placerar i $all_user


if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    foreach ($all_users as $userIndex => $user) { //Kontrollerar om användarnamnet matchar det skickade användarnamnet 
        $username = $user["username"];
        if ($username == $incomingUser["username"]) { //Om det matchar -> ta bort -> spara uppdateringengen i $all_users
            array_splice($all_users, $userIndex, 1);
            file_put_contents("../popupbox/users.json", json_encode($all_users, JSON_PRETTY_PRINT));
        }
    }
}
?>