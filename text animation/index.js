gsap.to('.letter', {delay: .5, duration: 1, y: 0, stagger: .05, ease: 'power4.out'});
gsap.to('.circle', {delay: 3, duration: 1, y: 0, stagger: .05, ease: 'power4.out'});

gsap.to('.contain', {delay: 1, y: '-100vh', duration: 1.8, ease: CustomEase.create("custom", "M0,0 C0.712,0 0.841,0.139 1,1 ")})
