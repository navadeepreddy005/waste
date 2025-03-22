<?php
// Connect to the database
$servername = "localhost";
$username = "root"; // default XAMPP username
$password = ""; // default XAMPP password is empty
$dbname = "waste_collection";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data from POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Hash the password for security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Prepare the SQL statement to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $hashed_password);

    // Execute the query
    if ($stmt->execute()) {
        echo "Registration successful!";
        // Redirect to login page (optional)
        header("Location: login.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the connection
    $stmt->close();
    $conn->close();
}
?>
