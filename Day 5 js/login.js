const loginUserName = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("loginButton");
const formLogin = document.getElementById("formLogin");
formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
        loginUserName.value === window.localStorage.getItem("username") &&
        loginPassword.value === window.localStorage.getItem("password")
    ) {
        window.location.href = "https://www.google.com";
    } else alert("wrong information");
});
