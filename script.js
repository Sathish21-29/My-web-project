// Scroll animation for sections
const sections = document.querySelectorAll(".section");

const revealSection = () => {
  const triggerPoint = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerPoint) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

