# UX Audit Report — מרחב מנטורים | אבני ראשה

## Executive Summary
The site is professionally designed with a clear visual system, consistent component library, and solid RTL foundation. The main issues are: mobile navigation breaks without a hamburger menu, several interactive elements (accordions, photo grid) are inaccessible to keyboard users, a few color contrast values fall below WCAG AA, and a handful of RTL-specific details are inverted or missing.

---

## Pages Reviewed
1. `index.html` — Home
2. `mentoring-model.html` — Mentoring Model
3. `toolbox.html` — Toolbox
4. `field-use.html` — Field Use
5. `main-shared.html` — Shared Materials
6. `principals.html` — Principals Track
7. `supervisors.html` — Supervisors Track

---

## Issues by Priority

### 🔴 High Priority (Fix First)

**1. No mobile hamburger menu — nav wraps into a mess on small screens**
- **Page(s):** All pages
- **What's wrong:** 6 nav links at 14px with padding ~90px each = ~540px total, won't fit on 375px. `flex-wrap: wrap` makes them cascade into multiple sticky lines.
- **Why it matters:** On mobile the viewport is consumed by navigation before any content appears.
- **Fix:** Add hamburger toggle below 768px. Hide `.nav-links` by default on mobile, show via button toggle.

**2. Accordion headers and photo thumbnails are not keyboard accessible**
- **Page(s):** principals.html, supervisors.html, toolbox.html, field-use.html, main-shared.html
- **What's wrong:** `.acc-header` and `.photo-thumb` are `<div>` elements with `onclick`. Not in tab order, can't be activated by keyboard or screen readers.
- **Why it matters:** WCAG 2.1 Level A failure (2.1.1 Keyboard). Government portal — accessibility compliance matters.
- **Fix:** Change `.acc-header` divs to `<button>` elements. Change `.photo-thumb` divs to `<button>` or `<a>`.

**3. Text contrast failures — light gray text below WCAG AA**
- **Page(s):** All pages
- **What's wrong:**
  - `--text-light` (#718096 on white) → ratio ~4.15:1 (needs 4.5:1)
  - Hero stat labels rgba(255,255,255,0.55) on dark → ~4.0:1
- **Why it matters:** Fails WCAG AA for normal text. Affects readability for users with low vision.
- **Fix:** Darken `--text-light` to `#5d6b82`. Increase hero stat label opacity to at least 0.72.

---

### 🟡 Medium Priority (Fix Soon)

**4. RTL bug: back button arrow points the wrong direction**
- **Page(s):** principals.html
- **What's wrong:** `← חזרה` uses a LEFT arrow. In RTL, "back/previous" is to the RIGHT (→).
- **Fix:** Change `&#x2190;` to `&#x2192;`, or remove the button (breadcrumbs already handle this).

**5. RTL bug: breadcrumb separator faces the wrong way**
- **Page(s):** All inner pages
- **What's wrong:** Uses `›` (right-pointing). In RTL the hierarchy reads right-to-left so separator should be `‹`.
- **Fix:** Replace `›` with `‹` (`&#8249;`).

**6. Footer copyright text is left-aligned in RTL**
- **Page(s):** All pages
- **What's wrong:** `.footer-meta { text-align: left; }` pushes Hebrew copyright text to the wrong edge.
- **Fix:** Change to `text-align: end;` (logical property, auto-respects RTL).

**7. Google Fonts without font-display: swap**
- **Page(s):** All pages
- **What's wrong:** No `display=swap` in the font import — potential invisible text on slow connections.
- **Fix:** Add `&display=swap` to the Google Fonts URL in shared.css.

**8. Redundant navigation: back button + breadcrumbs on same page**
- **Page(s):** principals.html and other inner pages
- **What's wrong:** Both serve the same purpose. Back button uses heavy inline styles.
- **Fix:** Remove back button; extract styles to `.btn-back` CSS class if kept.

**9. No skip-to-content link**
- **Page(s):** All pages
- **What's wrong:** Keyboard users must Tab through the full header + 6 nav links on every page load.
- **Fix:** Add `<a href="#main-content" class="skip-link">דלג לתוכן הראשי</a>` as first child of body; add `id="main-content"` to `<main>`.

---

### 🟢 Low Priority (Nice to Fix)

**10. Accordion chevron points right in RTL context**
- RTL convention: collapsed state should show ‹ (left-pointing), not › (right-pointing).
- Fix: Reverse the chevron SVG path for RTL.

**11. No scroll-to-top button on long pages**
- Principals and toolbox pages are very long with no way back to top.
- Fix: Small floating button (bottom-left in RTL), appears after 400px scroll.

**12. No search or filter on file-heavy pages**
- Principals has 30+ files with no way to search by name or filter by type.
- Fix: Simple client-side text search on `.file-name` content.

**13. Focus-visible styles not defined**
- No `:focus-visible` CSS — browser defaults used, often invisible.
- Fix: `:focus-visible { outline: 3px solid var(--teal); outline-offset: 3px; border-radius: 4px; }`

**14. Hero stats — CSS exists but HTML is never rendered**
- `.hero-stats` component styles exist in shared.css but index.html never uses them.
- Fix: Either add stat numbers to the hero, or remove the dead CSS.

---

## Strengths
1. **Solid RTL foundation** — `dir="rtl"` on root, logical CSS properties used, careful text alignment throughout.
2. **Consistent design system** — one CSS file, one JS file, shared chrome; no page-to-page inconsistencies.
3. **Excellent file card component** — document-shaped icons with color-coded type badges (PDF/DOCX/PPTX) are genuinely helpful.
4. **Good semantic HTML** — `<nav>`, `<main>`, `<header>`, `<blockquote>`, `lang="he"` on root.
5. **Thoughtful responsive breakpoints** — 1100px/860px/480px cover main device classes; grid and font scaling work well.

---

## Quick Wins

| # | Change | Effort | Impact |
|---|--------|--------|--------|
| 1 | `footer-meta`: `text-align: left` → `text-align: end` | 30 sec | Medium |
| 2 | Breadcrumb `›` → `‹` | 30 sec | Medium |
| 3 | Back button arrow `←` → `→` (or remove) | 1 min | Medium |
| 4 | Darken `--text-light` from `#718096` to `#5d6b82` | 1 min | High |
| 5 | Change `.acc-header` divs to `<button>` elements | 10 min | High (accessibility) |
