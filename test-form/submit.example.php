<?php

// Use of ternary operator to set defaults for required parameters
// isset use: https://phppot.com/php/isset-vs-empty-vs-is_null
// Use of ternary operator to set defaults for required parameters
// isset use: https://phppot.com/php/isset-vs-empty-vs-is_null
if(isset($_POST['First_Name']) && isset($_POST['Last_Name'])) {
	$name = $_POST['First_Name'] . ' ' . $_POST['Last_Name'];
}
else {
	$name = '';
}
$email = (isset($_POST['Email']) ? $_POST['Email'] : '');
$phone = (isset($_POST['Phone'])? $_POST['Phone'] : '');

// Run the node.js command (mind security and permissions settings)
$command = '/FULL_PATH_TO_SCRIPT/airtable-sync/create.js --name="' . $name . '" --phone="' . $phone . '" --email="' . $email . '"';

//echo $command;

//die();

$result = shell_exec($command);

//var_dump($result);