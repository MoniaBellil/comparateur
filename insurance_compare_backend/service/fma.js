const puppeteer = require('puppeteer');
const fs = require('fs');
const cookkie = require("../models/cookkie")
function getOffresSante(req) {
    return new Promise((resolve, reject) => {
      
      (async () => {
        const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
});try{
            const page1 = await browser.newPage();
            try {
                const jsonString = await cookkie.find({ NomSite:'FMA' })
                const customer = JSON.parse(jsonString[0].ValueCookie);
                await page1.setCookie(...customer);
                
              } catch (err) {
                console.log(err);
                return;
              }
            await page1.goto('https://www.fma.fr/Devis/DevisSante.aspx#/?type=SANTE',{waitUntil: 'domcontentloaded'})
            
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieSelectionAdp.ng-tns-c108-0.actif.ng-star-inserted > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-3.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
            await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieSelectionAdp.ng-tns-c108-0.actif.ng-star-inserted > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-3.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
            
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div:nth-child(2) > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-4.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
            await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div:nth-child(2) > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-4.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
            await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div:nth-child(2) > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-4.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span',(el) => el.click())
            await page1.waitForTimeout(500)
            
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-6.ui-md-8 > input');
            await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-6.ui-md-8 > input')
            await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-6.ui-md-8 > input',(el,value) => el.value= value, req.body.date);
            
            if(req.body.regime=="2" || req.body.regime=="5")
    {
        await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-7.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
        await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-7.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span',(el) => el.click())
      }
    else if(req.body.regime=="12")
    {
        await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-7.ui-md-8 > p-selectbutton-devis > div > div:nth-child(3) > span');
        await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-7.ui-md-8 > p-selectbutton-devis > div > div:nth-child(3) > span')
        await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-7.ui-md-8 > p-selectbutton-devis > div > div:nth-child(3) > span',(el) => el.click())
    }
    else if(req.body.regime=="8")
    {
        await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-7.ui-md-8 > p-selectbutton-devis > div > div:nth-child(4) > span');
        await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-7.ui-md-8 > p-selectbutton-devis > div > div:nth-child(4) > span')
        await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-7.ui-md-8 > p-selectbutton-devis > div > div:nth-child(4) > span',(el) => el.click())
    }
    else if(req.body.regime=="3")
    {
      await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-7.ui-md-8 > p-selectbutton-devis > div > div:nth-child(5) > span');
        await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-7.ui-md-8 > p-selectbutton-devis > div > div:nth-child(5) > span')
        await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-7.ui-md-8 > p-selectbutton-devis > div > div:nth-child(5) > span',(el) => el.click())
    }
    else{
        await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-7.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span');
        await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-7.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
        await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-7.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span',(el) => el.click())
    }
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(3) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-8.ui-md-8 > p-autocomplete > span > input');
            await page1.focus('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(3) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-8.ui-md-8 > p-autocomplete > span > input')
            await page1.keyboard.type(req.body.code_postal);
            await page1.waitForResponse(async(response) => {
                if(response.url().startsWith('https://www.fma.fr/api/DevisAdpSpa/ChargeVilles')&& response.status() === 200)
                    {
                        return await response;
                    }
               });
            await page1.keyboard.press('Enter');
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieBeneficiaires.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-10.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span');
            await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieBeneficiaires.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-10.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
            
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieBeneficiaires.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-13.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span');
            await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieBeneficiaires.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-13.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span',(el) => el.click())
            await page1.waitForTimeout(500)
            
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieRecueilBesoin.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-15.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span');
            await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieRecueilBesoin.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-15.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
            await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieRecueilBesoin.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-15.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span',(el) => el.click());
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieRecueilBesoin.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div.ui-no-pad.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > div:nth-child(1) > div.ui-g-10.ng-tns-c108-0 > slider-devis-adp > div > div.valeur.ui-g-12.ui-md-5.ui-g-nopad.ng-tns-c90-16 > input');
            await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieRecueilBesoin.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div.ui-no-pad.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > div:nth-child(1) > div.ui-g-10.ng-tns-c108-0 > slider-devis-adp > div > div.valeur.ui-g-12.ui-md-5.ui-g-nopad.ng-tns-c90-16 > input')
            await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieRecueilBesoin.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div.ui-no-pad.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > div:nth-child(1) > div.ui-g-10.ng-tns-c108-0 > slider-devis-adp > div > div.valeur.ui-g-12.ui-md-5.ui-g-nopad.ng-tns-c90-16 > input',(el,value) => el.value= value, req.body.hospi);
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieRecueilBesoin.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div.ui-no-pad.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > div:nth-child(3) > div.ui-g-10.ng-tns-c108-0 > slider-devis-adp > div > div.valeur.ui-g-12.ui-md-5.ui-g-nopad.ng-tns-c90-18 > input');
            await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieRecueilBesoin.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div.ui-no-pad.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > div:nth-child(3) > div.ui-g-10.ng-tns-c108-0 > slider-devis-adp > div > div.valeur.ui-g-12.ui-md-5.ui-g-nopad.ng-tns-c90-18 > input')
            await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieRecueilBesoin.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div.ui-no-pad.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > div:nth-child(3) > div.ui-g-10.ng-tns-c108-0 > slider-devis-adp > div > div.valeur.ui-g-12.ui-md-5.ui-g-nopad.ng-tns-c90-18 > input',(el,value) => el.value= value, req.body.optic);
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieRecueilBesoin.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div.ui-no-pad.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > div:nth-child(4) > div.ui-g-10.ng-tns-c108-0 > slider-devis-adp > div > div.valeur.ui-g-12.ui-md-5.ui-g-nopad.ng-tns-c90-19 > input');
            await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieRecueilBesoin.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div.ui-no-pad.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > div:nth-child(4) > div.ui-g-10.ng-tns-c108-0 > slider-devis-adp > div > div.valeur.ui-g-12.ui-md-5.ui-g-nopad.ng-tns-c90-19 > input')
            await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieRecueilBesoin.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div.ui-no-pad.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > div:nth-child(4) > div.ui-g-10.ng-tns-c108-0 > slider-devis-adp > div > div.valeur.ui-g-12.ui-md-5.ui-g-nopad.ng-tns-c90-19 > input',(el,value) => el.value= value, req.body.dentaire);
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieRecueilBesoin.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div.ui-no-pad.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > div:nth-child(2) > div.ui-g-10.ng-tns-c108-0 > slider-devis-adp > div > div.valeur.ui-g-12.ui-md-5.ui-g-nopad.ng-tns-c90-17 > input');
            await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieRecueilBesoin.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div.ui-no-pad.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > div:nth-child(2) > div.ui-g-10.ng-tns-c108-0 > slider-devis-adp > div > div.valeur.ui-g-12.ui-md-5.ui-g-nopad.ng-tns-c90-17 > input')
            await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieRecueilBesoin.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div.ui-no-pad.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > div:nth-child(2) > div.ui-g-10.ng-tns-c108-0 > slider-devis-adp > div > div.valeur.ui-g-12.ui-md-5.ui-g-nopad.ng-tns-c90-17 > input',(el,value) => el.value= value, req.body.consultation);
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.validationPart.ng-tns-c108-0 > button > span');
            await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.validationPart.ng-tns-c108-0 > button > span')
            await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.validationPart.ng-tns-c108-0 > button > span',(el) => el.click());
            var res1="";
            await page1.waitForResponse(async(response) => {
                if(response.url().startsWith('https://www.fma.fr/api/DevisAdpSpa/AppelTarification')&& response.status() === 200)
                    {
                        res1=await response.json()
                        head =await response.headers
                        return await response.headers;
                    }
               });
            var resulats={};
            var index=0;
            for(i=0;i<res1.solutions.length;i++)
            {
                var nom=res1.solutions[i].libelle
                if(nom=="Plénitude" || nom=="Apesia" || nom=="Apesia Famille")
                for(j=0;j<res1.solutions[i].options.length;j++)
                {
                    for(h=0;h<res1.solutions[i].options[j].offres.length;h++)
                    {
                        if(res1.solutions[i].options[j].offres[h].cotisationMensuelle!="-1")
                        {
                          var  ch={};
                          ch['name']=nom+" "+res1.solutions[i].options[j].libelle
                          ch['image']='https://www.fma.fr/App_Themes/FMAv2/images/logo-fma-assurances.png'
                          ch['prix']=res1.solutions[i].options[j].offres[h].libelle+" : "+res1.solutions[i].options[j].offres[h].cotisationMensuelle
                          resulats[ch.name+index]=ch;
                          index++;
                        }
                    }
                    
                }
                
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
function getOffresPrevoyance(req) {
    return new Promise((resolve, reject) => {
      (async () => {
        const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
});
try{
            const page1 = await browser.newPage();
            try {
                const jsonString = await cookkie.find({ NomSite:'FMA' })
                const customer = JSON.parse(jsonString[0].ValueCookie);
                await page1.setCookie(...customer);
                
              } catch (err) {
                console.log(err);
                return;
              }
              await page1.goto('https://www.fma.fr/Devis/DevisPrevoyance.aspx#/?type=PREVOYANCE',{waitUntil: 'domcontentloaded'})
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieSelectionAdp.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-3.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieSelectionAdp.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-3.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span');
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieSelectionAdp.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-3.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span',(el) => el.click());
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-5.ui-md-8 > input')
              await page1.focus('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-5.ui-md-8 > input');
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-5.ui-md-8 > input');
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-5.ui-md-8 > input',(el,value) => el.value= value, req.body.date);
              if(req.body.regime=="2" || req.body.regime=="5")
              {
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-6.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
              }
              else if(req.body.regime=="12")
              {
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-6.ui-md-8 > p-selectbutton-devis > div > div:nth-child(3) > span');
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-6.ui-md-8 > p-selectbutton-devis > div > div:nth-child(3) > span')
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-6.ui-md-8 > p-selectbutton-devis > div > div:nth-child(3) > span',(el) => el.click())
                  
              }
              else if(req.body.regime=="8")
              {
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-6.ui-md-8 > p-selectbutton-devis > div > div:nth-child(4) > span');
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-6.ui-md-8 > p-selectbutton-devis > div > div:nth-child(4) > span')
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-6.ui-md-8 > p-selectbutton-devis > div > div:nth-child(4) > span',(el) => el.click())
              }
              else if(req.body.regime=="3")
              {   
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-6.ui-md-8 > p-selectbutton-devis > div > div:nth-child(5) > span');
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-6.ui-md-8 > p-selectbutton-devis > div > div:nth-child(5) > span')
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-6.ui-md-8 > p-selectbutton-devis > div > div:nth-child(5) > span',(el) => el.click())
              }
              else{
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-6.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span');
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-6.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-6.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span',(el) => el.click())
              }
              await page1.focus('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieAssure.ng-tns-c108-0.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(3) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-7.ui-md-8 > p-autocomplete > span > input')
              await page1.keyboard.type(req.body.code_postal);
              await page1.waitForResponse(async(response) => {
                  if(response.url().startsWith('https://www.fma.fr/api/DevisAdpSpa/ChargeVilles')&& response.status() === 200)
                      {
                          return await response;
                      }
                 });
              await page1.keyboard.press('Enter');
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieBeneficiaires.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-9.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span');
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieBeneficiaires.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-9.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieBeneficiaires.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-9.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span',(el) => el.click())
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieBeneficiaires.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-12.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span');
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieBeneficiaires.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-12.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.etape.partieBeneficiaires.ng-tns-c108-0.ng-star-inserted.actif > div.devis-form-group.ng-tns-c108-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-12.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span',(el) => el.click())
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.validationPart.ng-tns-c108-0 > button > span');
              let isDisabled = await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.validationPart.ng-tns-c108-0 > button', (button) => {
                  return button.disabled;
                });
                while(isDisabled==true)
                {
                  isDisabled = await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.validationPart.ng-tns-c108-0 > button', (button) => {
                      return button.disabled;
                    });
                }
                await page1.screenshot({path: 'test.png', fullPage: true});
      await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.validationPart.ng-tns-c108-0 > button > span');
      await page1.click('#ContentPlaceHolder_DivTunnel > devis-adp > div > form > div > div.ui-g-12.validationPart.ng-tns-c108-0 > button > span')
      var res1="";
      await page1.waitForResponse(async(response) => {
          if(response.url().startsWith('https://www.fma.fr/api/DevisAdpSpa/AppelTarification')&& response.status() === 200)
              {
                  res1=await response.json()
                  return await response.headers;
              }
         });
         var resulats={};
      var index=0;
      for(i=0;i<res1.solutions.length;i++)
      {
          
          var nom=res1.solutions[i].libelle
          for(j=0;j<res1.solutions[i].options.length;j++)
          {
              var  ch={};
              ch['name']=nom+" "+res1.solutions[i].options[j].libelle
              var form={}
              var indexForm=0
              ch['date']=req.body.date_effect
              ch['image']='https://www.fma.fr/App_Themes/FMAv2/images/logo-fma-assurances.png'
              for(h=0;h<res1.solutions[i].options[j].offres.length;h++)
              {
                  if(res1.solutions[i].options[j].offres[h].cotisationMensuelle!="-1")
                  {
                      form[indexForm]=res1.solutions[i].options[j].offres[h].libelle+" : "+res1.solutions[i].options[j].offres[h].cotisationMensuelle
                      indexForm++
                  }
              }
              var form = [];
              for(h=0;h<res1.solutions[i].options[j].offres.length;h++)
              {
                  if(res1.solutions[i].options[j].offres[h].cotisationMensuelle!="-1")
                  {
                      form.push(res1.solutions[i].options[j].offres[h].libelle+" : "+res1.solutions[i].options[j].offres[h].cotisationMensuelle+' € ')
                  }
              }
              ch['Formule']=form
              resulats[index]=ch;
              index++;
          }
          
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
function getMoto(req) {
    return new Promise((resolve, reject) => {
      (async () => {
        const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
});try{
        const page1 = await browser.newPage();
        try {
            const jsonString = await cookkie.find({ NomSite:'FMA' })
                const customer = JSON.parse(jsonString[0].ValueCookie);
            await page1.setCookie(...customer);
            
          } catch (err) {
            console.log(err);
            return;
          }
        await page1.goto('https://www.fma.fr/Devis/DevisCyclo.aspx',{waitUntil: 'domcontentloaded'})
        await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > reprise-hamon > div > div.devis-form-group.ng-tns-c113-3.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-4.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
        await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > reprise-hamon > div > div.devis-form-group.ng-tns-c113-3.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-4.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
        await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > reprise-hamon > div > div.devis-form-group.ng-tns-c113-3.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-4.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span',el=>el.click())
        await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-14.ui-md-8 > div > p-autocomplete > span > input');
            await page1.focus('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-14.ui-md-8 > div > p-autocomplete > span > input')
            await page1.keyboard.type(req.body.motoType);
            await page1.waitForResponse(async(response) => {
              if(response.url().startsWith('https://www.fma.fr/api/DevisSpa/ChargeModeles')&& response.status() === 200)
                  {
                      return await response;
                  }
             });
          await page1.keyboard.press('Enter');
          await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(3) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-16.ui-md-8 > input');
            await page1.focus('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(3) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-16.ui-md-8 > input')
            await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(3) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-16.ui-md-8 > input', (el,value) => el.value = value,req.body.dateCirculation);
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-17.ui-md-8 > input');
            await page1.focus('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-17.ui-md-8 > input')
            await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-17.ui-md-8 > input', (el,value) => el.value = value,req.body.dateAcquisition);
            await page1.keyboard.press('Enter');
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(5) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-18.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(5) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-18.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(5) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-18.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span',el=>el.click())
              
            if(req.body.typegarage=="Garage clos et couvert")
            {
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(7) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-20.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(7) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-20.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(7) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-20.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span',el=>el.click())
        
            }
            else if(req.body.typegarage=="Terrain privé clos")
            {
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(7) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-20.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(7) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-20.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(7) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-20.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span',el=>el.click())
            }
            else
            {
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(7) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-20.ui-md-8 > p-selectbutton-devis > div > div:nth-child(3) > span')
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(7) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-20.ui-md-8 > p-selectbutton-devis > div > div:nth-child(3) > span')
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(7) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-20.ui-md-8 > p-selectbutton-devis > div > div:nth-child(3) > span',el=>el.click())
            }

            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(8) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-21.ui-md-8 > div > p-autocomplete > span > input');
            await page1.focus('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(8) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-21.ui-md-8 > div > p-autocomplete > span > input')
            await page1.keyboard.type(req.body.code_postal);
            await page1.waitForResponse(async(response) => {
                if(response.url().startsWith('https://www.fma.fr/api/DevisSpa/ChargeVilles')&& response.status() === 200)
                    {
                        return await response;
                    }
               });
            await page1.keyboard.press('Enter');
            if(req.body.motoUse=="Vie privée + trajets domicile-lieu de travail ")
            {
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(9) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-23.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(9) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-23.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(9) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-23.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span',el=>el.click())
            }
            else if(req.body.motoUse=="Professionnel (avec véhicule privé)")
            {
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(9) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-23.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(9) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-23.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(9) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-23.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span',el=>el.click())
            
            }
            else {
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(9) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-23.ui-md-8 > p-selectbutton-devis > div > div:nth-child(3) > span')
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(9) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-23.ui-md-8 > p-selectbutton-devis > div > div:nth-child(3) > span')
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(9) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-23.ui-md-8 > p-selectbutton-devis > div > div:nth-child(3) > span',el=>el.click())
            
            }
            if(req.body.griscard=="Le titulaire, le conjoint, un parent")
            {
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(10) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-24.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(10) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-24.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(10) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-24.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span',el=>el.click())
          }
          else {
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(10) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-24.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(10) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-24.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(10) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-24.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span',el=>el.click())
          
          }
          await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(11) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-25.ui-md-8 > input');
            await page1.focus('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(11) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-25.ui-md-8 > input')
            await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieVehicule.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(11) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-25.ui-md-8 > input', (el,value) => el.value = value,req.body.date_effect);
            await page1.keyboard.press('Enter');
            if(req.body.civilite=="Madame")
            {
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-26.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-26.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-26.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span',el=>el.click())
          
            }
            else if(req.body.civilite=="Mademoiselle")
            {
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-26.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-26.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-26.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span',el=>el.click())
          
            }
            else
            {
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-26.ui-md-8 > p-selectbutton-devis > div > div:nth-child(3) > span')
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-26.ui-md-8 > p-selectbutton-devis > div > div:nth-child(3) > span')
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-26.ui-md-8 > p-selectbutton-devis > div > div:nth-child(3) > span',el=>el.click())
          
            }
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-27.ui-md-8 > input');
            await page1.focus('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-27.ui-md-8 > input')
            await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-27.ui-md-8 > input', (el,value) => el.value = value,req.body.BirthDate);
            await page1.keyboard.press('Enter');
            if(req.body.havepermis=="true")
            {
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(3) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-28.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(3) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-28.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(3) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-28.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span',el=>el.click())
              switch (req.body.permis) {
                case "BSR option cyclomoteur ":
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(1) > span')
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(1) > span')
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(1) > span',el=>el.click())
                  break;
                case "BSR option quadricyle léger":
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(2) > span')
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(2) > span')
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(2) > span',el=>el.click())
                  break;
                case "Permis AM option cyclomoteur ":
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(3) > span')
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(3) > span')
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(3) > span',el=>el.click())
                  break;
                case "Permis AM option quadricyle léger":
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(4) > span')
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(4) > span')
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(4) > span',el=>el.click())
                  break;
                case "Permis A":
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(5) > span')
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(5) > span')
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(5) > span',el=>el.click())
                  break;
                case "Permis A2":
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(6) > span')
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(6) > span')
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(6) > span',el=>el.click())
                  break;
                case "Permis A1 / AL / B1 ":
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(7) > span')
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(7) > span')
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(7) > span',el=>el.click())
                  break;
                default:
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(8) > span')
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(8) > span')
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(4) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-29.ui-md-8 > p-selectbutton-devis > div  > div:nth-child(8) > span',el=>el.click())
                  break;
              }
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(5) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-30.ui-md-8 > input');
            await page1.focus('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(5) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-30.ui-md-8 > input')
            await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(5) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-30.ui-md-8 > input', (el,value) => el.value = value,req.body.permiDate);
            await page1.keyboard.press('Enter');
            }
            else{
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(3) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-28.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(3) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-28.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieConducteur.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(3) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-28.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span',el=>el.click())
            }
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieExperience.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-31.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieExperience.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-31.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieExperience.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-31.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span',el=>el.click())
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieSinistres.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-36.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieSinistres.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-36.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieSinistres.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-36.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span',el=>el.click())
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieAntecedent.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-38.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieAntecedent.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-38.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieAntecedent.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-38.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span',el=>el.click())
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieAntecedent.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-39.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieAntecedent.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-39.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.etape.partieAntecedent.ng-tns-c146-0.actif > div.devis-form-group.ng-tns-c146-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-39.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span',el=>el.click())
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.validationPart.ng-tns-c146-0 > button > span');
                let isDisabled = await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.validationPart.ng-tns-c146-0 > button', (button) => {
                  return button.disabled;
                });
                while(isDisabled==true)
                {
                  isDisabled = await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.validationPart.ng-tns-c146-0 > button', (button) => {
                      return button.disabled;
                    });
                }
                await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.validationPart.ng-tns-c146-0 > button > span');
                await page1.click('#ContentPlaceHolder_DivTunnel > devis-cyclo > form > div > div.ui-g-12.validationPart.ng-tns-c146-0 > button > span')
                  var res1="";
                  await page1.waitForResponse(async(response) => {
                      if(response.url().startsWith('https://www.fma.fr/api/DevisCycloSpa/AppelTarification')&& response.status() === 200)
                          {
                              res1=await response.json()
                              return await response.headers;
                          }
                     });
                     var resulats={};
            var index=0;
            for(i=0;i<res1.offres.length;i++)
            {
                        if(res1.offres[i].cotisationMensuelle!="-1")
                        {
                          var  ch={};
                          ch['name']="FMA : "+res1.offres[i].libelle
                          ch['image']='https://www.fma.fr/App_Themes/FMAv2/images/logo-fma-assurances.png'
                          ch['prix']=res1.offres[i].cotisationMensuelle+' € '
                          resulats[ch.name]=ch;
                          index++;
                        }
                
            }
            await browser.close();
            resolve(resulats);} catch (error) {
              await browser.close();
              resolve([])
            }
        })();
      
      });
        }
