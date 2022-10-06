import { gsap } from "gsap";

gsap.from("#create-btn i",{duration: 1, rotation:20, delay:0, repeat:-1, yoyo:true});

var tl = gsap.timeline( {repeat:-1, delay:0} );
 
tl
  .to ( '#overlay', { '--color': 'red'})
  .to ( '#overlay', { '--color': 'orange'})
  .to ( '#overlay', { '--color': 'yellow'})
  .to ( '#overlay', { '--color': 'lime'})
  .to ( '#overlay', { '--color': 'aqua'})
  .to ( '#overlay', { '--color': 'lime'})
  .to ( '#overlay', { '--color': 'yellow'})
  .to ( '#overlay', { '--color': 'orange'})
  .to ( '#overlay', { '--color': 'red'})