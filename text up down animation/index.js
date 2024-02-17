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
      duration: .4,
      y: 112,
    })
  })
  
  link.addEventListener('mouseleave', (e)=> {
    console.log('mousings');
    let tl = gsap.timeline({
      defaults: {
        ease: 'power2.out'
      }
    });
    tl.to('.li', {
      duration: .4,
      y: 0,
    })
  })
})
