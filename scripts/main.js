// Theme toggle with localStorage persistence
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const ICONS = { light: '☀️', dark: '🌙' };

  function applyTheme(theme){
    root.setAttribute('data-theme', theme);
    const icon = btn?.querySelector('.theme-icon');
    if(icon) icon.textContent = theme === 'dark' ? ICONS.dark : ICONS.light;
    try { localStorage.setItem('theme', theme); } catch(_) {}
  }

  // Initial theme: saved -> prefers-color-scheme -> light
  const saved = (()=>{ try { return localStorage.getItem('theme'); } catch(_) { return null; }})();
  if(saved){ applyTheme(saved); }
  else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    applyTheme('dark');
  }

  btn?.addEventListener('click', ()=>{
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });
})();

// Mobile nav toggle
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const list = document.getElementById('nav-list');
  if(!toggle || !list) return;
  function setOpen(open){
    list.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }
  toggle.addEventListener('click', ()=> setOpen(!list.classList.contains('open')));
  list.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> setOpen(false)));
})();

// Footer year
document.addEventListener('DOMContentLoaded', ()=>{
  const y = document.getElementById('year');
  if(y) y.textContent = String(new Date().getFullYear());
});

