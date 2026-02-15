const users = [
    { username: "admin", password: "1234" },
    { username: "user", password: "abcd" }
];

document.getElementById("loginBtn").addEventListener("click", function () {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const validUser = users.find(user =>
        user.username === username && user.password === password
    );

    if (validUser) {
        message.style.color = "green";
        message.textContent = "Login Successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid Username or Password!";
    }
});
