

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

function eichiAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#eichi", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#eichi",{duration:2, scale:1, x:"-=-500%"});
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

function hokkeAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#hokke", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#hokke",{duration:2, scale:1, x:"-=-500%"});
  return tl;
}

function subaruAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#subaru", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#subaru",{duration:2, scale:1, x:"-=-500%"});
  return tl;
}

function yukiAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#yuki", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#yuki",{duration:2, scale:1, x:"-=-500%"});
  return tl;
}

function sallyAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#sally", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#sally",{duration:2, scale:1, x:"-=-500%"});
  return tl;
}

function chiakiAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#chiaki", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#chiaki",{duration:2, scale:1, x:"-=-550%"});
  return tl;
}

function kanataAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#kanata", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#kanata",{duration:2, scale:1, x:"-=-500%"});
  return tl;
}

function tetoraAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#tetora", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#tetora",{duration:2, scale:1, x:"-=-500%"});
  return tl;
}

function midoriAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#midori", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#midori",{duration:2, scale:1, x:"-=-500%"});
  return tl;
}

function shinobuAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#shinobu", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#shinobu",{duration:2, scale:1, x:"-=-500%"});
  return tl;
}

function hiiroAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#hiiro", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#hiiro",{duration:2, scale:1, x:"-=-500%"});
  return tl;
}

function airaAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#aira", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#aira",{duration:2, scale:1, x:"-=-500%"});
  return tl;
}

function mayoiAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#mayoi", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#mayoi",{duration:2, scale:1, x:"-=-500%"});
  return tl;
}

function tatsumiAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#tatsumi", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#tatsumi",{duration:2, scale:1, x:"-=-500%"});
  return tl;
}

function nagisaAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#nagisa", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#nagisa",{duration:2, scale:1, x:"-=-500%"});
  return tl;
}

function hiyoriAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#hiyori", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#hiyori",{duration:2, scale:1, x:"-=-500%"});
  return tl;
}

var mainTimeline = gsap.timeline();
mainTimeline.add(registerAnimation())
            .add(nikkiAnimation())
            .add(eichiAnimation())
            .add(wataruAnimation())
            .add(toriAnimation())
            .add(yuzuruAnimation())
            .add(hokkeAnimation())
            .add(subaruAnimation())
            .add(yukiAnimation())
            .add(sallyAnimation())
            .add(chiakiAnimation())
            .add(kanataAnimation())
            .add(tetoraAnimation())
            .add(midoriAnimation())
            .add(shinobuAnimation())
            .add(hiiroAnimation())
            .add(airaAnimation())
            .add(mayoiAnimation())
            .add(tatsumiAnimation())
            .add(nagisaAnimation())
            .add(hiyoriAnimation())
            ;