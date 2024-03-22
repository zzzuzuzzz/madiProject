<?php

$value = $_POST['value'];

setcookie('userWork', strval($value), time() + 60 * 60 * 24 * 30 * 12, '/');

$response = [
    "status" => true,
];

echo json_encode($response);