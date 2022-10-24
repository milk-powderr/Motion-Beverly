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
  tl.from("#nikki_bday",{duration:1, scale:1, filter: "blur(20px)"});
  return tl;
}

function fineAnimation(){
  var tl = gsap.timeline({
    defaults:{duration:2, ease:'power2.inOut', stagger: 0.5},
    scrollTrigger:{trigger: "#fine", scrub: 0.3, pin: true, start:"top 40%", end:"-=-2000", markers: true}});
  tl.from("#fine",{x:480, duration:2, scale: 2});
  tl.to("#fine",{x:0, duration:2, scale: 1});
  return tl;
}

function eichiAnimation(){
  var tl = gsap.timeline({
    defaults:{duration:2, ease:'power2.inOut', stagger: 0.25},scrollTrigger:{
      trigger: "#eichi", pin:true, scrub:0.3, start: "top 40%", end: "-=-2000", markers: false}});

      tl.to('#eichi', {x:-100})
      tl.from('#eichi', {opacity: 0})
      .to({},{});
  return tl;
}

function eichiwAnimation(){
  var tl = gsap.timeline({
    defaults:{duration:2, ease:'power2.inOut', stagger: 0.5},scrollTrigger:{
      trigger: "#eichiw", pin:true, scrub:0.3, start: "top 40%", end: "-=-2000", markers: false}});

      tl.to('#eichiw', {x:580})
      tl.from('#eichiw', {opacity: 0})
      .to({},{});
  return tl;
}

function wataruAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#wataru", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#wataru",{duration:2, scale:1, x:"-=-500%"});
  return tl;
}

function toriAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#tori", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#tori",{duration:2, scale:1, x:"-=-500%"});
  return tl;
}

function yuzuruAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#yuzuru", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#yuzuru",{duration:2, scale:1, x:"-=-500%"});
  return tl;
}

function doublefaceAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:"#new_stuff", scrub: true, start:"top 80%", end:"bottom 40%", markers: false}});
  tl.from("#doublefaceimage",{duration:1, clipPath:"inset(0 50%)"},"same");
  return tl;
}

var mainTimeline = gsap.timeline();
mainTimeline.add(registerAnimation())
            .add(nikkiAnimation())
            .add(eichiAnimation())
            .add(wataruAnimation())
            .add(toriAnimation())
            .add(yuzuruAnimation())
            .add(doublefaceAnimation())
            .add(fineAnimation())
            .add(eichiwAnimation())
            ;        