window.addEventListener("load",function(){

let bars=document.querySelectorAll(".progress-bar");

bars.forEach(function(bar){

let width=bar.getAttribute("data-width");

bar.style.width=width+"%";

});

});

const toggle = document.getElementById("themeToggle");

toggle.onclick = function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

toggle.classList.remove("fa-moon");
toggle.classList.add("fa-sun");

}
else{

toggle.classList.remove("fa-sun");
toggle.classList.add("fa-moon");

}

}