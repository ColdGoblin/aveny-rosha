/* ═══════════════════════════════════════════════════════════
   Avney Rosha — מרחב מנטורים
   Shared JS · v2.0
   Injects site chrome (top strip + navbar + footer) and
   populates icons across all pages from a single source.
═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Icon library (24×24 outline icons) ──────────────────
  const I = {
    // Category icons (home cards / nav)
    model: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4l12.8-12.8"/></svg>',
    toolbox: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 14h7M14 14h7"/><circle cx="12" cy="14" r="1.6"/></svg>',
    field: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    materials: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h10l6 6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="M14 4v6h6M8 13h8M8 17h5"/></svg>',
    principals: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 21c.7-3.5 3.5-6 7-6s6.3 2.5 7 6"/><path d="M9 4.5 12 2l3 2.5"/></svg>',
    supervisors: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 3 7v5c0 5 4 8.5 9 10 5-1.5 9-5 9-10V7l-9-4Z"/><path d="m8.5 12 2.5 2.5L16 10"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>',

    // Section icons
    listen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 18 0"/><path d="M3 12v3a2 2 0 0 0 2 2h1v-5"/><path d="M21 12v3a2 2 0 0 1-2 2h-1v-5"/><path d="M8 20c0-1.5 1.2-2.5 2.5-2.5"/></svg>',
    question: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.9.5-1 1-1 1.7"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></svg>',
    rapport: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 1-15.3 6.4"/><path d="M3 12a9 9 0 0 1 15.3-6.4"/><path d="M18 3v4h-4M6 21v-4h4"/></svg>',
    alliance: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 12 2 2 4-4"/><path d="M12 3 4 6v6c0 4.5 3.5 8.3 8 9 4.5-.7 8-4.5 8-9V6Z"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>',
    smart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    cards: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="12" height="14" rx="2"/><path d="M7 3.5 18 6l-2.5 13"/></svg>',
    gremlin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 11a7 7 0 0 1 14 0v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-3Z"/><path d="M9 11v1M15 11v1M9 16h6"/><path d="m6 8-2-2M18 8l2-2"/></svg>',
    openspace: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3.5 9h17M3.5 15h17M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18"/></svg>',
    hourglass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12M6 21h12M7 3v3.5c0 1.5.5 2 2 3.2L12 12l3-2.3c1.5-1.2 2-1.7 2-3.2V3M7 21v-3.5c0-1.5.5-2 2-3.2L12 12l3 2.3c1.5 1.2 2 1.7 2 3.2V21"/></svg>',
    coffee: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z"/><path d="M17 11h2a3 3 0 0 1 0 6h-2"/><path d="M7 3v2M11 3v2M15 3v2"/></svg>',
    growth: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21v-9"/><path d="M12 12c-3-3-7-2-7-2s0 5 3 7 4 0 4 0Z"/><path d="M12 14c2-3 6-2 6-2s0 4-2 6-4 0-4 0Z"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v13l6-3 6 3 6-3V4l-6 3-6-3-6 3Z"/><path d="M9 4v13M15 7v13"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 4 6 6 4-2-8 8M9 10l-5 5"/><path d="M9 4 7 6l8 8 2-2"/></svg>',
    wheel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M5.6 18.4l4.2-4.2M14.2 9.8l4.2-4.2"/></svg>',
    clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 3h6v3H9z"/><path d="M9 11h6M9 15h6M9 19h4"/></svg>',
    presentation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20l4-4 4 4M12 16v-6M9 12l2-3 2 2 3-4"/></svg>',
    school: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10 12 5l9 5-9 5-9-5Z"/><path d="M7 12v5c1.5 1 3 1.5 5 1.5s3.5-.5 5-1.5v-5"/><path d="M21 10v6"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z"/><circle cx="12" cy="13" r="4"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5a2.5 2.5 0 0 0 0 5H20"/><path d="M6.5 7H20M6.5 11H20"/></svg>',

    // Utility
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v12m0 0-4-4m4 4 4-4M5 20h14"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>'
  };

  // ── Nav items (single source of truth) ──────────────────
  const NAV = [
    { id: 'home',         href: 'index.html',           label: 'דף הבית' },
    { id: 'model',        href: 'mentoring-model.html', label: 'מודל המנטורינג' },
    { id: 'toolbox',      href: 'toolbox.html',         label: 'ארגז כלים' },
    { id: 'field',        href: 'field-use.html',       label: 'שימוש בשטח' },
    { id: 'supervisors',  href: 'supervisors.html',     label: 'מסלול מפקחים' },
    { id: 'principals',   href: 'principals.html',      label: 'מסלול מנהלים' }
  ];

  // ── Render top strip + main nav ─────────────────────────
  function renderChrome(active) {
    const links = NAV.map(n =>
      `<a href="${n.href}"${n.id === active ? ' class="active"' : ''}>${n.label}</a>`
    ).join('');

    return `
      <div class="site-strip">
        <div class="strip-lockup">
          <div class="strip-logo"><img src="logo-education-ministry-new.png" alt="מדינת ישראל · משרד החינוך" /></div>
          <div class="strip-logo"><img src="logo-avney-rosha-new.png" alt="אבני ראשה" /></div>
          <div class="strip-meta">
            <strong>אבני ראשה</strong>
            <span>המכון הישראלי למנהיגות בית ספרית</span>
          </div>
        </div>
        <div class="strip-tag">
          ${I.sparkle}
          <span>מרחב למידה למנטורים</span>
        </div>
      </div>
      <nav class="site-nav" aria-label="ניווט ראשי">
        <div class="nav-brand">
          <div class="nav-mark" aria-hidden="true"></div>
          <div class="nav-brand-text">
            <strong>מרחב מנטורים</strong>
            <span>מנהלים ומפקחים</span>
          </div>
        </div>
        <div class="nav-links" id="main-nav-links">${links}</div>
        <button class="nav-hamburger" id="nav-hamburger" type="button"
          aria-label="פתח תפריט ניווט" aria-expanded="false" aria-controls="main-nav-links">
          <span></span><span></span><span></span>
        </button>
      </nav>
    `;
  }

  // ── Render footer ───────────────────────────────────────
  function renderFooter() {
    return `
      <div class="site-footer">
        <div class="site-footer-inner">
          <div class="footer-brand">
            <img src="logo-avney-rosha-new.png" alt="אבני ראשה" />
            <div>
              <strong>מרחב למידה למנטורים</strong>
              אבני ראשה — המכון הישראלי למנהיגות בית ספרית · משרד החינוך
            </div>
          </div>
          <div class="footer-meta">
            © ${new Date().getFullYear()} כל הזכויות שמורות
          </div>
        </div>
      </div>
    `;
  }

  // ── Populate elements with data-icon ────────────────────
  function populateIcons(root) {
    (root || document).querySelectorAll('[data-icon]').forEach(el => {
      const name = el.getAttribute('data-icon');
      if (I[name] && !el.firstElementChild) {
        el.innerHTML = I[name];
      }
    });
  }

  // ── Auto-add doc-lines inside .file-doc ─────────────────
  function decorateFileDocs(root) {
    (root || document).querySelectorAll('.file-doc').forEach(el => {
      // skip if already decorated
      if (el.querySelector('.file-doc-lines, .file-doc-badge')) return;
      const type = (el.getAttribute('data-type') || 'doc').toLowerCase();
      const isVideo = (type === 'mp4' || type === 'video');
      if (!isVideo) {
        const lines = document.createElement('div');
        lines.className = 'file-doc-lines';
        lines.innerHTML = '<i></i><i></i><i></i>';
        el.appendChild(lines);
      }
      const badge = document.createElement('span');
      badge.className = 'file-doc-badge';
      badge.textContent = type.toUpperCase();
      el.appendChild(badge);
    });
  }

  // ── Add view + download buttons to .file-card ───────────
  function decorateFileCards(root) {
    (root || document).querySelectorAll('.file-card').forEach(card => {
      if (card.querySelector('.file-actions')) return;

      const href = card.tagName === 'A' ? card.getAttribute('href') : null;

      // Convert <a class="file-card"> → <div> so nested links are valid HTML
      let el = card;
      if (card.tagName === 'A' && href) {
        el = document.createElement('div');
        el.className = card.className;
        while (card.firstChild) el.appendChild(card.firstChild);
        card.parentNode.replaceChild(el, card);
      }

      // Remove legacy single-icon download button if present
      const oldDl = el.querySelector('.file-dl');
      if (oldDl) oldDl.remove();

      // Add view + download action buttons
      if (href) {
        const ext = href.split('?')[0].split('.').pop().toLowerCase();

        // Build a raw absolute URL (literal Hebrew/spaces preserved) so that
        // encodeURIComponent produces single-encoded output — not double-encoded.
        const base = window.location.href.replace(/[^/]*$/, '');
        const rawAbs = base + href;

        // PDF  → browser renders natively (no viewer needed)
        // DOCX / PPTX / DOC / PPT / XLSX → Microsoft Office Online viewer
        // anything else → Google Docs viewer (fallback)
        let viewUrl;
        if (ext === 'pdf') {
          viewUrl = href;
        } else if (['docx','doc','pptx','ppt','xlsx','xls'].includes(ext)) {
          viewUrl = 'https://view.officeapps.live.com/op/view.aspx?src=' + encodeURIComponent(rawAbs);
        } else {
          viewUrl = 'https://docs.google.com/viewer?url=' + encodeURIComponent(rawAbs);
        }

        const actions = document.createElement('div');
        actions.className = 'file-actions';
        actions.innerHTML = `
          <a href="${viewUrl}" target="_blank" rel="noopener" class="file-btn file-view-btn" aria-label="פתח לצפייה">
            ${I.eye}<span>צפייה</span>
          </a>
          <a href="${href}" download class="file-btn file-dl-btn" aria-label="הורד קובץ">
            ${I.download}<span>הורדה</span>
          </a>
        `;
        el.appendChild(actions);
      }
    });
  }

  // ── Hamburger toggle (mobile sidebar → top bar) ─────────
  function initHamburger() {
    const btn  = document.getElementById('nav-hamburger');
    const menu = document.getElementById('main-nav-links');
    if (!btn || !menu) return;

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = this.classList.toggle('open');
      this.setAttribute('aria-expanded', isOpen);
      this.setAttribute('aria-label', isOpen ? 'סגור תפריט ניווט' : 'פתח תפריט ניווט');
      menu.classList.toggle('mobile-open', isOpen);
    });

    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        menu.classList.remove('mobile-open');
      }
    });

    document.addEventListener('click', function (e) {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        menu.classList.remove('mobile-open');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.classList.contains('open')) {
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        menu.classList.remove('mobile-open');
        btn.focus();
      }
    });
  }

  // ── Public mount(activePage) ────────────────────────────
  const Site = {
    icons: I,
    nav: NAV,
    mount(activePage) {
      const chromeSlot = document.getElementById('site-chrome');
      const footerSlot = document.getElementById('site-footer');
      if (chromeSlot) chromeSlot.innerHTML = renderChrome(activePage);
      if (footerSlot) footerSlot.innerHTML = renderFooter();
      populateIcons(document);
      decorateFileDocs(document);
      decorateFileCards(document);
      initHamburger();
    },
    populateIcons,
    decorateFileDocs,
    decorateFileCards
  };

  // ── Accordion helper (sessions / topics) ────────────────
  Site.toggle = function (header) {
    const item = header.closest('.acc-item');
    if (item) item.classList.toggle('open');
  };

  // ── Lightbox (used by principals) ───────────────────────
  Site.openLightbox = function (thumb) {
    const img = thumb.querySelector('img');
    if (!img) return;
    let lb = document.getElementById('site-lightbox');
    if (!lb) {
      lb = document.createElement('div');
      lb.id = 'site-lightbox';
      lb.className = 'lightbox';
      lb.innerHTML = '<button class="lightbox-close" aria-label="סגירה">✕</button><img alt="" />';
      lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lightbox-close')) Site.closeLightbox(); });
      document.body.appendChild(lb);
      document.addEventListener('keydown', e => { if (e.key === 'Escape') Site.closeLightbox(); });
    }
    lb.querySelector('img').src = img.src;
    lb.classList.add('open');
  };
  Site.closeLightbox = function () {
    const lb = document.getElementById('site-lightbox');
    if (lb) lb.classList.remove('open');
  };

  window.Site = Site;
})();
