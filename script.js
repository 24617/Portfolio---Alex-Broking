const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 2100;


ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, canvas.width, canvas.height);


document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', myFunctionForSticky);

  var navbar = document.getElementById("TabBar");
  var sticky = navbar.offsetTop;

  function myFunctionForSticky() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  function myFunctionForResponsive() {
    navbar.classList.toggle('responsive');
  }
})
