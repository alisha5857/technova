# Common Thread Journal: Accessibility Report

## Concept

Common Thread is a responsive editorial blog and information portal. The page includes primary navigation, a featured introduction, searchable and filterable stories, a popular-stories sidebar, and a newsletter signup dialog.

## Audit approach

- Reviewed the page against WCAG 2.2 principles: perceivable, operable, understandable, and robust.
- Inspected the document outline and interactive controls with browser accessibility-tree tools.
- Checked keyboard-only operation for navigation, search, filters, links, and the newsletter dialog.
- Checked color choices with a contrast checker. Body text uses dark teal on a warm off-white background; coral is reserved for large text, accents, and controls with sufficient contrast on their backgrounds.
- Included a Lighthouse/WAVE-ready static page. Run Lighthouse in Chrome DevTools or the WAVE browser extension against `index.html` or a local static server for a machine-generated audit.

## Improvements made

### Semantic structure

- Added `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer` landmarks.
- Added one descriptive `h1`, followed by logical `h2` and `h3` headings.
- Used native `button`, `a`, `form`, `label`, `input`, `time`, `ol`, and `ul` elements instead of clickable generic containers.
- Added `lang="en"`, a useful page title, and a descriptive meta description.

### Keyboard and focus

- Added a visible-on-focus “Skip to main content” link.
- Every interactive element is reachable with the keyboard and has a visible `:focus-visible` indicator.
- The mobile menu exposes its state through `aria-expanded` and `aria-controls`; Escape closes it and returns focus to the menu button.
- The newsletter dialog is modal, closes with Escape or its close button, prevents background scrolling, and returns focus to the control that opened it.
- `prefers-reduced-motion: reduce` disables smooth scrolling and animation-heavy behavior.

### ARIA and dynamic content

- The newsletter uses `role="dialog"`, `aria-modal`, `aria-labelledby`, and `aria-describedby`.
- Topic filters use `aria-pressed` to expose the selected state.
- Search/filter results and form feedback use `role="status"` with `aria-live="polite"`.
- Decorative symbols are hidden with `aria-hidden="true"`; the brand link and close button have clear accessible names.

### Visual and responsive UX

- Text and controls use high-contrast colors, generous line spacing, and consistent focus outlines.
- Content reflows to a single-column layout on narrow screens without removing information or functionality.
- Form fields have visible labels, native email validation, and autocomplete support.
- No information is conveyed by color alone: topic names remain visible and the active filter is also exposed through `aria-pressed`.

## Standards mapping

- **WCAG 1.3.1 / 4.1.2:** semantic landmarks, headings, labels, and correctly exposed control states.
- **WCAG 1.4.3 / 1.4.11:** readable contrast for text, controls, and focus indicators.
- **WCAG 2.1.1 / 2.4.7:** keyboard access and highly visible focus states.
- **WCAG 2.4.1:** skip link bypasses repeated navigation.
- **WCAG 2.4.3:** predictable focus order follows the document structure.
- **WCAG 2.3.3:** reduced-motion preference is respected.

## Manual test checklist

1. Press `Tab` from the top of the page. The skip link should appear first.
2. Use `Enter` on the menu button at a narrow viewport. Use `Escape` to close it and confirm focus returns to the button.
3. Use `Tab` and `Enter` on topic filters. Confirm the selected state and result count are announced.
4. Open Subscribe, press `Tab` through the form, and press `Escape`. Confirm focus returns to the opener.
5. Submit a valid email and confirm the polite success message is announced.
6. Enable a reduced-motion preference and confirm the page does not smoothly scroll.