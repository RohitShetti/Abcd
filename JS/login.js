function showCustomAlert(message) {
    const alertContainer = document.createElement('div');
    alertContainer.innerHTML = `
        <div style="padding: 20px; background-color: lightgreen; border-radius: 5px; text-align: center;">
            <p>${message}</p>
            <a href="loginSuccesfull.html" style="color:blue;">Go to Dashboard</a>
        </div>
    `;
    document.body.appendChild(alertContainer);
}

document.getElementById("loginForm").addEventListener("submit", handleLogin);

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem("loggedInUser", email);
        localStorage.setItem("loggedInUserFullName", user.fullName); // Storing full name for future reference
        
        // Show custom alert with anchor tag
        showCustomAlert("Login successful!");
        
        // Optionally redirect to the login success page
        window.location.href = "loginSuccesfull.html"; 
    } else {
        alert('Invalid credentials. Please try again.');
    }
}
