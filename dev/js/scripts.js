
import { gsap } from "gsap";
gsap.set("#pre-register-btn",{transformOrigin:"center bottom"});
gsap.from("#pre-register-btn i",{duration: 1, rotation:20, delay:0, repeat:-1, yoyo:true});

function heroAnimation(){
    var tl = gsap.timeline();
    tl.from("#first-line",{duration: 1, alpha:0, y:-100})
      .from("#pre-register-btn",{duration: 1, alpha:0, y:50})
    return tl;
}

function fineIdolsAnimation(){
  var tl = gsap.timeline();
  tl.from("#fine",{duration: 1, alpha:0, y:-100})
    .from("#pre-register-btn",{duration: 1, alpha:0, y:-100})
  return tl;
}



var mainTL = gsap.timeline();
mainTL.add(heroAnimation());
mainTL.add(fineIdolsAnimation());

var heroSizeNumber = 1;
let mm = gsap.matchMedia();
mm.add("(min-width: 768px)", () => {
  heroSizeNumber = 2;
});



let registerBtn = document.querySelector("#pre-register-btn");
var buttonAnimation = gsap.timeline({paused:true});
buttonAnimation.to("#pre-register-btn",{duration:1, scale:heroSizeNumber},"goAway")
.to("#first-line",{duration: 1, alpha:0, y:50},"goAway")

let logo = document.querySelector("#fine-idols");
var fineIdolsAnimation = gsap.timeline({paused:true});
fineIdolsAnimation.to("#fine-idols",{duration: 1, y:0, opacity: 100},"goAway")



registerBtn.addEventListener("mouseover",function(){
   buttonAnimation.play();
})
registerBtn.addEventListener("mouseout",function(){
    buttonAnimation.reverse();
})

logo.addEventListener("mouseover",function(){
  idolsAnimation.play();
})
fineLogo.addEventListener("mouseout",function(){
   fineIdolsAnimation.reverse();
})