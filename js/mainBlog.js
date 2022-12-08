// get Local User Login 
var dataUserLogin = JSON.parse(localStorage.getItem("dataUserLogin"));
var nameUserLogin = document.querySelector(".nameUserLogin");

// btn login
var btnLogin = document.querySelector(".btn-switch-login");
var btnLogin2 = document.querySelector(".btn-switch-login-2");
var btnSwitchLogin = document.querySelector(".btn-login");

// btn Info 
var btnInfo = document.querySelector(".btn-switch-Info");

// btn out 
var btnOut = document.querySelector(".btn-out");



// show name user nav
var dataUser = [];
dataUser.push(dataUserLogin);
function showNameLogin(dataUser) {
    var strNameLogin = "";
    dataUser.forEach(elementNameLogin => {
        strNameLogin +=`
            <span>${elementNameLogin.emailRegister}</span>
        `
    });
    nameUserLogin.innerHTML = strNameLogin;

};
showNameLogin(dataUser);


// icon user
var checkDisplay = window.getComputedStyle(nameUserLogin).display;
console.log(checkDisplay);

function iconUser() {
    if(checkDisplay === "block") {
        btnLogin.style = `
        display: block;
       `
       btnLogin2.style = `
        display: none;
       `
    } else if(checkDisplay === "none") {
        btnLogin.style = `
        display: none;
       `
       btnLogin2.style = `
        display: block;
       `
    }
};
iconUser(); 

// switch page info
function switchInfo() {
    window.location = "../html/detail.html";
}
btnInfo.addEventListener("click",switchInfo);

// out accout 
function outAccount() {
   nameUserLogin.style = `
     display: none;
   `   
   localStorage.removeItem("dataUserLogin");
   var userInfo = {
    emailRegister: "",
   }
   localStorage.setItem("dataUserLogin",JSON.stringify(userInfo));
   
}
btnOut.addEventListener("click",outAccount);

// switch page login
function switchLogin() {
    window.location = "../html/indexLogin.html"
} 
btnSwitchLogin.addEventListener("click",switchLogin);

