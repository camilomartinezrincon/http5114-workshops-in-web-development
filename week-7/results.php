<?php
$connect = mysqli_connect(
    'localhost', // Host
    'root', // Username
    'root' // Password
);

mysqli_select_db($connect, 'stop_start_continue');
$query = 'SELECT * FROM results ORDER BY completed_at DESC';

$result = mysqli_query($connect, $query);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Results</title>
</head>
<body>
    <h1>Results</h1>

    <?php
    while($record = mysqli_fetch_assoc($result)){
        echo '<h2>ID: ', $record['id']. '</h2>
            <p>Stop: '.$record['stop'].'</p>
            <p>Start: '.$record['start'].'</p>
            <p>Continue: '.$record['continue'].'</p>
            <p>Posted: '.$record['completed_at'].'</p>
            <hr>';
    }
    ?>

</body>
</html>