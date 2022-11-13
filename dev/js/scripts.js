import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin, MotionPathHelper, GSDevTools);


function clockmotionspin1(){
    var tl =  gsap.timeline()
    .to("#Longhand",{ ease: "Power2.easeOut", duration: 1, transformOrigin: "top", rotate: 539.5}, 0)
    .to("#Shorthand",{ ease: "Power2.easeOut", duration: 1, transformOrigin: "top", rotate: 209}, 0)
    ;
    return tl;
}

function clockmotionspin2(){
    var tl =  gsap.timeline()
    .to("#Longhand",{ ease: "Power2.easeOut", duration: 1, transformOrigin: "top", rotate: 899}, 0)
    .to("#Shorthand",{ ease: "Power2.easeOut", duration: 1, transformOrigin: "top", rotate: 238}, 0)
    ;
    return tl;
}

function lastmove(){
    var tl = gsap.timeline();
    tl.to("#R12",{duration:3, motionPath:{path:"#12m", align:"#12m", autoRotate:true}, transformOrigin:"center", rotate:45, ease: "expo.in"});
    return tl;
}

GSDevTools.create();

var mainTL = gsap.timeline();
mainTL.add(clockmotionspin1())
mainTL.add(clockmotionspin2())
mainTL.add(lastmove())
;