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

function simplemotionout(){
    var tl =  gsap.timeline()
    .to("#Raw",{x:230, scale:1, alpha:0, ease: "back.inOut(1)", duration: 1, transformOrigin: "center"})
    .to("#Ellipse",{x:230, scale:1, alpha:0, ease: "back.inOut(1)", duration: 1, transformOrigin: "center"}, 0)
    .to("#Baked",{x:230, scale:1, ease: "back.inOut(1)", duration: 1, transformOrigin: "center"}, 0)
    .to("#Rectangle1",{alpha: 0}, 0)
    ;

    return tl;
}

function patternmotionin(){
    var tl =  gsap.timeline()
    .to("#Union_6",{ ease: "back.inOut(2)", duration: 0.8, scale: 0.7, transformOrigin: "center"})
    .to("#Union_5",{ ease: "back.inOut(2)", duration: 0.8, scale: 0.7, transformOrigin: "center"}, 0.25)
    .to("#Union_4",{ ease: "back.inOut(2)", duration: 0.8, scale: 0.7, transformOrigin: "center"}, 0.35)
    .to("#Union_3",{ ease: "back.inOut(2)", duration: 0.8, scale: 0.7, transformOrigin: "center"}, 0.45)
    .to("#Union_2",{ ease: "back.inOut(2)", duration: 0.8, scale: 0.7, transformOrigin: "center"}, 0.55)
    .to("#Union_1",{ ease: "back.inOut(2)", duration: 0.8, scale: 0.7, transformOrigin: "center"}, 0.65)
    ;

    return tl;
}

function patternmotionout(){
    var tl =  gsap.timeline()
    .to("#Union_6",{ ease: "back.inOut(2)", duration: 0.8, scale: 1})
    .to("#Union_5",{ ease: "back.inOut(2)", duration: 0.8, scale: 1}, 0.25)
    .to("#Union_4",{ ease: "back.inOut(2)", duration: 0.8, scale: 1}, 0.35)
    .to("#Union_3",{ ease: "back.inOut(2)", duration: 0.8, scale: 1}, 0.45)
    .to("#Union_2",{ ease: "back.inOut(2)", duration: 0.8, scale: 1}, 0.55)
    .to("#Union_1",{ ease: "back.inOut(2)", duration: 0.8, scale: 1}, 0.65)
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
.add(patternmotionin())
.add(patternmotionout())
.add(UImotion());