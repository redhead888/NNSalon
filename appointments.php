<?php
$servername = "localhost"; // имя сервера MySQL
$username = "u2597607_root"; // имя пользователя MySQL
$password = "root12345678"; // пароль пользователя MySQL
$dbname = "u2597607_root"; // имя вашей базы данных

// Создаем соединение
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем соединение
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Получаем данные из POST запроса
$name = $_POST['name'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$time = $_POST['time'];

// Добавляем данные в базу данных
$sql = "INSERT INTO appointments (name, phone, date, time) VALUES ('$name', '$phone', '$date', '$time')";

if ($conn->query($sql) === TRUE) {
    echo "Данные успешно добавлены";
} else {
    echo "Ошибка: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>