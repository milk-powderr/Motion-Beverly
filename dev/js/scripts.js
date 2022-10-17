

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set("#pre-register-btn",{transformOrigin:"center bottom"})

var registerButtonTL = gsap.timeline({paused:true});
    registerButtonTL
    .to("#first-line",{duration: 0.25, alpha:0, y:50},"trigger")
    .to("#pre-register-btn",{duration:0.25 , y:100, scale:2},"trigger")
    .to("#pre-register-btn i",{duration: 1, rotation:20, delay:0, repeat:-1, yoyo:true},"-=.5") 
;


var preregisterBtn = document.querySelector("#pre-register-btn");

preregisterBtn.addEventListener("mouseover",function(){
  registerButtonTL.play();
})

preregisterBtn.addEventListener("mouseout",function(){
  registerButtonTL.reverse();
})

function registerAnimation(){
  var tl = gsap.timeline();
  tl.from("#first-line",{duration:0.25, y:-100})
  .from("#pre-register-btn",{duration:0.25, y:100, alpha:0, scale:2},"-=.5")
  .from("#pre-register-btn i",{duration: 1, rotation:20, delay:0, repeat:-1, yoyo:true},"-=.5");
  return tl;
}

function nikkiAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#nikki_bday", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#nikki_bday",{duration:1, scale:1, x:"-=-200%"});
  return tl;
}

function fineAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#fine_idols", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#fine_idols",{duration:1, scale:1, x:"-=-200%"});
  return tl;
}

function trickstarAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#trickstar_idols", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#trickstar_idols",{duration:1, scale:1, x:"-=-200%"});
  return tl;
}

var mainTimeline = gsap.timeline();
mainTimeline.add(registerAnimation())
            .add(nikkiAnimation())
            .add(fineAnimation())
            .add(trickstarAnimation());