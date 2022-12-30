// Fade in the content when the page loads
document.body.style.opacity = 0;
window.addEventListener('load', () => {
  document.body.style.transition = 'opacity 1000ms';
  document.body.style.opacity = 1;
});

// Animate the scrolling when the user clicks on a link in the navigation menu
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Animate the skills section when it comes into view
const skillsSection = document.querySelector('#skills');
const skillsObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    const skillsList = document.querySelectorAll('#skills li');
    skillsList.forEach((skill, index) => {
      setTimeout(() => {
        skill.style.opacity = 1;
      }, index * 250);
    });
  }
});
skillsObserver.observe(skillsSection);