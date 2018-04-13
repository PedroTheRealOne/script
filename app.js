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
    //


    //Card Matrix

    await page.goto('https://trello.com/c/Fz1m2BAv/2-matrix');

    await page.addScriptTag({
        content: `
        

        `

    });
    //


    //Card Fuse
    await page.goto('https://trello.com/c/nNItV8D8/8-fuse');

    await browser.newPage('https://www.fusetools.com/');
    //


    //Card Linguagens
    await page.goto('https://trello.com/c/6ddfGj9v/4-linguagens');

    await page.addScriptTag({
        content:`
        function getChecked(){
            return $('.checklist-item')[0].innerText
        }
        function getChecked1(){
            return $('.checklist-item')[1].innerText
        }
        function getChecked2(){
            return $('.checklist-item')[5].innerText
        }
        function getChecked3(){
            return $('.checklist-item')[6].innerText
        }
        function getChecked4(){
            return $('.checklist-item')[7].innerText
        }
        `
    });

    var info = await page.evaluate('getChecked()');
    var info1 = await page.evaluate('getChecked1()');
    var info2 = await page.evaluate('getChecked2()');
    var info3 = await page.evaluate('getChecked3()');
    var info4 = await page.evaluate('getChecked4()');
    console.log(info, info1, info2, info3, info4);
    //


})();
