<?php
$servername = "localhost"; 
$username = ""; 
$password = ""; 
$dbname = "mydb"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$time = $_POST['time'];

$sql = "INSERT INTO appointments (name, phone, date, time) VALUES ('$name', '$phone', '$date', '$time')";

if ($conn->query($sql) === TRUE) {
    echo "Данные успешно добавлены";
} else {
    echo "Ошибка: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
