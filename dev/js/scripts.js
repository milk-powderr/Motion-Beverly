import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function simplemotionin(){
    var tl =  gsap.timeline()
    .to("#Raw",{x:130, scale:0.9, ease: "back.inOut(1)", duration: 1})
    .to("#Raw_2",{x:130, scale:0.9, alpha:0, ease: "back.inOut(1)", duration: 1}, 0)
    .to("#Ellipse",{x:130, scale:0.9, ease: "back.inOut(1)", duration: 1}, 0)
    .to("#Baked",{x:130, scale:0.9, ease: "back.inOut(1)", duration: 1}, 0)
    ;

    return tl;
}

function simplemotionout(){
    var tl =  gsap.timeline()
    .to("#Raw",{x:230, scale:1, alpha:0, ease: "back.inOut(1)", duration: 1})
    .to("#Ellipse",{x:230, scale:1, alpha:0, ease: "back.inOut(1)", duration: 1}, 0)
    .to("#Baked",{x:230, scale:1, ease: "back.inOut(1)", duration: 1}, 0)
    .to("#Rectangle1",{alpha: 0}, 0)
    ;

    return tl;
}

function patternmotion(){
    var tl =  gsap.timeline()
    .to("#Union_6",{ ease: "back.inOut(2)", duration: 0.8, scale: 0.7, stagger: 0.25})
    .to("#Union_5",{ ease: "back.inOut(2)", duration: 0.8, scale: 0.7, stagger: 0.25})
    .to("#Union_4",{ ease: "back.inOut(2)", duration: 0.8, scale: 0.7, stagger: 0.25})
    .to("#Union_3",{ ease: "back.inOut(2)", duration: 0.8, scale: 0.7, stagger: 0.25})
    .to("#Union_2",{ ease: "back.inOut(2)", duration: 0.8, scale: 0.7, stagger: 0.25})
    .to("#Union_1",{ ease: "back.inOut(2)", duration: 0.8, scale: 0.7, stagger: 0.25})
    ;

    return tl;
}

function UImotion(){
    var tl =  gsap.timeline()

    return tl;
}

GSDevTools.create();

var mainTL = gsap.timeline();
mainTL.add(simplemotionin())
.add(simplemotionout())
.add(patternmotion())
.add(UImotion());