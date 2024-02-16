// gsap.set('.contain', {transformOrigin: '50% 50%'})
// gsap.to('.contain', {duration: '1', y: '50vh', x: '50vw', rotate: '145', scale: '1.2', delay: '2', ease: 'bounce'}

// gsap.from('.contain', {duration: '.5', delay: '1', opacity: '0', scale: '0'});


// gsap.from('.circle', {duration: .5, delay: 1, opacity: 0, y: 'random(-200,200)', stagger: .3});

// document.querySelector('button').addEventListener('click', ()=> {
//   gsap.to('.circle', {duration: .25, opacity: 1, y: 0, stagger: .07});
// })

gsap.to('.letter', {delay: .5, duration: 1, y: 0, stagger: .05, ease: 'power4.out'});
gsap.to('.circle', {delay: 3, duration: 1, y: 0, stagger: .05, ease: 'power4.out'});

gsap.to('.contain', {delay: 1, y: '-100vh', duration: 1.8, ease: CustomEase.create("custom", "M0,0 C0.712,0 0.841,0.139 1,1 ")})
