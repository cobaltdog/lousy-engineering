/* Lousy Engineering — client runtime (works from file:// and any static host) */
(function () {
  'use strict';
  var root = document.body.dataset.root || '';
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };

  function escH(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ---------- storage ----------
     localStorage is unreliable on file:// (Firefox gives every file its own store),
     so state is mirrored into window.name, which survives navigation within a tab.
     Whichever copy is newer wins. */
  var STATE_KEY = 'le-state', NAME_TAG = '__lousy_engineer__';
  function readLS() { try { return JSON.parse(localStorage.getItem(STATE_KEY)) || null; } catch (e) { return null; } }
  function readName() { try { var o = JSON.parse(window.name); return o && o[NAME_TAG] || null; } catch (e) { return null; } }
  var state = (function () {
    var a = readLS(), b = readName();
    if (a && b) return (b.ts || 0) > (a.ts || 0) ? b : a;
    return a || b || { ts: 0 };
  })();
  function persist() {
    state.ts = Date.now();
    var json = JSON.stringify(state);
    try { localStorage.setItem(STATE_KEY, json); } catch (e) {}
    try { var o = {}; o[NAME_TAG] = state; window.name = JSON.stringify(o); } catch (e) {}
  }
  function load(k, d) { return state[k] === undefined ? d : state[k]; }
  function save(k, v) { state[k] = v; persist(); }
  persist(); // sync both copies on every page load

  /* ---------- toast ---------- */
  var toastEl = $('.toast'), toastT;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove('show'); }, 1600);
  }
  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (res, rej) {
      var ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? res() : rej(); } catch (e) { rej(e); } finally { ta.remove(); }
    });
  }

  /* ---------- theme ---------- */
  function setTheme(t) {
    document.documentElement.dataset.theme = t;
    save('theme', t);
  }
  function toggleTheme() { setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'); }
  $$('.theme-toggle').forEach(function (b) { b.addEventListener('click', toggleTheme); });

  /* ---------- media: local first, Notion fallback ---------- */
  $$('img[data-remote]').forEach(function (img) {
    function fallback() { if (img.dataset.fell) return; img.dataset.fell = '1'; img.src = img.dataset.remote; }
    img.addEventListener('error', fallback);
    if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) fallback();
  });
  // File links: if local copy is missing, use remote (we can only probe over http(s); on file:// assume local unless fetched)
  function probeLocal(url, cb) {
    if (location.protocol === 'file:') {
      cb(window.LE_MEDIA_LOCAL === true); return;
    }
    fetch(url, { method: 'HEAD' }).then(function (r) { cb(r.ok); }).catch(function () { cb(false); });
  }
  $$('a[data-remote]').forEach(function (a) {
    probeLocal(a.getAttribute('href'), function (ok) { if (!ok) { a.href = a.dataset.remote; a.removeAttribute('download'); } });
  });
  $$('[data-pdf-load]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var frame = btn.closest('.pdf-frame');
      probeLocal(frame.dataset.src, function (ok) {
        var f = document.createElement('iframe');
        f.title = 'PDF preview'; f.src = ok ? frame.dataset.src : frame.dataset.remote;
        frame.innerHTML = ''; frame.classList.add('loaded'); frame.appendChild(f);
      });
    });
  });

  /* ---------- copy code / equations ---------- */
  $$('.copy-code').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var code = btn.closest('.code').querySelector('pre code').innerText;
      copy(code).then(function () {
        btn.classList.add('copied'); btn.querySelector('span').textContent = 'Copied';
        setTimeout(function () { btn.classList.remove('copied'); btn.querySelector('span').textContent = 'Copy'; }, 1600);
      });
    });
  });
  function copyEq(el) { copy(el.dataset.tex).then(function () { toast('LaTeX copied'); }); }
  document.addEventListener('click', function (e) {
    var eq = e.target.closest('.eq');
    if (eq && !e.target.closest('summary') && !window.getSelection().toString()) copyEq(eq);
  });
  document.addEventListener('keydown', function (e) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('eq')) { e.preventDefault(); copyEq(e.target); }
  });

  /* ---------- toggles (+ remembered state) ---------- */
  var pageKey = document.body.dataset.page;
  var allDetails = $$('.prose details');
  var restoring = false;
  function openAncestors(el) {
    var d = el && el.closest('details');
    while (d) { d.open = true; d = d.parentElement && d.parentElement.closest('details'); }
  }
  function persistOpen() {
    if (!pageKey || restoring) return;
    save('le-open:' + pageKey, allDetails.filter(function (d) { return d.open && d.dataset.key; }).map(function (d) { return d.dataset.key; }));
  }
  var persistT;
  document.addEventListener('toggle', function (e) {
    if (e.target.tagName !== 'DETAILS') return;
    clearTimeout(persistT); persistT = setTimeout(persistOpen, 150);
  }, true);
  if (pageKey) {
    var openKeys = load('le-open:' + pageKey, []);
    if (openKeys.length) {
      restoring = true;
      var set = {}; openKeys.forEach(function (k) { set[k] = 1; });
      allDetails.forEach(function (d) { if (set[d.dataset.key]) d.open = true; });
      setTimeout(function () { restoring = false; }, 0);
    }
  }
  $$('[data-expand-all]').forEach(function (b) { b.addEventListener('click', function () { allDetails.forEach(function (d) { d.open = true; }); }); });
  $$('[data-collapse-all]').forEach(function (b) { b.addEventListener('click', function () { allDetails.forEach(function (d) { d.open = false; }); }); });
  // Don't let anchor clicks inside summaries toggle
  $$('summary a').forEach(function (a) { a.addEventListener('click', function (e) { e.stopPropagation(); }); });

  /* ---------- print / save as PDF ---------- */
  var printSnapshot = null;
  function expandForPrint() {
    if (printSnapshot) return;
    printSnapshot = allDetails.map(function (d) { return d.open; });
    restoring = true;
    allDetails.forEach(function (d) { d.open = true; });
  }
  function restoreAfterPrint() {
    if (!printSnapshot) return;
    allDetails.forEach(function (d, i) { d.open = printSnapshot[i]; });
    printSnapshot = null; setTimeout(function () { restoring = false; }, 0);
  }
  window.addEventListener('beforeprint', expandForPrint);
  window.addEventListener('afterprint', restoreAfterPrint);
  $$('[data-print]').forEach(function (b) {
    b.addEventListener('click', function () {
      expandForPrint();
      var imgs = $$('.prose img');
      imgs.forEach(function (im) { im.loading = 'eager'; });
      var pending = imgs.filter(function (im) { return !im.complete; });
      if (pending.length) toast('Loading ' + pending.length + ' figures for print…');
      var done = false;
      function go() { if (done) return; done = true; window.print(); }
      Promise.all(pending.map(function (im) { return new Promise(function (r) { im.addEventListener('load', r, { once: true }); im.addEventListener('error', r, { once: true }); }); })).then(go);
      setTimeout(go, 12000);
    });
  });

  /* ---------- bookmarks ---------- */
  var homeSaved = $('.home-saved');
  function renderHomeSaved() {
    if (!homeSaved) return;
    homeSaved.hidden = !bms.length;
    $('.saved-n', homeSaved).textContent = bms.length + (bms.length === 1 ? ' item' : ' items');
    $('.saved-grid', homeSaved).innerHTML = bms.map(function (b, i) {
      return '<li class="saved-card"><a href="' + root + b.url + '"><span class="bm-meta mono">' + escH(b.course + ' · ' + b.page) + '</span><span class="saved-title">' + escH(b.title) + '</span>' + (b.trail ? '<span class="bm-trail">' + escH(b.trail) + '</span>' : '') + '</a><button class="bm-del" type="button" data-i="' + i + '" aria-label="Remove ' + escH(b.title) + '">×</button></li>';
    }).join('');
  }
  var bms = load('bookmarks', []);
  var bmToggle = $('.bm-toggle'), bmPanel = $('.bm-panel'), bmList = $('.bm-list'), bmCount = $('.bm-count');
  function bmIndex(url) { for (var i = 0; i < bms.length; i++) if (bms[i].url === url) return i; return -1; }
  function renderBms() {
    save('bookmarks', bms);
    bmCount.textContent = bms.length;
    bmToggle.classList.toggle('has', bms.length > 0);
    renderHomeSaved();
    $$('.bm-btn').forEach(function (b) { var on = bmIndex(b.dataset.bmUrl) > -1; b.setAttribute('aria-pressed', String(on)); b.title = on ? 'Remove from saved' : (b.classList.contains('bm-page') ? 'Save page' : 'Save section'); });
    if (!bms.length) { bmList.innerHTML = '<li class="bm-empty">Nothing saved yet. Hover a heading and click <span class="bm-inline">' + bmToggle.querySelector('svg').outerHTML + '</span> to save it.</li>'; return; }
    bmList.innerHTML = bms.map(function (b, i) {
      return '<li><a href="' + root + b.url + '"><span class="bm-meta mono">' + escH(b.course + ' · ' + b.page) + '</span><span class="bm-title">' + escH(b.title) + '</span>' + (b.trail ? '<span class="bm-trail">' + escH(b.trail) + '</span>' : '') + '</a><button class="bm-del" type="button" data-i="' + i + '" aria-label="Remove ' + escH(b.title) + '">×</button></li>';
    }).join('');
  }
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.bm-btn');
    if (btn) {
      e.preventDefault(); e.stopPropagation();
      var i = bmIndex(btn.dataset.bmUrl);
      if (i > -1) { bms.splice(i, 1); toast('Removed from saved'); }
      else { bms.unshift({ url: btn.dataset.bmUrl, title: btn.dataset.bmTitle, trail: btn.dataset.bmTrail, page: btn.dataset.bmPage, course: btn.dataset.bmCourse, t: Date.now() }); toast('Saved'); }
      renderBms(); return;
    }
    var del = e.target.closest('.bm-del');
    if (del) { e.stopPropagation(); bms.splice(+del.dataset.i, 1); renderBms(); return; }
    if (e.target.closest('.bm-clear')) { if (confirm('Remove all saved sections?')) { bms = []; renderBms(); } return; }
    if (e.target.closest('.bm-toggle')) { var open = bmPanel.hidden; bmPanel.hidden = !open; bmToggle.setAttribute('aria-expanded', String(open)); return; }
    if (!bmPanel.hidden && !e.target.closest('.bm-panel')) { bmPanel.hidden = true; bmToggle.setAttribute('aria-expanded', 'false'); }
  }, true);
  window.addEventListener('storage', function (e) { if (e.key === 'le-bookmarks') { bms = load('bookmarks', []); renderBms(); } });

  function revealHash(flash) {
    if (!location.hash) return;
    var el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!el) return;
    openAncestors(el);
    var d = el.closest('details'); if (d && d.querySelector('summary').contains(el)) d.open = true;
    requestAnimationFrame(function () {
      el.scrollIntoView({ block: 'start' });
      if (flash) { el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); }
    });
  }
  window.addEventListener('hashchange', function () { revealHash(true); });
  revealHash(true);
  // TOC links open their section
  $$('.toc a').forEach(function (a) { a.addEventListener('click', function () { setTimeout(function () { revealHash(true); }, 0); }); });

  /* ---------- TOC scrollspy + progress ---------- */
  var tocLinks = $$('.toc a');
  var heads = tocLinks.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  var ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var h = document.documentElement; var max = h.scrollHeight - h.clientHeight;
      document.querySelector('.topbar').style.setProperty('--progress', max > 0 ? (h.scrollTop / max).toFixed(4) : 0);
      var active = -1;
      heads.forEach(function (el, i) { if (el && el.offsetParent !== null && el.getBoundingClientRect().top < 140) active = i; });
      tocLinks.forEach(function (a, i) { a.classList.toggle('active', i === active); });
    });
  }
  document.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- lightbox ---------- */
  var lb = $('.lightbox'), lbImg = lb && lb.querySelector('img');
  $$('.img-zoom').forEach(function (b) {
    b.addEventListener('click', function () { var im = b.querySelector('img'); lbImg.src = im.currentSrc || im.src; lbImg.alt = im.alt; lb.hidden = false; lb.querySelector('.lb-close').focus(); });
  });
  if (lb) lb.addEventListener('click', function () { lb.hidden = true; });

  /* ---------- home: random tagline (click to cycle, never repeats back-to-back) ---------- */
  var tagEl = $('.tagline'), tags = window.LE_TAGLINES || [];
  if (tagEl && tags.length) {
    var showTag = function (animate) {
      var last = load('tagline', -1), i;
      do { i = Math.floor(Math.random() * tags.length); } while (tags.length > 1 && i === last);
      save('tagline', i);
      if (!animate) { tagEl.innerHTML = tags[i]; return; }
      tagEl.classList.add('swap');
      setTimeout(function () { tagEl.innerHTML = tags[i]; tagEl.classList.remove('swap'); }, 180);
    };
    showTag(false);
    tagEl.setAttribute('role', 'button'); tagEl.tabIndex = 0;
    tagEl.addEventListener('click', function () { showTag(true); });
    tagEl.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showTag(true); } });
  }

  /* ---------- home register filter ---------- */
  var regRows = $$('.reg-row'), chips = $$('.register .chip'), regFilter = $('.reg-filter');
  var level = 'all';
  function filterReg() {
    var q = (regFilter && regFilter.value || '').trim().toLowerCase();
    regRows.forEach(function (r) {
      var okL = level === 'all' || (level === 'live' ? r.classList.contains('is-live') : r.dataset.level === level);
      r.hidden = !(okL && (!q || r.dataset.q.indexOf(q) > -1));
    });
  }
  chips.forEach(function (c) { c.addEventListener('click', function () { chips.forEach(function (x) { x.classList.toggle('active', x === c); }); level = c.dataset.level; filterReg(); }); });
  if (regFilter) regFilter.addEventListener('input', filterReg);

  /* ---------- search ---------- */
  var modal = $('.search-modal'), input = modal.querySelector('input'), list = modal.querySelector('.search-results'),
      countEl = modal.querySelector('.search-count'), scopeEl = modal.querySelector('.search-scope');
  var docs = window.LE_INDEX || [];
  var ms = new MiniSearch({
    fields: ['page', 'heads', 'text'], storeFields: ['page', 'heads', 'text', 'url', 'kind', 'course'],
    searchOptions: { boost: { page: 3, heads: 2 }, prefix: true, fuzzy: 0.15, combineWith: 'AND' },
    tokenize: function (s) { return s.toLowerCase().split(/[^a-z0-9À-ɏͰ-Ͽ]+/).filter(Boolean); },
  });
  ms.addAll(docs);
  var curPage = (document.querySelector('.doc-title') || {}).textContent;
  var scopes = [{ k: 'all', t: 'Everywhere' }, { k: 'sheet', t: 'Formula sheets' }, { k: 'papers', t: 'Past papers' }];
  if (curPage) scopes.splice(1, 0, { k: 'page', t: 'This page' });
  var scope = 'all';
  scopeEl.innerHTML = scopes.map(function (s) { return '<button class="chip' + (s.k === 'all' ? ' active' : '') + '" type="button" role="radio" aria-checked="' + (s.k === 'all') + '" data-scope="' + s.k + '">' + s.t + '</button>'; }).join('');
  $$('.chip', scopeEl).forEach(function (c) {
    c.addEventListener('click', function () { scope = c.dataset.scope; $$('.chip', scopeEl).forEach(function (x) { x.classList.toggle('active', x === c); x.setAttribute('aria-checked', x === c); }); run(); input.focus(); });
  });

  var sel = 0, results = [];
  function hilite(text, terms) {
    var t = escH(text);
    terms.forEach(function (w) { if (w.length < 2) return; t = t.replace(new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>'); });
    return t;
  }
  function snippet(text, terms) {
    var low = text.toLowerCase(), at = -1;
    terms.some(function (w) { at = low.indexOf(w); return at > -1; });
    var start = Math.max(0, at - 60);
    return (start > 0 ? '…' : '') + text.slice(start, start + 220) + (text.length > start + 220 ? '…' : '');
  }
  function run() {
    var q = input.value.trim();
    if (!q) { list.innerHTML = '<li class="search-empty">Type to search ' + docs.length + ' indexed sections — topics, formula names, LaTeX symbols like <code>omega_n</code>, or exam questions.</li>'; countEl.textContent = ''; results = []; return; }
    results = ms.search(q).filter(function (r) {
      if (scope === 'page') return r.page === curPage;
      if (scope === 'sheet') return r.kind === 'sheet';
      if (scope === 'papers') return /papers/i.test(r.page);
      return true;
    }).slice(0, 40);
    var terms = Object.keys(results.reduce(function (a, r) { r.terms.forEach(function (t) { a[t] = 1; }); return a; }, {}));
    sel = 0;
    countEl.textContent = results.length + (results.length === 40 ? '+' : '') + ' results';
    if (!results.length) { list.innerHTML = '<li class="search-empty">No matches for “' + escH(q) + '”.</li>'; return; }
    list.innerHTML = results.map(function (r, i) {
      var title = r.heads ? r.heads.split(' › ').slice(-1)[0] : r.page;
      var trail = r.heads ? r.heads.split(' › ').slice(0, -1).join(' › ') : '';
      return '<li role="option" aria-selected="' + (i === 0) + '"><a href="' + root + r.url + '">' +
        '<div class="sr-meta"><span class="sr-kind">' + (r.kind === 'sheet' ? 'Formula sheet' : r.kind === 'module' ? 'Module' : /papers/i.test(r.page) ? 'Past paper' : 'Notes') + '</span><span>' + escH(r.course + ' · ' + r.page) + (trail ? ' › ' + escH(trail) : '') + '</span></div>' +
        '<div class="sr-title">' + hilite(title, terms) + '</div>' +
        (r.text ? '<div class="sr-snip">' + hilite(snippet(r.text, terms), terms) + '</div>' : '') + '</a></li>';
    }).join('');
  }
  function move(d) {
    var items = $$('li[role=option]', list); if (!items.length) return;
    items[sel].setAttribute('aria-selected', 'false');
    sel = (sel + d + items.length) % items.length;
    items[sel].setAttribute('aria-selected', 'true'); items[sel].scrollIntoView({ block: 'nearest' });
  }
  function openSearch() { modal.hidden = false; input.focus(); input.select(); run(); }
  function closeSearch() { modal.hidden = true; }
  $$('[data-search-open]').forEach(function (b) { b.addEventListener('click', openSearch); });
  input.addEventListener('input', run);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
    else if (e.key === 'Enter') { var a = $$('li[role=option] a', list)[sel]; if (a) { closeSearch(); location.href = a.href; } }
  });
  list.addEventListener('click', function (e) { if (e.target.closest('a')) closeSearch(); });
  modal.addEventListener('click', function (e) { if (e.target === modal) closeSearch(); });

  document.addEventListener('keydown', function (e) {
    var typing = /input|textarea|select/i.test(e.target.tagName) || e.target.isContentEditable;
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); modal.hidden ? openSearch() : closeSearch(); return; }
    if (e.key === 'Escape') { if (!modal.hidden) closeSearch(); if (lb && !lb.hidden) lb.hidden = true; if (!bmPanel.hidden) bmPanel.hidden = true; return; }
    if (typing || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === '/') { e.preventDefault(); openSearch(); }
    else if (e.key.toLowerCase() === 't') toggleTheme();
  });
  renderBms();
})();
