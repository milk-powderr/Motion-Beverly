import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function clockmotionspin(){
    var tl =  gsap.timeline()
    .to("#Longhand",{ ease: "back.inOut(1)", duration: 2, transformOrigin: "bottom", rotate: 400}, 0)
    .to("#Shorthand",{ ease: "back.inOut(1)", duration: 2, transformOrigin: "bottom", rotate: 58}, 0)
    ;
    return tl;
}

function clockmotionspintwo(){
    var tl =  gsap.timeline()
    .to("#Longhand",{ ease: "back.inOut(1)", duration: 2, transformOrigin: "bottom", rotate: 400}, 0)
    .to("#Shorthand",{ ease: "back.inOut(1)", duration: 2, transformOrigin: "bottom", rotate: 58}, 0)
    ;
    return tl;
}

GSDevTools.create();

var mainTL = gsap.timeline();
mainTL.add(clockmotionspin())
.add(clockmotionspintwo())
;