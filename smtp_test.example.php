<?php
// Copy this file to smtp_test.php only when you need to test SMTP locally.
// Keep smtp_test.php out of Git and never place real mailbox credentials here.

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

$secrets = require dirname(__DIR__) . '/private_config/mail_secrets.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = $secrets['SMTP_HOST'];
    $mail->Port       = (int) $secrets['SMTP_PORT'];
    $mail->SMTPSecure = (($secrets['SMTP_SECURE'] ?? 'tls') === 'ssl')
        ? PHPMailer::ENCRYPTION_SMTPS
        : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->SMTPAuth   = true;
    $mail->AuthType   = 'LOGIN';
    $mail->Username   = $secrets['SMTP_USER'];
    $mail->Password   = $secrets['SMTP_PASS'];

    $mail->setFrom('info@kelvinkilns.com', 'The Honest Potter');
    $mail->addAddress('info@kelvinkilns.com', 'The Honest Potter');

    $mail->Subject = 'PHPMailer test message';
    $mail->Body    = 'This is a test email from the website SMTP setup.';
    $mail->AltBody = $mail->Body;

    $mail->send();
    echo "Test email sent successfully.\n";
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}\n";
}
