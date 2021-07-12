const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    alert("Hello " + savedUsername + "님 Welcome to my Naeflix!");
    location.href="file:///Users/doyoung/Desktop/1st-assignment/introduce.html";
}

loginform.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "introduce.html";
  });