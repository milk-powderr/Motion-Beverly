import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function simplemotion(){
    var tl =  gsap.timeline()
    .to("#Raw",{x:100, scale:0.9, duration:1});

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