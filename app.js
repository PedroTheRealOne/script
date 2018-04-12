'use strict';

const puppeteer = require('puppeteer');

var obj = {
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
    await page.goto('https://trello.com/c/yvhOZt8W/1-vingadores');


    await page.addScriptTag({
        content: `
        function getInfo(){
            return $('.checklist-item')[2].innerText
        }
        function getInfo1(){
            return $('.checklist-item')[3].innerText
        }    
        function getInfo2(){
            return $('.checklist-item')[4].innerText
        }    
        function getInfo3(){
            return $('.checklist-item')[5].innerText
        }
        `
    });

    var result = await page.evaluate('getInfo()');
    var result1 = await page.evaluate('getInfo1()');
    var result2 = await page.evaluate('getInfo2()');
    var result3 = await page.evaluate('getInfo3()');
    console.log(result, result1, result2, result3);

})();
