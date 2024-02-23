let year = document.querySelector("#year");

$(document).ready(function () {
  year.innerText = new Date().getFullYear();
});

function x(){
  window.location = "maintence.html"
}