import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function clockmotionspin1(){
    var tl =  gsap.timeline()
    .to("#Longhand",{ ease: "Power4.easeOut", duration: 1, transformOrigin: "top", rotate: 539.5}, 0)
    .to("#Shorthand",{ ease: "Power4.easeOut", duration: 1, transformOrigin: "top", rotate: 209}, 0)
    ;
    return tl;
}

function clockmotionspin2(){
    var tl =  gsap.timeline()
    .to("#Longhand",{ ease: "back.Out(1)", duration: 0.8, transformOrigin: "top", rotate: 899}, 0)
    .to("#Shorthand",{ ease: "back.Out(1)", duration: 0.8, transformOrigin: "top", rotate: 238}, 0)
    ;
    return tl;
}

GSDevTools.create();

var mainTL = gsap.timeline();
mainTL.add(clockmotionspin1())
mainTL.add(clockmotionspin2())
;