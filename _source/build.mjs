// Lousy Engineering — static site generator
// Renders Notion block JSON (scraped verbatim) into a static, offline-capable site.
// Content is never rewritten: text, equations, tables, images, files and links are emitted as-is.
import fs from 'node:fs';
import path from 'node:path';
import katex from 'katex';
import hljs from 'highlight.js';

const OUT = process.argv[2] || 'site';
const SPACE = 'f3f9512a-b127-4191-9788-8ec5f26fe49d';
const NOTION = 'https://lousy.notion.site';

// ---------- AERO register (from the source database's AERO view, verbatim) ----------
const REGISTER = [
  ['ENGINEERS IN SOCIETY', 'EG1001', 'A-'], ['DYNAMICS', 'MA1001', 'A+'], ['COMPUTING USING PYTHON', 'MA1008', 'A+'],
  ['MECHANICS OF MATERIALS', 'MA2001', 'A+'], ['THERMOFLUIDS', 'MA2003', 'A+'], ['ENGINEERING MATHEMATICS', 'MA2006', 'A-'],
  ['THERMODYNAMICS', 'MA2007', 'A+'], ['AEROSPACE MATERIALS', 'MA2700', 'A+'], ['FLIGHT PERFORMANCE', 'MA2701', 'A+'],
  ['HEAT TRANSFER', 'MA3003', 'A-'], ['CONTROL THEORY', 'MA3005', 'A+'], ['FLUID MECHANICS', 'MA3006', 'B+'],
  ['AIRCRAFT STRUCTURES 1', 'MA3700', 'A'], ['AERODYNAMICS', 'MA3701', 'A'], ['AIRCRAFT PROPULSION', 'MA3702', 'A'],
  ['FLIGHT DYNAMICS', 'MA3703', 'A+'], ['AIRCRAFT ELECTRICAL DEVICES', 'MA3704', 'A+'], ['FINAL YEAR PROJECT', 'MA4079', 'A'],
  ['AIRCRAFT DESIGN', 'MA4701', 'A'], ['AIRCRAFT STRUCTURES 2', 'MA4702', 'A'], ['AEROELASTICITY', 'MA4704', 'A-'],
  ['AIRCRAFT NAV. & FLIGHT COMP.', 'MA4705', 'A'], ['MATHEMATICS 2', 'MH1811', 'A-'], ['PHYSICS A', 'PH1012', 'A+'],
].map(([name, code, grade]) => ({ name, code, grade, status: 'COMPLETED' }));

const COURSES = ['EG1001', 'MA1001', 'MA1008', 'MH1811', 'PH1012', 'MA2001', 'MA2003', 'MA2006', 'MA2007', 'MA2700', 'MA2701', 'MA3003', 'MA3005', 'MA3006', 'MA3700', 'MA3701', 'MA3702', 'MA3703', 'MA3704', 'MA4079', 'MA4701', 'MA4702', 'MA4704', 'MA4705'].map((code) => ({ code, data: `data/${code.toLowerCase()}.json` }));

const TAGLINES = ["Tolerances loose.<br><em>Grades</em> tight.", "Built to spec.<br><em>Loosely.</em>", "<em>Peer-reviewed</em><br>by nobody.", "Factor of safety:<br><em>vibes.</em>", "Assume a<br><em>spherical</em> student.", "Neglecting friction,<br><em>and sleep.</em>", "Small-angle approximations<br>for <em>big-angle problems.</em>", "<em>Mostly</em><br>load-bearing.", "Converges<br><em>eventually.</em>", "Steady state,<br><em>unsteady</em> engineer.", "Notes that <em>pass inspection.</em><br>Barely.", "Rated for <em>one</em><br>exam season.", "Lift-to-drag ratio:<br><em>negative.</em>", "<em>Statically indeterminate,</em><br>emotionally too.", "Higher-order terms<br><em>neglected.</em>", "Damping ratio:<br><em>critically</em> behind.", "Undamped.<br><em>Overcaffeinated.</em>", "Mesh refined.<br><em>Student</em> not.", "Error bars <em>included</em><br>for honesty.", "<em>Air</em> on the side<br>of caution.", "The <em>derivation</em><br>the lecturer skipped.", "Works on paper.<br><em>That's the point.</em>", "Approximately <em>correct,</em><br>exactly <em>on time.</em>", "<em>Hand calcs</em> only.<br>Prayers optional."];

// ---------- helpers ----------
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const plain = (rt) => (rt || []).map((s) => {
  const e = (s[1] || []).find((a) => a[0] === 'e');
  return e ? e[1] : s[0];
}).join('');
const slugify = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'page';
const write = (p, s) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); };

const COLORS = new Set(['gray', 'brown', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'red', 'teal']);
const colorClass = (c) => {
  if (!c || c === 'default') return '';
  const bg = c.endsWith('_background');
  const base = c.replace('_background', '');
  return COLORS.has(base) ? (bg ? `bg-${base}` : `fg-${base}`) : '';
};

const texCache = new Map();
function tex(expr, display = false) {
  const k = (display ? 'D' : 'I') + expr;
  if (!texCache.has(k)) {
    texCache.set(k, katex.renderToString(expr, { displayMode: display, throwOnError: false, strict: 'ignore', trust: false, output: 'html' }));
  }
  return texCache.get(k);
}

