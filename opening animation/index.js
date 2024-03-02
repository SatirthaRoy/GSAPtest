const openMod = document.querySelector(`.open`);
const menu = document.querySelector('.menu');
const closeMod = document.querySelector('.close');
const items = document.querySelectorAll('.menu-text');
let isOpen = false;

openMod.addEventListener('click', ()=> {
  if(!isOpen) {
    // gsap.to(menu, {height: '100vh', width: '50vw', borderRadius: '25px 150px 150px 0', ease: 'power3.out', duration: 1})
    gsap.to(menu, {scale: 1, borderRadius: '0px 150px 150px 0', ease: 'power3.out', duration: 1})
    gsap.to(openMod, {scale: 0, opacity: 0});
    gsap.to(closeMod, {scale: 1, opacity: 1});
    gsap.to(items, {
      y:0,
      stagger: 0.08,
      ease: 'power3.out',
      delay: .2
    })
    isOpen = !isOpen;
  }
})

closeMod.addEventListener('click', ()=> {
  if(isOpen) {
    let tl = gsap.timeline();
    tl.to(items, {
      y: '110px',
      ease: 'power3.out',
    })
    // .to(menu, {height: '50px', width: '50px', borderRadius: '50%'})
    .to(menu, {scale: 0, borderRadius: '50%', ease: 'power3.out', duration: 1})
    gsap.to(closeMod, {scale: 0, opacity: 0})
    gsap.to(openMod, {scale: 1, opacity: 1, delay: 1});
    isOpen = !isOpen;
  }
})

items.forEach(item => {
  item.addEventListener('mouseenter', (e)=> {
    gsap.to(item.children, {scaleX: 1, duration: .5, ease: 'power3.out'})
  })
  item.addEventListener('mouseleave', (e)=> {
    gsap.to(item.children, {scaleX: 0, duration: .5, ease: 'power3.out'})
  })
})