const puppeteer = require('puppeteer');
const fs = require('fs');
const cookkie = require("../models/cookkie")
function getEMPRUNTEUR(req) {
  return new Promise((resolve, reject) => {
  (async () => {
    const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
});try{
            const page1 = await browser.newPage();
            await page1.goto('https://pro.simulassur.fr/#/login',{waitUntil: 'domcontentloaded'})
        await page1.waitForSelector('#brokerCode');
        await page1.focus('#brokerCode')
        await page1.keyboard.type('94105');
        await page1.waitForSelector('#password');
        await page1.focus('#password')
        await page1.keyboard.type('Y@ssine0906');
        await page1.$eval( '#app > div.min-h-screen.flex.flex-col.items-center.justify-center.bg-gradient-to-t.from-alpha-500.to-beta-500 > div > form > div.flex.justify-between.items-center.mt-4 > button', form => form.click() );
        await page1.waitForNavigation({waitUntil: 'domcontentloaded'})
            await page1.goto('https://pro.simulassur.fr/#/quotes/loan-insurance/create/directe',{waitUntil: 'domcontentloaded'})
        if(req.body.civilite=="Monsieur")
        {
          await page1.waitForSelector('#customer-1_civility-men')
          await page1.click('#customer-1_civility-men')
          await page1.$eval('#customer-1_civility-men',el=>el.click())
        }
        else
        {
          await page1.waitForSelector('#customer-1_civility-women')
          await page1.click('#customer-1_civility-women')
          await page1.$eval('#customer-1_civility-women',el=>el.click())
        }
        await page1.waitForSelector('#customer-1_lastname');
        await page1.focus('#customer-1_lastname')
        await page1.keyboard.type(req.body.lastname);
        await page1.$eval('#customer-1_civility-women',(el,value)=>el.value=value,req.body.lastname)
        await page1.waitForSelector('#customer-1_firstname');
        await page1.focus('#customer-1_firstname')
        await page1.keyboard.type(req.body.firstname);
        await page1.$eval('#customer-1_firstname',(el,value)=>el.value=value,req.body.firstname)
        await page1.waitForSelector('#customer-1_birthDate');
        await page1.focus('#customer-1_birthDate')
        var dateNat=""
        for(i=0;i<req.body.date.length;i++)
          {
            dateNat+=req.body.date[i]
            dateNat+='\\'
          }
        await page1.keyboard.type(dateNat);
        await page1.$eval('#customer-1_birthDate',(el,value)=>el.innerHTML=value,dateNat)
        await page1.waitForSelector('#customer-1_zipCode');
        await page1.focus('#customer-1_zipCode')
        await page1.$eval('#customer-1_zipCode',(el,value)=>el.value=value,req.body.code_postal)
        await page1.select('#customer-1_businessTrip', req.body.Deplacements);
        await page1.select('#customer-1_profession', req.body.Statut);
        if(req.body.fumeur=="true")
        {
          await page1.waitForSelector('#customer-1_smoker')
          await page1.$eval('#customer-1_smoker',el=>el.click())
        }
        if(req.body.handling=="true")
        {
          await page1.waitForSelector('#customer-1_handling')
          await page1.$eval('#customer-1_handling',el=>el.click())
        }
        if(req.body.height=="true")
        {
          await page1.waitForSelector('#customer-1_height')
          await page1.$eval('#customer-1_height',el=>el.click())
        }
        if(req.body.riskyProfession=="true")
        {
          await page1.waitForSelector('#customer-1_riskyProfession')
          await page1.$eval('#customer-1_riskyProfession',el=>el.click())
        }
        await page1.$eval( '#scroll > form > div.ml-auto.pt-6 > button', form => form.click() );
        await page1.waitForSelector('#projectState')
        await page1.select('#projectState', req.body.projectState);
        await page1.waitForSelector('#projectQualification')
        await page1.select('#projectQualification', req.body.projectQualification);
        await page1.focus('#effectiveDate')
        await page1.$eval('#effectiveDate',(el,value)=>el.value=value,req.body.date_effect)
        await page1.waitForSelector('#loan-1_type')
        await page1.select('#loan-1_type', req.body.loan);
        await page1.focus('#loan-1_amount')
        await page1.keyboard.type(req.body.amount);
        await page1.focus('#loan-1_rate')
        await page1.keyboard.type(req.body.rate);
        await page1.focus('#loan-1_duration')
        await page1.keyboard.type(req.body.duration);
        await page1.focus('#loan-1_delay')
        await page1.keyboard.type(req.body.delay);
        await page1.waitForSelector('#loan-1_delayType')
        await page1.select('#loan-1_delayType', req.body.delayType);
        await page1.waitForSelector('#loan-1_warranty-1')
        await page1.select('#loan-1_warranty-1', req.body.warranty);
        //await page1.$eval( 'button[type="button"]:nth-child(2)', form => form.click() );
        await page1.$$eval(
          'button',
          nodes => nodes.map(n =>{
            if(n.innerHTML.indexOf('Valider')>-1)
             n.click();
          })
        );
        await page1.waitForResponse(async(response) => {
          if(response.url().startsWith('https://pro.simulassur.fr/api/quotes/loan-insurance/')&& response.status() === 200)
              {
                  return await response;
              }
         });
        
        let res1= await page1.$$eval('div.grid.grid-cols-4.grid-cols-4', names => names.map(name =>
          {
            var ch={}
            var list=name.getElementsByTagName('img')
            ch['image']=list[0].src
            ch['name']="simulassur"
            list=name.getElementsByTagName('div')
            for(var i=0;i<list.length;i++)
            {
              if(list[i].className=="text-xl")
                {
                  var prix=list[i].innerHTML.replaceAll("&nbsp;"," ")
                  ch['prix']=prix
                }
            }
            return ch
          }))
          var resulats={}
          for(i=0;i<res1.length;i++)
          {
            resulats[res1[i].name+i]=res1[i]
          }
          await browser.close();
          resolve(resulats);
        } catch (error) {
          await browser.close();
          resolve([])
        }
        })();
      
      });
        }
  module.exports = {
    getEMPRUNTEUR
}