// ---------- rich text ----------
function rich(rt, ctx) {
  if (!rt) return '';
  return rt.map(([text, anns = []]) => {
    let html;
    const eq = anns.find((a) => a[0] === 'e');
    if (eq) {
      html = `<span class="eq" data-tex="${esc(eq[1])}" tabindex="0" role="button" aria-label="Equation — click to copy LaTeX">${tex(eq[1])}</span>`;
    } else {
      const mention = anns.find((a) => a[0] === 'p');
      if (mention && ctx?.pageHref?.(mention[1])) {
        html = `<a class="mention" href="${ctx.pageHref(mention[1])}">${esc(ctx.pageTitle(mention[1]))}</a>`;
      } else if (anns.find((a) => a[0] === 'd')) {
        const d = anns.find((a) => a[0] === 'd')[1] || {};
        html = `<time>${esc(d.start_date || text)}</time>`;
      } else {
        html = esc(text).replace(/\n/g, '<br>');
      }
    }
    for (const a of anns) {
      switch (a[0]) {
        case 'b': html = `<strong>${html}</strong>`; break;
        case 'i': html = `<em>${html}</em>`; break;
        case '_': html = `<u>${html}</u>`; break;
        case 's': html = `<s>${html}</s>`; break;
        case 'c': html = `<code class="ic">${html}</code>`; break;
        case 'h': { const c = colorClass(a[1]); if (c) html = `<span class="${c}">${html}</span>`; break; }
        case 'a': {
          let href = a[1];
          if (href.startsWith('/')) href = NOTION + href;
          html = `<a href="${esc(href)}" target="_blank" rel="noopener">${html}</a>`; break;
        }
      }
    }
    return html;
  }).join('');
}

function richMd(rt) {
  return (rt || []).map(([text, anns = []]) => {
    const eq = anns.find((a) => a[0] === 'e');
    let s = eq ? `$${eq[1].replace(/\n/g, ' ')}$` : text;
    if (!eq) {
      if (anns.some((a) => a[0] === 'c')) s = '`' + s + '`';
      if (anns.some((a) => a[0] === 'b')) s = `**${s}**`;
      if (anns.some((a) => a[0] === 'i')) s = `*${s}*`;
      const l = anns.find((a) => a[0] === 'a'); if (l) s = `[${s}](${l[1]})`;
    }
    return s;
  }).join('');
}

// ---------- course model ----------
function loadCourse(c) {
  const d = JSON.parse(fs.readFileSync(c.data, 'utf8'));
  const B = d.blocks;
  const schema = Object.values(d.collections)[0]?.schema || {};
  const root = B[d.root];
  const pages = []; // ordered list of child pages
  const byId = new Map();
  const slugs = new Set();
  const mkPage = (b, parent) => {
    const title = plain(b.properties?.title);
    let slug = slugify(title.replace(new RegExp('^' + c.code + '\\s*-\\s*', 'i'), ''));
    while (slugs.has(slug)) slug += '-2';
    slugs.add(slug);
    const p = { id: b.id, title, slug, icon: b.format?.page_icon, block: b, parent };
    byId.set(b.id, p);
    return p;
  };
  // Root layout, in source order: page groups (a header followed by child pages) and any other root content (prose)
  const sections = [];
  const segments = [];
  const ids = (root.content || []).filter((id) => B[id]);
  const isEmpty = (b) => b.type === 'text' && !plain(b.properties?.title).trim() && !b.content;
  const nextReal = (i) => { for (let j = i + 1; j < ids.length; j++) if (!isEmpty(B[ids[j]])) return B[ids[j]]; return null; };
  let cur = null;
  ids.forEach((id, i) => {
    const b = B[id];
    if (['header', 'sub_header', 'sub_sub_header'].includes(b.type) && nextReal(i)?.type === 'page' && !b.content) {
      cur = { title: plain(b.properties?.title), pages: [] }; sections.push(cur); segments.push({ kind: 'section', section: cur });
    } else if (b.type === 'page') {
      const p = mkPage(b, null);
      if (!cur) { cur = { title: '', pages: [] }; sections.push(cur); segments.push({ kind: 'section', section: cur }); }
      cur.pages.push(p); pages.push(p);
    } else {
      if (isEmpty(b)) return;
      cur = null;
      const last = segments[segments.length - 1];
      if (last && last.kind === 'prose') last.ids.push(id); else segments.push({ kind: 'prose', ids: [id] });
    }
  });
  // Nested sub-pages (linked from inside pages) get their own HTML pages too
  const nested = [];
  const walk = (id) => { for (const c of (B[id]?.content || [])) { const cb = B[c]; if (!cb) continue; if (cb.type === 'page') { if (!byId.has(c)) { nested.push(mkPage(cb, byId.get(id) || null)); } walk(c); } else walk(c); } };
  walk(root.id);
  const props = {};
  for (const [k, v] of Object.entries(root.properties || {})) if (schema[k] && k !== 'title') props[schema[k].name] = plain(v);
  return { ...c, d, B, root, title: plain(root.properties?.title), icon: root.format?.page_icon, props, schema, sections, segments, pages, nested, byId };
}

