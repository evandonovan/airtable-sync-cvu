<?php
// Use of ternary operator to set defaults for required parameters
// isset use: https://phppot.com/php/isset-vs-empty-vs-is_null
$name = (isset($_POST['name']) ? $_POST['name'] : '');
$email = (isset($_POST['email']) ? $_POST['email'] : '');
$phone = (isset($_POST['phone'])? $_POST['phone'] : '');
echo "<pre>";
echo "Name is: " . $name . PHP_EOL;
echo "Email is: " . $email . PHP_EOL;
echo "Phone is: " . $phone . PHP_EOL;
echo "</pre>";