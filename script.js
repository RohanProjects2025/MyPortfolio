const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  const icon = toggleBtn.querySelector("i");

  if(document.body.classList.contains("light-mode")){
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }else{
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});


// Typing Animation

const roles = [
  "JAVA FULL STACK DEVELOPER",
  "FRONTEND DEVELOPER",
  "BACKEND DEVELOPER",
  "PROBLEM SOLVER"
];

let roleIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect() {
  const currentRole = roles[roleIndex];

  typing.textContent = currentRole.slice(0, charIndex +1);

  charIndex++;

  if(charIndex > currentRole.length){
    
    charIndex = 0;
    
    roleIndex = (roleIndex + 1) % roles.length;
  }
}

setInterval(typeEffect, 150);
