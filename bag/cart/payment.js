// Generate a random 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

// Display an alert with the generated OTP and initiate OTP verification
function displayOTP() {
    var otp = generateOTP();
    alert("OTP: " + otp);

    // Store the OTP in local storage
    localStorage.setItem("otp", otp);
}

// Verify the entered OTP
function verifyOTP() {
    var enteredOTP = document.getElementById("otpInput").value;
    var storedOTP = localStorage.getItem("otp");

    if (enteredOTP === storedOTP) {
        alert("OTP verification successful!");
        // Add your payment logic here after successful OTP verification
        // Redirect to the order placed page
        window.location.href = "order.html";
    } else {
        alert("OTP verification failed! Please try again.");
        // Add your logic for handling OTP verification failure here
    }
}

// Event listener for the "Pay Now" button
document.getElementById("btn").addEventListener("click", function (event) {
    event.preventDefault();
    // Display OTP
    displayOTP();

    // Show OTP verification UI
    document.getElementById("otpInput").style.display = "block";
    document.getElementById("verifyOtpButton").style.display = "block";
});

// Event listener for the "Verify OTP" button
document.getElementById("verifyOtpButton").addEventListener("click", function (event) {
    event.preventDefault();
    verifyOTP();
});
