<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

/* 1) Load private secrets from a file OUTSIDE the web root.
   If your web root is .../website_2.0, and you created:
   /Users/paulallen/private_config/mail_secrets.php
   then this path is correct for both local and shared hosting
   where /private_config is placed one level above public_html. */
$secrets = require dirname(__DIR__) . '/private_config/mail_secrets.php';

/* 2) Public config (safe to keep in repo) */
$TO_EMAIL   = 'info@kelvinkilns.com';
$TO_NAME    = 'The Honest Potter';
$FROM_EMAIL = 'info@kelvinkilns.com';
$FROM_NAME  = 'Website Contact Form';

/* 3) Pull SMTP settings from secrets */
$SMTP_HOST   = $secrets['SMTP_HOST'];   // e.g. smtp.livemail.co.uk
$SMTP_PORT   = (int)$secrets['SMTP_PORT']; // 587 or 465
$SMTP_USER   = $secrets['SMTP_USER'];   // full mailbox address
$SMTP_PASS   = $secrets['SMTP_PASS'];   // mailbox password
$SMTP_SECURE = ($secrets['SMTP_SECURE'] ?? 'tls'); // 'tls' or 'ssl'

/* Helper to redirect back to the contact page with a flag */
function redirect_with($params) {
  $qs = http_build_query($params);
  header("Location: /pages/contact.html?$qs");
  exit;
}

/* Basic validation */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') redirect_with(['error' => 1]);

$honeypot = trim($_POST['website'] ?? '');
if ($honeypot !== '') redirect_with(['sent' => 1]); // pretend success for bots

$firstname = trim($_POST['firstname'] ?? '');
$lastname  = trim($_POST['lastname'] ?? '');
$email     = trim($_POST['email'] ?? '');
$phone     = trim($_POST['phonenumber'] ?? '');
$country   = trim($_POST['country'] ?? '');
$subject   = trim($_POST['subject'] ?? '');
$content   = trim($_POST['content'] ?? '');
$consent   = isset($_POST['consent']);

if (!$firstname || !$lastname || !$email || !$subject || !$content || !$consent) redirect_with(['error' => 1]);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) redirect_with(['error' => 1]);

$message  = "New enquiry from your website\n\n";
$message .= "Name: {$firstname} {$lastname}\n";
$message .= "Email: {$email}\n";
$message .= "Phone: {$phone}\n";
$message .= "Country: {$country}\n\n";
$message .= "Subject: {$subject}\n\n";
$message .= "Message:\n{$content}\n\n";
$message .= "Consent: " . ($consent ? "Yes" : "No") . "\n";
$message .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";
$message .= "User Agent: " . ($_SERVER['HTTP_USER_AGENT'] ?? 'unknown') . "\n";

try {
  $mail = new PHPMailer(true);
  $mail->isSMTP();
  $mail->Host       = $SMTP_HOST;
  $mail->Port       = $SMTP_PORT;
  $mail->SMTPSecure = ($SMTP_SECURE === 'ssl')
                        ? PHPMailer::ENCRYPTION_SMTPS
                        : PHPMailer::ENCRYPTION_STARTTLS;
  $mail->SMTPAuth   = true;
  $mail->AuthType   = 'LOGIN'; // works well with Fasthosts
  $mail->Username   = $SMTP_USER;   // ✅ from secrets
  $mail->Password   = $SMTP_PASS;   // ✅ from secrets

  // keep these lines — they define recipients and content
  $mail->setFrom($FROM_EMAIL, $FROM_NAME);
  $mail->addAddress($TO_EMAIL, $TO_NAME);
  $mail->addReplyTo($email, $firstname . ' ' . $lastname);

  $mail->Subject = "[Website] " . $subject;
  $mail->Body    = $message;
  $mail->AltBody = $message;

  $mail->send();
  redirect_with(['sent' => 1]);
} catch (Exception $e) {
  // For debugging only:
  // echo "Mailer Error: {$mail->ErrorInfo}";
  redirect_with(['error' => 1]);
}
