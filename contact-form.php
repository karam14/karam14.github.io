<?php
//if (isset($_POST ['submit'] )) {
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
    $mailTo = "contact@karammo.tech";


    $headers = "From: $email_from \r\n";
    $headers .= "Replay-To: $email_from\r\n";
    mail($mailTo, $email_subject, $email_body, $headers);
//    header("location: Contact.html?mailsend");
//}

if(mail($mailTo, $email_subject, $email_body, $headers)){
    $message = "email sent successfully";
    echo "<script type='text/javascript'>alert('$message');</script>";
    header("location: Contact.html?mailsend");
} else {
echo "The email($email_subject) was NOT sent.";
}
?>