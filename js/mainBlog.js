var btnSwitchLogin = document.querySelector(".btn-switch-login")

console.log(btnSwitchLogin);

function switchLogin() {
    window.location = "../html/indexLogin.html";
}

btnSwitchLogin.addEventListener("click",switchLogin);