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

  // ── Annotated Document Engine ──
  (function() {
    var phrases = document.querySelectorAll('.doc-phrase[data-passage]');
    if (!phrases.length) return;

    var cards = document.querySelectorAll('.nwtrc-card[data-passage]');

    function activate(id) {
      phrases.forEach(function(p) {
        p.classList.toggle('active', p.dataset.passage === id);
      });
      document.querySelectorAll('.doc-subject-line[data-subject-line]').forEach(function(line) {
        line.classList.toggle('active', line.dataset.subjectLine === id);
      });
      cards.forEach(function(c) {
        var shouldBeActive = c.dataset.passage === id;
        if (shouldBeActive && !c.classList.contains('active')) {
          c.classList.add('active');
        } else if (!shouldBeActive && c.classList.contains('active')) {
          c.classList.remove('active');
        }
      });
    }

    if ('IntersectionObserver' in window) {
      var docObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            activate(entry.target.dataset.passage);
          }
        });
      }, { threshold: 0.6, rootMargin: '-20% 0px -30% 0px' });

      phrases.forEach(function(p) { docObserver.observe(p); });
    }
    if (phrases.length) activate(phrases[0].dataset.passage);
  })();

})();
