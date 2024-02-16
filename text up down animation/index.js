const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('mouseenter', (e)=> {
    console.log('mousings');
    let tl = gsap.timeline({
      defaults: {
        ease: 'power2.out'
      }
    });
    tl.to(link.children, {
      duration: .2,
      y: 112,
    })
  })
  
  link.addEventListener('mouseleave', (e)=> {
    console.log('mousings');
    let tl = gsap.timeline({
      defaults: {
        ease: 'linear'
      }
    });
    tl.to('.li', {
      duration: .2,
      y: 0,
    })
  })
})
