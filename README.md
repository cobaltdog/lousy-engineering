# Lousy Engineering — AERO notes (Years 2–4: MA2006, MA3003–MA3704, MA4079–MA4705)

Open `index.html` in a browser. No server or internet connection is needed for the text, equations, search and theming.

## Images and PDFs
Images and attached PDFs load from the original Notion page until you download them locally:

    python tools/fetch_assets.py      (or double-click tools/fetch_assets.bat)

This saves every image and PDF into `assets/media/`. After that, the site works fully offline and no longer depends on Notion.

## Features
- `Ctrl K` or `/` — search
- `T` — light/dark mode
- Click any equation to copy its LaTeX; code blocks have a Copy button
- Star icon (hover any heading, or next to a page title) — save it; the saved list is under the star in the top bar
- Print / PDF button — prints any page with every section expanded (choose "Save as PDF")
- Open/closed sections are remembered per page

Saved items, open sections, theme and practice mode are stored in your browser only.

## Structure
- `index.html` — AERO module register
- one folder per module (`ma2006/`, `ma3003/` … `ma4705/`) — module page plus one page per Notion sub-page
- `assets/downloads/` — formula-sheet cheat sheet (PDF + Markdown/LaTeX)
- `_source/` — generator (Node) and the scraped Notion block data, for rebuilding and adding courses
