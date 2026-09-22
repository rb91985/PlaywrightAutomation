import { chromium } from 'playwright-extra';
import { test } from '@playwright/test';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

chromium.use(StealthPlugin());

test('opens the stealth test page @smoke', async () => {
  const browser = await chromium.launch({ headless: false });
  try {
    const page = await browser.newPage();
    await page.goto('https://bot.sannysoft.com/');
    await page.screenshot({ path: 'stealth-test.png' });
  } finally {
    await browser.close();
  }
});