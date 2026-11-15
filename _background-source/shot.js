const { chromium } = require('playwright');
const [,, w, h, seed, out, ox] = process.argv;
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
  const pg = await b.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1 });
  pg.on('pageerror', e => console.log('err', e.message)); pg.on('console', m => console.log('console', m.text()));
  await pg.goto('file://' + __dirname + `/render.html?w=${w}&h=${h}&seed=${seed}&ox=${ox||0}`);
  await pg.waitForFunction('window.DONE === true', null, { timeout: 300000 });
  await pg.screenshot({ path: out });
  await b.close();
})();
