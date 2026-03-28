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
});

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input, textarea");
  let isValid = true;

  inputs.forEach(input => {
    if(input.value.trim() === ""){
      isValid= false;
    }
  });

  if (!isValid){
    message.textContent = "Please fill all fields";
    message.style.color = "red";
  } else{
    message.textContent = "Message is sent successfully!";
    message.style.color= "lightgreen";
    form.reset();
  }
});
