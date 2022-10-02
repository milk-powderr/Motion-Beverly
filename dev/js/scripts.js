import { gsap } from "gsap";


var tl = gsap.timeline( {repeat:-1, repeatDelay: 0.1} );
 
tl

  .to ( '#overlay', { '--color': 'var(--red'})
  .to ( '#overlay', { '--color': 'var(--orange'})
  .to ( '#overlay', { '--color': 'var(--yellow'})
  .to ( '#overlay', { '--color': 'var(--green'})
  .to ( '#overlay', { '--color': 'var(--bluee'})
  .to ( '#overlay', { '--color': 'var(--purple'})
  .to ( '#overlay', { '--color': 'var(--indigo'})
  .to ( '#overlay', { '--color': 'var(--pink'})