// ---------- block renderer ----------
function renderPage(course, page) {
  const { B } = course;
  const toc = [];
  const sections = []; // search sections
  const media = [];
  let secCur = { anchor: '', heads: [], text: [] };
  sections.push(secCur);
  const headStack = [];
  const usedIds = new Set();
  const anchorFor = (title, id) => {
    let a = slugify(title).slice(0, 60) || id.slice(0, 8);
    while (usedIds.has(a)) a += '-' + id.slice(0, 4);
    usedIds.add(a); return a;
  };
  const ctx = {
    pageHref: (id) => course.byId.get(id) ? `${course.byId.get(id).slug}.html` : null,
    pageTitle: (id) => course.byId.get(id)?.title || '',
  };
  const pushText = (s) => { if (s && s.trim()) secCur.text.push(s); };

  const kids = (b) => (b.content || []).map((id) => B[id]).filter((x) => x && x.type);

  function renderList(list, depth) {
    let html = '';
    for (let i = 0; i < list.length; i++) {
      const b = list[i];
      if (b.type === 'bulleted_list' || b.type === 'numbered_list') {
        const tag = b.type === 'bulleted_list' ? 'ul' : 'ol';
        let items = '';
        while (i < list.length && list[i].type === b.type) {
          const it = list[i];
          pushText(plain(it.properties?.title));
          items += `<li class="${colorClass(it.format?.block_color)}">${rich(it.properties?.title, ctx)}${it.content ? renderList(kids(it), depth + 1) : ''}</li>`;
          i++;
        }
        i--;
        html += `<${tag} class="blk list">${items}</${tag}>`;
      } else {
        html += renderBlock(b, depth);
      }
    }
    return html;
  }

  function heading(b, level) {
    const t = plain(b.properties?.title);
    const a = anchorFor(t, b.id);
    // search section bookkeeping
    while (headStack.length && headStack[headStack.length - 1].level >= level) headStack.pop();
    headStack.push({ level, t });
    secCur = { anchor: a, heads: headStack.map((h) => h.t), text: [] };
    sections.push(secCur);
    if (level <= 2) toc.push({ level, t: b.properties?.title, a });
    const tag = 'h' + (level + 1);
    const cls = `hd hd${level} ${colorClass(b.format?.block_color)}`;
    const trail = headStack.slice(0, -1).map((h) => h.t).join(' › ');
    const star = `<button class="bm-btn" type="button" aria-pressed="false" aria-label="Save section" title="Save section" data-bm-url="${course.code.toLowerCase()}/${page.slug}.html#${a}" data-bm-title="${esc(t)}" data-bm-trail="${esc(trail)}" data-bm-page="${esc(page.title)}" data-bm-course="${course.code}">${STAR}</button>`;
    const inner = `<${tag} id="${a}" class="${cls}"><a class="anchor" href="#${a}" aria-label="Link to this section">#</a>${rich(b.properties?.title, ctx)}${star}</${tag}>`;
    const children = b.content ? renderList(kids(b), 0) : '';
    if (b.format?.toggleable) {
      return `<details class="tog tog-h${level}" data-key="${b.id}" data-anchor="${a}"><summary>${inner}</summary><div class="tog-body">${children}</div></details>`;
    }
    return inner + children;
  }

  function mediaUrl(b) {
    const src = b.properties?.source?.[0]?.[0] || '';
    const ext = (b.type === 'image') ? (path.extname(src.split('?')[0]) || '.png') : (path.extname(src.split('?')[0]) || '.pdf');
    const local = `../assets/media/${course.code.toLowerCase()}/${b.id}${ext}`;
    const remoteImg = `${NOTION}/image/${encodeURIComponent(src)}?table=block&id=${b.id}&spaceId=${SPACE}&cache=v2`;
    const remoteFile = `${NOTION}/signed/${encodeURIComponent(src)}?table=block&id=${b.id}&spaceId=${SPACE}`;
    media.push({ id: b.id, type: b.type, file: `${b.id}${ext}`, url: remoteFile, name: plain(b.properties?.title) });
    return { local, remoteImg, remoteFile, name: plain(b.properties?.title), size: plain(b.properties?.size) };
  }

  function renderBlock(b, depth) {
    const t = b.properties?.title;
    const color = colorClass(b.format?.block_color);
    switch (b.type) {
      case 'text': {
        pushText(plain(t));
        const body = rich(t, ctx);
        const k = b.content ? `<div class="indent">${renderList(kids(b), depth + 1)}</div>` : '';
        if (!body) return `<p class="blk empty" aria-hidden="true"></p>${k}`;
        return `<p class="blk ${color}">${body}</p>${k}`;
      }
      case 'header': return heading(b, 1);
      case 'sub_header': return heading(b, 2);
      case 'sub_sub_header': return heading(b, 3);
      case 'divider': return '<hr class="blk rule">';
      case 'quote': pushText(plain(t)); return `<blockquote class="blk ${color}">${rich(t, ctx)}${b.content ? renderList(kids(b), depth + 1) : ''}</blockquote>`;
      case 'callout': {
        pushText(plain(t));
        const icon = b.format?.page_icon || '';
        return `<aside class="blk callout ${color || 'bg-gray'}"><span class="callout-icon" aria-hidden="true">${esc(icon)}</span><div class="callout-body"><div>${rich(t, ctx)}</div>${b.content ? renderList(kids(b), depth + 1) : ''}</div></aside>`;
      }
      case 'toggle': {
        pushText(plain(t));
        return `<details class="tog tog-plain"><summary><span>${rich(t, ctx)}</span></summary><div class="tog-body">${renderList(kids(b), depth + 1)}</div></details>`;
      }
      case 'to_do': {
        pushText(plain(t));
        const checked = plain(b.properties?.checked) === 'Yes';
        return `<div class="blk todo ${checked ? 'done' : ''}"><span class="box" aria-hidden="true">${checked ? '✓' : ''}</span><span>${rich(t, ctx)}</span></div>`;
      }
      case 'equation': {
        const e = plain(t); pushText(e);
        return `<div class="blk eq-block eq" data-tex="${esc(e)}" tabindex="0" role="button" aria-label="Equation — click to copy LaTeX">${tex(e, true)}</div>`;
      }
      case 'code': {
        const code = plain(t);
        const lang = plain(b.properties?.language) || 'Plain Text';
        const hl = { matlab: 'matlab', python: 'python', 'c++': 'cpp', c: 'c', javascript: 'javascript', 'plain text': null }[lang.toLowerCase()];
        let body;
        try { body = hl ? hljs.highlight(code, { language: hl }).value : esc(code); } catch { body = esc(code); }
        pushText(code);
        const cap = b.properties?.caption ? `<figcaption>${rich(b.properties.caption, ctx)}</figcaption>` : '';
        return `<figure class="blk code"><div class="code-bar"><span class="code-lang">${esc(lang)}</span><button class="btn-ghost copy-code" type="button" aria-label="Copy code"><svg viewBox="0 0 16 16" aria-hidden="true"><rect x="5" y="5" width="9" height="9" rx="1.5"/><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5"/></svg><span>Copy</span></button></div><pre${b.format?.code_wrap ? ' class="wrap"' : ''}><code class="hljs">${body}</code></pre>${cap}</figure>`;
      }
      case 'image': {
        const m = mediaUrl(b);
        const w = b.format?.block_width; const full = b.format?.block_full_width;
        const style = (!full && w) ? ` style="--w:${Math.round(w)}px"` : '';
        const ar = b.format?.block_aspect_ratio;
        const cap = b.properties?.caption;
        if (cap) pushText(plain(cap));
        const alt = cap ? esc(plain(cap)) : '';
        return `<figure class="blk img"${style}><button class="img-zoom" type="button" aria-label="Enlarge image"><img loading="lazy" decoding="async" src="${m.local}" data-remote="${esc(m.remoteImg)}" alt="${alt}"${ar ? ` style="aspect-ratio:${(1 / ar).toFixed(4)}"` : ''}></button>${cap ? `<figcaption>${rich(cap, ctx)}</figcaption>` : ''}</figure>`;
      }
      case 'pdf': case 'file': {
        const m = mediaUrl(b);
        const cap = b.properties?.caption;
        const viewer = b.type === 'pdf' ? `<div class="pdf-frame" data-src="${m.local}" data-remote="${esc(m.remoteFile)}"><div class="pdf-ph"><span>PDF preview</span><button class="btn" type="button" data-pdf-load>Load preview</button></div></div>` : '';
        return `<figure class="blk file"><div class="file-head"><span class="file-glyph" aria-hidden="true">PDF</span><div class="file-meta"><strong>${esc(m.name)}</strong><span>${esc(m.size)}</span></div><div class="file-actions"><a class="btn" href="${m.local}" data-remote="${esc(m.remoteFile)}" target="_blank" rel="noopener">Open</a><a class="btn btn-accent" href="${m.local}" data-remote="${esc(m.remoteFile)}" download="${esc(m.name)}">Download</a></div></div>${viewer}${cap ? `<figcaption>${rich(cap, ctx)}</figcaption>` : ''}</figure>`;
      }
      case 'table': {
        const order = b.format?.table_block_column_order || [];
        const fmt = b.format?.table_block_column_format || {};
        const colHead = b.format?.table_block_column_header; const rowHead = b.format?.table_block_row_header;
        const rows = kids(b);
        const cols = order.map((k) => `<col style="width:${fmt[k]?.width || 120}px">`).join('');
        const body = rows.map((r, ri) => {
          const cells = order.map((k, ci) => {
            const v = r.properties?.[k]; pushText(plain(v));
            const th = (colHead && ri === 0) || (rowHead && ci === 0);
            const c = colorClass(fmt[k]?.color);
            return th ? `<th class="${c}" scope="${ri === 0 && colHead ? 'col' : 'row'}">${rich(v, ctx)}</th>` : `<td class="${c}">${rich(v, ctx)}</td>`;
          }).join('');
          return `<tr class="${colorClass(r.format?.block_color)}">${cells}</tr>`;
        }).join('');
        return `<div class="blk table-wrap"><table><colgroup>${cols}</colgroup><tbody>${body}</tbody></table></div>`;
      }
      case 'column_list': {
        const cols = kids(b);
        const tracks = cols.map((c) => `${(c.type === 'column' ? (c.format?.column_ratio ?? 1 / cols.length) : 1 / cols.length).toFixed(4)}fr`).join(' ');
        return `<div class="blk cols" style="--cols:${tracks}">${cols.map((c) => `<div class="col">${c.type === 'column' ? renderList(kids(c), depth) : renderBlock(c, depth)}</div>`).join('')}</div>`;
      }
      case 'column': return `<div class="col">${renderList(kids(b), depth)}</div>`;
      case 'transclusion_container': return renderList(kids(b), depth);
      case 'alias': return ''; // link-to-page whose target is not shared publicly; Notion shows nothing either
      case 'page': {
        const p = course.byId.get(b.id);
        return `<a class="blk page-link" href="${p ? p.slug + '.html' : '#'}"><span aria-hidden="true">${esc(b.format?.page_icon || '📄')}</span>${esc(plain(t))}</a>`;
      }
      case 'bookmark': {
        const link = plain(b.properties?.link);
        return `<a class="blk bookmark" href="${esc(link)}" target="_blank" rel="noopener"><strong>${esc(plain(t) || link)}</strong><span>${esc(plain(b.properties?.description))}</span><em>${esc(link)}</em></a>`;
      }
      case 'video': case 'embed': {
        const src = b.format?.display_source || plain(b.properties?.source);
        return `<figure class="blk embed"><a href="${esc(src)}" target="_blank" rel="noopener">${esc(src)}</a></figure>`;
      }
      case 'bulleted_list': case 'numbered_list': return renderList([b], depth);
      default:
        console.warn('Unhandled block type', b.type, b.id);
        return t ? `<p class="blk">${rich(t, ctx)}</p>` : '';
    }
  }

  const html = renderList(kids(page.block), 0);
  return { html, toc, sections, media };
}

