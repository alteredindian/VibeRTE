# 📝 VibeRTE — Modern Rich Text Editor

**VibeRTE** is a fast, lightweight, and fully-featured **JavaScript Rich Text Editor** built for modern web applications.  
It offers a beautiful UI, theme support, export/import extensions, and zero dependencies — all with clean, developer-friendly APIs.

---

## 🚀 Quick Start

### Include the required files
```html
<!-- Required Files -->
<link rel="stylesheet" href="assets/css/vibeRTE.css">
<script src="assets/js/vibRTE.js"></script>
````

### Initialize the Editor

```html
<textarea id="editor"></textarea>

<script>
  const editor = new VibeRTE('#editor', {
    height: '500px',
    theme: 'dark'
  });
</script>
```

---

## 🎨 Themes

| Theme     | Description                          |
| --------- | ------------------------------------ |
| `default` | Clean and professional light UI      |
| `dark`    | Modern theme with reduced eye strain |
| `minimal` | Distraction-free writing experience  |

Example:

```js
new VibeRTE('#editor', { theme: 'minimal' });
```

---

## ⚙️ Configuration Options

| Option             | Type       | Default             | Description                               |
| ------------------ | ---------- | ------------------- | ----------------------------------------- |
| `height`           | `string`   | `'500px'`           | Editor height                             |
| `width`            | `string`   | `'100%'`            | Editor width                              |
| `theme`            | `string`   | `'default'`         | Theme mode (`default`, `dark`, `minimal`) |
| `placeholder`      | `string`   | `'Start typing...'` | Placeholder text                          |
| `menubar`          | `boolean`  | `true`              | Show/hide menu bar                        |
| `statusbar`        | `boolean`  | `true`              | Show/hide status bar                      |
| `autosave`         | `boolean`  | `false`             | Enable autosave                           |
| `autosaveInterval` | `number`   | `30000`             | Autosave interval (in ms)                 |
| `spellcheck`       | `boolean`  | `true`              | Enable spell checking                     |
| `onChange`         | `function` | `null`              | Triggered when content changes            |
| `onInit`           | `function` | `null`              | Called after editor initializes           |

---

## 🔧 Methods

```js
// Get content
editor.getContent(0);

// Set content
editor.setContent('<h1>Hello World</h1>', 0);

// Destroy editor
editor.destroy(0);

// Execute commands
editor.executeCommand('bold');
```

---

## 🔌 Extensions

Enable advanced export and import capabilities such as PDF, DOCX, and Image.

### External Dependencies

```html
<!-- PDF Export -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<!-- Image Export -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>

<!-- DOCX Export -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/docx/7.8.2/docx.min.js"></script>

<!-- DOCX Import -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js"></script>
```

> ⚠️ Without these external libraries, VibeRTE will show guided error messages directing users to documentation.

---

## 🧩 Menus Overview

### 📝 File Menu

* New Document
* Preview
* Export (PDF / DOCX / HTML / Image)
* Import (HTML / DOCX)
* Print

### ✂️ Edit Menu

* Undo / Redo
* Cut / Copy / Paste / Paste as Text
* Find / Replace

### 👁️ View Menu

* Source Code View
* Toggle Spell Check
* Show Block Boundaries
* Preview / Fullscreen

### ➕ Insert Menu

* Images, Links, Videos, iFrames
* Code Samples, Tables, Formulas
* Special Characters, Emojis, HR, TOC

### 🎨 Format Menu

* Bold, Italic, Underline, Strikethrough
* Headings (H1–H6), Block Types, Alignment
* Font Family, Font Size, Line Height
* Text & Background Colors
* Clear Formatting

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action          |
| -------- | --------------- |
| `Ctrl+B` | Bold            |
| `Ctrl+I` | Italic          |
| `Ctrl+U` | Underline       |
| `Ctrl+Z` | Undo            |
| `Ctrl+Y` | Redo            |
| `Ctrl+F` | Find            |
| `Ctrl+H` | Replace         |
| `Ctrl+A` | Select All      |
| `Tab`    | Insert 4 spaces |

---

## 💡 Common Examples

### 1. Blog Editor

```js
const blogEditor = new VibeRTE('#blog-editor', {
  height: '600px',
  theme: 'minimal',
  placeholder: 'Write your blog post...',
  autosave: true,
  onChange: content => localStorage.setItem('draft', content)
});
```

### 2. Developer Editor (Dark Mode)

```js
const codeEditor = new VibeRTE('#code-editor', {
  theme: 'dark',
  spellcheck: false,
  fontFamily: ['Courier New', 'Monaco', 'Consolas']
});
```

### 3. Email Composer

```js
new VibeRTE('#email', {
  height: '400px',
  theme: 'minimal',
  menubar: false,
  statusbar: false
});
```

### 4. Dynamic Theme Switching

```js
function switchTheme(theme) {
  document.querySelectorAll('.vibrte-wrapper').forEach(el => {
    el.setAttribute('data-theme', theme);
  });
}

switchTheme('dark');
```

---

## 🌐 Browser Support

| Browser | Version | Support |
| ------- | ------- | ------- |
| Chrome  | 60+     | ✅       |
| Firefox | 55+     | ✅       |
| Safari  | 11+     | ✅       |
| Edge    | 79+     | ✅       |
| Opera   | 47+     | ✅       |

---

## 🧠 Troubleshooting

**Editor not initializing?**

```js
document.addEventListener('DOMContentLoaded', () => {
  new VibeRTE('#editor');
});
```

**Export not working?**
→ Ensure `vibe.extensions.js` and required libraries are included.

**Emoji picker not visible?**
→ Check that `vibe.themes.css` is correctly loaded.

**Theme not applying?**
→ Confirm valid theme name and CSS import.

---

## ✨ Best Practices

* 🔒 Sanitize content server-side before saving
* 💾 Use autosave for long-form content
* 🎨 Match theme with your application design
* 📦 Load extensions only when needed
* ♿ Ensure keyboard accessibility
* 📱 Test on multiple screen sizes
* ⚡ Minify in production

---

## 📚 Quick Links

| Resource         | File                 |
| ---------------- | -------------------- |
| 🎨 Quick Guide        | [index.html](https://open.alteredindian.in/VibeRTE/)    |
| 🧭 Live Demo     | [demo.html](https://open.alteredindian.in/VibeRTE/demo.html)         |
| 📘 Documentation | [documentation.html](https://open.alteredindian.in/VibeRTE/documentation.html) |
| 🧾 README        | `README.md`          |

---

## ❤️ About

**VibeRTE v1.0.0**
Built with ❤️ for developers who value design, simplicity, and flexibility.

**License:** MIT
**Author:** [Vishnu Aryan](https://alteredindian.in)
**Website:** [https://open.alteredindian.in/VibeRTE](https://open.alteredindian.in/VibeRTE/)