function getOffresProtectionJuridique(req) {
    return new Promise((resolve, reject) => {
      (async () => {
        const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
});try{
        const page1 = await browser.newPage();
        try {
            const jsonString = await cookkie.find({ NomSite:'FMA' })
                const customer = JSON.parse(jsonString[0].ValueCookie);
            await page1.setCookie(...customer);
            
          } catch (err) {
            console.log(err);
            return;
          }
        page1.goto('https://www.fma.fr/Devis/DevisPj.aspx',{waitUntil: 'domcontentloaded'})
        var res1="";
            await page1.waitForResponse(async(response) => {
                if(response.url().startsWith('https://www.fma.fr/api/DevisPjSpa/AppelTarification')&& response.status() === 200)
                    {
                        res1=await response.json()
                        return await response.headers;
                    }
               });
               var ch={}
            ch['name']="FMA Assurances";
            ch['date']=req.body.date_effect;
            ch["image"]='https://www.fma.fr/App_Themes/FMAv2/images/logo-fma-assurances.png';
            ch['Formule']="Formule "+res1.offres[0].cotisationMensuelle+"  €";
            var resulats={};
            resulats[ch['name']+0]=ch
        
        await browser.close();resolve(resulats);

  } catch (error) {
    await browser.close();
    resolve([])
  }
    })();
  });
    }
