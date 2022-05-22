const puppeteer = require('puppeteer');
const cookkie = require("../models/cookkie")
function getOffresPrevoyance(req) {
    return new Promise((resolve, reject) => {
        (async () => {
          const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
})
try{
            const page = await browser.newPage();
            await page.setUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1");
            await page.goto('https://courtier.wazari.fr/#/login',{waitUntil: 'domcontentloaded'})
            await page.waitForSelector('#wz-text-input-0 > input');
            await page.focus('#wz-text-input-0 > input');
            await page.keyboard.type('gestionsbh2@gmail.com');
            await page.waitForSelector('#wz-text-input-1 > input');
            await page.focus('#wz-text-input-1 > input');
            await page.keyboard.type('Yassine0906');
            await page.click( 'body > wz-app-broker > div > div.content > wz-app-page-login > div > div > div.col-md-6.login-block > form > wz-rect-button > div > button');
            try{
                await page.waitForNavigation({waitUntil: 'domcontentloaded'});
            }
            catch(e){
                await page.waitForTimeout(50)
            }
                await page.goto('https://courtier.wazari.fr/#/app/rop/profile',{waitUntil: 'domcontentloaded'})
                await page.waitForSelector('#formly_11_radio_saleType_0_2',{visible: true});
                await page.click('#formly_11_radio_saleType_0_2');
                await page.$eval('#formly_11_radio_saleType_0_2', (el) => el.click());
                await page.focus('#cdk-accordion-child-1 > div > div > div > formly-group > formly-field > wz-date-field > mat-form-field > div > div.mat-form-field-flex > div > wz-date-input > input');
                await page.keyboard.type(req.body.date);
                await page.waitForSelector('#formly_47_radio_isSelected_0_0');
                await page.click('#formly_47_radio_isSelected_0_0');
                await page.$eval('#formly_47_radio_isSelected_0_0', (el) => el.click());
                await page.waitForSelector('#formly_48_radio_isSelected_0_0');
                await page.click('#formly_48_radio_isSelected_0_0');
                await page.$eval('#formly_48_radio_isSelected_0_0', (el) => el.click());
                await page.waitForSelector('#formly_49_radio_isSelected_0_0');
                await page.click('#formly_49_radio_isSelected_0_0');
                await page.$eval('#formly_49_radio_isSelected_0_0', (el) => el.click());
                await page.waitForSelector('#formly_50_radio_isSelected_0_0');
                await page.click('#formly_50_radio_isSelected_0_0');
                await page.$eval('#formly_50_radio_isSelected_0_0', (el) => el.click());
                await page.waitForSelector('#formly_51_radio_isSelected_0_0');
                await page.click('#formly_51_radio_isSelected_0_0');
                await page.$eval('#formly_51_radio_isSelected_0_0', (el) => el.click());
                const date=await page.$eval('#cdk-accordion-child-4 > div > div > div > formly-group > formly-field:nth-child(1) > wz-button-picker-field > div > wz-button-picker > button:nth-child(1) > span', (el) => el.innerHTML)
                console.log(date==req.body.date_effect)
                await page.waitForSelector('#cdk-accordion-child-4 > div > div > div > formly-group > formly-field:nth-child(1) > wz-button-picker-field > div > wz-button-picker > button:nth-child(1)');
                await page.click('#cdk-accordion-child-4 > div > div > div > formly-group > formly-field:nth-child(1) > wz-button-picker-field > div > wz-button-picker > button:nth-child(1)');
                await page.$eval('#cdk-accordion-child-4 > div > div > div > formly-group > formly-field:nth-child(1) > wz-button-picker-field > div > wz-button-picker > button:nth-child(1)', (el) => el.click());
                await page.waitForSelector('#cdk-accordion-child-4 > div > div > div > formly-group > formly-field:nth-child(3) > wz-button-picker-field > div > wz-button-picker > button:nth-child(1)');
                await page.click('#cdk-accordion-child-4 > div > div > div > formly-group > formly-field:nth-child(3) > wz-button-picker-field > div > wz-button-picker > button:nth-child(1)');
                await page.$eval('#cdk-accordion-child-4 > div > div > div > formly-group > formly-field:nth-child(3) > wz-button-picker-field > div > wz-button-picker > button:nth-child(1)', (el) => el.click());
                await page.waitForSelector('body > wz-app-broker > div > div.content > wz-rop-pipeline > div > wz-rop-profile > div > div.left > form > div > button');
                await page.click('body > wz-app-broker > div > div.content > wz-rop-pipeline > div > wz-rop-profile > div > div.left > form > div > button');
                await page.$eval('body > wz-app-broker > div > div.content > wz-rop-pipeline > div > wz-rop-profile > div > div.left > form > div > button', (el) => el.click());
                var res1="";
                  await page.waitForResponse(async(response) => {
                      if(response.url().startsWith('https://api.wazari.fr/api/v1/rop/pricingDetail')&& response.status() === 200)
                          {
                              res1=await response.json()
                              return await response.headers;
                          }
                     });
                     var resulats={};
                     var ch={};
                      ch['name']="wazari";
                      ch['date']=await page.$eval('body > wz-app-broker > div > div.content > wz-rop-pipeline > div > wz-rop-pricing > div > div.right > wz-rop-recap-profile > div > div > div:nth-child(3) > span', (el) => el.innerHTML);
                      ch["image"]="https://va-chercher.com/api/images/wazari.png";
                      
                      var tipusArray=[]
                     for(j=0;j<res1.formulas.length;j++)
                    {
                        tipusArray.push(res1.formulas[j].formula+" : "+res1.formulas[j].price.monthly+" €")
                    }
                    await page.goBack();
                    await page.waitForSelector('#cdk-accordion-child-9 > div > div > div > formly-group > formly-field:nth-child(3) > wz-button-picker-field > div > wz-button-picker > button:nth-child(5)');
                await page.click('#cdk-accordion-child-9 > div > div > div > formly-group > formly-field:nth-child(3) > wz-button-picker-field > div > wz-button-picker > button:nth-child(5)');
                await page.$eval('#cdk-accordion-child-9 > div > div > div > formly-group > formly-field:nth-child(3) > wz-button-picker-field > div > wz-button-picker > button:nth-child(5)', (el) => el.click());
                    await page.waitForSelector('body > wz-app-broker > div > div.content > wz-rop-pipeline > div > wz-rop-profile > div > div.left > form > div > button');
                    await page.click('body > wz-app-broker > div > div.content > wz-rop-pipeline > div > wz-rop-profile > div > div.left > form > div > button');
                await page.$eval('body > wz-app-broker > div > div.content > wz-rop-pipeline > div > wz-rop-profile > div > div.left > form > div > button', (el) => el.click());
                var res1="";
                  await page.waitForResponse(async(response) => {
                      if(response.url().startsWith('https://api.wazari.fr/api/v1/rop/pricingDetail')&& response.status() === 200)
                          {
                              res1=await response.json()
                              return await response.headers;
                          }
                     });
                     for(j=0;j<res1.formulas.length;j++)
                    {
                      if(res1.formulas[j].formula>"303")
                       tipusArray.push(res1.formulas[j].formula+" : "+res1.formulas[j].price.monthly+" €")
                    }
                    ch['Formule']=tipusArray;
                    resulats[ch.name]=ch;
            await browser.close();
            resolve(resulats);

          } catch (error) {
            await browser.close();
            resolve([])
          }
        })();
      });
        }
    function getOffresSante(req) {
        return new Promise((resolve, reject) => {
            (async () => {
              var resulats={};
                const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
})
try{
                      const page = await browser.newPage();
                      await page.setUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1");
                      await page.goto('https://courtier.wazari.fr/#/login',{waitUntil: 'domcontentloaded'})
                      await page.waitForSelector('#wz-text-input-0 > input');
                      await page.focus('#wz-text-input-0 > input');
                      await page.keyboard.type('gestionsbh2@gmail.com');
                      await page.$eval( '#wz-text-input-0 > input', (form) => form.value="gestionsbh2@gmail.com" );
                      await page.waitForSelector('#wz-text-input-1 > input');
                      await page.focus('#wz-text-input-1 > input');
                      await page.keyboard.type('Yassine0906');
                      await page.$eval( '#wz-text-input-1 > input', (form) => form.value="Yassine0906" );
                      await page.click( 'body > wz-app-broker > div > div.content > wz-app-page-login > div > div > div.col-md-6.login-block > form > wz-rect-button > div > button');
                      try{
                          await page.waitForNavigation({waitUntil: 'domcontentloaded'});
                      }
                      catch(e){
                          await page.waitForTimeout(50)
                      }
                      if(getAge(req.body.date)>17)
                    {
                      await page.goto('https://courtier.wazari.fr/#/app/health-insurance/infinity/quotation',{waitUntil: 'domcontentloaded'})
                      await page.waitForSelector('#formly_6_radio_saleType_0_2-input',{visible: true});
                      await page.$eval('#formly_6_radio_saleType_0_2-input', (el) => el.click());
                      await page.focus('#formly_10_input_codePostal_0');
                      await page.keyboard.type(req.body.code_postal);
                    await page.keyboard.press('Enter');
                    await page.focus('#cdk-accordion-child-0 > div > div > div > wz-health-assure-form > form > mat-form-field.mat-form-field.ng-tns-c11-6.mat-primary.mat-form-field-type-wz-date-input.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-untouched.ng-pristine.ng-invalid > div > div.mat-form-field-flex > div > wz-date-input > input');
                     await page.keyboard.type(req.body.date);
                     await page.focus('#cdk-accordion-child-0 > div > div > div > wz-health-assure-form > form > mat-form-field.mat-form-field.ng-tns-c11-7.mat-primary.mat-form-field-type-wz-date-input.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-untouched.ng-pristine.ng-invalid > div > div.mat-form-field-flex > div > wz-date-input > input');
                     await page.keyboard.type(req.body.date_effect);
                     await page.click('#mat-button-toggle-1-button');
                     if(req.body.checked2==true)
                     {
                       await page.$eval('#mat-radio-17-input', form => form.click() );
                     }
                     else{
                       await page.$eval( '#mat-radio-16-input', form => form.click() );
                     }
                     await page.focus('#wz-text-input-5 > input');
                     await page.keyboard.type(req.body.salaire);
                     await page.$eval( '#wz-text-input-5 > input', (form,value) => form.value=value, req.body.salaire);
                     await page.$eval( '#mat-radio-29-input', form => form.click() );
                     switch(req.body.hospi)
                     {
                        case "1":
                          await page.$eval( '#mat-radio-19-input', form => form.click() );
                          break;
                        case "2":
                          await page.$eval( '#mat-radio-20-input', form => form.click() );
                          break;
                        case "3":
                          await page.$eval( '#mat-radio-21-input', form => form.click() );
                          break;
                        case "4":
                          await page.$eval( '#mat-radio-22-input', form => form.click() );
                          break;
                     }
                     switch(req.body.consultation)
                     {
                        case "1":
                          await page.$eval( '#mat-radio-24-input', form => form.click() );
                          break;
                        case "2":
                          await page.$eval( '#mat-radio-25-input', form => form.click() );
                          break;
                        case "3":
                          await page.$eval( '#mat-radio-26-input', form => form.click() );
                          break;
                        case "4":
                          await page.$eval( '#mat-radio-27-input', form => form.click() );
                          break;
                     }
                     switch(req.body.dentaire)
                     {
                        case "1":
                          await page.$eval( '#mat-radio-34-input', form => form.click() );
                          break;
                        case "2":
                          await page.$eval( '#mat-radio-35-input', form => form.click() );
                          break;
                        case "3":
                          await page.$eval( '#mat-radio-36-input', form => form.click() );
                          break;
                        case "4":
                          await page.$eval( '#mat-radio-37-input', form => form.click() );
                          break;
                     }
                     switch(req.body.optic)
                     {
                        case "1":
                          await page.$eval( '#mat-radio-39-input', form => form.click() );
                          break;
                        case "2":
                          await page.$eval( '#mat-radio-40-input', form => form.click() );
                          break;
                        case "3":
                          await page.$eval( '#mat-radio-41-input', form => form.click() );
                          break;
                        case "4":
                          await page.$eval( '#mat-radio-42-input', form => form.click() );
                          break;
                     }
                     await page.$eval( 'body > wz-app-broker > div > div.content > wz-health-insurance-workflow > div > wz-health-insurance-quotation > div > div.left > button', form => form.click() );
                     var res1="";
                            await page.waitForResponse(async(response) => {
                                if(response.url().startsWith('https://api.wazari.fr/api/v1/health/healthquotations/pricingMetadatas')&& response.status() === 200)
                                    {
                                        res1=await response.json()
                                        return await response.headers;
                                    }
                               });
                               
                               var ch={};
                               var result = [];
                               var keys = Object.keys(res1.formulas);
                              keys.forEach(function(key){
                                result.push(res1.formulas[key]);
                              });
                               for(j=0;j<result.length;j++)
                              {
                                ch={}
                                  ch["prix"]=result[j].pricing.monthly+" €"
                                  ch['name']="wazari infinity : "+result[j].formula;
                                  ch['date']=req.body.date_effect;
                                  ch["image"]="https://va-chercher.com/api/images/wazari.png";
                                  resulats[ch.name+ch.prix]=ch;
                              }
                    }
                      if(getAge(req.body.date)>29)
                      {
                        await page.goto('https://courtier.wazari.fr/#/app/health-insurance/eco-plus/quotation',{waitUntil: 'domcontentloaded'})
                        await page.waitForSelector('body > wz-app-broker > div > div.content > wz-health-insurance-workflow > div > wz-health-insurance-quotation > wz-alert > wz-alert-actions > button.mat-raised-button.mat-button-base.mat-primary',{visible: true});
                        await page.$eval('body > wz-app-broker > div > div.content > wz-health-insurance-workflow > div > wz-health-insurance-quotation > wz-alert > wz-alert-actions > button.mat-raised-button.mat-button-base.mat-primary', (el) => el.click());
                        await page.$eval( '#mat-radio-85-input', form => form.click() );
                     await page.$eval( 'body > wz-app-broker > div > div.content > wz-health-insurance-workflow > div > wz-health-insurance-quotation > div > div.left > button', form => form.click() );
                     var res1="";
                     await page.waitForResponse(async(response) => {
                         if(response.url().startsWith('https://api.wazari.fr/api/v1/health/healthquotations/pricingMetadatas')&& response.status() === 200)
                             {
                                 res1=await response.json()
                                 return await response.headers;
                             }
                        });
                        
                        var ch={};
                        var result = [];
                        var keys = Object.keys(res1.formulas);
                       keys.forEach(function(key){
                         result.push(res1.formulas[key]);
                       });
                        for(j=0;j<result.length;j++)
                       {
                        ch={}
                           ch["prix"]=result[j].pricing.monthly+" €"
                           ch['name']="wazari eco plus : "+result[j].formula;
                           ch['date']=req.body.date_effect;
                           ch["image"]="https://va-chercher.com/api/images/wazari.png";
                           resulats[ch.name+ch.prix]=ch;
                       }
                    }
                    if(getAge(req.body.date)>49)
                      {
                        await page.goto('https://courtier.wazari.fr/#/app/health-insurance/fidelity/quotation',{waitUntil: 'domcontentloaded'})
                        await page.waitForSelector('body > wz-app-broker > div > div.content > wz-health-insurance-workflow > div > wz-health-insurance-quotation > wz-alert > wz-alert-actions > button.mat-raised-button.mat-button-base.mat-primary',{visible: true});
                        await page.$eval('body > wz-app-broker > div > div.content > wz-health-insurance-workflow > div > wz-health-insurance-quotation > wz-alert > wz-alert-actions > button.mat-raised-button.mat-button-base.mat-primary', (el) => el.click());
                        await page.$eval( '#mat-radio-131-input', form => form.click() );
                        await page.$eval( '#mat-radio-136-input', form => form.click() );
                        await page.$eval( 'body > wz-app-broker > div > div.content > wz-health-insurance-workflow > div > wz-health-insurance-quotation > div > div.left > button', form => form.click() );
                        var res1="";
                     await page.waitForResponse(async(response) => {
                         if(response.url().startsWith('https://api.wazari.fr/api/v1/health/healthquotations/pricingMetadatas')&& response.status() === 200)
                             {
                                 res1=await response.json()
                                 return await response.headers;
                             }
                        });
                        
                        var ch={};
                        var result = [];
                        var keys = Object.keys(res1.formulas);
                       keys.forEach(function(key){
                         result.push(res1.formulas[key]);
                       });
                        for(j=0;j<result.length;j++)
                       {
                        ch={}
                           ch["prix"]=result[j].pricing.monthly+" €"
                           ch['name']="wazari fidelity : "+result[j].formula;
                           ch['date']=req.body.date_effect;
                           ch["image"]="https://va-chercher.com/api/images/wazari.png";
                           resulats[ch.name+ch.prix]=ch;
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
    function getAge(dateString) 
    {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {   
            age--;
        }
        return age;
    }
    function getAUTO(req) {
      return new Promise((resolve, reject) => {
      (async () => {
          
        const browser = await puppeteer.launch({
       headless: true,
       args: ['--no-sandbox']
    });
    try{
      const page = await browser.newPage();
      await page.setUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1");
      await page.goto('https://courtier.wazari.fr/#/login',{waitUntil: 'domcontentloaded'})
      await page.waitForSelector('#wz-text-input-0 > input');
      await page.focus('#wz-text-input-0 > input');
      await page.keyboard.type('gestionsbh2@gmail.com');
      await page.$eval( '#wz-text-input-0 > input', (form) => form.value="gestionsbh2@gmail.com" );
      await page.waitForSelector('#wz-text-input-1 > input');
      await page.focus('#wz-text-input-1 > input');
      await page.keyboard.type('Yassine0906');

      await page.$eval( '#wz-text-input-1 > input', (form) => form.value="Yassine0906" );
      await page.click( 'body > wz-app-broker > div > div.content > wz-app-page-login > div > div > div.col-md-6.login-block > form > wz-rect-button > div > button');
      try{
          await page.waitForNavigation({waitUntil: 'domcontentloaded'});
      }
      catch(e){
          await page.waitForTimeout(50)
      }
      await page.goto('https://courtier.wazari.fr/#/app/car-insurance/devis',{waitUntil: 'domcontentloaded'})
      if(req.body.sexe==1)
      {
        await page.waitForSelector('#mat-button-toggle-1-button',{visible: true});
        await page.click( '#mat-button-toggle-1-button');
      }
      else{
        await page.waitForSelector('#mat-button-toggle-2-button',{visible: true});
        await page.click( '#mat-button-toggle-2-button');
      }
      await page.focus('#wz-text-input-3 > input');
     await page.keyboard.type(req.body.lastname);
     await page.focus('#wz-text-input-4 > input');
     await page.keyboard.type(req.body.firstname);
     await page.focus('#wz-text-input-18 > input');
     await page.keyboard.type(req.body.code_postal);
     await page.focus('#wz-text-input-10 > input');
     await page.keyboard.type(req.body.typeVoie);
     await page.focus('#wz-text-input-11 > input');
     await page.keyboard.type(req.body.nomVoie);
     await page.focus('#wz-text-input-19 > input');
     await page.keyboard.type(req.body.ville);
     await page.focus('#cdk-accordion-child-0 > div > div > div > wz-assure-info-form > form > mat-form-field > div > div.mat-form-field-flex > div > wz-mail-input > input');
     await page.keyboard.type(req.body.email);
     await page.focus('#cdk-accordion-child-0 > div > div > div > wz-assure-info-form > form > div:nth-child(5) > mat-form-field.mat-form-field.ng-tns-c11-9.mat-primary.mat-form-field-type-wz-phone-input.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-untouched.ng-pristine.ng-invalid > div > div.mat-form-field-flex > div > wz-phone-input > input');
     await page.keyboard.type(req.body.phonenumber);
     await page.focus('#cdk-accordion-child-1 > div > div > div > wz-car-picker > form > wz-form-group-part:nth-child(1) > div.part-content > wz-immatriculation > div.immatriculation > div.value > input');
     await page.keyboard.type(req.body.matricule);
     await page.waitForSelector('#cdk-accordion-child-1 > div > div > div > wz-car-picker > form > wz-form-group-part:nth-child(3) > div.part-content > div > mat-form-field.mat-form-field.ng-tns-c11-70.mat-primary.mat-form-field-type-wz-date-input.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-untouched.ng-invalid.mat-form-field-invalid.ng-dirty > div > div.mat-form-field-flex > div > wz-date-input > input');
     await page.focus('#cdk-accordion-child-1 > div > div > div > wz-car-picker > form > wz-form-group-part:nth-child(3) > div.part-content > div > mat-form-field.mat-form-field.ng-tns-c11-70.mat-primary.mat-form-field-type-wz-date-input.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-untouched.ng-invalid.mat-form-field-invalid.ng-dirty > div > div.mat-form-field-flex > div > wz-date-input > input');
     await page.keyboard.type(req.body.dateAcquisition); 
     await page.focus('#cdk-accordion-child-1 > div > div > div > wz-car-picker > form > wz-form-group-part:nth-child(3) > div.part-content > div > mat-form-field.dateMiseEnCirculation.mat-form-field.ng-tns-c11-69.mat-primary.mat-form-field-type-wz-date-input.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-untouched.mat-form-field-should-float.ng-dirty.ng-valid > div > div.mat-form-field-flex > div > wz-date-input > input');
     if(req.body.type=="2")
     await page.keyboard.type(req.body.dateAcquisition); 
     else
     await page.keyboard.type(req.body.dateCirculation); 
     await page.waitForSelector('#mat-select-21',{visible: true});
     await page.click( '#mat-select-21');
     await page.$eval( '#mat-select-21',(form) => form.click() );
     await page.waitForSelector('#cdk-overlay-0 > div > div > mat-option:nth-child(1)',{visible: true});
     await page.$eval( '#cdk-overlay-0 > div > div > mat-option:nth-child(1)',(form) => form.click() );
     await page.waitForSelector('#mat-select-1',{visible: true});
     await page.click( '#mat-select-1');
     switch(req.body.autoUse)
     {
        case "1":
          await page.waitForSelector('#mat-option-16',{visible: true});
          await page.click( '#mat-option-16');
          break;
        case "2":
          await page.waitForSelector('#mat-option-15',{visible: true});
          await page.click( '#mat-option-15');
          break;
        case "3":
          await page.waitForSelector('#mat-option-17',{visible: true});
          await page.click( '#mat-option-17');
          break;
        case "4":
        case "5":
          await page.waitForSelector('#mat-option-18',{visible: true});
          await page.click( '#mat-option-18');
          break;
     }
     await page.waitForSelector('#mat-select-2',{visible: true});
     await page.click( '#mat-select-2');
     switch(req.body.parkingMode)
     {
        case "1":
          await page.waitForSelector('#mat-option-21',{visible: true});
          await page.click( '#mat-option-21');
          break;
        case "2":
          await page.waitForSelector('#mat-option-23',{visible: true});
          await page.click( '#mat-option-23');
          break;
        case "3":
          await page.waitForSelector('#mat-option-19',{visible: true});
          await page.click( '#mat-option-19');
          break;
     }
     await page.waitForSelector('#mat-select-5',{visible: true});
     await page.click( '#mat-select-5');
     switch(req.body.mode)
     {
        case "1":
          await page.waitForSelector('#cdk-overlay-3 > div > div > mat-option:nth-child(1)',{visible: true});
          await page.click( '#cdk-overlay-3 > div > div > mat-option:nth-child(1)');
          break;
        case "2":
          await page.waitForSelector('#cdk-overlay-3 > div > div > mat-option:nth-child(2)',{visible: true});
          await page.click( '#cdk-overlay-3 > div > div > mat-option:nth-child(2)');
          break;
        case "3":
        case "4":
          await page.waitForSelector('#cdk-overlay-3 > div > div > mat-option:nth-child(3)',{visible: true});
          await page.click( '#cdk-overlay-3 > div > div > mat-option:nth-child(3)');
          break;
        case "5":
          await page.waitForSelector('#cdk-overlay-3 > div > div > mat-option:nth-child(4)',{visible: true});
          await page.click( '#cdk-overlay-3 > div > div > mat-option:nth-child(4)');
          break;
     }
     await page.waitForSelector('#mat-select-15',{visible: true});
     await page.$eval( '#mat-select-15',(form) => form.click() );
     switch(req.body.kmetre)
     {
        case "De 0 à 4999 km":
          await page.waitForSelector('#cdk-overlay-4 > div > div > mat-option:nth-child(1)',{visible: true});
          await page.click( '#cdk-overlay-4 > div > div > mat-option:nth-child(1)');
          break;
        case "De 5000 à 7999 km":
          await page.waitForSelector('#cdk-overlay-4 > div > div > mat-option:nth-child(2)',{visible: true});
          await page.click( '#cdk-overlay-4 > div > div > mat-option:nth-child(2)');
          break;
        case "De 8000 à 11999 km":
          await page.waitForSelector('#cdk-overlay-4 > div > div > mat-option:nth-child(3)',{visible: true});
          await page.click( '#cdk-overlay-4 > div > div > mat-option:nth-child(3)');
          break;
        case "De 12000 à 15999 km":
          await page.waitForSelector('#cdk-overlay-4 > div > div > mat-option:nth-child(4)',{visible: true});
          await page.click( '#cdk-overlay-4 > div > div > mat-option:nth-child(4)');
          break;
        case "De 16000 à 24999 km":
          await page.waitForSelector('#cdk-overlay-4 > div > div > mat-option:nth-child(5)',{visible: true});
          await page.click( '#cdk-overlay-4 > div > div > mat-option:nth-child(5)');
          break;
        case "De 25000 à 34999 km":
          await page.waitForSelector('#cdk-overlay-4 > div > div > mat-option:nth-child(6)',{visible: true});
          await page.click( '#cdk-overlay-4 > div > div > mat-option:nth-child(6)');
          break;
        case "Plus de 35000 km":
          await page.waitForSelector('#cdk-overlay-4 > div > div > mat-option:nth-child(7)',{visible: true});
          await page.click( '#cdk-overlay-4 > div > div > mat-option:nth-child(7)');
          break;
     }
     await page.waitForSelector('#mat-select-6',{visible: true});
     await page.$eval( '#mat-select-6', (el) => el.click());
     await page.waitForSelector('#mat-option-29',{visible: true});
     await page.$eval( '#mat-option-29', (el) => el.click());
     await page.$eval('#wz-text-input-13 > input', (form,value) => form.value=value, req.body.code_postal);
     await page.$eval('#wz-text-input-14 > input', (form,value) => form.value=value, req.body.code_postal);
     await page.focus('#cdk-accordion-child-3 > div > div > div > wz-conducteur-form > form > mat-form-field.mat-form-field.ng-tns-c11-33.mat-primary.mat-form-field-type-wz-date-input.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-untouched.ng-pristine.ng-invalid > div > div.mat-form-field-flex > div > wz-date-input > input');
     await page.keyboard.type(req.body.birthDate);
     await page.focus('#cdk-accordion-child-3 > div > div > div > wz-conducteur-form > form > mat-form-field.mat-form-field.ng-tns-c11-34.mat-primary.mat-form-field-type-wz-date-input.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-untouched.ng-pristine.ng-invalid > div > div.mat-form-field-flex > div > wz-date-input > input');
     await page.keyboard.type(req.body.permiDate);
     await page.waitForSelector('#mat-select-7',{visible: true});
     await page.$eval( '#mat-select-7', (el) => el.click());
     switch(req.body.permis)
     {
        case "Permis B":
          await page.waitForSelector('#mat-option-32',{visible: true});
          await page.click( '#mat-option-32');
          break;
        case "Permis B avec conduite accompagnée":
          await page.waitForSelector('#mat-option-33',{visible: true});
          await page.click( '#mat-option-33');
          break;
        case "Permis étranger UE":
          await page.waitForSelector('#mat-option-34',{visible: true});
          await page.click( '#mat-option-34');
          break;
        case "Permis étranger hors UE":
          await page.waitForSelector('#mat-option-35',{visible: true});
          await page.click( '#mat-option-35');
          break;
     }
     await page.waitForSelector('#mat-select-8',{visible: true});
     await page.$eval( '#mat-select-8', (el) => el.click());
     switch(req.body.situation)
     {
        case "1":
          await page.waitForSelector('#mat-option-37',{visible: true});
          await page.click( '#mat-option-37');
          break;
        case "2":
          await page.waitForSelector('#mat-option-38',{visible: true});
          await page.click( '#mat-option-38');
          break;
        case "3":
          await page.waitForSelector('#mat-option-36',{visible: true});
          await page.click( '#mat-option-36');
          break;
        case "4":
          await page.waitForSelector('#mat-option-40',{visible: true});
          await page.click( '#mat-option-40');
          break;
        case "5":
          await page.waitForSelector('#mat-option-41',{visible: true});
          await page.click( '#mat-option-41');
          break;
        case "6":
          await page.waitForSelector('#mat-option-39',{visible: true});
          await page.click( '#mat-option-39');
          break;
     }
     await page.waitForSelector('#mat-select-10',{visible: true});
     await page.$eval( '#mat-select-10', (el) => el.click());
     await page.waitForSelector('#mat-option-58',{visible: true});
     await page.$eval( '#mat-option-58', (el) => el.click());
     await page.waitForSelector('#mat-select-9',{visible: true});
     await page.$eval( '#mat-select-9', (el) => el.click());
     switch(req.body.profession)
     {
        case "1":
          await page.waitForSelector('#mat-option-44',{visible: true});
          await page.click( '#mat-option-44');
          break;
        case "2":
          await page.waitForSelector('#mat-option-43',{visible: true});
          await page.click( '#mat-option-43');
          break;
        case "3":
          await page.waitForSelector('#mat-option-46',{visible: true});
          await page.click( '#mat-option-46');
          break;
        case "4":
          await page.waitForSelector('#mat-option-47',{visible: true});
          await page.click( '#mat-option-47');
          break;
        case "5":
          await page.waitForSelector('#mat-option-48',{visible: true});
          await page.click( '#mat-option-48');
          break;
        case "6":
          await page.waitForSelector('#mat-option-49',{visible: true});
          await page.click( '#mat-option-49');
          break;
        case "7":
          await page.waitForSelector('#mat-option-51',{visible: true});
          await page.click( '#mat-option-51');
          break;
        case "8":
          await page.waitForSelector('#mat-option-54',{visible: true});
          await page.click( '#mat-option-54');
          break;
        case "9":
          await page.waitForSelector('#mat-option-52',{visible: true});
          await page.click( '#mat-option-52');
          break;
        case "10":
          await page.waitForSelector('#mat-option-54',{visible: true});
          await page.click( '#mat-option-54');
          break;
        case "11":
          await page.waitForSelector('#mat-option-55',{visible: true});
          await page.click( '#mat-option-55');
          break;
        case "12":
          await page.waitForSelector('#mat-option-45',{visible: true});
          await page.click( '#mat-option-45');
          break;
          case "13":
          case "14":
            await page.waitForSelector('#mat-option-57',{visible: true});
            await page.click( '#mat-option-57');
            break;
     }
     await page.$eval( '#cdk-accordion-child-1 > div > div > div > wz-car-picker > form > wz-form-group-part:nth-child(4) > div.part-content > div.buttons.final-buttons > button', (el) => el.click());
     
     await page.waitForSelector('#mat-select-0',{visible: true});
     await page.click( '#mat-select-0');
     switch(req.body.conducteur)
     {
        case "1":
          await page.waitForSelector('#mat-option-7',{visible: true});
          await page.click( '#mat-option-7');
          break;
        case "2":
          await page.waitForSelector('#mat-option-8',{visible: true});
          await page.click( '#mat-option-8');
          break;
        case "3":
          await page.waitForSelector('#mat-option-9',{visible: true});
          await page.click( '#mat-option-9');
          break;
     }
     if(req.body.titulaire==2)
     {
      await page.waitForSelector('#mat-select-0',{visible: true});
      await page.click( '#mat-select-0');
      await page.waitForSelector('#mat-option-12',{visible: true});
      await page.click( '#mat-option-12');
     }
     await page.waitForSelector('#mat-select-11',{visible: true});
     await page.$eval( '#mat-select-11', (el) => el.click());
     switch(req.body.NbreAnnee)
     {
        case "1 ans":
          await page.waitForSelector('#mat-option-261',{visible: true});
          await page.click( '#mat-option-261');
          break;
        case "2 ans":
          await page.waitForSelector('#mat-option-262',{visible: true});
          await page.click( '#mat-option-262');
          break;
        case "3 ans":
          await page.waitForSelector('#mat-option-263',{visible: true});
          await page.click( '#mat-option-263');
          break;
        case "4 ans":
          await page.waitForSelector('#mat-option-264',{visible: true});
          await page.click( '#mat-option-264');
          break;
        case "5 ans":
          await page.waitForSelector('#mat-option-265',{visible: true});
          await page.click( '#mat-option-265');
          break;
        case "6 ans":
          await page.waitForSelector('#mat-option-266',{visible: true});
          await page.click( '#mat-option-266');
          break;
        case "7 ans":
          await page.waitForSelector('#mmat-option-267',{visible: true});
          await page.click( '#mat-option-267');
          break;
        case "8 ans":
          await page.waitForSelector('#mat-option-268',{visible: true});
          await page.click( '#mat-option-268');
          break;
        case "9 ans":
          await page.waitForSelector('#mat-option-269',{visible: true});
          await page.click( '#mat-option-269');
          break;
        case "10 ans":
          await page.waitForSelector('#mat-option-270',{visible: true});
          await page.click( '#mat-option-270');
          break;
        case "11 ans":
          await page.waitForSelector('#mat-option-271',{visible: true});
          await page.click( '#mat-option-271');
          break;
        case "12 ans":
          await page.waitForSelector('#mat-option-272',{visible: true});
          await page.click( '#mat-option-272');
          break;
        case "14":
          await page.waitForSelector('#mat-option-57',{visible: true});
          await page.click( '#mat-option-261');
          break;
     }
     await page.waitForSelector('#mat-select-13',{visible: true});
     await page.$eval( '#mat-select-13',(form) => form.click() );
     switch(req.body.NbreMois)
     {
        case "De 1 à 7 mois":
          await page.waitForSelector('#mat-option-62',{visible: true});
          await page.click( '#mat-option-62');
          break;
        case "De 8 à 11 mois":
          await page.waitForSelector('#mat-option-63',{visible: true});
          await page.click( '#mat-option-63');
          break;
        case "De 12 à 15 mois":
          await page.waitForSelector('#mat-option-64',{visible: true});
          await page.click( '#mat-option-64');
          break;
        case "De 16 à 23 mois":
          await page.waitForSelector('#mat-option-65',{visible: true});
          await page.click( '#mat-option-65');
          break;
        case "De 24 à 35 mois":
          await page.waitForSelector('#mat-option-66',{visible: true});
          await page.click( '#mat-option-66');
          break;
        case "Supérieur ou égal à 36 mois":
          await page.waitForSelector('#mat-option-67',{visible: true});
          await page.click( '#mat-option-67');
          break;
     }
     await page.waitForSelector('#mat-radio-3',{visible: true});
     await page.click( '#mat-radio-3');
     await page.waitForSelector('#mat-radio-5',{visible: true});
     await page.click( '#mat-radio-5');
     await page.waitForSelector('#mat-select-14',{visible: true});
      await page.click( '#mat-select-14');
      await page.waitForSelector('#mat-option-68',{visible: true});
      await page.click( '#mat-option-68');
      await page.click( 'body > wz-app-broker > div > div.content > wz-car-insurance > div > wz-car-quotation > div > div.left > button');
            await page.waitForResponse(async(response) => {
                if(response.url().startsWith('https://api.wazari.fr/api/v1/quotations/cars/pricing')&& response.status() === 200)
                    {
                        return await response.headers;
                    }
               });
               await page.waitForSelector('body > wz-app-broker > div > div.content > wz-car-insurance > div > wz-car-pricing > form > div.formula-block > div.pricings > mat-card.full.flex.mat-card.selected.ng-star-inserted > mat-card-content > wz-pricing > div.primary.ng-star-inserted > div:nth-child(1)')
               await page.waitForSelector('#mat-expansion-panel-header-8 > span.mat-content')
               let tipusArray = await page.evaluate(() => Array.from(document.querySelectorAll('mat-card.full.flex.mat-card')).map(element=>{
                var ch={};
                var list=element.getElementsByTagName('span')
                for(var i=0;i<list.length ;i++)
                {
                  console.log(list[i].className)
                  if(list[i].className=="mat-content")
                  {
                    ch['name']="wazari"+list[i].innerHTML;
                  }
                }
                var list1=element.getElementsByTagName('div')
                for(var i=0;i<list1.length ;i++)
                {
                  if(list1[i].className=="secondary ng-star-inserted")
                  {
                    var listDiv=list1[i].getElementsByTagName('div')
                    ch['prix']=listDiv[0].innerHTML;
                  }
                }
                ch['name']="wazari";
                ch["image"]="https://va-chercher.com/api/images/wazari.png";
                return ch;
              }));
              let resulats={}
              for(j=0;j<3;j++)
              {
                resulats[tipusArray[j].name+tipusArray[j].prix]=tipusArray[j];
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
        getOffresPrevoyance,
        getOffresSante,
        getAUTO
    }