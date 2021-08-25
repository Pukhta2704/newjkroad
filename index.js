const menuIcon = document.getElementById("bars");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
  document.getElementById("navbar").classList.toggle("open");
});
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
var target = document.querySelector(".tabs");
var targetTwo = document.querySelector(".header");
document.addEventListener("scroll", () => {
  if (window.scrollY >= target.getBoundingClientRect().top) {
    document.querySelector(".menu-icon").style.color = "black";
  }
  if (window.scrollY <= targetTwo.getBoundingClientRect().top) {
    document.querySelector(".menu-icon").style.color = "white";
  }
});
