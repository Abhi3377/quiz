var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}



function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    console.log(slides.length);
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(slideIndex);
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    console.log(slideIndex);
}
var modal = document.getElementById('myModal');
var btn = document.getElementById("end");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

document.getElementById("yes").onclick=function () {
    window.location.href='/';
};
document.getElementById("no").onclick=function () {
    modal.style.display = "none";
};



