# Background image source

`render.html` draws the silver-and-beige liquid-metal background with WebGL; `shot.js` saves it with Playwright.

```bash
node shot.js 2560 1600 11.3 bg-wide.png 0     # laptops / desktops
node shot.js 1440 2560 11.3 bg-tall.png 0.45  # phones (portrait)
```

Convert to WebP and copy to `images/background/metal-wide.webp` and `metal-tall.webp`. Change `11.3` (seed) for a different pattern.
