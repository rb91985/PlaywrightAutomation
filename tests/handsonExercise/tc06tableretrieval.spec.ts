// Open the application URL. https://www.tutorialspoint.com/selenium/practice/webtables.php

// Retrieve and print all data from the web table. 

// Delete any two rows. 

// Verify the number of remaining rows

import { test, expect } from '@playwright/test';
test('Retrieve and manipulate web table', async ({ page }) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/webtables.php');

    // Retrieve and print all data from the web table
    const rows = await page.$$('table.table tbody tr');
    for (const row of rows) {
        const cells = await row.$$('td');
        const cellTexts = [];
        for (const cell of cells) {
            cellTexts.push(await cell.textContent());
        }
        console.log(cellTexts.join(' | '));
    }

    // Delete any two rows (first row twice, since rows shift up after each delete)
    await page.click('table.table tbody tr:nth-child(1) a.delete-wrap');
    await page.click('table.table tbody tr:nth-child(1) a.delete-wrap');

    // Verify the number of remaining rows
    const remainingRows = await page.$$('table.table tbody tr');
    expect(remainingRows.length).toBe(rows.length - 2);
});