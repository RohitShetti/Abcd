function showCustomAlert(message) {
    const alertContainer = document.createElement('div');
    alertContainer.innerHTML = `
        <div style="padding: 20px; background-color: lightgreen; border-radius: 5px; text-align: center;">
            <p>${message}</p>
            <a href="login.html" style="color:blue;">Go to Login Page</a>
        </div>
    `;
    document.body.appendChild(alertContainer);
}

document.getElementById('registerButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validation checks
    if (fullName === "") {
        alert("Full Name is required");
        return;
    }
    if (email === "") {
        alert("Email is required");
        return;
    }
    if (!email.includes('@')) {
        alert("Please enter a valid email address");
        return;
    }
    if (password === "") {
        alert("Password is required");
        return;
    }
    if (confirmPassword === "") {
        alert("Confirm Password is required");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        alert("User already exists");
        return;
    }

    // Store user in localStorage
    users.push({ fullName, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('fullName', fullName); // Store full name for welcome message

    // Show custom alert with anchor tag
    showCustomAlert("User registered successfully!");
});
