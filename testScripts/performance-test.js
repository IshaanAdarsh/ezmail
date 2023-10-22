import puppeteer from 'puppeteer';
import fs from 'fs/promises';

async function takeScreenshots(url, outputDirectory) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  const viewports = [
    { width: 320, height: 480 },
    { width: 320, height: 568 },
    { width: 375, height: 667 },
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
    { width: 1280, height: 800 },
    { width: 1440, height: 900 },
    { width: 1920, height: 1080 },
  ];

  try {
    await page.goto(url);
    await fs.mkdir(outputDirectory, { recursive: true });

    for (const viewport of viewports) {
      await page.setViewport(viewport);
      const screenshotName = `${outputDirectory}/${viewport.width}x${viewport.height}.png`;
      await page.screenshot({ path: screenshotName });
      console.log(`Screenshot taken at ${viewport.width}x${viewport.height}`);
    }

    console.log('Responsiveness check completed.');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

async function performUITest(url) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  try {
    await page.goto(url);

    // Extract data from the page
    const pageTitle = await page.title();
    console.log('Page title:', pageTitle);

    // Run assertions or validations
    if (pageTitle === 'Expected Page Title') {
      console.log('UI Test Passed!');
    } else {
      console.error('UI Test Failed!');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

// Usage
const websiteURL = 'https://ezmail-home.vercel.app';
const screenshotOutputDir = 'screenshots';

takeScreenshots(websiteURL, screenshotOutputDir);
performUITest(websiteURL);