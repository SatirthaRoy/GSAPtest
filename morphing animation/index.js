

let runFun = setInterval(() => {
  let mousex = Math.round(Math.random() * screen.width);
  let mousey = Math.round(Math.random() * screen.height);
  console.log(screen.width, screen.height);
  gsap.to('.gradient1', {x: mousex - 600, y: mousey - 600, duration: 5, ease: 'linear'});
}, 3000);