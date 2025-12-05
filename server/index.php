<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Get raw POST data
$postData = file_get_contents("php://input");

// Decode JSON data
$data = json_decode($postData);

$fullName = $data->fullName;
$mobile = $data->mobile;
$articleTitle = $data->articleTitle;
$articleSubject = $data->articleSubject;
$address = $data->address;
$primaryEmail = $data->primaryEmail;
$alternateEmail = $data->alternateEmail;
$file = $data->file; // File data received as base64 encoded string

if (
    $fullName !== null && $mobile !== null && $articleTitle !== null &&
    $articleSubject !== null && $address !== null && $primaryEmail !== null &&
    $alternateEmail !== null
) {
    // Convert base64 file data to a physical file
    list($type, $fileData) = explode(';', $file);
    list(, $fileData) = explode(',', $fileData);
    $fileData = base64_decode($fileData);
    $fileName = 'ijr-attachment'; 
    
    file_put_contents($fileName, $fileData);

    // Mail
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Port = 587;
    $mail->Username = 'shaikhshizan9833@gmail.com';
    $mail->Password = 'bvlfqqfwftuqtdnz';

    $mail->setFrom('shaikhshizan9833@gmail.com', 'Shizan Vasim');
    $mail->addAddress('shaikhshizan9833@gmail.com', 'Shaikhh');

    $mail->Subject = 'IJR - Online Submission';
    $mail->isHTML(true);

    $mailContent = "<h1>Online Submission</h1>
    <p>Full Name: " . $fullName . "</p>
    <p>Mobile: " . $mobile . "</p>
    <p>Article Title: " . $articleTitle . "</p>
    <p>Article Subject: " . $articleSubject . "</p>
    <p>Address: " . $address . "</p>
    <p>Primary Email: " . $primaryEmail . "</p>
    <p>Alternate Email: " . $alternateEmail . "</p>";

    $mail->Body = $mailContent;

    // Attach the file to the email
    $mail->addAttachment($fileName);

    if ($mail->send()) {
        echo json_encode(['message' => 'Message has been sent']);
    } else {
        echo json_encode(['message' => 'Message could not be sent.', 'mailerError' => $mail->ErrorInfo]);
    }
}

// Delete the file after sending the email
unlink($fileName);
?>