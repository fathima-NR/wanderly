const NAV_ITEMS = [
  { href: 'index.html', label: 'Home' },
  { href: 'destinations.html', label: 'Destinations' },
  { href: 'trips.html', label: 'Trips' },
  { href: 'app.html', label: 'App' },
  { href: 'stories.html', label: 'Stories' },
  { href: 'contact.html', label: 'Contact' },
];

const icon = (name) => `<i data-lucide="${name}"></i>`;
const stars = (n = 5) => `<span class="stars">${icon('star').repeat(n)}</span>`;

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function currentPage() {
  const file = location.pathname.split('/').pop();
  return file === '' ? 'index.html' : file;
}

/* ---------- Layout ---------- */
function renderHeader() {
  const el = document.getElementById('header');
  if (!el) return;
  const page = currentPage();
  el.className = 'header';
  el.innerHTML = `
    <nav class="container nav">
      <a href="index.html" class="logo"><span class="logo-mark">${icon('plane')}</span>Wanderly</a>
      <ul class="nav-links" id="navLinks">
        ${NAV_ITEMS.map((i) => `<li><a href="${i.href}" class="${i.href === page ? 'active' : ''}">${i.label}</a></li>`).join('')}
      </ul>
      <div class="nav-right">
        <a href="tel:+97141234567" class="nav-phone">${icon('phone')} +971 4 123 4567</a>
        <a href="contact.html" class="btn btn-sm nav-cta">Book a Trip</a>
        <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">${icon('menu')}</button>
      </div>
    </nav>`;

  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    el.classList.add('scrolled');
  });

  const onScroll = () => el.classList.toggle('scrolled', window.scrollY > 30 || links.classList.contains('open'));
  window.addEventListener('scroll', onScroll);
  onScroll();
}

