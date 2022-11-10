import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function clockmotionspin(){
    var tl =  gsap.timeline()
    .to("#Longhand",{ ease: "back.Out(1)", duration: 1.5, transformOrigin: "top", rotate: 560}, 0)

    ;
    return tl;
}

GSDevTools.create();

var mainTL = gsap.timeline();
mainTL.add(clockmotionspin())

;