import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MotionPathPlugin, MotionPathHelper);

function oreozoomout(){

    var tl =  gsap.timeline()

    gsap.set(".demo", { attr:{viewBox:"779 453 475.72 276"}, transformOrigin: "center"})

    tl.to(".demo",{ attr:{viewBox:"0 0 1728 1117"}, transformOrigin: "center", delay: 2}, 0)
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
