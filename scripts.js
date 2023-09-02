//loader
var loader = document.getElementById("loading");

window.addEventListener("load", function(){
    loader.style.display = "none";
})


//background move
let star = document.getElementById('star');
let moon = document.getElementById("moon");
let back2 = document.getElementById("back2");
let back1 = document.getElementById("back1");
let mid = document.getElementById("mid");
let front2 = document.getElementById("front2");
let front = document.getElementById("front");
let text = document.getElementById("text");
let btn = document.getElementById("btn");

window.addEventListener('scroll', function(){
    //background move
    let value = window.scrollY;

    star.style.left = value * 0.25 + 'px';
    moon.style.top = value * 0.75 + 'px';

    back2.style.top = value * 0.5 + 'px';
    back1.style.top = value * 0.4 + 'px';
    mid.style.top = value * 0.3 + 'px';
    front2.style.top = value * 0.2 + 'px';
    front.style.top = value * 0.0 + 'px';

    text.style.marginTop = value * 1.4 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
})


//nav sticky
document.addEventListener('scroll', () =>{
    const header = document.querySelector('header');

    if(window.scrollY > 0){
        header.classList.add('sticky');
    }
    else{
        header.classList.remove('sticky');
    }
})


//slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
  }
    x[slideIndex-1].style.display = "block";  
}