const storyBook = document.querySelector('.story-book');
const openingCaption = document.querySelector('.opening-caption');

window.addEventListener('load', () => {
  storyBook?.classList.add('book-awake');

  setTimeout(() => {
    if (openingCaption) openingCaption.textContent = 'Turning the page to your celebration...';
  }, 1700);

  setTimeout(() => document.body.classList.add('site-open'), 4200);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  if (!glow) return;
  glow.style.setProperty('--x', `${event.clientX}px`);
  glow.style.setProperty('--y', `${event.clientY}px`);
});
