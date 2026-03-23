# MOS Docs – Staging Environment

This repository serves as a **staging environment for our Docusaurus-based documentation**.

It allows MOS members to preview, test, and review documentation changes before they are published to the live environment.

---

## 🎯 Purpose

The staging environment is designed to:

* Preview new content and changes
* Validate layout, structure, and formatting
* Gather feedback from MOS members
* Catch issues early
* Prepare clean and stable releases

⚠️ **Important:** Changes made here are **not automatically published** to the live documentation.

---

## 📁 Project Structure

```
.
├── docs/           # Documentation pages
├── blog/           # Blog (if used)
├── src/            # Custom components / theme overrides
├── static/         # Static assets (images, etc.)
├── docusaurus.config.js
└── sidebars.js
```

---

## 🧠 Notes

* Navigation is managed via `sidebars.js`
* Global configuration is in `docusaurus.config.js`
* Store images and assets in `static/`
* Documentation content is written in Markdown under `docs/`

---

## 📌 Goal

This staging environment ensures that MOS Docs are:

* Well-structured
* Visually consistent
* Technically accurate

before going live.

---

Happy testing 🚀