function renderFooter() {
  const el = document.getElementById('footer');
  if (!el) return;
  el.className = 'footer';
  el.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="index.html" class="logo"><span class="logo-mark">${icon('plane')}</span>Wanderly</a>
          <p>Curated journeys, handpicked stays and unforgettable experiences across 80+ countries. Travel more, live bolder.</p>
          <div class="socials">
            <a href="#" aria-label="Facebook">${icon('facebook')}</a>
            <a href="#" aria-label="Instagram">${icon('instagram')}</a>
            <a href="#" aria-label="Twitter">${icon('twitter')}</a>
            <a href="#" aria-label="YouTube">${icon('youtube')}</a>
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <ul>${NAV_ITEMS.map((i) => `<li><a href="${i.href}">${i.label}</a></li>`).join('')}</ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li><a href="contact.html">Help Center</a></li>
            <li><a href="contact.html">Booking Policy</a></li>
            <li><a href="contact.html">Cancellation</a></li>
            <li><a href="contact.html">Travel Insurance</a></li>
            <li><a href="contact.html">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4>Get in Touch</h4>
          <ul class="footer-contact">
            <li>${icon('map-pin')} Marina Plaza, Dubai Marina, UAE</li>
            <li>${icon('phone')} +971 4 123 4567</li>
            <li>${icon('mail')} hello@wanderly.com</li>
            <li>${icon('clock')} Mon – Sat, 9:00 AM – 7:00 PM</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Wanderly Travels. All rights reserved.</span>
        <nav><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookies</a></nav>
      </div>
    </div>`;
}

/* ---------- Card templates ---------- */
const destCard = (d) => `
  <a href="trips.html" class="dest-card reveal">
    <img src="${d.img}" alt="${d.name}, ${d.country}" loading="lazy">
    <div class="dest-top">
      <span class="glass-tag">${d.tours} Tours</span>
      <span class="arrow-btn">${icon('arrow-up-right')}</span>
    </div>
    <div class="dest-bottom">
      <h3>${d.name}</h3>
      <div class="dest-row">
        <span>${icon('map-pin')} ${d.country}</span>
        <span>from <b>$${d.from.toLocaleString()}</b></span>
      </div>
    </div>
  </a>`;

const tripCard = (t) => `
  <article class="trip-card reveal">
    <div class="trip-img">
      <img src="${t.img}" alt="${t.title}" loading="lazy">
      <span class="trip-tag">${t.tag}</span>
      <button class="heart" aria-label="Save to wishlist">${icon('heart')}</button>
      <span class="trip-days">${icon('clock')} ${t.days} Days</span>
    </div>
    <div class="trip-body">
      <span class="trip-loc">${icon('map-pin')} ${t.place}</span>
      <h3>${t.title}</h3>
      <div class="trip-meta">
        <span class="rating">${icon('star')} ${t.rating.toFixed(1)} <small>(${t.reviews})</small></span>
        <span>${icon('users')} ${t.people} people</span>
      </div>
      <div class="trip-foot">
        <div class="price"><small>Starting from</small><strong>$${t.price.toLocaleString()} <span>/ person</span></strong></div>
        <a href="contact.html?trip=${encodeURIComponent(t.title)}" class="btn btn-primary btn-sm">Book ${icon('arrow-right')}</a>
      </div>
    </div>
  </article>`;

const testiCard = (t) => `
  <div class="testi-card reveal">
    <div class="quote-ic">${icon('quote')}</div>
    <p>“${t.text}”</p>
    <div class="testi-user">
      <img src="${t.img}" alt="${t.name}" loading="lazy">
      <div><strong>${t.name}</strong><span>${t.trip}</span></div>
      ${stars()}
    </div>
  </div>`;

function renderList(id, items, template, limit) {
  const el = document.getElementById(id);
  if (!el) return;
  const list = limit ? items.slice(0, limit) : items;
  el.innerHTML = list.length ? list.map(template).join('') : '<p class="empty">No results found. Try a different search or filter.</p>';
  refreshIcons();
  observeReveal();
}

function setCount(id, n, noun) {
  const el = document.getElementById(id);
  if (el) el.textContent = `Showing ${n} ${noun}${n === 1 ? '' : 's'}`;
}

/* ---------- Destinations: region filter + search ---------- */
function setupDestinations() {
  const grid = document.getElementById('allDestinations');
  if (!grid) return;
  let region = 'all';
  let query = '';

  const update = () => {
    const list = DESTINATIONS.filter((d) =>
      (region === 'all' || d.region === region) &&
      `${d.name} ${d.country}`.toLowerCase().includes(query)
    );
    renderList('allDestinations', list, destCard);
    setCount('destCount', list.length, 'destination');
  };

  document.getElementById('destFilters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('#destFilters .filter-btn').forEach((b) => b.classList.toggle('active', b === btn));
    region = btn.dataset.filter;
    update();
  });
  document.getElementById('destSearch').addEventListener('input', (e) => {
    query = e.target.value.trim().toLowerCase();
    update();
  });
  update();
}

/* ---------- Trips: type filter + sort ---------- */
function setupTrips() {
  const grid = document.getElementById('allTrips');
  if (!grid) return;
  let type = 'all';
  let sort = 'popular';

  const sorters = {
    popular: (a, b) => b.reviews - a.reviews,
    'price-asc': (a, b) => a.price - b.price,
    'price-desc': (a, b) => b.price - a.price,
    rating: (a, b) => b.rating - a.rating,
    duration: (a, b) => a.days - b.days,
  };

  const update = () => {
    const list = TRIPS.filter((t) => type === 'all' || t.type === type).sort(sorters[sort]);
    renderList('allTrips', list, tripCard);
    setCount('tripCount', list.length, 'trip');
  };

  document.getElementById('tripFilters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('#tripFilters .filter-btn').forEach((b) => b.classList.toggle('active', b === btn));
    type = btn.dataset.filter;
    update();
  });
  document.getElementById('tripSort').addEventListener('change', (e) => {
    sort = e.target.value;
    update();
  });
  update();
}

/* ---------- Testimonial slider ---------- */
function setupSlider() {
  const track = document.getElementById('sliderTrack');
  if (!track) return;
  track.innerHTML = TESTIMONIALS.map((t) => `<div class="slide">${testiCard(t).replace(' reveal', '')}</div>`).join('');
  const dots = document.getElementById('sliderDots');
  dots.innerHTML = TESTIMONIALS.map((_, i) => `<button class="dot" aria-label="Slide ${i + 1}" data-i="${i}"></button>`).join('');
  refreshIcons();

  let index = 0;
  let timer;
  const go = (i) => {
    index = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.querySelectorAll('.dot').forEach((d, n) => d.classList.toggle('active', n === index));
    clearInterval(timer);
    timer = setInterval(() => go(index + 1), 6000);
  };

  document.getElementById('prevSlide').addEventListener('click', () => go(index - 1));
  document.getElementById('nextSlide').addEventListener('click', () => go(index + 1));
  dots.addEventListener('click', (e) => e.target.dataset.i && go(+e.target.dataset.i));
  go(0);
}

/* ---------- Animated counters ---------- */
function formatCount(el, progress) {
  const target = parseFloat(el.dataset.count);
  const decimals = (el.dataset.count.split('.')[1] || '').length;
  const value = (target * progress).toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return value + (el.dataset.suffix || '');
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / 1600, 1);
      el.textContent = formatCount(el, 1 - Math.pow(1 - p, 3));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

function setupCounters() {
  document.querySelectorAll('[data-count]').forEach((el) => {
    el.textContent = formatCount(el, 1);
    counterObserver.observe(el);
  });
}

/* ---------- Forms & interactions ---------- */
function setupInteractions() {
  document.addEventListener('click', (e) => {
    const heart = e.target.closest('.heart');
    if (heart) {
      e.preventDefault();
      heart.classList.toggle('liked');
    }
  });

  document.querySelectorAll('form[data-msg]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = form.parentElement.querySelector('.form-msg');
      if (msg) msg.textContent = form.dataset.msg;
      form.reset();
    });
  });

  const searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      location.href = 'trips.html';
    });
  }

  const tripSelect = document.getElementById('tripSelect');
  if (tripSelect) {
    tripSelect.innerHTML += TRIPS.map((t) => `<option>${t.title}</option>`).join('');
    const preset = new URLSearchParams(location.search).get('trip');
    if (preset) tripSelect.value = preset;
  }
}

/* ---------- Reveal on scroll ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observeReveal() {
  document.querySelectorAll('.reveal:not(.visible)').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    revealObserver.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();

  renderList('homeDestinations', DESTINATIONS, destCard, 5);
  renderList('homeTrips', TRIPS, tripCard, 3);
  renderList('allStories', TESTIMONIALS, testiCard);

  setupDestinations();
  setupTrips();
  setupSlider();
  setupInteractions();

  setupCounters();
  refreshIcons();
  observeReveal();
});
