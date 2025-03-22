<?php
// Start the session to track the user once logged in
session_start();

// Database connection variables
$servername = "localhost";
$username = "root"; // Default XAMPP username
$password = ""; // Default XAMPP password is empty
$dbname = "waste_collection"; // Database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the user input from POST
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Query the database for the user with the given email
    $sql = "SELECT id, name, password FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if the user exists
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        
        // Verify the password
        if (password_verify($password, $row['password'])) {
            // Password is correct, log the user in
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['user_name'] = $row['name'];
            
            // Redirect to the homepage (index.html) after successful login
            header("Location: index.html");
            exit(); // Always use exit after header to stop further execution
        } else {
            // Invalid password
            echo "Invalid credentials, please try again.";
        }
    } else {
        // No user found with the given email
        echo "No user found with that email.";
    }

    // Close the connection
    $stmt->close();
    $conn->close();
}
?>
