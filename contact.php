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
$MAX_MESSAGE_WORDS = 300;
$MAX_MESSAGE_CHARS = 2000;

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

function email_safe($value) {
  return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function email_row($label, $value) {
  return '<tr>'
    . '<th style="padding:10px 12px;text-align:left;background:#f6f2eb;border-bottom:1px solid #e1d7ca;width:140px;color:#46372b;">' . email_safe($label) . '</th>'
    . '<td style="padding:10px 12px;border-bottom:1px solid #e1d7ca;color:#2f261f;">' . email_safe($value ?: 'Not provided') . '</td>'
    . '</tr>';
}

function message_word_count($value) {
  $words = preg_split('/\s+/', trim($value), -1, PREG_SPLIT_NO_EMPTY);
  return $words === false ? 0 : count($words);
}

function email_domain_is_allowed($email) {
  $domain = substr(strrchr($email, '@') ?: '', 1);
  if ($domain === '') return false;

  $domain = strtolower($domain);
  $commonTypos = [
    'gamil.com',
    'gmial.com',
    'gmai.com',
    'gmail.co',
    'hotmial.com',
    'hotmal.com',
    'outlok.com',
    'outloo.com',
    'yaho.com',
    'yhoo.com',
  ];

  return !in_array($domain, $commonTypos, true);
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

if (!$firstname || !$lastname || !$email || !$subject || !$content || !$consent) redirect_with(['error' => 'required']);
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || !email_domain_is_allowed($email)) redirect_with(['error' => 'email']);
if ($phone !== '' && !preg_match('/^\d{11}$/', $phone)) redirect_with(['error' => 'phone']);
if (strlen($content) > $MAX_MESSAGE_CHARS || message_word_count($content) > $MAX_MESSAGE_WORDS) redirect_with(['error' => 'message']);

$countries = [
  'GB' => 'United Kingdom',
  'IE' => 'Ireland',
  'US' => 'United States',
  'CA' => 'Canada',
  'EU' => 'European Union',
  'AU' => 'Australia',
  'NZ' => 'New Zealand',
  'Other' => 'Other',
];

$fullName = trim($firstname . ' ' . $lastname);
$countryLabel = $countries[$country] ?? $country;
$consentLabel = $consent ? 'Yes' : 'No';
$remoteAddress = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
$emailSubject = preg_replace('/[\r\n]+/', ' ', $subject);

$plainMessage  = "New enquiry from your website\n\n";
$plainMessage .= "Name: {$fullName}\n";
$plainMessage .= "Email: {$email}\n";
$plainMessage .= "Phone: " . ($phone ?: 'Not provided') . "\n";
$plainMessage .= "Country: {$countryLabel}\n";
$plainMessage .= "Subject: {$emailSubject}\n\n";
$plainMessage .= "Message:\n{$content}\n\n";
$plainMessage .= "Consent: {$consentLabel}\n\n";
$plainMessage .= "Technical details\n";
$plainMessage .= "IP: {$remoteAddress}\n";
$plainMessage .= "User Agent: {$userAgent}\n";

$htmlMessage = '<!doctype html><html><body style="margin:0;padding:0;background:#f8f5ef;font-family:Arial,Helvetica,sans-serif;color:#2f261f;">'
  . '<div style="max-width:680px;margin:0 auto;padding:24px;">'
  . '<div style="background:#ffffff;border:1px solid #e1d7ca;border-radius:8px;overflow:hidden;">'
  . '<div style="padding:20px 24px;background:#46372b;color:#ffffff;">'
  . '<h1 style="margin:0;font-size:22px;line-height:1.3;">New website enquiry</h1>'
  . '<p style="margin:6px 0 0;font-size:14px;color:#efe8dc;">The Honest Potter contact form</p>'
  . '</div>'
  . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">'
  . email_row('Name', $fullName)
  . email_row('Email', $email)
  . email_row('Phone', $phone)
  . email_row('Country', $countryLabel)
  . email_row('Subject', $emailSubject)
  . email_row('Consent', $consentLabel)
  . '</table>'
  . '<div style="padding:20px 24px;">'
  . '<h2 style="margin:0 0 10px;font-size:16px;color:#46372b;">Message</h2>'
  . '<div style="padding:14px 16px;background:#fbfaf7;border:1px solid #e1d7ca;border-radius:6px;line-height:1.5;">'
  . nl2br(email_safe($content), false)
  . '</div>'
  . '</div>'
  . '<div style="padding:16px 24px;background:#f6f2eb;color:#6b5a49;font-size:12px;line-height:1.5;">'
  . '<strong>Technical details</strong><br>'
  . 'IP: ' . email_safe($remoteAddress) . '<br>'
  . 'User Agent: ' . email_safe($userAgent)
  . '</div>'
  . '</div>'
  . '</div>'
  . '</body></html>';

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

  $mail->CharSet = 'UTF-8';
  $mail->isHTML(true);
  $mail->Subject = "[Website] " . $emailSubject;
  $mail->Body    = $htmlMessage;
  $mail->AltBody = $plainMessage;

  $mail->send();
  redirect_with(['sent' => 1]);
} catch (Exception $e) {
  // For debugging only:
  // echo "Mailer Error: {$mail->ErrorInfo}";
  redirect_with(['error' => 1]);
}
