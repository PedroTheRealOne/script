'use strict';

const puppeteer = require('puppeteer');

var gustavo = {
    colunas: [{
        filmes: {
            cards: {}
        },
        programacao: {
            cards: {}
        },
        series: {
            cards: {}
        },
        entregas: {
            cards: {}
        },
        familia: {
            cards: {}
        }
    }]
};

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();


    await page.goto('https://trello.com/b/dzRmQJgA/weeseg-sele%C3%A7%C3%A3o');


    //Card Vingadores
    await page.click('#board > div:nth-child(1) > div > div.list-cards.u-fancy-scrollbar.u-clearfix.js-list-cards > a:nth-child(1) > div.list-card-details');

    const textContent = await page.evaluate(() => document.querySelector('#classic > div.window-overlay > div > div > div > div.window-main-col > div.checklist-list.window-module.js-checklist-list.js-no-higher-edits > div > div.checklist-items-list.js-checklist-items-list.js-no-higher-edits').textContent);

    console.log(textContent);

    //await page.addScriptTag({#classic > div.window-overlay > div > div > div > div.window-main-col > div.checklist-list.window-module.js-checklist-list.js-no-higher-edits > div});

    //var box = await page.evaluate(`getChecked()`);

    await page.click('#classic > div.window-overlay > div > div > a');
    //


    //Card Matrix
    await page.click('#board > div:nth-child(1) > div > div.list-cards.u-fancy-scrollbar.u-clearfix.js-list-cards > a:nth-child(2) > div.list-card-details');
    

    await page.click('#classic > div.window-overlay > div > div > a');
    //


    //Card Linguagem
    await page.click('#board > div:nth-child(2) > div > div.list-cards.u-fancy-scrollbar.u-clearfix.js-list-cards > a:nth-child(1)');

    await page.click('#classic > div.window-overlay > div > div > a');
    //


    //Card Fuse
    await page.click('#board > div:nth-child(2) > div > div.list-cards.u-fancy-scrollbar.u-clearfix.js-list-cards > a:nth-child(2)');

    await page.click('#classic > div.window-overlay > div > div > div > div.window-main-col > div.card-detail-data.u-gutter > div.card-detail-item.card-detail-item-block.u-clearfix > div > div.current.markeddown.hide-on-edit.js-card-desc.js-show-with-desc > p > a');

    //





})();
