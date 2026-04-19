/* ══════════════════════════════════════════════════════
   NAV — Adds "scrolled" class when user scrolls past 60px.
   This triggers the frosted-glass background on the navbar.
   ══════════════════════════════════════════════════════ */

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});
