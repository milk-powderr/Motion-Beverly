import { gsap } from "gsap";

gsap.from("#create-btn i",{duration: 1, rotation:45, delay:0.5, repeat:-1});

var tl = gsap.timeline( {repeat:-1} );
 
tl
  .to ( '#overlay', { '--color': 'red'})
  .to ( '#overlay', { '--color': 'orange'})
  .to ( '#overlay', { '--color': 'yellow'})
  .to ( '#overlay', { '--color': 'lime'})
  .to ( '#overlay', { '--color': 'aqua'})
  .to ( '#overlay', { '--color': 'blue'})
  .to ( '#overlay', { '--color': 'purple'})
  .to ( '#overlay', { '--color': 'blue'})
  .to ( '#overlay', { '--color': 'aqua'})
  .to ( '#overlay', { '--color': 'lime'})
  .to ( '#overlay', { '--color': 'yellow'})
  .to ( '#overlay', { '--color': 'orange'})
  .to ( '#overlay', { '--color': 'red'})
