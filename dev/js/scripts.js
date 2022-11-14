import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MotionPathPlugin, MotionPathHelper);

function Bmotion(){

    
    var tl =  gsap.timeline()
    tl.to("#B",{ ease: "Power2.easeOut", duration: 1, transformOrigin: "center"}, 0)

    ;
    return tl;
}

GSDevTools.create();

var mainTL = gsap.timeline();
mainTL.add(Bmotion())
;