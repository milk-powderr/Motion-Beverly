import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MotionPathPlugin, MotionPathHelper);

function firstmove(){

    var tl = gsap.timeline()
    tl.from("#R12",{ rotate: 90, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m12", align:"#m12"}, transformOrigin:"bottom", height: 30}, 0)
    .from("#R1",{ rotate: 0.4, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m1", align:"#m1"}, transformOrigin:"bottom", height: 40}, 0)
    .from("#R2",{ rotate: -0.4, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m2", align:"#m2"}, transformOrigin:"center", height: 30}, 0)
    .from("#R3",{ ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m3", align:"#m3"}, transformOrigin:"bottom", height: 30}, 0)
    .from("#R4",{ rotate: 271.5, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m4", align:"#m4"}, transformOrigin:"center", height: 30}, 0)
    .from("#R5",{ rotate: -90, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m5", align:"#m5"}, transformOrigin:"center"}, 0)
    .from("#R6",{ rotate: 540, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m6", align:"#m6"}, transformOrigin:"center", height: 40}, 0)
    .from("#R7",{ rotate: -540, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m7", align:"#m7"}, transformOrigin:"center", height: 55}, 0)
    .from("#R8",{ rotate: -540, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m8", align:"#m8"}, transformOrigin:"center", height: 55}, 0)
    .from("#R9",{ rotate: 0.4, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m9", align:"#m9"}, transformOrigin:"bottom", height: 52}, 0)
    .from("#R10",{ rotate: 90, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m10", align:"#m10"}, transformOrigin:"center"}, 0)
    .from("#R11",{ rotate: 181, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m11", align:"#m11"}, transformOrigin:"center", height: 30}, 0)
    .from("#Longhand",{ rotate: -1300, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#mhands", align:"#mhands"}, transformOrigin:"top", height: 30}, 0)
    .from("#Shorthand",{ rotate: -830, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#mhands", align:"#mhands"}, transformOrigin:"top", height: 20}, 0)
    ;
    return tl;
}

function clockmotionspin1(){

    var tl =  gsap.timeline()
    tl.to("#Longhand",{ ease: "Power2.easeOut", duration: 1, transformOrigin: "top", rotate: 539.5}, 0)
    .to("#Shorthand",{ ease: "Power2.easeOut", duration: 1, transformOrigin: "top", rotate: 209}, 0)
    .to("#Longhand",{ ease: "Power2.easeOut", duration: 1, transformOrigin: "top", rotate: 899}, 0.8)
    .to("#Shorthand",{ ease: "Power2.easeOut", duration: 1, transformOrigin: "top", rotate: 238}, 0.8)
    ;
    return tl;
}

function lastmove(){

    var tl = gsap.timeline()
    tl.to("#R12",{ rotate: 90, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m12", align:"#m12"}, transformOrigin:"bottom", height: 30}, 0)
    .to("#R1",{ rotate: 0.4, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m1", align:"#m1"}, transformOrigin:"bottom", height: 40}, 0)
    .to("#R2",{ rotate: -0.4, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m2", align:"#m2"}, transformOrigin:"center", height: 30}, 0)
    .to("#R3",{ ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m3", align:"#m3"}, transformOrigin:"bottom", height: 30}, 0)
    .to("#R4",{ rotate: 271.5, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m4", align:"#m4"}, transformOrigin:"center", height: 30}, 0)
    .to("#R5",{ rotate: -90, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m5", align:"#m5"}, transformOrigin:"center"}, 0)
    .to("#R6",{ rotate: 540, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m6", align:"#m6"}, transformOrigin:"center", height: 40}, 0)
    .to("#R7",{ rotate: -540, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m7", align:"#m7"}, transformOrigin:"center", height: 55}, 0)
    .to("#R8",{ rotate: -540, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m8", align:"#m8"}, transformOrigin:"center", height: 55}, 0)
    .to("#R9",{ rotate: 0.4, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m9", align:"#m9"}, transformOrigin:"bottom", height: 52}, 0)
    .to("#R10",{ rotate: 90, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m10", align:"#m10"}, transformOrigin:"center"}, 0)
    .to("#R11",{ rotate: 181, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#m11", align:"#m11"}, transformOrigin:"center", height: 30}, 0)
    .to("#Longhand",{ rotate: 1300, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#mhands", align:"#mhands"}, transformOrigin:"top", height: 30}, 0)
    .to("#Shorthand",{ rotate: 830, ease: "Power3.easeOut", duration: 1.8, motionPath:{path:"#mhands", align:"#mhands"}, transformOrigin:"top", height: 20}, 0)
    ;
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(firstmove())
.add(clockmotionspin1())
.add(lastmove())
;