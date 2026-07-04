// 3D portfolio interactions
document.addEventListener('DOMContentLoaded', ()=>{
  // Animate skill bars when AOS triggers (observe visibility)
  const skills = document.querySelectorAll('.skill');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const fill = entry.target.querySelector('.bar-fill');
        const target = fill.dataset.target || fill.getAttribute('data-target');
        fill.style.width = target + '%';
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.25});
  skills.forEach(s => io.observe(s));

  // allow clicking the percent to animate manually
  document.querySelectorAll('.skill-percent').forEach(sp=>{
    sp.addEventListener('click', ()=>{
      const parent = sp.closest('.skill');
      const fill = parent.querySelector('.bar-fill');
      fill.style.width = sp.dataset.percent + '%';
    });
  });

  // demo handler for project links
  document.querySelectorAll('a[href="#"]').forEach(a=> a.addEventListener('click', (e)=>{ e.preventDefault(); alert('Demo link — replace with real url'); }));

  // contact form handling (demo)
  window.handleContact = function(e){
    e.preventDefault();
    const res = document.getElementById('contactResult');
    res.className = 'alert alert-success mt-3';
    res.innerText = 'Thanks! Message recorded (demo).';
    e.target.reset();
    return false;
  };

  // initialize VanillaTilt for elements with data-tilt (CDN loaded in page)
  if(window.VanillaTilt){
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
      max: 12,
      speed: 400,
      glare: true,
      'max-glare': 0.25,
      scale: 1.02
    });
  }
});
