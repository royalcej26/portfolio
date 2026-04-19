/* ══════════════════════════════════════════════════════
   MAGNETIC BUTTONS
   Elements with [data-magnetic] slightly follow the
   cursor on hover, snapping back on mouseleave.
   ══════════════════════════════════════════════════════ */

document.querySelectorAll('[data-magnetic]').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) * 0.25;
    const dy = (e.clientY - cy) * 0.25;
    btn.style.transform = `translate(${dx}px, ${dy}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});


/* ══════════════════════════════════════════════════════
   PARALLAX HERO ORBS
   The two glowing orbs in the hero section shift subtly
   with mouse position for a depth effect.
   ══════════════════════════════════════════════════════ */

document.addEventListener('mousemove', e => {
  const orb1 = document.querySelector('.hero-orb-1');
  const orb2 = document.querySelector('.hero-orb-2');
  if (!orb1 || !orb2) return;

  const x = (e.clientX / window.innerWidth  - 0.5);
  const y = (e.clientY / window.innerHeight - 0.5);

  orb1.style.transform = `translate(${x *  30}px, ${y *  20}px)`;
  orb2.style.transform = `translate(${x * -20}px, ${y * -15}px)`;
});
