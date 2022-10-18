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
  tl.from("#nikki_bday",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function eichiAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#eichi", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#eichi",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function wataruAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#wataru", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#wataru",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function toriAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#tori", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#tori",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function yuzuruAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#yuzuru", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#yuzuru",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function hokkeAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#hokke", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#hokke",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function subaruAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#subaru", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#subaru",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function yukiAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#yuki", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#yuki",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function sallyAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#sally", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#sally",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function chiakiAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#chiaki", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#chiaki",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function kanataAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#kanata", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#kanata",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function tetoraAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#tetora", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#tetora",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function midoriAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#midori", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#midori",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function shinobuAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#shinobu", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#shinobu",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function hiiroAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#hiiro", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#hiiro",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function airaAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#aira", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#aira",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function mayoiAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#mayoi", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#mayoi",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function tatsumiAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#tatsumi", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#tatsumi",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function nagisaAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#nagisa", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#nagisa",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function hiyoriAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#hiyori", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#hiyori",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function ibaraAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#ibara", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#ibara",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function junAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#jun", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#jun",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function shuAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#shu", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#shu",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function mikaAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#mika", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#mika",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function hinataAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#hinata", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#hinata",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function yutaAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#yuta", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#yuta",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function rinneAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#rinne", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#rinne",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function himeruAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#himeru", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#himeru",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function kohakuAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#kohaku", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#kohaku",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function nikkishiinaAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#nikkishiina", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#nikkishiina",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function reiAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#rei", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#rei",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function kaoruAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#kaoru", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#kaoru",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function kogaAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#koga", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#koga",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function adonisAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#adonis", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#adonis",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function tomoyaAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#tomoya", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#tomoya",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function nazunaAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#nazuna", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#nazuna",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function tenmaAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#tenma", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#tenma",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function shinononAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#shinonon", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#shinonon",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function keitoAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#keito", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#keito",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function kuroAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#kuro", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#kuro",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function soumaAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#souma", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#souma",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function tsukasaAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#tsukasa", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#tsukasa",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function leoAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#leo", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#leo",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function izumiAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#izumi", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#izumi",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function ritsuAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#ritsu", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#ritsu",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function arashiAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#arashi", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#arashi",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function natsumeAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#natsume", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#natsume",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function tsumugiAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#tsumugi", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#tsumugi",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function soraAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#sora", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#sora",{duration:1, clipPath:"inset(0 50%)"});
  return tl;
}

function mamaAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#mama", scrub: true, start:"top 80%", end:"bottom 90%", markers: false}});
  tl.from("#mama",{duration:1, clipPath:"inset(0 50%)"},"same");
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
            .add(ibaraAnimation())
            .add(junAnimation())
            .add(shuAnimation())
            .add(mikaAnimation())
            .add(hinataAnimation())
            .add(yutaAnimation())
            .add(rinneAnimation())
            .add(himeruAnimation())
            .add(kohakuAnimation())
            .add(nikkishiinaAnimation())
            .add(reiAnimation())
            .add(kaoruAnimation())
            .add(kogaAnimation())
            .add(adonisAnimation())
            .add(tomoyaAnimation())
            .add(nazunaAnimation())
            .add(tenmaAnimation())
            .add(shinononAnimation())
            .add(keitoAnimation())
            .add(kuroAnimation())
            .add(soumaAnimation())
            .add(tsukasaAnimation())
            .add(leoAnimation())
            .add(izumiAnimation())
            .add(ritsuAnimation())
            .add(arashiAnimation())
            .add(natsumeAnimation())
            .add(tsumugiAnimation())
            .add(soraAnimation())
            .add(mamaAnimation())
            .add(doublefaceAnimation());