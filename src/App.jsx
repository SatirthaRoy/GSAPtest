import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP,ScrollTrigger);


function App() {
  const box = useRef([])
  console.log(box);
  
  let tl = useRef();

  useGSAP(() => {
    // gsap.set('.box', {transformOrigin: 'bottom'})
    tl = gsap.timeline({delay: 1});
    box.current.forEach((box, i) => {
      tl.to(box, {scaleY: 0, duration: Math.random() * 1}, 0)
    })
  })


  return (
    <div className="grid grid-cols-10 h-screen w-screen flex-wrap">
      {new Array(100).fill(0).map((o, i) => <div key={i} ref={ref => box.current[i] = ref} className="box origin-top size-auto bg-blue-400"></div>)}
    </div>
  )
}

export default App