// ---------- markdown export (cheat sheets) ----------
function pageMarkdown(course, page) {
  const { B } = course;
  const out = [`# ${page.title}`, '', `> ${course.code} · ${course.title} — exported from Lousy Engineering`, ''];
  const walk = (ids, indent = '') => {
    for (const id of ids || []) {
      const b = B[id]; if (!b) continue;
      const t = richMd(b.properties?.title);
      switch (b.type) {
        case 'header': out.push('', `## ${t}`, ''); break;
        case 'sub_header': out.push('', `### ${t}`, ''); break;
        case 'sub_sub_header': out.push('', `#### ${t}`, ''); break;
        case 'divider': out.push('', '---', ''); break;
        case 'bulleted_list': out.push(`${indent}- ${t}`); break;
        case 'numbered_list': out.push(`${indent}1. ${t}`); break;
        case 'callout': out.push(`> ${b.format?.page_icon || ''} ${t}`); break;
        case 'table': {
          const order = b.format?.table_block_column_order || [];
          const rows = (b.content || []).map((r) => order.map((k) => richMd(B[r]?.properties?.[k])));
          if (rows.length) { out.push('', '| ' + rows[0].join(' | ') + ' |', '|' + order.map(() => ' --- |').join(''), ...rows.slice(1).map((r) => '| ' + r.join(' | ') + ' |'), ''); }
          continue;
        }
        case 'column_list': case 'column': break;
        default: out.push(t ? indent + t.replace(/\n/g, '  \n' + indent) + '  ' : '');
      }
      if (b.type !== 'page') walk(b.content, ['bulleted_list', 'numbered_list'].includes(b.type) ? indent + '  ' : indent);
    }
  };
  walk(page.block.content);
  return out.join('\n').replace(/\n{3,}/g, '\n\n') + '\n';
}

