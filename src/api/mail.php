<?php
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$message = trim($_POST['message']);

$fromMail = 'admin@victor-nov-portfolio.netlify.app';
$fromName = 'Contact Form';

$emailTo = 'victornov@bk.ru';
$subject = 'Форма обратной связи с сайта';
$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

$body = "Получено письмо с сайта victor-nov-portfolio.netlify.app \n Имя: $name\nТелефон: $phone \n E-mail: $email\nСообщение: $message";

if (strlen($email) > 0) {
    $mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );
}
