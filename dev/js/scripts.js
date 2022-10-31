import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function simplemotion(){
    var tl =  gsap.timeline()
    .to("#Raw",{x:130, scale:0.9, alpha:0})
    .to("#Raw_2",{x:130, scale:0.9, alpha:00})
    .to("#Ellipse",{x:130, scale:0.9}, 0)
    .to("#Baked",{x:130, scale:0.9}, 0)
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
mainTL.add(simplemotion())
.add(patternmotion())
.add(UImotion());