// ---------- layout ----------
const STAR = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.6l-4.8 2.5.9-5.4L2.2 7.9l5.4-.8z"/></svg>';
const ICONS = {
  print: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6V2h8v4M4 12H2.5V6.5h11V12H12M4 9.5h8V14H4z"/></svg>',
  star: STAR,
  search: '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5"/><path d="m13 13 4.5 4.5"/></svg>',
  sun: '<svg class="i-sun" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="3.6"/><path d="M10 1.8v2.1M10 16.1v2.1M1.8 10h2.1M16.1 10h2.1M4.2 4.2l1.5 1.5M14.3 14.3l1.5 1.5M4.2 15.8l1.5-1.5M14.3 5.7l1.5-1.5"/></svg>',
  moon: '<svg class="i-moon" viewBox="0 0 20 20" aria-hidden="true"><path d="M16.5 12.6A7 7 0 0 1 7.4 3.5a7 7 0 1 0 9.1 9.1Z"/></svg>',
  dl: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2v8.5M4.5 7 8 10.5 11.5 7M2.5 13.5h11"/></svg>',
  arrow: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>',
};

function shell({ root, title, body, crumbs = [], bodyClass = '', pageKey = '' }) {
  return `<!doctype html>
<html lang="en" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} · Lousy Engineering</title>
<meta name="description" content="${esc(title)} — aerospace engineering notes.">
<script>(function(){var a=null,b=null;try{a=JSON.parse(localStorage.getItem('le-state'))}catch(e){}try{b=(JSON.parse(window.name)||{}).__lousy_engineer__}catch(e){}var s=(a&&b)?((b.ts||0)>(a.ts||0)?b:a):(a||b||{});var t=s.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t;})();</script>
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%22-2%20-2%20104%20104%22%3E%3Cg%20fill%3D%22%23ff4f00%22%20stroke%3D%22%23ff4f00%22%20transform%3D%22rotate%2845%2050%2050%29%22%20stroke-width%3D%222.5%22%20stroke-linejoin%3D%22round%22%20stroke-linecap%3D%22round%22%3E%3Cpath%20d%3D%22M57%2034%20L57%2042%20L93%2061%20L91%2067%20L57%2058%20L57%2077%20L68%2086%20L66%2091%20L53%2087.5%20L50%2094%20L47%2087.5%20L34%2091%20L32%2086%20L43%2077%20L43%2058%20L9%2067%20L7%2061%20L43%2042%20L43%2035%20L47%2030%20L50%2034%20L53.5%2029%20Z%22/%3E%3Cpath%20d%3D%22M43%2018%20C43%206%2046.5%20-1%2050%20-1%20C53.5%20-1%2057%206%2057%2018%20L50%2013%20Z%22/%3E%3C/g%3E%3C/svg%3E">
<link rel="stylesheet" href="${root}assets/katex/katex.min.css">
<link rel="stylesheet" href="${root}assets/css/site.css">
</head>
<body class="${bodyClass}" data-root="${root}"${pageKey ? ` data-page="${pageKey}"` : ''}>
<a class="skip" href="#main">Skip to content</a>
<header class="topbar">
  <a class="brand" href="${root}index.html" aria-label="Lousy Engineering — home">
    <span class="brand-mark" aria-hidden="true"><svg viewBox="-2 -2 104 104"><g transform="rotate(45 50 50)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"><path d="M57 34 L57 42 L93 61 L91 67 L57 58 L57 77 L68 86 L66 91 L53 87.5 L50 94 L47 87.5 L34 91 L32 86 L43 77 L43 58 L9 67 L7 61 L43 42 L43 35 L47 30 L50 34 L53.5 29 Z"/><path d="M43 18 C43 6 46.5 -1 50 -1 C53.5 -1 57 6 57 18 L50 13 Z"/></g></svg></span>
    <span class="brand-word">Lousy<em>Engineering</em></span>
  </a>
  <nav class="crumbs" aria-label="Breadcrumb">${crumbs.map((c, i) => c.href ? `<a href="${c.href}">${esc(c.t)}</a>` : `<span aria-current="page">${esc(c.t)}</span>`).join('<span class="sep" aria-hidden="true">/</span>')}</nav>
  <div class="top-actions">
    <button class="search-trigger" type="button" data-search-open aria-label="Search notes">${ICONS.search}<span>Search notes</span><kbd>Ctrl K</kbd></button>
    <div class="bm-wrap"><button class="bm-toggle" type="button" aria-expanded="false" aria-label="Saved sections" title="Saved sections">${STAR}<span class="bm-count mono">0</span></button>
      <div class="bm-panel" hidden><div class="bm-head"><span class="mono">Saved</span><button class="btn-ghost bm-clear" type="button">Clear all</button></div><ol class="bm-list"></ol></div></div>
    <button class="theme-toggle" type="button" aria-label="Toggle dark mode">${ICONS.sun}${ICONS.moon}</button>
  </div>
</header>
${body}
<footer class="site-foot">
  <div class="foot-grid">
    <p class="foot-title">Lousy<em>Engineering</em></p>
    <p>Content ported verbatim from <a href="${NOTION}/915741e3969e485686900f8980c2a89b" target="_blank" rel="noopener">lousy.notion.site</a>. Shared with the author's permission.</p>
    <p class="mono">Press <kbd>/</kbd> or <kbd>Ctrl K</kbd> to search · <kbd>T</kbd> to toggle theme</p>
  </div>
</footer>
<div class="search-modal" role="dialog" aria-modal="true" aria-label="Search" hidden>
  <div class="search-panel">
    <div class="search-field">${ICONS.search}<input type="search" placeholder="Search equations, topics, exam questions…" aria-label="Search" autocomplete="off" spellcheck="false"><kbd>Esc</kbd></div>
    <div class="search-scope" role="radiogroup" aria-label="Search scope"></div>
    <ol class="search-results" role="listbox"></ol>
    <div class="search-foot mono"><span><kbd>↑</kbd><kbd>↓</kbd> navigate</span><span><kbd>↵</kbd> open</span><span class="search-count"></span></div>
  </div>
</div>
<div class="lightbox" hidden><button class="lb-close" type="button" aria-label="Close">×</button><img alt=""></div>
<div class="toast" role="status" aria-live="polite"></div>
<script src="${root}assets/js/minisearch.min.js"></script>
<script src="${root}assets/js/search-index.js"></script>
${bodyClass.includes('is-home') ? `<script>window.LE_TAGLINES=${JSON.stringify(TAGLINES)};</script>` : ''}
<script src="${root}assets/js/media-local.js"></script>
<script src="${root}assets/js/site.js"></script>
</body>
</html>`;
}

