<?php
if (isset($_POST ['submit'] )) {
    $name = $_POST ['name'];
    $email_from = $_POST ['email'];
    $visitor_subject = $_POST ['subject'];
    $message = $_POST ['message'];


    $email_subject = "New contact request!";

    $email_body = "You just got a new message! \n\n" .
        "From: $name.\n" .
        "Email: $email_from .\n\n" .
        "Subject: $visitor_subject .\n\n" .
        " Message: $message.\n";
    $mailTo = "karam@karammo.tech";

    $headers = "From: $email_from \r\n";
    $headers .= "Replay-To: $email_from\r\n";
    mail($mailTo, $email_subject, $email_body, $headers);
    header("location: Contact.html?mailsend");
}

