# TechNova

TechNova is a fictional technology accessories storefront built as a Week 4 Frontend Performance Optimization Challenge project. This version contains the focused optimizations applied after the baseline Lighthouse audit.

## Features

- Responsive sticky navigation with mobile menu
- Hero section with local product imagery
- Feature highlights and six product cards
- Product quick-view modal
- Frontend shopping cart count and confirmation toast
- Quick-view `Add to Cart` and frontend-only `Buy Now` checkout-ready action
- Contact form validation with friendly error messages
- Newsletter interaction
- Keyboard-accessible buttons, visible focus states, semantic headings, labels, and meaningful image alt text

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Compressed local JPG product photography sourced from Unsplash

## Folder Structure

```text
/
├── index.html
├── style.css
├── style.min.css
├── script.js
├── script.min.js
├── cache-headers.conf.example
├── README.md
└── images/
    ├── hero.jpg
    ├── product-1.jpg
    ├── product-2.jpg
    ├── product-3.jpg
    ├── product-4.jpg
    ├── product-5.jpg
    └── product-6.jpg
```

## How to Run Locally

Open `index.html` directly in a browser. No backend, package installation, or build process is required.

For a local development server, run any static file server from the project folder, for example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Optimization Summary

The baseline Lighthouse audit reported Performance 100, Accessibility 96, Best Practices 100, and SEO 100. The measured metrics were FCP 0.3 s, LCP 0.4 s, TBT 0 ms, CLS 0, and Speed Index 0.3 s. The audit still identified image delivery, LCP request discovery, document request latency, render-blocking requests, network dependency, DOM size, and caching diagnostics.

The following focused changes were applied:

- Recompressed local JPG product photography and reduced its dimensions.
- Added `width` and `height` to image elements to reserve layout space.
- Prioritized the above-the-fold hero image with preload and high fetch priority.
- Added lazy loading to product images below the fold.
- Deferred the minified JavaScript file; readable source files remain in place for development and documentation.
- Served minified CSS and JavaScript in the production HTML while retaining readable source files.

The local static server cannot configure production HTTP cache headers. The included `cache-headers.conf.example` shows the deployment-level policy to apply on a server that supports response headers. The supplied AFTER Lighthouse screenshot recorded Performance 99, Accessibility 96, Best Practices 100, and SEO 100; see the packaged report for the full comparison.

The six product card images now use local, resized JPG copies of product photography sourced from Unsplash. The website does not request those external image URLs at runtime.

## Final Submission

The submission package is in `Week_4_Frontend_Performance_Optimization/`:

```text
Week_4_Frontend_Performance_Optimization/
├── project/
├── report/
└── screenshots/
```

The report source is `../report/Week_4_Performance_Optimization_Report.md` when viewed from the packaged `project/` folder. Add the actual screenshot files to `../screenshots/` before exporting the report to PDF.

## Testing

The project was checked locally with Chrome and a static server. Verified behavior includes image loading, no browser console errors, mobile navigation, product quick view, add-to-cart count, valid contact-form submission, responsive layout, and production references to `style.min.css` and `script.min.js`.
