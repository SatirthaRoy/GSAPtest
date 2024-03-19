// gsap.to('.ball',
// { scrollTrigger: {
//   trigger: '.ball',
//   start: 'center center',
//   markers: true,
//   scrub:1.5,
//   pin:true,
//   toggleActions: "restart none restart none"
// },
//   scale: '2'
// })


gsap.to('.ball',
  {
    scrollTrigger: {
      trigger: '.ball',
      start: 'center 400px',
      end: 'bottom top',
      scrub: .5,
      pin: true,
      markers: true
    },

    scale: 0,
    y: -200

  }
)