function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Please enter valid credentials.");
    }
}
