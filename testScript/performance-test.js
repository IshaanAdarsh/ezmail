import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    // Navigate to a URL and wait for network idle
    const navigationPromise = page.waitForNavigation({ waitUntil: 'networkidle0' });
    await page.goto('https://ezmail-home.vercel.app/');

    // Ensure navigation completed successfully
    await navigationPromise;

    // Enable Performance API
    const client = await page.target().createCDPSession();
    await client.send('Performance.enable');

    // Collect performance metrics
    const { result } = await client.send('Performance.getMetrics');

    // Evaluate the window.performance object
    const lighthouseReport = await page.evaluate(() => window.performance.toJSON());

    console.log('Performance Metrics:');
    console.log(result);
    console.log('Lighthouse Report:');
    console.log(lighthouseReport);
  } catch (error) {
    console.error(`Error running performance test: ${error}`);
  } finally {
    await browser.close();
  }
})();
