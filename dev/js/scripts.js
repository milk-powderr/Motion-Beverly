
import { gsap } from "gsap";
gsap.set("#pre-register-btn",{transformOrigin:"center bottom"});
gsap.from("#pre-register-btn i",{duration: 1, rotation:20, delay:0, repeat:-1, yoyo:true});

function heroAnimation(){
    var tl = gsap.timeline();
    tl.from("#first-line",{duration: 1, alpha:0, y:-100})
      .from("#pre-register-btn",{duration: 1, alpha:0, y:50})
      .from("#fine", {opacity: 0, x: -700, duration: 1})
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(heroAnimation());
var heroSizeNumber = 1;
let mm = gsap.matchMedia();
mm.add("(min-width: 768px)", () => {
  heroSizeNumber = 2;
});
mm.add("(max-width: 767px)", () => {
  heroSizeNumber = 1.25;
});

let registerBtn = document.querySelector("#pre-register-btn");
var buttonAnimation = gsap.timeline({paused:true});
buttonAnimation.to("#pre-register-btn",{duration:0.25, scale:heroSizeNumber},"goAway")
.to("#first-line",{duration: 1, alpha:0, y:50},"goAway")
.to("#fine", {opacity: 100, x: 0, duration: 1})

registerBtn.addEventListener("mouseover",function(){
   buttonAnimation.play();
})
registerBtn.addEventListener("mouseout",function(){
    buttonAnimation.reverse();
})