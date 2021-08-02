btn = document.querySelector('.avatar');
nav_right = document.querySelector('.nav-right');
input_search = document.querySelector(".input-search")

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