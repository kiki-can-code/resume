# Resume Website – Kerstin

Eine elegante, responsive Resume-Website mit Light/Dark Mode und Deutsch/Englisch-Umschaltung.

## 🚀 Features

- **Minimalistisches Design** inspiriert von [nerdy.dev/resume](https://nerdy.dev/resume)
- **Elegante Fade-In Animationen** beim Laden der Seite
- **Light/Dark Mode Toggle** mit System-Präferenz-Erkennung
- **Deutsch/Englisch Umschaltung** mit einem Klick
- **Druckfreundlich** – optimiert für PDF-Export
- **Responsive** – funktioniert auf allen Bildschirmgrößen
- **Barrierefrei** – Tastaturnavigation (T für Theme, L für Language)
- **Keine Abhängigkeiten** – nur HTML, CSS und vanilla JavaScript

## 📁 Projektstruktur

```
resume-website/
├── index.html      # Hauptseite mit allen Inhalten
├── styles.css      # Styling, Animationen, Themes
├── script.js       # Theme- und Sprach-Toggle
└── README.md       # Diese Datei
```

## 🌐 Deployment auf GitHub Pages

### Option 1: Direkt im Repository

1. Erstelle ein neues Repository auf GitHub (z.B. `username.github.io` oder `resume`)
2. Pushe die Dateien in den `main` Branch
3. Gehe zu **Settings → Pages**
4. Wähle **Source: Deploy from a branch**
5. Wähle **Branch: main** und **Folder: / (root)**
6. Klicke **Save**

Die Website ist dann unter `https://username.github.io/` oder `https://username.github.io/resume/` verfügbar.

### Option 2: Mit GitHub Actions (empfohlen)

Erstelle `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .
      - uses: actions/deploy-pages@v4
```

## 🎨 Anpassung

### Farben ändern

Bearbeite die CSS Custom Properties in `styles.css`:

```css
[data-theme="light"] {
    --color-accent: #2d5a45;  /* Deine Hauptfarbe */
    --color-bg: #faf9f7;      /* Hintergrund */
    /* ... */
}
```

### Schriftarten ändern

Die Website nutzt Google Fonts (Sora, Crimson Pro, JetBrains Mono). 
Ändere die Font-Links in `index.html` und die Variablen in `styles.css`:

```css
:root {
    --font-display: 'Sora', system-ui, sans-serif;
    --font-body: 'Crimson Pro', Georgia, serif;
    --font-mono: 'JetBrains Mono', monospace;
}
```

### Kontaktdaten aktualisieren

Bearbeite die Links in der `.contact-links` Sektion in `index.html`:

```html
<div class="contact-links">
    <a href="mailto:deine@email.com">deine@email.com</a>
    <a href="https://github.com/dein-username">/dein-username</a>
    <a href="https://linkedin.com/in/dein-profil">/in/dein-profil</a>
</div>
```

## ⌨️ Tastenkürzel

| Taste | Aktion |
|-------|--------|
| `T` | Theme umschalten (Light/Dark) |
| `L` | Sprache umschalten (DE/EN) |

## 🖨️ Als PDF speichern

1. Öffne die Website im Browser
2. Drücke `Ctrl/Cmd + P`
3. Wähle "Als PDF speichern"
4. Die Header-Controls werden automatisch ausgeblendet

## 🛠️ Weiterentwicklung mit Claude Code

Dieses Setup ist als Ausgangspunkt gedacht. Hier sind einige Ideen für Erweiterungen:

- [ ] Favicon hinzufügen
- [ ] Open Graph Meta-Tags für Social Sharing
- [ ] Foto/Avatar hinzufügen
- [ ] Interaktive Projekt-Galerie
- [ ] Kontaktformular
- [ ] PDF-Download-Button
- [ ] Scroll-getriggerte Animationen
- [ ] Custom Domain konfigurieren

## 📝 Lizenz

MIT – Frei verwendbar und anpassbar.
