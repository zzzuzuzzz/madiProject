<?php

$id = $_POST['id'];
$name = $_POST['name'];

setcookie('userId', strval($id), time() + 60 * 60 * 24 * 30 * 12, '/');

$response = [
    "status" => true,
];

echo json_encode($response);