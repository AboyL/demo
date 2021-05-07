const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://coderralh-blocks.open.hand-china.com/templates/common-draggable-demo?name=common-draggable&from=%252Ftemplates%252Fcommon-draggable-demo');
  // setTimeout(async() => {
  // }, 2000);
  await page.screenshot({ path: 'example.png', fullPage: true });
  await browser.close();
})();