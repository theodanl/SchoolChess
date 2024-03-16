<?php

// Функция для отправки сообщения в Telegram бота
function send_message_to_bot($bot_token, $chat_id, $message) {
    // URL для отправки запроса к Telegram Bot API
    $url = "https://api.telegram.org/bot$bot_token/sendMessage";

    // Данные запроса (формат JSON)
    $data = array(
        'chat_id' => $chat_id,
        'text' => $message
    );

    // Настройка параметров запроса
    $options = array(
        'http' => array(
            'method'  => 'POST',
            'header'  => 'Content-Type: application/json',
            'content' => json_encode($data)
        )
    );

    // Создание контекста запроса
    $context  = stream_context_create($options);

    // Отправка запроса к Telegram Bot API
    $result = file_get_contents($url, false, $context);

    return $result;
}

// Получение данных из POST запроса
$name = $_POST['name'];
$phone_number = $_POST['tel_number_login'];

// Подключение к базе данных SQLite
$db = new SQLite3('member.db');

if(!$db) {
    die("Ошибка подключения к базе данных: " . $db->lastErrorMsg());
}

$sql = "INSERT INTO FormData (name, phone_number) VALUES (:name, :phone_number)";
$stmt = $db->prepare($sql);
$stmt->bindValue(':name', $name, SQLITE3_TEXT);
$stmt->bindValue(':phone_number', $phone_number, SQLITE3_TEXT);


$result = $stmt->execute();

// Проверка успешности выполнения запроса
if($result) {
    echo "Данные успешно добавлены в базу данных.";
    $bot_token = '6014082288:AAGcfQSokQGFBBqi4Ft9YdMIC5VVJZRZFOI'; 
    $chat_id = '5658946057';  //ТУТ ЗАМЕНИТЬ ПО ИНСТРУКЦИИ
    $message = "Новая заявка: $name, телефон: $phone_number";
    send_message_to_bot($bot_token, $chat_id, $message);
} else {
    echo "Ошибка при добавлении данных в базу данных.";
}


$db->close();

?>