<?php
$servername = "localhost"; 
$username = ""; 
$password = "";
$dbname = "mydb"; 


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['requestName']);
    $phone = $conn->real_escape_string($_POST['requestPhone']);

    $sql = "INSERT INTO requests (name, phone, reg_date) VALUES ('$name', '$phone', NOW())";

    if ($conn->query($sql) === TRUE) {
        echo "Запись успешно добавлена";
    } else {
        echo "Ошибка: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
