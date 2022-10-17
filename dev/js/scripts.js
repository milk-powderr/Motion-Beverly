

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set("#pre-register-btn",{transformOrigin:"center bottom"})

var registerButtonTL = gsap.timeline({paused:true});
    registerButtonTL
    .to("#first-line",{duration: 1, alpha:0, y:50},"trigger")
    .to("#pre-register-btn i",{duration: 1, rotation:20, delay:0, repeat:-1, yoyo:true},"trigger") 
    .to("#pre-register-btn",{duration:0.5 , y:100, scale:2},"-=.5");


var preregisterBtn = document.querySelector("#pre-register-btn");

preregisterBtn.addEventListener("mouseover",function(){
  registerButtonTL.play();
})

preregisterBtn.addEventListener("mouseout",function(){
  registerButtonTL.reverse();
})

function registerAnimation(){
  var tl = gsap.timeline();
  tl.from("#first-line",{duration:1, y:-100})
  .from("#pre-register-btn",{duration:0.5, y:100, alpha:0, scale:2},"-=.5")
  .from("#pre-register-btn i",{duration: 1, rotation:20, delay:0, repeat:-1, yoyo:true});
  return tl;
}

var mainTimeline = gsap.timeline();
mainTimeline.add(registerAnimation());