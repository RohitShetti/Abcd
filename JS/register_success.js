window.onload = function() {
    const registeredUserName = localStorage.getItem("fullName") || "Guest";
    document.getElementById("userName").innerText = registeredUserName;
};
