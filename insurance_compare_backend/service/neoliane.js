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
      const page = await browser.newPage();
      try {
        const jsonString = await cookkie.find({ NomSite:'neoliane' })
        const customer = JSON.parse(jsonString[0].ValueCookie);
        await page.setCookie(...customer);
      } catch (err) {
        console.log(err);
        return;
      }
      await page.goto('https://extranet.neoliane.fr/pricing',{waitUntil: 'domcontentloaded'});
      await page.waitForSelector('input[name=type_pricing]');
      await page.$eval('input[name=type_pricing]', el => el.value = 'sante');
      await page.waitForSelector('input[name=pricing_zipcode]');
      await page.$eval('input[name=pricing_zipcode]', (el,value) => el.value= value,req.body.code_postal);
      await page.waitForSelector('input[name=pricing_effectdate]');
      await page.$eval('input[name=pricing_effectdate]', (el,value) => el.value= value, req.body.date_effect);
      await page.waitForSelector('input[name=pricing_birthyear_a1]');
      var date=req.body.date.substring(req.body.date.lastIndexOf('/')+1,req.body.date.lastIndexOf('/')+5)
      await page.$eval('input[name=pricing_birthyear_a1]', (el,value) => el.value= value,date);
      await page.$eval('#pricing_regime_a1', (el,value) => el.value= value, req.body.regime);
      await page.click('.mdl-button.mdl-js-button.mdl-js-ripple-effect.mdl-button--raised.mdl-button--colored.x-margin--half-left')
      await page.waitForSelector('#jsDisplayFilter');
      await page.click('#jsDisplayFilter')
      await page.waitForSelector('#js_filter_comparator_filter_hospi');
      await page.$eval('#js_filter_comparator_filter_hospi', (el,value) => el.value= value, req.body.hospi);
      await page.$eval('#js_filter_comparator_filter_optic', (el,value) => el.value= value, req.body.optic);
      await page.$eval('#js_filter_comparator_filter_dentaire', (el,value) => el.value= value, req.body.dentaire);
      await page.$eval('#js_filter_comparator_filter_consultation', (el,value) => el.value= value, req.body.consultation);
      await page.waitForSelector('body > div.jconfirm.jconfirm-neoliane-theme.jconfirm-open > div.jconfirm-scrollpane > div > div > div > div > div > div > div > div.jconfirm-buttons > button')
      await page.click('body > div.jconfirm.jconfirm-neoliane-theme.jconfirm-open > div.jconfirm-scrollpane > div > div > div > div > div > div > div > div.jconfirm-buttons > button')
      await page.$eval('body > div.jconfirm.jconfirm-neoliane-theme.jconfirm-open > div.jconfirm-scrollpane > div > div > div > div > div > div > div > div.jconfirm-buttons > button', (el) => el.click())
      await page.waitForSelector('#js_page_max')
      var nbrePage=await page.$eval('#js_page_max', el => el.innerHTML);
      var resulats={};
      var index=0;
      for(h=0;h<nbrePage;h++)
      {
        
        await page.waitForSelector('#jsComparator ')
        
        let result = await page.$$eval('div.mdl-color--white.x-margin--half-left.x-margin--half-right.x-comparator--formula', names => names.map(name =>
        { 
          var list=name.getElementsByTagName('span')
          var ch={};
          for(var i=0;i<list.length;i++)
          {
            if(list[i].className=="jsFormulaName x-help--cursor")
            ch["name"]=list[i].innerHTML;
            if(list[i].className=="jsFormulaPrice")
            ch["prix"]=list[i].innerHTML;
          }
          var list=name.getElementsByTagName('div')
          for(var i=0;i<list.length;i++)
          {
            
            if(list[i].getAttribute('data-id-garantie')=="109")
            ch["Hospitalisation"]=list[i].innerHTML;
            if(list[i].getAttribute('data-id-garantie')=="110")
            ch["Dentaire"]=list[i].innerHTML;
            if(list[i].getAttribute('data-id-garantie')=="111")
            ch["Optique"]=list[i].innerHTML;
            if(list[i].getAttribute('data-id-garantie')=="112")
            ch["Honoraires"]=list[i].innerHTML;
            if(list[i].getAttribute('data-id-garantie')=="316")
            ch["Frais"]=list[i].innerHTML;
            if(list[i].className=="x-comparator--formula-logo_row")
            {
              var image=list[i].innerHTML;
              const indexOfFirst = image.indexOf("(");
              const indexOfEnd = image.indexOf(")");
              ch["image"]=image.substring(indexOfFirst+1,indexOfEnd);
            }
          }
          if(ch!={})
            return ch;
        }));
        await page.waitForSelector('#jsComparator > div.mdl-color--white.x-margin--half-right.x-comparator--garantie > div.x-comparator--garantie-header.x-padding--base-right.x-padding--base-left.needs-activated > div.x-flex.x-flex--direction--column.x-comparator--pagination.x-margin--double-bottom > div > button:nth-child(3)')
        //await page.$eval('#jsComparator > div.mdl-color--white.x-margin--half-right.x-comparator--garantie > div.x-comparator--garantie-header.x-padding--base-right.x-padding--base-left.needs-activated > div.x-flex.x-flex--direction--column.x-comparator--pagination.x-margin--double-bottom > div > button:nth-child(3)', (el) => el.click())
        for(k=0;k<2;k++)
        {
          resulats[result[k].name]=result[k];
          index++;
        }
        await page.waitForTimeout(600)
        await page.$eval('#jsComparator > div.mdl-color--white.x-margin--half-right.x-comparator--garantie > div.x-comparator--garantie-header.x-padding--base-right.x-padding--base-left.needs-activated > div.x-flex.x-flex--direction--column.x-comparator--pagination.x-margin--double-bottom > div > button:nth-child(3)', (el) => el.click())
        //await page.waitForNetworkIdle({waitUntil: 'domcontentloaded'});
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
  function getOffresProtectionJuridique(req) {
    return new Promise((resolve, reject) => {
      
      (async () => {
        const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
});try{
            const page = await browser.newPage();
            try {
              const jsonString = await cookkie.find({ NomSite:'neoliane' })
              const customer = JSON.parse(jsonString[0].ValueCookie);
              await page.setCookie(...customer);
            } catch (err) {
              console.log(err);
              return;
            }
            await page.goto('https://extranet.neoliane.fr/pricing',{waitUntil: 'domcontentloaded'});
            await page.waitForSelector('input[name=type_pricing]');
            await page.$eval('input[name=type_pricing]', el => el.value = 'prev');
            await page.waitForSelector('input[name=pricing_zipcode]');
            await page.$eval('input[name=pricing_zipcode]', (el,value) => el.value= value,req.body.code_postal);
            await page.waitForSelector('input[name=pricing_effectdate]');
            await page.$eval('input[name=pricing_effectdate]', (el,value) => el.value= value, req.body.date_effect);
            await page.waitForSelector('input[name=pricing_birthyear_a1]');
            var date=req.body.date.substring(req.body.date.lastIndexOf('/')+1,req.body.date.lastIndexOf('/')+5)
            await page.$eval('input[name=pricing_birthyear_a1]', (el,value) => el.value= value, date);
            await page.$eval('#pricing_regime_a1', (el,value) => el.value= value, req.body.regime);
            await page.click('.mdl-button.mdl-js-button.mdl-js-ripple-effect.mdl-button--raised.mdl-button--colored.x-margin--half-left')
            await page.waitForResponse(
                (response) =>
                  response.url() === 'https://extranet.neoliane.fr/comparator/run' && response.status() === 200
              );
            await page.waitForSelector('#js_page_max');
            var nbrePage=await page.$eval('#js_page_max', el => el.innerHTML);
            var resulats={};
            let result;
            let id;
            for(h=0;h<nbrePage;h++)
            {
              await page.waitForSelector('div.mdl-color--white.x-margin--half-left.x-margin--half-right.x-comparator--formula');
            result = await page.$$eval('div.mdl-color--white.x-margin--half-left.x-margin--half-right.x-comparator--formula', names => names.map(name =>
              { 
                
                var list=name.getElementsByTagName('span')
                for(var i=0;i<list.length ;i++)
                {
                  if(list[i].className=="x-help--cursor")
                  {
                    if(list[i].innerHTML=="Neoliane Protection Juridique")
                    {
                      return list[i].id.replace('formulaGammeFormule', '').toString();
                    }
                  }
                }
              }));
              if(result[0]!=null )
                {
                    id=result[0];
                    break;
                }
                if(result[1]!=null )
                {
                    id=result[1];
                    break;
                }
                
                await page.waitForSelector('#jsComparator > div.mdl-color--white.x-margin--half-right.x-comparator--garantie > div > div.x-flex.x-flex--direction--column.x-comparator--pagination.x-margin--double-bottom > div > button:nth-child(3)');
              await page.click('#jsComparator > div.mdl-color--white.x-margin--half-right.x-comparator--garantie > div > div.x-flex.x-flex--direction--column.x-comparator--pagination.x-margin--double-bottom > div > button:nth-child(3)');
              await page.waitForResponse(
                (response) =>
                  response.url() === 'https://extranet.neoliane.fr/comparator/run' && response.status() === 200
              );
            }
            await page.waitForSelector('#formulaGammeFormule'+id);
            var nom =await page.$eval('#formulaGammeFormule'+id, el => el.innerHTML);
            await page.waitForSelector('#effectDateFor_'+id);
            var date=await page.$eval('#effectDateFor_'+id, el => el.innerHTML);
            await page.waitForSelector('#productId_'+id+' > div:nth-child(2) > img');
            var image=await page.$eval('#productId_'+id+' > div:nth-child(2) > img', el => el.src);
            date=date.substring(date.indexOf("au ")+3,date.indexOf("                    <i"));

            await page.waitForSelector('#addToCartGamme'+id);
            await page.click('#addToCartGamme'+id);
            await page.waitForSelector('#select_a1 option')
            const tipusArray = await page.evaluate(() => Array.from(document.querySelectorAll('#select_a1 option')).map(element=>element.innerHTML.replaceAll('&nbsp;', ' ')));
            var index=0
            for(i=0;i<tipusArray.length;i++)
            {
                var ch={};
                ch['name']=nom;
                ch['date']=date;
                ch["image"]=image;
                ch['Formule']=tipusArray[i];
                resulats[nom+index]=ch;
                index++
            }
        await browser.close();
        resolve(resulats);;

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
});try{
        const page = await browser.newPage();
        try {
          const jsonString = await cookkie.find({ NomSite:'neoliane' })
          const customer = JSON.parse(jsonString[0].ValueCookie);
          await page.setCookie(...customer);
        } catch (err) {
          console.log(err);
          return;
        }
        await page.goto('https://extranet.neoliane.fr/pricing',{waitUntil: 'domcontentloaded'});
        await page.waitForSelector('input[name=type_pricing]');
        await page.$eval('input[name=type_pricing]', el => el.value = 'prev');
        await page.waitForSelector('input[name=pricing_zipcode]');
        await page.$eval('input[name=pricing_zipcode]', (el,value) => el.value= value,req.body.code_postal);
        await page.waitForSelector('input[name=pricing_effectdate]');
        await page.$eval('input[name=pricing_effectdate]', (el,value) => el.value= value, req.body.date_effect);
        await page.waitForSelector('input[name=pricing_birthyear_a1]');
        var date=req.body.date.substring(req.body.date.lastIndexOf('/')+1,req.body.date.lastIndexOf('/')+5)
        await page.$eval('input[name=pricing_birthyear_a1]', (el,value) => el.value= value, date);
        await page.$eval('#pricing_regime_a1', (el,value) => el.value= value, req.body.regime);
        await page.click('.mdl-button.mdl-js-button.mdl-js-ripple-effect.mdl-button--raised.mdl-button--colored.x-margin--half-left')
        await page.waitForResponse(
            (response) =>
              response.url() === 'https://extranet.neoliane.fr/comparator/run' && response.status() === 200
          );
        await page.waitForSelector('#js_page_max');
        var nbrePage=await page.$eval('#js_page_max', el => el.innerHTML);
        var resulats={};
        var id;
        for(h=0;h<nbrePage;h++)
        { 
                await page.waitForSelector('#jsComparator > div.mdl-color--white.x-margin--half-right.x-comparator--garantie > div > div.x-flex.x-flex--direction--column.x-comparator--pagination.x-margin--double-bottom > div > button:nth-child(3)');
              await page.waitForSelector('div.mdl-color--white.x-margin--half-left.x-margin--half-right.x-comparator--formula')
        const result = await page.$$eval('div.mdl-color--white.x-margin--half-left.x-margin--half-right.x-comparator--formula', names => names.map(name =>
          { 
            var list=name.getElementsByTagName('span')
            for(var i=0;i<list.length ;i++)
            {
              if(list[i].className=="x-help--cursor")
              {
                  if("Neoliane Protection Juridique"!=list[i].innerHTML && "Néoliane Chiens&amp;chats"!=list[i].innerHTML)
                return list[i].id.replace('formulaGammeFormule', '').toString();
              }
            }
          }));
          for(j=0;j<result.length;j++)
          {
              if(result[j]!=null)
                {
                  try{
                  id=result[j];
                  await page.waitForSelector('#formulaGammeFormule'+id)
                  var nom =await page.$eval('#formulaGammeFormule'+id, el => el.innerHTML);
                  await page.waitForSelector('#effectDateFor_'+id)
                  var date=await page.$eval('#effectDateFor_'+id, el => el.innerHTML);
                  await page.waitForSelector('#productId_'+id)
                  var image=await page.$eval('#productId_'+id+' > div:nth-child(2) > img', el => el.src);
                  date=date.substring(date.indexOf("au ")+3,date.indexOf("                    <i"));
                  await page.waitForSelector('#addToCartGamme'+id)
                  await page.click('#addToCartGamme'+id);
                  await page.waitForSelector('#select_a1')
                  const tipusArray = await page.evaluate(() => Array.from(document.querySelectorAll('#select_a1 option')).map(element=>element.innerHTML.replaceAll('&nbsp;', ' ')));
                let ch={};
                    ch['name']=nom;
                    ch['date']=date;
                    ch["image"]=image;
                    ch['Formule']=tipusArray;
                    resulats[nom]=ch;
                await page.click('body > div.jconfirm.jconfirm-neoliane-theme.jconfirm-open > div.jconfirm-scrollpane > div > div > div > div > div > div > div > div.jconfirm-buttons > button:nth-child(1)')
                await page.waitForSelector('#jsComparator ')
              }
              catch (e)
              {
              }
            }
            
            }
            await page.waitForSelector('#jsComparator > div.mdl-color--white.x-margin--half-right.x-comparator--garantie > div > div.x-flex.x-flex--direction--column.x-comparator--pagination.x-margin--double-bottom > div > button:nth-child(3)');
            try{
                await page.$eval('#jsComparator > div.mdl-color--white.x-margin--half-right.x-comparator--garantie > div > div.x-flex.x-flex--direction--column.x-comparator--pagination.x-margin--double-bottom > div > button:nth-child(3)',(el)=>el.click());
        }
            catch(e)
            {await page.click('#jsComparator > div.mdl-color--white.x-margin--half-right.x-comparator--garantie > div > div.x-flex.x-flex--direction--column.x-comparator--pagination.x-margin--double-bottom > div > button:nth-child(3)');
        }
        if(nbrePage-1>h)
        await page.waitForResponse(
              (response) =>
                response.url() === 'https://extranet.neoliane.fr/comparator/run' && response.status() === 200
            );}
            await browser.close();
        resolve(resulats);
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
        const page = await browser.newPage();
        try {
          const jsonString = await cookkie.find({ NomSite:'neoliane' })
          const customer = JSON.parse(jsonString[0].ValueCookie);
          await page.setCookie(...customer);
        } catch (err) {
          console.log(err);
          return;
        }
        await page.goto('https://extranet.neoliane.fr/pricing',{waitUntil: 'domcontentloaded'});
        
        await page.waitForSelector('input[name=type_pricing]');
        await page.$eval('input[name=type_pricing]', el => el.value = 'prev');
        await page.waitForSelector('input[name=pricing_zipcode]');
        await page.$eval('input[name=pricing_zipcode]', (el,value) => el.value= value,req.body.code_postal);
        await page.waitForSelector('input[name=pricing_effectdate]');
        await page.$eval('input[name=pricing_effectdate]', (el,value) => el.value= value, req.body.date_effect);
        await page.waitForSelector('input[name=pricing_birthyear_a1]');
        var date=req.body.date.substring(req.body.date.lastIndexOf('/')+1,req.body.date.lastIndexOf('/')+5)
        await page.$eval('input[name=pricing_birthyear_a1]', (el,value) => el.value= value, date);
        await page.$eval('#pricing_regime_a1', (el,value) => el.value= value, req.body.regime);
        await page.click('.mdl-button.mdl-js-button.mdl-js-ripple-effect.mdl-button--raised.mdl-button--colored.x-margin--half-left')
        
      await page.waitForResponse(async(response) => {
        if(response.url().startsWith('https://extranet.neoliane.fr/comparator/run')&& response.status() === 200)
        {
          return await response.headers;
        }
      });
      
      await page.waitForSelector('#js_page_max')
      
      var nbrePage=await page.$eval('#js_page_max', el => el.innerHTML);
      var resulats={};
      let result;
      let id;
      for(h=0;h<nbrePage;h++)
      {
        await page.waitForSelector('div.mdl-color--white.x-margin--half-left.x-margin--half-right.x-comparator--formula');
        result = await page.$$eval('div.mdl-color--white.x-margin--half-left.x-margin--half-right.x-comparator--formula', names => names.map(name =>
          { 
            var list=name.getElementsByTagName('span')
                for(var i=0;i<list.length ;i++)
                {
                  if(list[i].className=="x-help--cursor")
                  {
                    if(list[i].innerHTML.indexOf("Chiens&amp;chats")>-1)
                    {
                      return list[i].id.replace('formulaGammeFormule', '').toString();
                    }
                  }
                }
          }
          )
          )
          for(j=0;j<result.length;j++)
          {
            if(result[j]!=null)
            {
              id=result[j]
            }
          }
          if(nbrePage-h>1 && id==null)
          {
            await page.waitForSelector('#jsComparator > div.mdl-color--white.x-margin--half-right.x-comparator--garantie > div > div.x-flex.x-flex--direction--column.x-comparator--pagination.x-margin--double-bottom > div > button:nth-child(3)')
            await page.click('#jsComparator > div.mdl-color--white.x-margin--half-right.x-comparator--garantie > div > div.x-flex.x-flex--direction--column.x-comparator--pagination.x-margin--double-bottom > div > button:nth-child(3)')
            await page.waitForResponse(async(response) => {
              if(response.url().startsWith('https://extranet.neoliane.fr/comparator/run')&& response.status() === 200)
              {
                return await response.headers;
              }
            });
            
          }
          else
          {
            break;
          }
        }
        await page.waitForSelector('#addToCartGamme'+id)
        await page.click('#addToCartGamme'+id)
        await page.waitForSelector('#pet1_birthdate')
        await page.$eval('#pet1_birthdate', (el,value) => el.value= value, req.body.dateanimal);
        const tipusArray = await page.evaluate(() =>
        Array.from(document.querySelectorAll('#select_formula_pet1 option')).map(element=>element.value)
        );
        var ArrayList = await page.evaluate(() =>
        Array.from(document.querySelectorAll('#select_formula_pet1 option')).map(element=>element.innerHTML)
        );
        for(i=0;i<tipusArray.length;i++)
        {
          if(tipusArray[i]!='')
          {
            while(ArrayList[i].indexOf('€')==-1)
            {
              await page.select('#select_formula_pet1', tipusArray[i]);
              await page.click('#jsGetPetPrices')
              ArrayList = await page.evaluate(() =>
              Array.from(document.querySelectorAll('#select_formula_pet1 option')).map(element=>element.innerHTML)
            );
            }
          }
        }
        if(req.body.animalType=="Chat")
        {
          await page.waitForSelector('#pricingForm > div > div:nth-child(2) > div > label.mdl-radio.mdl-js-radio.mdl-js-ripple-effect.x-margin--base-right.x-margin--base-left.mdl-js-ripple-effect--ignore-events.is-checked.is-upgraded > span.mdl-radio__ripple-container.mdl-js-ripple-effect.mdl-ripple--center')
          await page.click('#pricingForm > div > div:nth-child(2) > div > label.mdl-radio.mdl-js-radio.mdl-js-ripple-effect.x-margin--base-right.x-margin--base-left.mdl-js-ripple-effect--ignore-events.is-checked.is-upgraded > span.mdl-radio__ripple-container.mdl-js-ripple-effect.mdl-ripple--center')
          const tipusArray1= await page.evaluate(() =>
        Array.from(document.querySelectorAll('#select_formula_pet1 option')).map(element=>element.innerHTML)
        );
        var form=[]
        for(i=0;i<tipusArray1.length;i++)
        {
          if(tipusArray1[i].indexOf('€')>-1)
          {
            form.push(tipusArray1[i])
          }
        }
        var  ch={};
        var index=0
        ch['name']=await page.$eval('#pricingForm > div > div.mdl-cell.mdl-cell--12-col.mdl-typography--text-center > div', el => el.innerHTML);
        ch['date']=req.body.date_effect
        ch['image']=await page.$eval('#pricingForm > div > div.mdl-cell.mdl-cell--12-col.mdl-typography--text-center > img', el => el.src);
        ch['Formule']=form
        resulats[ch.name]=ch;
        index++;
        
        }
        else if(req.body.animalType=="Chien")
        {
          await page.waitForSelector('#pricingForm > div > div:nth-child(2) > div > label:nth-child(2) > span.mdl-radio__ripple-container.mdl-js-ripple-effect.mdl-ripple--center')
          await page.click('#pricingForm > div > div:nth-child(2) > div > label:nth-child(2) > span.mdl-radio__ripple-container.mdl-js-ripple-effect.mdl-ripple--center')
          await page.waitForTimeout(600)
          const tipusArray1= await page.evaluate(() =>
        Array.from(document.querySelectorAll('#select_formula_pet1 option')).map(element=>element.innerHTML)
        );
        var form=[]
        for(i=0;i<tipusArray1.length;i++)
        {
          if(tipusArray1[i].indexOf('€')>-1)
          {
            form.push(tipusArray1[i])
          }
        }
        var  ch={};
        var index=0
        ch['name']="Néoliane Chiens Chats"
        ch['date']=req.body.date_effect
        ch['image']=await page.$eval('#pricingForm > div > div.mdl-cell.mdl-cell--12-col.mdl-typography--text-center > img', el => el.src);
        ch['Formule']=form
        resulats[ch.name]=ch;
        index++;
        }
        await browser.close();resolve(resulats);

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
      getOffresAnimal
  }