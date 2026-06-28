/* Berkeley Budget Discipline Framework — main.js */

(function () {
  'use strict';

  // ── Mobile nav toggle ──
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('open', !expanded);
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.site-nav')) {
        hamburger.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
      }
    });
  }

  // ── Active nav link ──
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    const href = a.getAttribute('href').split('/').pop();
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

  // ── Fade-in on scroll ──
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything
    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('visible');
    });
  }
  // ── Accordion ──
  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      // Close all
      document.querySelectorAll('.accordion-trigger').forEach(function (t) {
        t.setAttribute('aria-expanded', 'false');
        t.nextElementSibling.classList.remove('open');
      });
      // Open this one if it was closed
      if (!expanded) {
        this.setAttribute('aria-expanded', 'true');
        this.nextElementSibling.classList.add('open');
      }
    });
  });

  // ── Annotated Document Engine (prev/next) ──
  (function() {
    var section = document.getElementById('nwtrc-section');
    if (!section) return;

    var TOTAL   = 23;
    var current = 1;

    var phrases = document.querySelectorAll('.doc-phrase[data-passage]');
    var cards   = document.querySelectorAll('.nwtrc-card[data-passage]');
    var fill    = document.getElementById('nwtrc-progress');
    var prevBtn = document.getElementById('nwtrc-prev');
    var nextBtn = document.getElementById('nwtrc-next');
    var docCol  = document.querySelector('.nwtrc-doc-col');

    function activate(n) {
      current = n;
      var id = String(n);

      phrases.forEach(function(p) { p.classList.toggle('active', p.dataset.passage === id); });
      cards.forEach(function(c) { c.classList.toggle('active', c.dataset.passage === id); });

      if (fill) fill.style.width = ((n - 1) / (TOTAL - 1) * 100) + '%';

      // Scroll doc column so active phrase is visible
      var activePhrase = section.querySelector('.doc-phrase[data-passage="' + id + '"]');
      if (activePhrase && docCol) {
        var phraseTop = activePhrase.getBoundingClientRect().top;
        var colTop = docCol.getBoundingClientRect().top;
        var target = docCol.scrollTop + (phraseTop - colTop) - (docCol.clientHeight * 0.35);
        docCol.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
      }

      if (prevBtn) prevBtn.disabled = (n <= 1);
      if (nextBtn) nextBtn.disabled = (n >= TOTAL);
    }

    if (prevBtn) prevBtn.addEventListener('click', function() { if (current > 1) activate(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function() { if (current < TOTAL) activate(current + 1); });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowRight' && current < TOTAL) activate(current + 1);
      if (e.key === 'ArrowLeft'  && current > 1)     activate(current - 1);
    });

    activate(1);
  })();

})();
