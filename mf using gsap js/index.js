const mf = document.querySelector('.mf');
let {x, y} = {x: 0, y: 0}

document.body.addEventListener ('mousemove', (e)=> {
  mf.style.opacity = 1;
  x = e.clientX;
  y = e.clientY;
  gsap.to('.mf', {x: `${x}px`, y: `${y}px`, duration: .2})
})

document.body.addEventListener('mouseleave', ()=> {
  mf.style.opacity = 0;
})

const butt = document.querySelector('button');

butt.addEventListener('mouseenter', ()=> {
  // mf.style.scale = 4;
  gsap.to('.mf', {height: '100px', width: '100px', innerText: 'click', duration: .2});
  mf.style.color = 'black';
})

butt.addEventListener('mouseleave', ()=> {
  // console.log(mf.style);
  // mf.style.scale = 1;
  gsap.to('.mf', {height: '20px', width: '20px', innerText: '', duration: .2});
})

butt.addEventListener('click', ()=> {
  console.log('clicked');
})