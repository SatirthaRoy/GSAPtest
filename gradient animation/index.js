
const gradient = document.querySelector(`.gradient1`);
const circle = document.querySelector('.circle');

document.addEventListener('mousemove', (e) => {
  gsap.to(gradient, {x: `${e.clientX}px`, y: `${e.clientY}px`, duration: .7})
})