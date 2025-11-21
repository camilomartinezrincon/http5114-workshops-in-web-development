<?php

// print_r($_POST);

$connect = mysqli_connect(
    'localhost', // Host
    'root', // Username
    'root' // Password
);

mysqli_select_db($connect, 'stop_start_continue');

$query = 'INSERT INTO results (
        stop,
        start, 
        continue_ans
    ) VALUES (
        "'.$_POST['stop'].'",
        "'.$_POST['start'].'",
        "'.$_POST['continue'].'"
    )';

// echo $query;

mysqli_query($connect, $query);

header('Location: thankyou.html');
exit();