/* ══════════════════════════════════════════════════════
   REVEAL ON SCROLL
   Elements with class "reveal" fade up when they enter
   the viewport. Add class "reveal" to any element you
   want to animate in on scroll.
   ══════════════════════════════════════════════════════ */

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

reveals.forEach(el => observer.observe(el));
