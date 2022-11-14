import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MotionPathPlugin, MotionPathHelper);

function Bmotion(){

    var tl =  gsap.timeline()
    tl.from("#B",{ ease: "Power2.easeOut", duration: 1, transformOrigin: "center", x:"-=200", alpha: 0}, 0)
    tl.from("#Flower",{ ease: "elastic.out(1, 0.3)", duration: 1, transformOrigin: "center", y:"-=100", alpha: 0}, 0.5)
    ;
    return tl;
}


GSDevTools.create();

var mainTL = gsap.timeline();
;