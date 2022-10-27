import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simplemotion(){
    var tl =  gsap.timeline()

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