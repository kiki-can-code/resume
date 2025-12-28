# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static resume/CV website for "Kerstin" with bilingual support (German/English) and light/dark theme switching. No build tools or dependencies — pure HTML, CSS, and vanilla JavaScript.

## Development

Open `index.html` directly in a browser to view the site. No build step or dev server required.

### Keyboard shortcuts (for testing)
- `T` — Toggle light/dark theme
- `L` — Toggle German/English language

### PDF Export
Use browser print (Ctrl/Cmd+P) → "Save as PDF". Header controls are automatically hidden via print styles.

## Architecture

### Bilingual Content System
Content is displayed in both languages using `lang` attributes on elements. The CSS handles visibility:
- Elements with `lang="de"` shown by default
- Elements with `lang="en"` hidden by default
- When `<html lang="en">`, visibility is swapped via CSS selectors in `styles.css:96-130`

Example pattern:
```html
<span lang="de">German text</span>
<span lang="en">English text</span>
```

### Theme System
Uses `data-theme` attribute on `<html>` element (`light`/`dark`). CSS custom properties in `styles.css:30-63` define all theme colors. JavaScript in `script.js` handles:
- localStorage persistence (`resume-theme`, `resume-lang` keys)
- System preference detection via `prefers-color-scheme`

### CSS Structure
- CSS custom properties (design tokens) at `:root` for spacing, typography, animations
- Light theme variables: `[data-theme="light"]`
- Dark theme variables: `[data-theme="dark"]`
- Print styles at line 626
- Responsive breakpoint at 600px
- Respects `prefers-reduced-motion`

### Fonts
Google Fonts loaded in `index.html`:
- Sora (display/headings)
- Crimson Pro (body text)
- JetBrains Mono (code/monospace)
