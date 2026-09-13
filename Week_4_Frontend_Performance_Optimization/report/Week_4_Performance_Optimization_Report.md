# Week 4 - Frontend Performance Optimization Report

## Cover Page

**YUVA Intern**  
**Week 4 Task: Frontend Performance Optimization Challenge**  
**Project:** TechNova - Modern Technology Accessories Website  
**Name:** Esha

## Before vs After Results

The BEFORE values are from the initial Lighthouse results previously provided. The AFTER values are from the supplied final Lighthouse screenshot for the optimized TechNova page.

| Metric | Before | After | Change |
|---|---:|---:|---:|
| Performance | 100 | 99 | -1 point |
| Accessibility | 96 | 96 | No change |
| Best Practices | 100 | 100 | No change |
| SEO | 100 | 100 | No change |
| First Contentful Paint (FCP) | 0.3 s | 0.9 s | +0.6 s, worse |
| Largest Contentful Paint (LCP) | 0.4 s | 1.3 s | +0.9 s, worse |
| Total Blocking Time (TBT) | 0 ms | 90 ms | +90 ms, worse |
| Cumulative Layout Shift (CLS) | 0 | 0 | No change |
| Speed Index | 0.3 s | 0.9 s | +0.6 s, worse |

Lower is better for FCP, LCP, TBT, CLS, and Speed Index. Higher is better for Lighthouse category scores. No percentage improvement is claimed because the supplied screenshots do not show matching device and throttling settings.

## Project Overview

TechNova is a fictional technology accessories storefront built with HTML5, CSS3, and vanilla JavaScript. It includes responsive navigation, a hero section, feature cards, six product cards, product quick view, Add to Cart, Buy Now checkout-ready feedback, contact validation, newsletter interaction, and footer navigation.

## Lighthouse Findings

The initial audit reported image delivery, LCP request discovery, cache lifetime, render-blocking CSS, document request latency, DOM size, long main-thread tasks, unused JavaScript, and insufficient accessibility contrast. The exact contrast selector was not supplied.

## Optimizations Implemented

- Resized and compressed local product images.
- Added explicit image dimensions.
- Prioritized and preloaded the hero image.
- Added lazy loading to below-the-fold product images.
- Deferred the minified JavaScript.
- Added minified CSS and JavaScript while retaining readable source files.
- Adjusted shared text colors to improve contrast.
- Added a deployment cache-header example.
- Added functional product quick view, Add to Cart, and Buy Now feedback.

## Results Analysis

The supplied AFTER run does not demonstrate a measured performance improvement. Performance changed from 100 to 99. Accessibility, Best Practices, SEO, and CLS were unchanged. FCP, LCP, TBT, and Speed Index were higher in the AFTER screenshot.

Because the AFTER screenshot does not show the same audit configuration as the BEFORE result, this comparison should be treated as recorded data rather than a controlled experiment. A repeat audit using the same device, network throttling, browser, and Lighthouse categories is recommended before making further optimization decisions.

## User Experience and Code Quality

The site retains responsive layout, semantic HTML, meaningful image alt text, visible focus states, mobile navigation, product modal behavior, cart feedback, Buy Now behavior, and contact form validation. Readable source files remain separate from production minified assets.

## Limitations

- Server-side caching cannot be demonstrated by the local Python static server.
- The project uses a small vanilla JavaScript codebase, so code splitting was not necessary.
- The supplied AFTER screenshot does not show matching audit configuration details.
- The actual screenshot files were not available in the workspace for embedding.

## Screenshots

Save the supplied and remaining captures in `../screenshots/` using these names:

1. `before-website.png` - Initial TechNova website
2. `lighthouse-before.png` - Initial Lighthouse audit
3. `before-details.png` - Initial Lighthouse Opportunities/Diagnostics
4. `after-website.png` - Optimized TechNova website
5. `lighthouse-after.png` - Final Lighthouse audit
6. `after-details.png` - Final Lighthouse Opportunities/Diagnostics

The supplied AFTER screenshot provides the AFTER metrics recorded above, but it must be saved locally before it can be embedded in the report.
