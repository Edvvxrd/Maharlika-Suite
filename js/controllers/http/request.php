<?php
    $conn = new mysqli("localhost", "root", "", "maharlika_db");
    if($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $data = json_decode($_POST['data']);
    // $response = array();
    $sql = "INSERT INTO reservation_list (name, email, room, check_in, check_out) VALUES ('$data->name', '$data->email', '$data->type', '$data->check_in', '$data->check_out')";
    if($conn->query($sql)) {
        echo true;
    } else {
        echo $conn->error;
    }
?>