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

  // ── Annotated Document Engine (scroll-driven sticky) ──
  (function() {
    var scrollSection = document.getElementById('nwtrc-scroll');
    if (!scrollSection) return;

    var TOTAL = 22;
    var STEP_HEIGHT = 180;
    scrollSection.style.height = (TOTAL * STEP_HEIGHT + window.innerHeight) + 'px';

    var phrases  = document.querySelectorAll('.doc-phrase[data-passage]');
    var cards    = document.querySelectorAll('.nwtrc-card[data-passage]');
    var fill     = document.getElementById('nwtrc-progress');
    var docCol   = document.querySelector('.nwtrc-doc-col');
    var current  = null;

    function activate(id) {
      if (id === current) return;
      current = id;

      phrases.forEach(function(p) { p.classList.toggle('active', p.dataset.passage === id); });
      cards.forEach(function(c) {
        if (c.dataset.passage === id) { c.classList.add('active'); }
        else { c.classList.remove('active'); }
      });

      if (fill) fill.style.width = (((parseInt(id) - 1) / (TOTAL - 1)) * 100) + '%';

      // Auto-scroll doc column to keep highlighted phrase in view
      var targets = [];
      phrases.forEach(function(p) { if (p.dataset.passage === id) targets.push(p); });
      if (targets.length && docCol) {
        var phrase = targets[0];
        var phraseTop = phrase.getBoundingClientRect().top;
        var colTop = docCol.getBoundingClientRect().top;
        var offset = phraseTop - colTop + docCol.scrollTop - (docCol.clientHeight * 0.3);
        docCol.scrollTo({ top: Math.max(0, offset), behavior: 'smooth' });
      }
    }

    window.addEventListener('scroll', function() {
      var scrolled = -scrollSection.getBoundingClientRect().top;
      if (scrolled < 0) scrolled = 0;
      var idx = Math.min(Math.floor(scrolled / STEP_HEIGHT), TOTAL - 1);
      activate(String(idx + 1));
    }, { passive: true });

    activate('1');
  })();

})();
