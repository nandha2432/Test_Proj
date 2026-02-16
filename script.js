let isLogin = true;

let users = [
    { username: "admin", password: "1234" }
];

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const toggleLink = document.getElementById("toggleLink");
const formTitle = document.getElementById("formTitle");
const toggleText = document.getElementById("toggleText");
const message = document.getElementById("message");


// ===== TOGGLE MODE =====
toggleLink.addEventListener("click", function () {

    isLogin = !isLogin;

    message.textContent = "";
    usernameInput.value = "";
    passwordInput.value = "";

    if (isLogin) {
        formTitle.textContent = "Login";
        submitBtn.textContent = "Login";
        toggleText.firstChild.textContent = "Don't have an account? ";
        toggleLink.textContent = "Register";
    } else {
        formTitle.textContent = "Register";
        submitBtn.textContent = "Register";
        toggleText.firstChild.textContent = "Already have an account? ";
        toggleLink.textContent = "Login";
    }
});


// ===== SUBMIT BUTTON =====
submitBtn.addEventListener("click", function () {

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {
        message.style.color = "red";
        message.textContent = "Please fill all fields.";
        return;
    }

    if (isLogin) {

        const user = users.find(u =>
            u.username === username && u.password === password
        );

        if (user) {
        message.style.color = "green";
        message.textContent = "Login Successful!";

        // Redirect after 1 second
        setTimeout(() => {
        window.location.href = "home.html";
        }, 1000);

        }else {
            message.style.color = "red";
            message.textContent = "Invalid username or password!";
        }

        } else {

        const exists = users.find(u => u.username === username);

        if (exists) {
            message.style.color = "red";
            message.textContent = "Username already exists!";
        } else {
            users.push({ username, password });
            message.style.color = "green";
            message.textContent = "Registration Successful!";
        }
    }

});
