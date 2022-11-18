import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MotionPathPlugin, MotionPathHelper);

function oreozoomout(){

    var tl =  gsap.timeline()

    gsap.set("#Cookie", {scale: 2.1, transformOrigin: "center"})

    tl.to("#Cookie",{ ease: "Power2.easeOut", duration: 2, transformOrigin: "center"}, 0)
    ;
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(oreozoomout())
;

GSDevTools.create();

//MotionPathHelper.create("#R12")

//;