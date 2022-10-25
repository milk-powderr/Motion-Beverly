import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set("#pre-register-btn", { transformOrigin: "center bottom" })

var registerButtonTL = gsap.timeline({ paused: true });
registerButtonTL
  .to("#first-line", { duration: 0.25, alpha: 0, y: 50 }, "trigger")
  .to("#pre-register-btn", { duration: 0.25, y: 100, scale: 2 }, "trigger")
  .to("#pre-register-btn i", { duration: 1, rotation: 20, delay: 0, repeat: 2, yoyo: true }, "-=.5");

var preregisterBtn = document.querySelector("#pre-register-btn");

preregisterBtn.addEventListener("mouseover", function () {
  registerButtonTL.play();
})

preregisterBtn.addEventListener("mouseout", function () {
  registerButtonTL.reverse();
})

function registerAnimation() {
  var tl = gsap.timeline();
  tl.from("#first-line", { duration: 0.25, y: -100 })
    .from("#pre-register-btn", { duration: 0.25, y: 100, alpha: 0, scale: 2 }, "-=.5")
    .from("#pre-register-btn i", { duration: 1, rotation: 20, delay: 0, repeat: 2, yoyo: true }, "-=.5");
  return tl;
}

function nikkiAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#nikki_bday", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#nikki_bday",{duration:1, scale:1, filter: "blur(20px)"});
  return tl;
}

function fineAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:"#fine-logo",scrub:true, start:"top center", pin:true, markers:false, pinSpacer: false}});
  tl.from("#fine-logo",{duration:1, scale:1.5});
  return tl;
}

function personAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:".person-1",scrub:true, start:"top 80%",end:"bottom 60%", markers:false}});
  tl.from(".person-item",{duration:1, x:"+=100", alpha:0, stagger:0.5});
  return tl;
}

function personTwoAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:".person-2",scrub:true, start:"top 80%",end:"bottom 60%", markers:false}});
  tl.from(".person2-item",{duration:1, x:"+=100", alpha:0, stagger:0.5});
  return tl;
}

function personThreeAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:".person-3",scrub:true, start:"top 80%",end:"bottom 60%", markers:false}});
  tl.from(".person3-item",{duration:1, x:"+=100", alpha:0, stagger:0.5});
  return tl;
}

function personFourAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:".person-4",scrub:true, start:"top 80%",end:"bottom 60%", markers:false}});
  tl.from(".person4-item",{duration:1, x:"+=100", alpha:0, stagger:0.5});
  return tl;
}

function trickstarAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:"#trickstar-logo",scrub:true, start:"top center", pin:true, markers:false, pinSpacer: false}});
  tl.from("#trickstar-logo",{duration:1, scale:1.5});
  return tl;
}

function personFiveAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:".person-5",scrub:true, start:"top 80%",end:"bottom 60%", markers:false}});
  tl.from(".person5-item",{duration:1, x:"+=100", alpha:0, stagger:0.5});
  return tl;
}

function personSixAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:".person-6",scrub:true, start:"top 80%",end:"bottom 60%", markers:false}});
  tl.from(".person6-item",{duration:1, x:"+=100", alpha:0, stagger:0.5});
  return tl;
}

function personSevenAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:".person-7",scrub:true, start:"top 80%",end:"bottom 60%", markers:false}});
  tl.from(".person7-item",{duration:1, x:"+=100", alpha:0, stagger:0.5});
  return tl;
}

function personEightAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:".person-8",scrub:true, start:"top 80%",end:"bottom 60%", markers:false}});
  tl.from(".person8-item",{duration:1, x:"+=100", alpha:0, stagger:0.5});
  return tl;
}

function ryuseitaiAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:"#ryuseitai-logo",scrub:true, start:"top center", pin:true, markers:false, pinSpacer: false}});
  tl.from("#ryuseitai-logo",{duration:1, scale:1.5});
  return tl;
}

function personNineAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:".person-9",scrub:true, start:"top 80%",end:"bottom 60%", markers:false}});
  tl.from(".person9-item",{duration:1, x:"+=100", alpha:0, stagger:0.5});
  return tl;
}

function personTenAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:".person-10",scrub:true, start:"top 80%",end:"bottom 60%", markers:false}});
  tl.from(".person10-item",{duration:1, x:"+=100", alpha:0, stagger:0.5});
  return tl;
}

function personElevenAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:".person-11",scrub:true, start:"top 80%",end:"bottom 60%", markers:false}});
  tl.from(".person11-item",{duration:1, x:"+=100", alpha:0, stagger:0.5});
  return tl;
}

function personTwelveAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:".person-12",scrub:true, start:"top 80%",end:"bottom 60%", markers:false}});
  tl.from(".person12-item",{duration:1, x:"+=100", alpha:0, stagger:0.5});
  return tl;
}

function personThirteenAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:".person-13",scrub:true, start:"top 80%",end:"bottom 60%", markers:true}});
  tl.from(".person13-item",{duration:1, x:"+=100", alpha:0, stagger:0.5});
  return tl;
}

function doublefaceAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger:"#new_stuff", scrub: true, start:"top 80%", end:"bottom 80%", markers: false}});
  tl.from("#doublefaceimage",{duration:1, clipPath:"inset(0 50%)"},"same");
  return tl;
}

var mainTimeline = gsap.timeline();
mainTimeline.add(registerAnimation())
.add(fineAnimation())
.add(nikkiAnimation())
.add(personAnimation())
.add(personTwoAnimation())
.add(personThreeAnimation())
.add(personFourAnimation())
.add(trickstarAnimation())
.add(personFiveAnimation())
.add(personSixAnimation())
.add(personSevenAnimation())
.add(personEightAnimation())
.add(ryuseitaiAnimation())
.add(personNineAnimation())
.add(personTenAnimation())
.add(personElevenAnimation())
.add(personTwelveAnimation())
.add(personThirteenAnimation())
.add(doublefaceAnimation())
;        