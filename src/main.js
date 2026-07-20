const typedText = document.querySelector('#typedText');
const phrase = 'ganesha invitation';
let index = 0;

function typeSearch() {
  if (!typedText || index > phrase.length) return;
  typedText.textContent = phrase.slice(0, index);
  index += 1;
  setTimeout(typeSearch, index === phrase.length + 1 ? 900 : 95);
}

window.addEventListener('load', () => {
  typeSearch();
  setTimeout(() => document.body.classList.add('site-open'), 3400);
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
