"""
Download every image and PDF referenced by the site into assets/media/,
so the notes work fully offline and no longer depend on Notion.

Usage (from the site folder):   python tools/fetch_assets.py
Re-running is safe: files that already exist are skipped.
Standard library only.
"""
import json
import os
import sys
import time
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.dirname(HERE)
manifest = json.load(open(os.path.join(HERE, "media-manifest.json"), encoding="utf-8"))

ok = skipped = failed = 0
for i, m in enumerate(manifest, 1):
    dest_dir = os.path.join(SITE, "assets", "media", m["course"])
    os.makedirs(dest_dir, exist_ok=True)
    dest = os.path.join(dest_dir, m["file"])
    if os.path.exists(dest) and os.path.getsize(dest) > 0:
        skipped += 1
        continue
    for attempt in range(3):
        try:
            req = urllib.request.Request(m["url"], headers={"User-Agent": "Mozilla/5.0 (LousyEngineering asset fetch)"})
            with urllib.request.urlopen(req, timeout=60) as r:
                data = r.read()
            with open(dest + ".part", "wb") as f:
                f.write(data)
            os.replace(dest + ".part", dest)
            ok += 1
            print(f"[{i}/{len(manifest)}] {m['file']}  {len(data)/1024:.0f} KB")
            break
        except Exception as e:  # noqa: BLE001
            if attempt == 2:
                failed += 1
                print(f"[{i}/{len(manifest)}] FAILED {m['file']}: {e}", file=sys.stderr)
            else:
                time.sleep(2 * (attempt + 1))

# Tell the site that local copies exist (lets PDF links/previews use them on file://)
if failed == 0:
    with open(os.path.join(SITE, "assets", "js", "media-local.js"), "w", encoding="utf-8") as f:
        f.write("window.LE_MEDIA_LOCAL=true;\n")

print(f"\nDone: {ok} downloaded, {skipped} already present, {failed} failed.")
if failed:
    print("Re-run the script to retry the failures.")