function titleBlock(course, extra = '') {
  const order = ['Code', 'Sch', 'AUs', 'Acad. Yr.', 'Year', 'Grade', 'Status'];
  const cells = order.filter((k) => course.props[k] !== undefined).map((k) => k === 'Status'
    ? `<div class="meta-item"><dt class="sr-only">Status</dt><dd><span class="pill pill-green">${esc(course.props[k])}</span></dd></div>`
    : `<div class="meta-item"><dt>${esc(k)}</dt><dd>${esc(course.props[k])}</dd></div>`).join('');
  return `<dl class="meta-line">${cells}${extra}</dl>`;
}

// ---------- build ----------
fs.rmSync(OUT, { recursive: true, force: true });
const searchDocs = [];
const manifest = [];
const courses = COURSES.map(loadCourse);

for (const course of courses) {
  const cdir = path.join(OUT, course.code.toLowerCase());
  const rendered = new Map();
  for (const p of [...course.pages, ...course.nested]) rendered.set(p.id, renderPage(course, p));

  const isSheet = (p) => /formulae/i.test(p.title);
  const navHtml = (activeId) => `<nav class="course-nav" aria-label="${esc(course.title)} pages">
    <a class="cn-home${activeId ? '' : ' active'}" href="index.html"><span class="mono">${esc(course.code)}</span>${esc(course.title)}</a>
    ${course.sections.map((s) => `<div class="cn-group"><p class="cn-label mono">${esc(s.title)}</p><ol>${s.pages.map((p) => `<li><a href="${p.slug}.html"${p.id === activeId ? ' class="active" aria-current="page"' : ''}>${p.icon ? `<span class="cn-icon" aria-hidden="true">${esc(p.icon)}</span>` : `<span class="cn-num mono" aria-hidden="true">${String(course.pages.filter((x) => !x.icon).indexOf(p) + 1).padStart(2, '0')}</span>`}<span>${esc(p.title)}</span></a></li>`).join('')}</ol></div>`).join('')}
  </nav>`;

  // Course index page
  let theoryN = 0;
  const groupHtml = (s) => `<section class="reg-section"><header class="reg-head"><h2 class="mono">${esc(s.title)}</h2><span class="mono">${s.pages.length} page${s.pages.length > 1 ? 's' : ''}</span></header>
    <div class="cards ${s.pages.every((p) => p.icon) ? 'cards-misc' : 'cards-theory'}">${s.pages.map((p) => {
      const r = rendered.get(p.id);
      const heads = r.toc.filter((t) => t.level === 1).map((t) => t.t);
      const nImg = r.media.filter((m) => m.type === 'image').length;
      const nEq = (r.html.match(/class="eq"/g) || []).length;
      const num = p.icon ? '' : String(++theoryN).padStart(2, '0');
      const dl = isSheet(p) ? `<div class="card-dl"><a class="btn btn-accent" href="../assets/downloads/${course.code}-Formulae.pdf" download>${ICONS.dl}PDF</a><a class="btn" href="../assets/downloads/${course.code}-Formulae.md" download>${ICONS.dl}Markdown</a></div>` : '';
      return `<article class="card${p.icon ? ' card-misc' : ''}${isSheet(p) ? ' card-sheet' : ''}">
        <a class="card-link" href="${p.slug}.html"><span class="card-num mono" aria-hidden="true">${p.icon ? esc(p.icon) : num}</span>
        <h3>${esc(p.title)}</h3>
        ${heads.length ? `<ul class="card-heads">${heads.slice(0, 6).map((h) => `<li>${rich(h)}</li>`).join('')}${heads.length > 6 ? `<li class="more">+${heads.length - 6} more</li>` : ''}</ul>` : ''}
        <p class="card-stats mono"><span>${nEq} eq</span>${nImg ? `<span>${nImg} fig</span>` : ''}${r.media.some((m) => m.type === 'pdf') ? `<span>${r.media.filter((m) => m.type === 'pdf').length} pdf</span>` : ''}</p>
        <span class="card-go" aria-hidden="true">${ICONS.arrow}</span></a>${dl}
      </article>`;
    }).join('')}</div></section>`;

  const rootPage = { id: course.root.id, title: course.title, slug: 'index', block: { content: [] } };
  const groups = course.segments.map((seg) => {
    if (seg.kind === 'section') return groupHtml(seg.section);
    const r = renderPage(course, { ...rootPage, block: { content: seg.ids } });
    for (const m of r.media) manifest.push({ course: course.code.toLowerCase(), ...m });
    for (const sct of r.sections) {
      const text = sct.text.join(' ').replace(/\s+/g, ' ').trim();
      if (text) searchDocs.push({ id: `${course.code}:root:${sct.anchor}`, course: course.code, page: course.title, url: `${course.code.toLowerCase()}/index.html${sct.anchor ? '#' + sct.anchor : ''}`, heads: sct.heads.join(' › '), text, kind: 'note' });
    }
    return `<section class="course-prose prose">${r.html}</section>`;
  }).join('');

  write(path.join(cdir, 'index.html'), shell({
    root: '../', title: `${course.code} ${course.title}`, bodyClass: 'is-course',
    crumbs: [{ t: 'AERO', href: '../index.html' }, { t: course.code }],
    body: `<main id="main" class="course-main">
      <section class="course-hero">
        <p class="eyebrow mono"><span class="dot"></span>Module ${esc(course.code)} · ${esc(course.props.Sch || '')}</p>
        <h1 class="display">${esc(course.title)}</h1>
        ${titleBlock(course)}
      </section>
      ${groups}
    </main>`,
  }));
  searchDocs.push({ id: `${course.code}:root`, course: course.code, page: course.title, url: `${course.code.toLowerCase()}/index.html`, heads: '', text: `${course.code} ${course.title}`, kind: 'module' });

  // Content pages
  [...course.pages, ...course.nested].forEach((p, idx, all) => {
    const r = rendered.get(p.id);
    const prev = idx < course.pages.length ? course.pages[idx - 1] : null; const next = idx < course.pages.length ? course.pages[idx + 1] : null;
    const sheet = isSheet(p);
    const tocHtml = r.toc.length ? `<nav class="toc" aria-label="On this page"><p class="toc-label mono">On this page</p><ol>${r.toc.map((t) => `<li class="toc-l${t.level}"><a href="#${t.a}">${rich(t.t)}</a></li>`).join('')}</ol></nav>` : '';
    const dl = sheet ? `<div class="sheet-dl"><span class="mono">Cheat sheet</span><a class="btn btn-accent" href="../assets/downloads/${course.code}-Formulae.pdf" download>${ICONS.dl}Download PDF</a><a class="btn" href="../assets/downloads/${course.code}-Formulae.md" download>${ICONS.dl}Markdown + LaTeX</a></div>` : '';
    const body = `<div class="page-grid">
      <aside class="rail-left">${navHtml(p.id)}</aside>
      <main id="main" class="doc">
        <header class="doc-head">
          <p class="eyebrow mono"><span class="dot"></span>${esc(course.code)} · ${esc(course.title)}</p>
          <h1 class="doc-title">${p.icon ? `<span class="doc-icon" aria-hidden="true">${esc(p.icon)}</span>` : ''}${esc(p.title)}<button class="bm-btn bm-page" type="button" aria-pressed="false" aria-label="Save page" title="Save page" data-bm-url="${course.code.toLowerCase()}/${p.slug}.html" data-bm-title="${esc(p.title)}" data-bm-trail="" data-bm-page="${esc(p.title)}" data-bm-course="${course.code}">${STAR}</button></h1>
          <div class="doc-tools">
            ${r.html.includes('<details') ? `<button class="btn" type="button" data-expand-all>Expand all</button><button class="btn" type="button" data-collapse-all>Collapse all</button>` : ''}
            <button class="btn" type="button" data-print title="Print or save as PDF (all sections expanded)">${ICONS.print}Print / PDF</button>
            ${dl}
          </div>
        </header>
        <article class="prose">${r.html}</article>
        <nav class="pager" aria-label="Pagination">
          ${prev ? `<a class="pg pg-prev" href="${prev.slug}.html"><span class="mono">Previous</span><strong>${esc(prev.title)}</strong></a>` : '<span></span>'}
          ${next ? `<a class="pg pg-next" href="${next.slug}.html"><span class="mono">Next</span><strong>${esc(next.title)}</strong></a>` : '<span></span>'}
        </nav>
      </main>
      <aside class="rail-right">${tocHtml}</aside>
    </div>`;
    write(path.join(cdir, `${p.slug}.html`), shell({
      root: '../', title: `${p.title} — ${course.code}`, bodyClass: `is-doc${sheet ? ' is-sheet' : ''}`, pageKey: p.id,
      crumbs: [{ t: 'AERO', href: '../index.html' }, { t: course.code, href: 'index.html' }, { t: p.title }],
      body,
    }));
    for (const s of r.sections) {
      const text = s.text.join(' ').replace(/\s+/g, ' ').trim();
      if (!text && !s.heads.length) continue;
      searchDocs.push({ id: `${p.id}:${s.anchor}`, course: course.code, page: p.title, url: `${course.code.toLowerCase()}/${p.slug}.html${s.anchor ? '#' + s.anchor : ''}`, heads: s.heads.join(' › '), text, kind: sheet ? 'sheet' : 'note' });
    }
    for (const m of r.media) manifest.push({ course: course.code.toLowerCase(), ...m });
    if (sheet) write(path.join(OUT, 'assets/downloads', `${course.code}-Formulae.md`), pageMarkdown(course, p));
  });
}

