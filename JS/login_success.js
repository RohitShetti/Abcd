window.onload = function () {
    // Retrieve the full name of the logged-in user from localStorage
    const fullName = localStorage.getItem("loggedInUserFullName") || "Guest";

    // Update the welcome message with the user's name
    document.getElementById("welcomeMessage").innerText = `Welcome, ${fullName}!`;

    // Display the "Login successful" message
    document.getElementById("loginMessage").innerText = "Login successful";

    // Optionally, set a timeout to hide the login success message after a few seconds
    setTimeout(() => {
        document.getElementById("loginMessage").innerText = ""; // Clear the message after 5 seconds
    }, 5000);
};
