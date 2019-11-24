<?php

// Use of ternary operator to set defaults for required parameters
// isset use: https://phppot.com/php/isset-vs-empty-vs-is_null
$name = (isset($_POST['name']) ? $_POST['name'] : '');
$email = (isset($_POST['email']) ? $_POST['email'] : '');
$phone = (isset($_POST['phone'])? $_POST['phone'] : '');

// Run the node.js command (mind security and permissions settings)
$command = '/FULL_PATH_TO_SCRIPT/airtable-sync/create.js --name="' . $name . '" --phone="' . $phone . '" --email="' . $email . '"';

echo $command;

//die();

$result = shell_exec($command);

var_dump($result);