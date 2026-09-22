import {test, expect} from '@playwright/test';

test ('', async({page}) => {
let title;
page.goto('https://bot.sannysoft.com/');
title =  page.title();
expect(title).toBe("Bot Test Page");
})