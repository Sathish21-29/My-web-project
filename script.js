// ===== PAGE LOAD CHECK =====
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio website loaded successfully");
});

// ===== SMOOTH SCROLL FOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== SIMPLE HOVER EFFECT FOR PROJECTS =====
const projects = document.querySelectorAll(".project");

projects.forEach(project => {
  project.addEventListener("mouseenter", () => {
    project.style.transform = "scale(1.02)";
    project.style.transition = "0.3s ease";
  });

  project.addEventListener("mouseleave", () => {
    project.style.transform = "scale(1)";
  });
});
