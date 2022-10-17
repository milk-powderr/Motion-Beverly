import { gsap } from "gsap";

let createBtn = document.querySelector("#create-btn");
createBtn.addEventListener("mouseover",function(){
  gsap.to("#create-btn",{duration:1, scale:2});
  gsap.to("#create-btn i",{duration: 1, rotateY:20});
  gsap.to("#first-line",{duration: 1, alpha:0, y:50});
})

createBtn.addEventListener("mouseout",function(){
  gsap.to("#create-btn",{duration:1, scale:1});
  gsap.to("#create-btn i",{duration: 1, rotateY:0});
  gsap.to("#first-line",{duration: 1, alpha:1, y:0});
})