// Dark mode toggle
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(prefersDark) root.classList.add('dark');
  btn.addEventListener('click', () => root.classList.toggle('dark'));

  // Scroll reveal
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .15 });
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // Coordinate readout + crosshair inside hero
  const hero = document.getElementById('hero');
  const readout = document.getElementById('coordReadout');
  const crossV = document.getElementById('cross-v');
  const crossH = document.getElementById('cross-h');
  if(window.matchMedia('(hover: hover)').matches){
    hero.addEventListener('mousemove', (ev)=>{
      const r = hero.getBoundingClientRect();
      const x = ((ev.clientX - r.left) / r.width * 100).toFixed(1);
      const y = ((ev.clientY - r.top) / r.height * 100).toFixed(1);
      readout.textContent = `X: ${x} — Y: ${y}`;
      crossV.style.right = (r.right - ev.clientX) + 'px';
      crossH.style.top = ev.clientY + 'px';
      crossV.style.display='block'; crossH.style.display='block';
    });
    hero.style.position='relative';
  } else {
    crossV.style.display='none'; crossH.style.display='none';
  }
