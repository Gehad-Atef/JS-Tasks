const registerUserName = document.getElementById("reg-username");
const registerPassword = document.getElementById("reg-password");
const registerButton = document.getElementById("registerButton");
const formRegister = document.getElementById("formRegister");
formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    window.localStorage.setItem("username", registerUserName.value);
    window.localStorage.setItem("password", registerPassword.value);
});
