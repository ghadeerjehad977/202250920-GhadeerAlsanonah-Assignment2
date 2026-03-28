const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good morning! 👋";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon! 👋";
} else {
  greeting.textContent = "Good evening! 👋";
}

const toggleBtn = document.getElementById("toggleProjectsBtn");
const projectsSection = document.getElementById("projects");

toggleBtn.addEventListener("click", ()=> {
  if (projectsSection.style.display === "none"){
    projectsSection.style.display = "block";
  }
  else{
    projectsSection.style.display = "none";
  }
})
