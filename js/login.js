const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    alert("Hello " + savedUsername + "님 Welcome to my Naeflix!");
    location.href="https://github.com/horizonn03/1st-assignment/blob/main/introduce.html";
}

loginForm.addEventListener("submit", onLoginSubmit);
