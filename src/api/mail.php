<?php
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$message = trim($_POST['message']);

$fromMail = 'admin@victor-nov.ru';
$fromName = 'victor-nov.ru Форма';

$emailTo = 'victornov@bk.ru';
$subject = 'Форма обратной связи victor-nov.ru';
$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

$body = "Получено письмо с сайта victor-nov.ru \n Имя: $name\nТелефон: $phone \n E-mail: $email\nСообщение: $message";

if (strlen($email) > 0) {
    $mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );
}
