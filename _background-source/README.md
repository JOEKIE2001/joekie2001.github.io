# Background image source

`render.html` draws the liquid-chrome background with WebGL; `shot.js` saves it with Playwright.

```bash
node shot.js 2560 1600 4.7 bg-wide.png 0     # laptops / desktops
node shot.js 1440 2560 4.7 bg-tall.png 0.35  # phones (portrait)
```

Convert to WebP and copy to `images/background/chrome-wide.webp` and `chrome-tall.webp`. Change `4.7` (seed) for a different pattern.
