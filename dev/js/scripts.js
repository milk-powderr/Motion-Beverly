import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MotionPathPlugin, MotionPathHelper);

function oreozoomout(){

    var tl =  gsap.timeline()

    gsap.set(".demo", { attr:{viewBox:"748 453 475.72 246"}, transformOrigin: "center"})
    gsap.set("#Row4", { alpha: 0})
    gsap.set("#words", { x:"+=1000"})
    gsap.set("#Cookieroll", { transformOrigin:"center"})
    gsap.set("#wonderfilled", { transformOrigin:"center", x:"-=106", alpha: 0})
    ;

    tl.to(".demo",{ attr:{viewBox:"0 0 1553.19 1000"}, transformOrigin: "center", duration: 1.5, delay: 1.2, ease: "power3.out"}, 0)
    .to("#Row4",{ alpha: 1, duration: 0.2, delay: 0.2}, 0)
    .to("#Row1",{ x:"-=190", duration: 7, delay: 1.5}, 0)
    .to("#Row2",{ x:"+=190", duration: 7, delay: 1.5}, 0)
    .to("#Row3",{ x:"-=190", duration: 7, delay: 1.5}, 0)
    .to("#Row4",{ x:"+=190", duration: 7, delay: 1.5}, 0)
    .to("#Row5",{ x:"-=190", duration: 7, delay: 1.5}, 0)
    .to(".bottom1",{ x:"+=241", duration: 0.5, delay: 2.5, ease: "power3.out"}, 0)
    .to(".bottom2",{ x:"-=241", duration: 0.5, delay: 2.5, ease: "power3.out"}, 0)
    .to(".bottom3",{ x:"+=241", duration: 0.5, delay: 2.5, ease: "power3.out"}, 0)
    .to(".bottom4",{ x:"-=241", duration: 0.5, delay: 2.5, ease: "power3.out"}, 0)
    .to(".bottom5",{ x:"+=241", duration: 0.5, delay: 2.5, ease: "power3.out"}, 0)
    .to(".up1",{ y:"-=170", duration: 0.7, delay: 3.6, ease: "power3.out"}, 0)
    .to(".up2",{ y:"+=200", duration: 0.7, delay: 3.6, ease: "power3.out"}, 0)
    .to("#words",{ x:"-=1095", duration: 0.8, delay: 4, ease: "power3.out"}, 0)
    .to("#words",{ x:"-=1150", duration: 0.8, delay: 5.4, ease: "power3.out"}, 0)
    .to("#Cookieroll",{ rotate: -360.5, duration: 1, ease: "power3.out", motionPath:{path:"#roll", align:"#roll"}, transformOrigin:"center", delay: 5.4, scale: 2.5,onComplete:test()}, 0)
    .to(".up1",{ y:"-=270", duration: 0.7, delay: 5.4, ease: "power3.out"}, 0)
    .to(".up2",{ y:"+=360", duration: 0.7, delay: 5.4, ease: "power3.out"}, 0)
    .to("#wonderfilled",{ scale: 3, duration: 0.7, delay: 6.1,  ease: "elastic.out(1, 0.3)", alpha: 1}, 0);
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(oreozoomout())
;


function test(){
    console.log("complete");
}

GSDevTools.create();

// MotionPathHelper.create("#Cookieroll");