import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MotionPathPlugin, MotionPathHelper);

function clockmotionspin1(){
    var tl =  gsap.timeline()
    tl.to("#Longhand",{ ease: "Power2.easeOut", duration: 1, transformOrigin: "top", rotate: 539.5}, 0)
    .to("#Shorthand",{ ease: "Power2.easeOut", duration: 1, transformOrigin: "top", rotate: 209}, 0)
    ;
    return tl;
}

function clockmotionspin2(){
    var tl =  gsap.timeline()
    tl.to("#Longhand",{ ease: "Power2.easeOut", duration: 1, transformOrigin: "top", rotate: 899}, 0)
    .to("#Shorthand",{ ease: "Power2.easeOut", duration: 1, transformOrigin: "top", rotate: 238}, 0)
    ;
    return tl;
}

function lastmove(){

    gsap.set("#R5", {transformOrigin: "center"})

    var tl = gsap.timeline()
    tl.to("#R5",{ rotate: -90, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m5", align:"#m5"}, transformOrigin:"center"}, 0)
    .to("#R6",{ rotate: 540, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m6", align:"#m6"}, transformOrigin:"center", height: 40}, 0)

    ;
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(clockmotionspin1())
    .add(clockmotionspin2())
    .add(lastmove())
;

GSDevTools.create();

MotionPathHelper.create("#R5")
MotionPathHelper.create("#R6")
;