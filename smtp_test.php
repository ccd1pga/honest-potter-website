<?php
// smtp_test.php — send a test message using PHPMailer
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// === CONFIGURE THESE VALUES ===
$SMTP_HOST  = 'smtp.sendgrid.net';    // your provider (e.g. smtp.mailgun.org)
$SMTP_PORT  = 587;
$SMTP_USER  = 'apikey';               // your username (often 'apikey' for SendGrid)
$SMTP_PASS  = 'YOUR_REAL_API_KEY';    // your SMTP/API key
$FROM_EMAIL = 'no-reply@kelvinkilns.com';
$FROM_NAME  = 'Website Test';
$TO_EMAIL   = 'info@kelvinkilns.com'; // where to send the test
$TO_NAME    = 'Paul Allen';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
$mail->Host       = 'smtp.livemail.co.uk';
$mail->Port       = 587;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->SMTPAuth   = true;

$mail->Username   = 'info@kelvinkilns.com';   // your full email address
$mail->Password   = 'pavwyJ-0xizvy-divqor';  // same password you use to log in to webmail

$mail->setFrom('info@kelvinkilns.com', 'The Honest Potter');
$mail->addAddress('info@kelvinkilns.com', 'Paul Allen'); // can be same for testing

    // Recipients
    $mail->setFrom($FROM_EMAIL, $FROM_NAME);
    $mail->addAddress($TO_EMAIL, $TO_NAME);

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'PHPMailer test message';
    $mail->Body    = '<p>This is a <strong>test email</strong> from your website setup.</p>';
    $mail->AltBody = 'This is a test email from your website setup.';

    // Try to send
    $mail->send();
    echo "<p style='color:green'>✅ Test email sent successfully!</p>";
} catch (Exception $e) {
    echo "<p style='color:red'>❌ Message could not be sent. Mailer Error: {$mail->ErrorInfo}</p>";
}
?>
