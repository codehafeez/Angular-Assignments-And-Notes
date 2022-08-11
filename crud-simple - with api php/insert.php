<?php
include("connection_db.php"); 

	$json = json_decode(file_get_contents('php://input'), true);
    $name = $json['name'];
    $age = $json['age'];
    $email = $json['email'];


    $sql = "INSERT INTO api_users (name, age, email) VALUES ('$name', '$age', '$email')";
    if ($con->query($sql) === TRUE) {
        $arr_data[] = array('message' => 'success');
    }
    else {
        $arr_data[] = array('message' => 'Database insert error.'.$con->error);
    }

    echo json_encode($arr_data);

?>
