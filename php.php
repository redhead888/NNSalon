<?php
$servername = "localhost"; // имя сервера MySQL
$username = ""; // имя пользователя MySQL
$password = ""; // пароль пользователя MySQL
$dbname = "mydb"; // имя вашей базы данных

// Создаем соединение
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем соединение
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Проверяем, что данные пришли из формы
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
