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
    var passages = document.querySelectorAll('.doc-passage[data-passage]');
    if (!passages.length) return;

    var questions = document.querySelectorAll('.nwtrc-questions li[data-passages]');
    var insideList = document.querySelector('.nwtrc-frame-items.inside');
    var outsideList = document.querySelector('.nwtrc-frame-items.outside');
    var annotations = document.querySelectorAll('.annotation[data-passage]');

    var frameData = {
      '1': {
        inside: ['Affordable housing is at risk', 'A vote is tomorrow', 'Urgency'],
        outside: ['What the alternative proposal funds', 'The full range of options under Measure U1']
      },
      '2': {
        inside: ["The councilmembers' proposal removes small-sites funding", "Mayor's proposal supports Small Sites"],
        outside: ['What the alternative proposal funds instead', 'What tradeoffs the alternative weighed']
      },
      '3': {
        inside: ['Voter mandate for Measure U1', 'HAC recommendation of $5M for small sites', "Mayor's allocation"],
        outside: ["Other eligible uses within Measure U1's scope", 'Relative cost-effectiveness of each strategy']
      },
      '4': {
        inside: ['Tenants in at-risk buildings', 'Displacement prevention', 'One highlighted project'],
        outside: ['Households that new production might house', 'Cost per household helped', 'Regional housing context']
      },
      '5': {
        inside: ['Tax funds should go to intended purposes', 'Accountability to voters'],
        outside: ['Whether Small Sites is the highest and best use within those purposes', "Other eligible strategies that also serve Measure U1's intent"]
      },
      '6': {
        inside: ["Supporters of the Mayor's proposal", "Action before the next day's vote"],
        outside: ["The alternative proposal's reasoning", 'Whether residents had earlier opportunity to compare both proposals']
      },
      '7': {
        inside: ['Named councilmembers on each side'],
        outside: ['The substantive arguments made by councilmembers who supported the alternative proposal']
      }
    };

    function setItems(el, items) {
      if (!el) return;
      el.innerHTML = items.map(function(t) { return '<li>' + t + '</li>'; }).join('');
    }

    function activate(id) {
      passages.forEach(function(p) { p.classList.toggle('active', p.dataset.passage === id); });
      annotations.forEach(function(a) { a.classList.toggle('active', a.dataset.passage === id); });
      questions.forEach(function(q) {
        var ids = (q.dataset.passages || '').split(',');
        q.classList.toggle('active', ids.indexOf(id) !== -1);
      });
      var f = frameData[id] || { inside: [], outside: [] };
      setItems(insideList, f.inside);
      setItems(outsideList, f.outside);
    }

    if ('IntersectionObserver' in window) {
      var docObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            activate(entry.target.dataset.passage);
          }
        });
      }, { threshold: 0.3, rootMargin: '-15% 0px -45% 0px' });

      passages.forEach(function(p) { docObserver.observe(p); });
    }
    if (passages.length) activate(passages[0].dataset.passage);
  })();

})();
