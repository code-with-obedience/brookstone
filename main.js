  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const titleEl = document.getElementById('heroTitle');
  const subtitleEl = document.getElementById('heroSubtitle');

  // Replace the text/gradients for slide 2 and 3 with real content and photos
  // whenever those images are available.
  const slideContent = [
    { title: 'Shaping Future Innovators', subtitle: 'Our students thrive in an environment that fosters curiosity, creativity, and collaboration.' },
    { title: 'Excellence In Every Classroom', subtitle: 'A curriculum built to challenge, inspire, and prepare students for the world ahead.' },
    { title: 'A Community That Grows Together', subtitle: 'From sports to the arts, Brookstone nurtures every side of a student\u2019s potential.' }
  ];

  let current = 0;
  let timer;
  const AUTO_DELAY = 5000;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    titleEl.textContent = slideContent[current].title;
    subtitleEl.textContent = slideContent[current].subtitle;
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    timer = setInterval(next, AUTO_DELAY);
  }

  function resetAuto() {
    clearInterval(timer);
    startAuto();
  }

  document.getElementById('nextBtn').addEventListener('click', () => { next(); resetAuto(); });
  document.getElementById('prevBtn').addEventListener('click', () => { prev(); resetAuto(); });
  dots.forEach(dot => {
    dot.addEventListener('click', () => { goTo(parseInt(dot.dataset.index)); resetAuto(); });
  });

  startAuto();