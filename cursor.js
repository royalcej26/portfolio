/* ══════════════════════════════════════════════════════
   CUSTOM CURSOR
   - Inner dot follows mouse instantly
   - Outer ring follows with a smooth lag (lerp)
   - Hover class enlarges both on interactive elements
   ══════════════════════════════════════════════════════ */

const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
}

animateRing();

/* Hover state — add/remove cursor-hover class on body */
const hoverEls = document.querySelectorAll(
  'a, button, .case-card, .skill-block, .stat-item, .cert-item, [data-magnetic]'
);

hoverEls.forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});
