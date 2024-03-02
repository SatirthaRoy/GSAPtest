const openMod = document.querySelector(`.open`);
const menu = document.querySelector('.menu');
const closeMod = document.querySelector('.close');
let isOpen = false;

openMod.addEventListener('click', ()=> {
  if(!isOpen) {
    gsap.to(menu, {height: '100vh', width: '50vw', borderRadius: '25px 150px 150px 0', ease: 'power3.out', duration: 1})
    gsap.to(openMod, {scale: 0, opacity: 0});
    gsap.to(closeMod, {scale: 1, opacity: 1})
    isOpen = !isOpen;
  }
})

closeMod.addEventListener('click', ()=> {
  if(isOpen) {
    gsap.to(menu, {height: '50px', width: '50px', borderRadius: '50%'});
    gsap.to(closeMod, {scale: 0, opacity: 0});
    gsap.to(openMod, {scale: 1, opacity: 1});
    isOpen = !isOpen;
  }
})