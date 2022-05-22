const puppeteer = require('puppeteer');
const fs = require('fs');
const cookkie = require("../models/cookkie")
module.exports = async () => {
    const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
});
      const page = await browser.newPage();
      await page.setUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1");
      await page.goto('https://www.fma.fr/Public/Connexion.aspx',{waitUntil: 'domcontentloaded'})
      await page.waitForSelector('#email');
      await page.$eval('#email', el => el.value = 'SDD236903');
      await page.waitForSelector('#password');
      await page.$eval('#password', el => el.value = 'Y@ssine0906');
      await page.$eval( '#btSeConnecter', form => form.click() );
      try{
        await page.waitForResponse(
          (response) =>
            response.url() === 'https://www.fma.fr/api/ExtranetSpa/ChargePilotageSignature' && response.status() === 200
        );
      }
      catch(e){
        await page.waitForTimeout(100)
      }
      const cookies1 = await page.cookies()
      let cookie=new cookkie()
      cookie.NomSite='FMA'
      cookie.ValueCookie=JSON.stringify(cookies1)
      await cookkie.find({ NomSite:'FMA' }).remove();
      await cookie.save()
      await page.goto('https://courtage.eca-partenaires.com',{waitUntil: 'domcontentloaded'})
      await page.waitForSelector('#login-name');
      await page.$eval('#login-name', el => el.value = 'A34113001');
      await page.waitForSelector('#login-password');
      await page.$eval('#login-password', el => el.value = 'Yassine0906');
      await page.click( '#main-container > div.container > div > div.col-md-4.col-sm-12.d-flex.align-items-center.justify-content-center > div > form > div.form-group.mb-0.text-right > button');
      try{
        await page.waitForNavigation({waitUntil: 'domcontentloaded'});
      }
      catch(e){
        await page.waitForTimeout(100)
      }
      const cookies2 = await page.cookies()
      let cookie1=new cookkie()
      cookie1.NomSite='ECA'
      cookie1.ValueCookie=JSON.stringify(cookies2)
      await cookkie.find({ NomSite:'ECA' }).remove();
      await cookie1.save()
      await page.goto('https://assurgate.com/login.php',{waitUntil: 'domcontentloaded'})
      await page.waitForSelector('#login > div:nth-child(1) > input');
      await page.$eval('#login > div:nth-child(1) > input', el => el.value = 'UC10052');
      await page.waitForSelector('#login > div:nth-child(2) > input');
      await page.$eval('#login > div:nth-child(2) > input', el => el.value = '913778');
      await page.waitForSelector('#login > div:nth-child(3) > input');
      await page.$eval('#login > div:nth-child(3) > input', el => el.value = 'millicourtage');
      await page.click( '#login > div.row > div.col-xs-4 > button');
      try{
        await page.waitForNavigation({waitUntil: 'domcontentloaded'});
      }
      catch(e){
        await page.waitForTimeout(100)
      }
      const cookies3 = await page.cookies()
      let cookie2=new cookkie()
      cookie2.NomSite='GATE'
      cookie2.ValueCookie=JSON.stringify(cookies3)
      await cookkie.find({ NomSite:'GATE' }).remove();
      await cookie2.save();
      await page.goto('https://extranet.neoliane.fr/')
      await page.waitForSelector('input[name=username]');
      await page.$eval('input[name=username]', el => el.value = 'NR2508');
      await page.waitForSelector('input[name=password]');
      await page.$eval('input[name=password]', el => el.value = 'Sbhconsulting@2022')
      await page.$eval( 'button[data-action=submit]', form => form.click() );
      await page.waitForNavigation({waitUntil: 'domcontentloaded'});
      const cookies = await page.cookies()
      let cookie3=new cookkie()
      cookie3.NomSite='neoliane'
      cookie3.ValueCookie=JSON.stringify(cookies)
      await cookkie.find({ NomSite:'neoliane' }).remove();
      await cookie3.save();
      await page.goto('https://www.sollyazarpro.com/',{waitUntil: 'domcontentloaded'})
        await page.waitForSelector('#email');
        await page.$eval('#email', el => el.value = 'houssem.benyedder04@gmail.com');
        await page.waitForSelector('#password');
        await page.$eval('#password', el => el.value = 'Yassine0906');
        await page.$eval( '#next', form => form.click() );
      try{
        await page.waitForNavigation({waitUntil: 'domcontentloaded'})
      }
      catch(e){
        await page.waitForTimeout(100)
      }
      const cookies6 = await page.cookies()
      let cookie6=new cookkie()
      cookie6.NomSite='sollyazarpro'
      cookie6.ValueCookie=JSON.stringify(cookies6)
      await cookkie.find({ NomSite:'sollyazarpro' }).remove();
      await cookie6.save()
      await browser.close();
};