import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateEntrance = (element, delay = 0) => {
  if (!element) return;
  return gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: 'power3.out',
    }
  );
};

export const animateHeader = (element) => {
  if (!element) return;
  return gsap.fromTo(
    element,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  );
};

export { gsap, ScrollTrigger };

