// JavaScript do portfólio
// Animação das barras de Skills quando a seção entra em viewport
document.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;

  const onEnter = (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillsSection.classList.add('skills-animate');
        obs.disconnect(); // anima apenas uma vez
      }
    });
  };

  const io = new IntersectionObserver(onEnter, { threshold: 0.25 });
  io.observe(skillsSection);
});
