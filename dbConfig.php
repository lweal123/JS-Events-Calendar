<?php

$host = '';
$user = '';
$pass = '';
$dbase = 'calendarEvents';

// Create database connection
$db = new mysqli($host, $user, $pass, $dbase);

// Check connection
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}

?>
