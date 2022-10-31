import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function simplemotionin(){
    var tl =  gsap.timeline()
    .to("#Raw",{x:130, scale:0.9, ease: "power4.in"})
    .to("#Raw_2",{x:130, scale:0.9, alpha:0, ease: "power4.in"}, 0)
    .to("#Ellipse",{x:130, scale:0.9, ease: "power4.in"}, 0)
    .to("#Baked",{x:130, scale:0.9, ease: "power4.in"}, 0)
    ;

    return tl;
}

function simplemotionout(){
    var tl =  gsap.timeline()
    .to("#Raw",{x:230, scale:1, alpha:0, ease: "power4.out"})
    .to("#Ellipse",{x:230, scale:1, alpha:0, ease: "power4.out"}, 0)
    .to("#Baked",{x:230, scale:1, ease: "power4.out"}, 0)
    .to("#Rectangle1",{alpha: 0}, 0)
    ;

    return tl;
}

function patternmotion(){
    var tl =  gsap.timeline()

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