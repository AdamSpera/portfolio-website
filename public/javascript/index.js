var profileButton = document.getElementById("profile");
var emailButton = document.getElementById("email");
var emailButton2 = document.getElementById("email2");
var shareButton = document.getElementById("share");

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Onclick for icon buttons
profileButton.addEventListener('click', function () {
  location.href = "https://www.linkedin.com/in/adamtspera/";
});

emailButton.addEventListener('click', function () {
  window.location.href = "mailto:adamspera@hotmail.com";
});
emailButton2.addEventListener('click', function () {
  window.location.href = "mailto:adamspera@hotmail.com";
});

shareButton.addEventListener('click', function () {
  window.location.href = "mailto:";
});