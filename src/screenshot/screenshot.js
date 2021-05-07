const puppeteer = require('puppeteer');
const path = require('path');


(async () => {
  const browser = await puppeteer.launch({
    defaultViewport:{
      width:1680,
      height:960
    }
  });

  const page = await browser.newPage();
  await page.goto('http://coderralh-blocks.open.hand-china.com/templates/common-draggable-demo?name=common-draggable&from=%252Ftemplates%252Fcommon-draggable-demo');
  setTimeout(async() => {
    await page.screenshot({ path: path.join(__dirname, 'example1.png'), fullPage: true });
    await browser.close();
  }, 2000);
})();