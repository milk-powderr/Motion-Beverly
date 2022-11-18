import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MotionPathPlugin, MotionPathHelper);

function oreozoomout(){

    var tl =  gsap.timeline()

    gsap.set(".demo", { attr:{viewBox:"748 453 475.72 246"}, transformOrigin: "center"})
    gsap.set("#Row3", { alpha: 0})

    tl.to(".demo",{ attr:{viewBox:"0 0 1553.19 952"}, transformOrigin: "center", duration: 1.5, delay: 1.5, ease: "power3.out"}, 0)
    .to("#Row3",{ alpha: 1, duration: 0.1}, 0)
    .to("#Row1",{ x:"-=190", duration: 4, delay: 1.5}, 0)
    .to("#Row2",{ x:"+=190", duration: 4, delay: 1.5}, 0)
    .to("#Row3",{ x:"-=190", duration: 4, delay: 1.5}, 0)
    .to("#Row4",{ x:"+=190", duration: 4, delay: 1.5}, 0)
    .to("#Row5",{ x:"-=190", duration: 4, delay: 1.5}, 0)
    ;
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(oreozoomout())
;

GSDevTools.create();

//MotionPathHelper.create("#R12")

//;

//viewBox="0 0 1728 1117"
