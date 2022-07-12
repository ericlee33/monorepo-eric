const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://baidu.com');
  await page.screenshot();
  await page.screenshot({ path: 'baidu.png' });

  await browser.close();
})();
