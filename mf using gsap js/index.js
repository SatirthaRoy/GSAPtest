const mf = document.querySelector('.mf');
const txt = document.querySelector('.txt');
let {x, y} = {x: 0, y: 0}

document.body.addEventListener ('mousemove', (e)=> {
  x = e.clientX;
  y = e.clientY;
  gsap.to('.mf', {x: `${x}px`, y: `${y}px`, scale: 1, duration: .2})
  gsap.to(txt, {x: `${x}px`, y: `${y}px`, scale: 1, duration: .15})

})

document.body.addEventListener('mouseleave', ()=> {
  gsap.to([mf,txt], {scale: 0})
})

const butt = document.querySelector('button');

butt.addEventListener('mouseenter', ()=> {
  gsap.to('.mf', {height: '100px', width: '100px', duration: .2});
  gsap.to(txt, {backgroundColor: 'black', innerText: 'click'})
  mf.style.color = 'white';
})

butt.addEventListener('mouseleave', ()=> {
  gsap.to('.mf', {height: '80px', width: '80px', duration: .2});
  gsap.to(txt, {backgroundColor: 'white', innerText: ''})
})

butt.addEventListener('click', ()=> {
  console.log('clicked');
})