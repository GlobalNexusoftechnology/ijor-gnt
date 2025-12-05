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
$email = $data->email;
$mobile = $data->mobile;
$country = $data->country;
$comment = $data->comment;

if (
    $fullName !== null && $email !== null && $mobile !== null &&
    $country !== null && $comment !== null
) {
    // Mail
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Port = 587;
    $mail->Username = 'shaikhshizan9833@gmail.com'; // Your Gmail Email
    $mail->Password = 'bvlfqqfwftuqtdnz'; // Your Gmail Password

    $mail->setFrom('shaikhshizan9833@gmail.com', 'Shizan Vasim'); // Sender's Email and Name
    $mail->addAddress('shaikhshizan9833@gmail.com', 'Shaikhh');

    $mail->Subject = 'Contact Us Form Submission';
    $mail->isHTML(true);

    $mailContent = "<h1>IJR Contact Us Form Submission</h1>
    <p>Full Name: " . $fullName . "</p>
    <p>Email: " . $email . "</p>
    <p>Mobile: " . $mobile . "</p>
    <p>Country: " . $country . "</p>
    <p>Comment/Message: " . $comment . "</p>";

    $mail->Body = $mailContent;

    if ($mail->send()) {
        echo json_encode(['message' => 'Message has been sent']);
    } else {
        echo json_encode(['message' => 'Message could not be sent.', 'mailerError' => $mail->ErrorInfo]);
    }
}
?>
