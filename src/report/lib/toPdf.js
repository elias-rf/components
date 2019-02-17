const puppeteer = require("puppeteer");

async function toPdf(fileName, html) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  await page.pdf({
    path: `pdf/${fileName}`,
    printBackground: true,
    margin: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
    }
  });

  await browser.close();
}

module.exports = toPdf;
