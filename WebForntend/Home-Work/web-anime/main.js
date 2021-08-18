btn = document.querySelector('.avatar');
nav_right = document.querySelector('.nav-right');
input_search = document.querySelector(".input-search");

login = document.querySelector(".login");
signUp = document.querySelector(".signup");

loginBody = document.querySelector(".body");
signUpBody = document.querySelector(".body2");

tick = document.querySelector(".border-button-3");

icon_out = document.querySelector('.icon-out');

btn.addEventListener('click', function(){
    nav_right.style.display = 'block';    
})
icon_out.addEventListener('click',function(){
    nav_right.style.display = "none";
})

input_search.addEventListener('click', function(){
    input_search.style.borderColor = "red";
})