function getOffresAnimal(req) {
    return new Promise((resolve, reject) => {
      (async () => {
        const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
});try{
            const page1 = await browser.newPage();
            try {
                const jsonString = await cookkie.find({ NomSite:'FMA' })
                const customer = JSON.parse(jsonString[0].ValueCookie);
                await page1.setCookie(...customer);
              } catch (err) {
                console.log(err);
                return;
              }
            await page1.goto('https://www.fma.fr/Devis/DevisAnimaux.aspx#/',{waitUntil: 'domcontentloaded'})
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.etape.partieHabitation.ng-tns-c119-0.actif > div.devis-form-group.ng-tns-c119-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-2.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span');
            await page1.click('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.etape.partieHabitation.ng-tns-c119-0.actif > div.devis-form-group.ng-tns-c119-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-2.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
            await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.etape.partieHabitation.ng-tns-c119-0.actif > div.devis-form-group.ng-tns-c119-0.ng-trigger.ng-trigger-expandCollapse.ng-star-inserted > div > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-2.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span',(el) => el.click())
            if(req.body.animalType=="Chien")
            {
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.etape.partieHabitation.ng-tns-c119-0.actif > div:nth-child(3) > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-3.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span');
              await page1.click('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.etape.partieHabitation.ng-tns-c119-0.actif > div:nth-child(3) > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-3.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span')
              await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.etape.partieHabitation.ng-tns-c119-0.actif > div:nth-child(3) > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-3.ui-md-8 > p-selectbutton-devis > div > div:nth-child(1) > span',(el) => el.click())
            }
            if(req.body.animalType=="Chat")
            {
              await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.etape.partieHabitation.ng-tns-c119-0.actif > div:nth-child(3) > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-3.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span');
            await page1.click('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.etape.partieHabitation.ng-tns-c119-0.actif > div:nth-child(3) > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-3.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span')
            await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.etape.partieHabitation.ng-tns-c119-0.actif > div:nth-child(3) > div:nth-child(1) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-3.ui-md-8 > p-selectbutton-devis > div > div:nth-child(2) > span',(el) => el.click())
            
            }
            await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.etape.partieHabitation.ng-tns-c119-0.actif > div:nth-child(3) > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-4.ui-md-8 > input')
                  await page1.focus('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.etape.partieHabitation.ng-tns-c119-0.actif > div:nth-child(3) > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-4.ui-md-8 > input');
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.etape.partieHabitation.ng-tns-c119-0.actif > div:nth-child(3) > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-4.ui-md-8 > input');
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.etape.partieHabitation.ng-tns-c119-0.actif > div:nth-child(3) > div:nth-child(2) > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-4.ui-md-8 > input',(el,value) => el.value= value, req.body.dateanimal);
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.etape.partieHabitation.ng-tns-c119-0.actif > div:nth-child(4) > div > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-5.ui-md-8 > input')
                  await page1.focus('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.etape.partieHabitation.ng-tns-c119-0.actif > div:nth-child(4) > div > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-5.ui-md-8 > input');
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.etape.partieHabitation.ng-tns-c119-0.actif > div:nth-child(4) > div > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-5.ui-md-8 > input');
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.etape.partieHabitation.ng-tns-c119-0.actif > div:nth-child(4) > div > input-devis > div > div.valeurDevis.ui-g-12.ng-tns-c28-5.ui-md-8 > input',(el,value) => el.value= value, req.body.date_effect);
                  var res1="";
                  let isDisabled = await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.validationPart.ng-tns-c119-0 > button', (button) => {
                    return button.disabled;
                  });
                  while(isDisabled==true)
                  {
                    isDisabled = await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.validationPart.ng-tns-c119-0 > button', (button) => {
                        return button.disabled;
                      });
                  }
                  await page1.waitForSelector('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.validationPart.ng-tns-c119-0 > button > span');
                  await page1.click('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.validationPart.ng-tns-c119-0 > button > span')
                  await page1.$eval('#ContentPlaceHolder_DivTunnel > devis-animaux > form > div > div.ui-g-12.validationPart.ng-tns-c119-0 > button > span',(el) => el.click())
                  await page1.waitForResponse(async(response) => {
                      if(response.url().startsWith('https://www.fma.fr/api/DevisAnimauxSpa/AppelTarification')&& response.status() === 200)
                          {
                              res1=await response.json()
                              return await response.headers;
                          }
                     });
                     
                     var resulats={};
                     var index=0;
                     var  ch={};
                             ch['name']="FMA"
                             var form={}
                             ch['date']=req.body.date_effect
                             ch['image']='https://www.fma.fr/App_Themes/FMAv2/images/logo-fma-assurances.png'
                             var form = [];
                     for(i=0;i<res1.offres.length;i++)
                     {
                       form.push(res1.offres[i].libelle+" : "+res1.offres[i].cotisationMensuelle+' € ')
                     }
                     ch['Formule']=form
                             resulats[ch.name]=ch;
                             index++;
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
    getOffresSante,
    getOffresPrevoyance,
    getOffresProtectionJuridique,
    getOffresAnimal,
    getMoto
}