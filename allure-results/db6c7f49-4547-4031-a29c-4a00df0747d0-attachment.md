# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Plugins/eslintPlugins.spec.ts >> 
- Location: tests/Plugins/eslintPlugins.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Bot Test Page"
Received: Promise {}
```

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://bot.sannysoft.com/", waiting until "load"

```

# Test source

```ts
  1 | import {test, expect} from '@playwright/test';
  2 | 
  3 | test ('', async({page}) => {
  4 | let title;
> 5 | page.goto('https://bot.sannysoft.com/');
    |      ^ Error: page.goto: Test ended.
  6 | title =  page.title();
  7 | expect(title).toBe("Bot Test Page");
  8 | })
```