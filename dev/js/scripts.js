import { gsap } from "gsap";
gsap.set("#create-btn i",{transformOrigin:"center bottom"});

gsap.from("#first-line",{duration: 1, alpha:0, y:-100});
gsap.from("#second-line",{duration: 1, alpha:0, y:-70, delay:0.5});
gsap.from("#create-btn",{duration: 1, y:50, delay:0.75, alpha:0});
gsap.from("#create-btn i",{duration: 1, rotation:20, delay:0, repeat:-1, yoyo:true});

var tl = gsap.timeline( {repeat:-1, delay:0} );
 
tl
  .to ( '#overlay', { '--color': 'red'})
  .to ( '#overlay', { '--color': 'orange'})
  .to ( '#overlay', { '--color': 'yellow'})
  .to ( '#overlay', { '--color': 'lime'})
  .to ( '#overlay', { '--color': 'aqua'})
  .to ( '#overlay', { '--color': 'lime'})
  .to ( '#overlay', { '--color': 'yellow'})
  .to ( '#overlay', { '--color': 'orange'})
  .to ( '#overlay', { '--color': 'red'})

let createBtn = document.querySelector("#create-btn");
createBtn.addEventListener("mouseover",function(){
  gsap.to("#create-btn",{duration:1, scale:2});
  gsap.to("#create-btn i",{duration: 1, rotateY:20});
  gsap.to("#first-line",{duration: 1, alpha:0, y:50});
  gsap.to("#second-line",{duration: 1, alpha:0, y:20});
})

createBtn.addEventListener("mouseout",function(){
  gsap.to("#create-btn",{duration:1, scale:1});
  gsap.to("#create-btn i",{duration: 1, rotateY:0});
  gsap.to("#first-line",{duration: 1, alpha:1, y:0});
  gsap.to("#second-line",{duration: 1, alpha:1, y:0});
})