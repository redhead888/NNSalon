# NNSalon

## Описание

Этот дипломный проект посвящен разработке веб приложения для салона красоты. Основная цель проекта заключается в создании веб-приложения для салона красоты, которое обеспечит пользователям удобный доступ к информации об услугах и возможность записи на прием.

## Установка

Для запуска приложения на вашем устройстве выполните следующие шаги:

1. Cкачайте репозиторий
2. Скачайте PHP рекомендуемая версия 7.4 (https://github.com/nurfawaiq/php-version/blob/master/php-7.4.33-Win32-vc15-x64.rar)
3. Скачайте для PHP пакет mysql
4. Скачайте MysqlWorkBench и создайте в ней свою базу данных, туториал по установке (https://it.vshp.online/#/pages/manuals/mysql_manual)
5. Вставьте в БД код:
```sql
create database mydb;
use mydb;
CREATE TABLE `appointments` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `requests` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```
7. Скачайте VisualStudio (https://code.visualstudio.com/)
8. Откройте файл appointments.php и php.php, замените с сохранением
   ```PHP
    $username = "urUsername";
    $password = "urPassword";
   ```

## Запуск

в директории с проектом выполнить команду
```bash
php -S 127.0.0.1:8000
```
зайдите на 127.0.0.1:8000 В любом удобном для вас браузере

## Дополнительные материалы

- [Ссылка на файл с текстовой частью дипломного проекта](https://docs.google.com/document/d/1zudJlvKhELBzWkOkaN8-OP9xMMzN6xtYghWLe1-UBQ8)