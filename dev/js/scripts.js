import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MotionPathPlugin, MotionPathHelper);

function Bmotion(){

    gsap.set("#Flower", {scale: 0, transformOrigin: "center"})
    gsap.set("#Leaf", {scale: 0, transformOrigin: "center"})

    var tl =  gsap.timeline()
    tl.from("#B",{ ease: "Power2.easeOut", duration: 1, transformOrigin: "center", x:"-=200", alpha: 0}, 0)
    tl.from("#Flower",{ ease: "Power2.easeOut", duration: 1.5, transformOrigin: "center", rotate: 100}, 0.5)
    tl.to("#Flower",{ ease: "elastic.out(1, 0.3)", duration: 1.5, transformOrigin: "center", scale: 1, rotate: 100}, 0.5)
    tl.to("#Leaf",{ ease: "elastic.out(1, 0.8)", duration: 1, transformOrigin: "center", scale: 1}, 0.9)
    tl.to("#Leaf",{ ease: "Power4.easeInOut", transformOrigin: "center", yoyo: true, repeat: 1, rotation: 20, duration: 0.3})
    ;
    return tl;
}

GSDevTools.create();

var mainTL = gsap.timeline();
mainTL.add(Bmotion())
;