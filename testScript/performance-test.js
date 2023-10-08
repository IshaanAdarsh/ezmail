const { chromium } = require('playwright');
const lighthouse = require('lighthouse');
const { URL } = require('url');

// Define the URL of the website to test
const websiteUrl = 'ezmail-home.vercel.app/';

// Define the list of browsers you want to test
const browsers = ['chromium', 'firefox', 'webkit'];

(async () => {
  for (const browserType of browsers) {
    const browser = await chromium.launch(); // Use browserType (e.g., 'firefox') for Firefox
    const page = await browser.newPage();

    // Start Lighthouse
    const { lhr } = await lighthouse(websiteUrl, {
      port: (new URL(browser.wsEndpoint())).port,
      output: 'html', // You can also use 'json' for JSON output
    });

    // Output Lighthouse results
    console.log(`Lighthouse Report for ${browserType}:`);
    console.log(`Performance Score: ${lhr.categories.performance.score * 100}`);
    console.log(`First Contentful Paint: ${lhr.audits['first-contentful-paint'].displayValue}`);
    console.log(`Largest Contentful Paint: ${lhr.audits['largest-contentful-paint'].displayValue}`);
    console.log(`Total Blocking Time: ${lhr.audits['total-blocking-time'].displayValue}`);
    console.log(`Speed Index: ${lhr.audits['speed-index'].displayValue}`);
    console.log(`Time to Interactive: ${lhr.audits['interactive'].displayValue}`);

    await browser.close();
  }
})();