// Home / AERO register
const live = new Set(courses.map((c) => c.code));
const levels = [...new Set(REGISTER.map((m) => m.code.replace(/\D/g, '')[0]))].sort();
const rows = REGISTER.map((m) => {
  const on = live.has(m.code);
  const lvl = m.code.replace(/\D/g, '')[0];
  return `<li class="reg-row${on ? ' is-live' : ''}" data-level="${lvl}" data-q="${esc((m.code + ' ' + m.name).toLowerCase())}">
    ${on ? `<a href="${m.code.toLowerCase()}/index.html">` : '<div>'}
      <span class="r-code mono">${esc(m.code)}</span>
      <span class="r-name">${esc(m.name)}</span>
      <span class="r-grade mono">${esc(m.grade)}</span>
      <span class="r-status"><span class="pill pill-green">${esc(m.status)}</span></span>
      <span class="r-port mono">${on ? `Open ${ICONS.arrow}` : 'Not yet ported'}</span>
    ${on ? '</a>' : '</div>'}
  </li>`;
}).join('');
write(path.join(OUT, 'index.html'), shell({
  root: '', title: 'AERO — Notes', bodyClass: 'is-home', crumbs: [{ t: 'AERO' }],
  body: `<main id="main" class="home">
    <section class="home-hero">
      <p class="eyebrow mono"><span class="dot"></span>NTU · School of Mechanical &amp; Aerospace Engineering</p>
      <h1 class="display tagline" title="Click for another tagline">Tolerances loose.<br><em>Grades</em> tight.</h1>
      <div class="hero-actions"><button class="btn btn-accent btn-lg" type="button" data-search-open>${ICONS.search}Search all notes <kbd>Ctrl K</kbd></button><a class="btn btn-lg" href="#reg-title">Browse modules ${ICONS.arrow}</a></div>
    </section>
    <section class="home-saved" aria-labelledby="saved-title" hidden>
      <header class="register-head"><h2 id="saved-title" class="mono">Saved sections</h2><span class="mono saved-n"></span></header>
      <ol class="saved-grid"></ol>
    </section>
    <section class="register" aria-labelledby="reg-title">
      <header class="register-head">
        <h2 id="reg-title" class="mono">Module register — AERO</h2>
        <div class="reg-tools">
          <div class="chips" role="group" aria-label="Filter by level"><button class="chip active" type="button" data-level="all">All</button>${levels.map((l) => `<button class="chip" type="button" data-level="${l}">Year ${l}</button>`).join('')}<button class="chip" type="button" data-level="live">Ported</button></div>
          <input class="reg-filter" type="search" placeholder="Filter modules…" aria-label="Filter modules">
        </div>
      </header>
      <div class="reg-cols mono" aria-hidden="true"><span>Code</span><span>Module</span><span>Grade</span><span>Status</span><span></span></div>
      <ol class="reg-list">${rows}</ol>
    </section>
  </main>`,
}));

// Search index + manifest
write(path.join(OUT, 'assets/js/search-index.js'), `window.LE_INDEX=${JSON.stringify(searchDocs)};`);
write(path.join(OUT, 'tools/media-manifest.json'), JSON.stringify(manifest, null, 1));
console.log(`Built ${courses.length} course(s), ${searchDocs.length} search sections, ${manifest.length} media items, ${texCache.size} equations.`);
