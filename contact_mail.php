<?php
    $toEmail = "info@gtog.co.tz";
    $mailHeaders = "From: " . $_POST["userName"] . "<". $_POST["userEmail"] .">\r\n";
    if(mail($toEmail, $_POST["subject"], $_POST["content"], $mailHeaders)) {
        print "<p class='success'>Message submitted successfully, We will contact you soon!</p>";

    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
    }
?>