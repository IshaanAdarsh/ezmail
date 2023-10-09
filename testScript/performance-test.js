import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  try {
    // Navigate to a URL and wait for network idle
    const navigationPromise = page.waitForNavigation({ waitUntil: 'networkidle0' });
    await page.goto('https://ezmail-home.vercel.app'); // Replace with your website URL
    await navigationPromise;

    // Wait for additional time, if necessary
    const millisecondsToWait = 5000;
    await new Promise(resolve => setTimeout(resolve, millisecondsToWait));

    // Enable Performance API
    const client = await page.target().createCDPSession();
    await client.send('Performance.enable');

    // Collect performance metrics
    const { metrics } = await client.send('Performance.getMetrics');

    console.log('Performance Metrics:');
    console.log(metrics);

    // If you want a specific metric, you can access it like this:
    const firstMeaningfulPaint = metrics.find(metric => metric.name === 'FirstMeaningfulPaint');

    if (firstMeaningfulPaint) {
      console.log('First Meaningful Paint:', firstMeaningfulPaint.value);
    } else {
      console.log('First Meaningful Paint not found in metrics.');
    }
  } catch (error) {
    console.error(`Error running performance test: ${error}`);
  } finally {
    await browser.close();
  }
})();

// import puppeteer from 'puppeteer';

// const browserOptions = [
//   { name: 'Chromium', args: { headless: "new" } },
//   { name: 'Firefox', args: { headless: false, product: 'firefox' } },
//   { name: 'WebKit', args: { headless: true, product: 'webkit' } }
// ];

// (async () => {
//   for (const browserConfig of browserOptions) {
//     const browser = await puppeteer.launch(browserConfig.args);
//     const page = await browser.newPage();

//     try {
//       // Navigate to a URL and wait for network idle
//       const navigationPromise = page.waitForNavigation({ waitUntil: 'networkidle0' });
//       await page.goto('https://ezmail-home.vercel.app'); // Replace with your website URL
//       await navigationPromise;

//       // Wait for additional time, if necessary
//       const millisecondsToWait = 5000;
//       await new Promise(resolve => setTimeout(resolve, millisecondsToWait));

//       // Enable Performance API
//       const client = await page.target().createCDPSession();
//       await client.send('Performance.enable');

//       // Collect performance metrics
//       const { metrics } = await client.send('Performance.getMetrics');

//       console.log(`Performance Metrics for ${browserConfig.name}:`);
//       console.log(metrics);

//       // Save or process the metrics as needed

//     } catch (error) {
//       console.error(`Error running performance test for ${browserConfig.name}: ${error}`);
//     } finally {
//       await browser.close();
//     }
//   }
// })();

