#!/usr/bin/env bash
# Build the site into ./site
set -euo pipefail
cd "$(dirname "$0")"
OUT=site
node build.mjs "$OUT"

A="$OUT/assets"
mkdir -p "$A/css" "$A/js" "$A/fonts" "$A/katex" "$A/downloads" "$OUT/tools"
cp src/site.css "$A/css/site.css"
cp src/site.js "$A/js/site.js"
cp node_modules/minisearch/dist/umd/index.min.js "$A/js/minisearch.min.js" 2>/dev/null || cp node_modules/minisearch/dist/umd/index.js "$A/js/minisearch.min.js"
echo "window.LE_MEDIA_LOCAL=false;" > "$A/js/media-local.js"
cp node_modules/katex/dist/katex.min.css "$A/katex/"
cp -r node_modules/katex/dist/fonts "$A/katex/"
F=node_modules/@fontsource
cp $F/instrument-serif/files/instrument-serif-latin-400-{normal,italic}.woff2 "$A/fonts/"
for w in 400-normal 400-italic 500-normal 600-normal 700-normal; do cp $F/instrument-sans/files/instrument-sans-latin-$w.woff2 "$A/fonts/"; done
cp $F/newsreader/files/newsreader-latin-400-{normal,italic}.woff2 "$A/fonts/"
cp $F/ibm-plex-mono/files/ibm-plex-mono-latin-{400,500}-normal.woff2 "$A/fonts/"
# strip "-latin" from font file names to match CSS
for f in "$A"/fonts/*-latin-*; do mv "$f" "${f/-latin-/-}"; done
cp src/fetch_assets.py "$OUT/tools/"
mkdir -p "$A/media" && cp -r src/media/* "$A/media/"
printf '@echo off\r\ncd /d "%%~dp0.."\r\npython tools\\fetch_assets.py\r\npause\r\n' > "$OUT/tools/fetch_assets.bat"
echo "assembled"
# Cheat-sheet PDFs: every module's formulae page, all toggles open, printed via headless Chrome
cp -r src/print-media "$OUT/_print-media"
(cd "$OUT" && python3 -m http.server 8799 >/dev/null 2>&1 & echo $! > /tmp/srv.pid); sleep 1
for f in "$OUT"/*/formulae.html; do
  [ -e "$f" ] || continue
  d=$(basename "$(dirname "$f")"); C=$(echo "$d" | tr a-z A-Z)
  # print copy: all toggles open; figures point at local print copies (JPEG) since Notion is unreachable here
  python3 - "$f" "$OUT/$d/_print.html" <<'PY'
import sys,re,os
src,dst=sys.argv[1],sys.argv[2]
h=open(src,encoding='utf-8').read().replace('<details ','<details open ')
def sub(m):
    c,i=m.group(1),m.group(2)
    return f'src="../_print-media/{c}/{i}.jpg"' if os.path.exists(f'src/print-media/{c}/{i}.jpg') else m.group(0)
h=re.sub(r'src="\.\./assets/media/([a-z0-9]+)/([0-9a-f-]+)\.[a-z]+"',sub,h)
open(dst,'w',encoding='utf-8').write(h)
PY
  google-chrome --headless=new --no-sandbox --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 \
    --print-to-pdf="$A/downloads/$C-Formulae.pdf" "http://localhost:8799/$d/_print.html" 2>/dev/null
  rm "$OUT/$d/_print.html"
done
kill "$(cat /tmp/srv.pid)" 2>/dev/null || true
rm -rf "$OUT/_print-media"
ls -la "$A/downloads"
cp src/README.md "$OUT/README.md"; rm -rf "$OUT/_source"; mkdir -p "$OUT/_source"; cp -r build.mjs make.sh package.json src data "$OUT/_source/"
