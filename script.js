

const navbar = document.getElementById("navbar");


let precedentPosition = window.scrollY;


window.addEventListener("scroll", function (e) {
  console.log(window.scrollY);

  const actuellePosition = window.scrollY;

  
  if (actuellePosition < precedentPosition) {
    
    navbar.style.top = "0px";
  } else {
    
    navbar.style.top = "-60px";
  }

  
  precedentPosition = actuellePosition;
});


