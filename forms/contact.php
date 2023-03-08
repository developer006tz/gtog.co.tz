<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'Gtog site';
$email_subject = $subject;
$email_body = "name: $name.\n".
              "email: $email.\n".
              "subject: $subject.\n".
              "message: $message.\n";

$to = "info@gtog.co.tz";
$headers = "From: $email_from \r\n";
$headers .= "Reply to: $email \r\n" ; 

mail($to,$email_subject,$email_body,$headers);
?>
