import { gsap } from "gsap";

gsap.set("#create-btn", { transformOrigin: "center bottom" })

var createButtonTL = gsap.timeline({ paused: true });
createButtonTL
  .to("#first-line", { duration: 0.25, alpha: 0, y: 50 }, "trigger")
  .to("#second-line", { duration: 0.25, alpha: 0, y: 50 }, "trigger")
  .to("#create-btn", { duration: 0.25, y: 100, scale: 2}, "trigger")
  .to("#create-btn i", { duration: 1, rotation: 20, delay: 0, repeat: -1, yoyo: true}, "-=.5")
  .to( "#overlay", { '--color': 'red'})
  .to( "#overlay", { '--color': 'orange'})
  .to( "#overlay", { '--color': 'yellow'})
  .to( "#overlay", { '--color': 'lime'})
  .to( "#overlay", { '--color': 'aqua'})
  .to( "#overlay", { '--color': 'lime'})
  .to( "#overlay", { '--color': 'yellow'})
  .to( "#overlay", { '--color': 'orange'})
  .to( "#overlay", { '--color': 'red'})
;

var preregisterBtn = document.querySelector("#create-btn");

preregisterBtn.addEventListener("mouseover", function () {
  createButtonTL.play();
})

preregisterBtn.addEventListener("mouseout", function () {
  createButtonTL.reverse();
})

function createAnimation() {
  var tl = gsap.timeline();
  tl.from("#first-line", { duration: 0.25, y: -100 })
    .from("#second-line", { duration: 0.25, y: -100 })
    .from("#create-btn", { duration: 0.25, y: 100, alpha: 0, scale: 2 }, "-=.5")
    .from("#create-btn i", { duration: 1, rotation: 20, delay: 0, repeat: -1, yoyo: true }, "-=.5");
  return tl;
}

var mainTimeline = gsap.timeline();
mainTimeline.add(createAnimation());