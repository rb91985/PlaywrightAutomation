# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: handsonExercise/tc06tableretrieval.spec.ts >> Retrieve and manipulate web table
- Location: tests/handsonExercise/tc06tableretrieval.spec.ts:10:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('table#customers tr:nth-child(2) td:nth-child(1) button')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e3]:
    - link [ref=e5] [cursor=pointer]:
      - /url: https://www.tutorialspoint.com
    - heading "Selenium - Automation Practice Form" [level=1] [ref=e25]
    - link "Selenium Tutorial" [ref=e27] [cursor=pointer]:
      - /url: /selenium/index.htm
  - main [ref=e30]:
    - generic [ref=e32]:
      - generic [ref=e34]:
        - generic [ref=e35]:
          - heading [level=2] [ref=e36]:
            - button "Elements" [ref=e37] [cursor=pointer]
          - generic "Elements" [ref=e40]:
            - list [ref=e42]:
              - listitem [ref=e43]:
                - link "Text Box" [ref=e44] [cursor=pointer]:
                  - /url: text-box.php
              - listitem [ref=e47]:
                - link "Check Box" [ref=e48] [cursor=pointer]:
                  - /url: check-box.php
              - listitem [ref=e51]:
                - link "Radio Button" [ref=e52] [cursor=pointer]:
                  - /url: radio-button.php
              - listitem [ref=e55]:
                - link "Web Tables" [ref=e56] [cursor=pointer]:
                  - /url: webtables.php
              - listitem [ref=e59]:
                - link "Buttons" [ref=e60] [cursor=pointer]:
                  - /url: buttons.php
              - listitem [ref=e63]:
                - link "Links" [ref=e64] [cursor=pointer]:
                  - /url: links.php
              - listitem [ref=e67]:
                - link "Broken Links - Images" [ref=e68] [cursor=pointer]:
                  - /url: broken-links.php
              - listitem [ref=e71]:
                - link "Upload and Download" [ref=e72] [cursor=pointer]:
                  - /url: upload-download.php
              - listitem [ref=e75]:
                - link "Dynamic Properties" [ref=e76] [cursor=pointer]:
                  - /url: dynamic-prop.php
        - heading [level=2] [ref=e80]:
          - button "Forms" [ref=e81] [cursor=pointer]
        - heading [level=2] [ref=e85]:
          - button "Alerts, Frames & Windows" [ref=e86] [cursor=pointer]
        - heading [level=2] [ref=e90]:
          - button "Widgets" [ref=e91] [cursor=pointer]
        - heading [level=2] [ref=e95]:
          - button "Interaction" [ref=e96] [cursor=pointer]
      - generic [ref=e100]:
        - heading "Web Tables" [level=1] [ref=e101]
        - generic [ref=e102]:
          - button "Add" [ref=e104] [cursor=pointer]
          - generic [ref=e106]:
            - textbox "Type to Search" [ref=e107]
            - button [ref=e108] [cursor=pointer]
        - table [ref=e112]:
          - rowgroup [ref=e113]:
            - row [ref=e114]:
              - columnheader "First Name" [ref=e115]
              - columnheader "Last Name" [ref=e116]
              - columnheader "Age" [ref=e117]
              - columnheader "Email" [ref=e118]
              - columnheader "Salary" [ref=e119]
              - columnheader "Department" [ref=e120]
              - columnheader "Action" [ref=e121]
          - rowgroup [ref=e122]:
            - row [ref=e123]:
              - cell "Cierra" [ref=e124]
              - cell "Vega" [ref=e125]
              - cell "39" [ref=e126]
              - cell "cierra@example.com" [ref=e127]
              - cell "10000" [ref=e128]
              - cell "Insurance" [ref=e129]
              - cell [ref=e130]:
                - link "edit" [ref=e131] [cursor=pointer]:
                  - /url: javascript:void(0);
                - link "delete" [ref=e134] [cursor=pointer]:
                  - /url: javascript:void(0);
            - row [ref=e137]:
              - cell "Alden" [ref=e138]
              - cell "Cantrell" [ref=e139]
              - cell "45" [ref=e140]
              - cell "alden@example.com" [ref=e141]
              - cell "12000" [ref=e142]
              - cell "Compliance" [ref=e143]
              - cell [ref=e144]:
                - link "edit" [ref=e145] [cursor=pointer]:
                  - /url: javascript:void(0);
                - link "delete" [ref=e148] [cursor=pointer]:
                  - /url: javascript:void(0);
            - row [ref=e151]:
              - cell "Kierra" [ref=e152]
              - cell "Gentry" [ref=e153]
              - cell "29" [ref=e154]
              - cell "kierra@example.com" [ref=e155]
              - cell "2000" [ref=e156]
              - cell "Legal" [ref=e157]
              - cell [ref=e158]:
                - link "edit" [ref=e159] [cursor=pointer]:
                  - /url: javascript:void(0);
                - link "delete" [ref=e162] [cursor=pointer]:
                  - /url: javascript:void(0);
            - row [ref=e165]:
              - cell "Alden" [ref=e166]
              - cell "Cantrell" [ref=e167]
              - cell "45" [ref=e168]
              - cell "alden@example.com" [ref=e169]
              - cell "12000" [ref=e170]
              - cell "Compliance" [ref=e171]
              - cell [ref=e172]:
                - link "edit" [ref=e173] [cursor=pointer]:
                  - /url: javascript:void(0);
                - link "delete" [ref=e176] [cursor=pointer]:
                  - /url: javascript:void(0);
            - row [ref=e179]:
              - cell "Kierra" [ref=e180]
              - cell "Gentry" [ref=e181]
              - cell "29" [ref=e182]
              - cell "kierra@example.com" [ref=e183]
              - cell "2000" [ref=e184]
              - cell "Legal" [ref=e185]
              - cell [ref=e186]:
                - link "edit" [ref=e187] [cursor=pointer]:
                  - /url: javascript:void(0);
                - link "delete" [ref=e190] [cursor=pointer]:
                  - /url: javascript:void(0);
```

# Test source

```ts
  1  | // Open the application URL. https://www.tutorialspoint.com/selenium/practice/webtables.php
  2  | 
  3  | // Retrieve and print all data from the web table. 
  4  | 
  5  | // Delete any two rows. 
  6  | 
  7  | // Verify the number of remaining rows
  8  | 
  9  | import { test, expect } from '@playwright/test';
  10 | test('Retrieve and manipulate web table', async ({ page }) => {
  11 |     await page.goto('https://www.tutorialspoint.com/selenium/practice/webtables.php');
  12 | 
  13 |     // Retrieve and print all data from the web table
  14 |     const rows = await page.$$('table#customers tr');
  15 |     for (const row of rows) {
  16 |         const cells = await row.$$('td');
  17 |         const cellTexts = [];
  18 |         for (const cell of cells) {
  19 |             cellTexts.push(await cell.textContent());
  20 |         }
  21 |         console.log(cellTexts.join(' | '));
  22 |     }
  23 | 
  24 |     // Delete any two rows
> 25 |     await page.click('table#customers tr:nth-child(2) td:nth-child(1) button'); // Adjust selector as needed
     |                ^ Error: page.click: Test timeout of 30000ms exceeded.
  26 |     await page.click('table#customers tr:nth-child(3) td:nth-child(1) button'); // Adjust selector as needed
  27 | 
  28 |     // Verify the number of remaining rows
  29 |     const remainingRows = await page.$$('table#customers tr');
  30 |     expect(remainingRows.length).toBe(rows.length - 2);
  31 | });
```