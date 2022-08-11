<?php
include("connection_db.php"); 

    
    $arr_data = array();
    $sql = "SELECT * FROM api_users";
    $fetchData = mysqli_query($con, $sql);
    while($row = mysqli_fetch_assoc($fetchData)){
        $arr_data[] = $row;
    }
    echo json_encode($arr_data);
    
?>


