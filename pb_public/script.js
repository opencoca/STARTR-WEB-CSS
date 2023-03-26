window.onload = function funLoad() {
  new WOW({resetAnimation: true}).init(); 
  ScrollReveal({ reset: true }).reveal('body > *:not([x-show], body > *:not([data-sr-id]))', { delay: 100, duration: 1000, distance: '0px', easing: 'ease-in-out', origin: 'bottom', scale: 1, viewFactor: 0.2, viewOffset: { top: 0, right: 0, bottom: 0, left: 0 } });
};
