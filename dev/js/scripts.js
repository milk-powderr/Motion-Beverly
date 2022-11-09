import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function simplemotionin(){
    var tl =  gsap.timeline()
    .to("#Raw",{x:130, scale:0.9, ease: "back.inOut(1)", duration: 1, transformOrigin: "center"})
    .to("#Raw_2",{x:130, scale:0.9, alpha:0, ease: "back.inOut(1)", duration: 1, transformOrigin: "center"}, 0)
    .to("#Ellipse",{x:130, scale:0.9, ease: "back.inOut(1)", duration: 1, transformOrigin: "center"}, 0)
    .to("#Baked",{x:130, scale:0.9, ease: "back.inOut(1)", duration:1 , transformOrigin: "center"}, 0)
    ;

    return tl;
}

GSDevTools.create();

var mainTL = gsap.timeline();
mainTL.add(simplemotionin())
;