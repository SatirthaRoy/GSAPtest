const mf = document.querySelector('.mf');
let {x, y} = {x: 0, y: 0}

document.body.addEventListener ('mousemove', (e)=> {
  mf.style.opacity = 1;
  x = e.clientX;
  y = e.clientY;
  mf.style.left = `${x-10}px`;
  mf.style.top = `${y-10}px`;
})

document.body.addEventListener('mouseleave', ()=> {
  mf.style.opacity = 0;
})

const butt = document.querySelector('button');
butt.addEventListener('mouseenter', ()=> {
  console.log('clicked');
})