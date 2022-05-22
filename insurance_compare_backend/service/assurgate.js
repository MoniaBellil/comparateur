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
              const jsonString = await cookkie.find({ NomSite:'GATE' })
                const customer = JSON.parse(jsonString[0].ValueCookie);
              await page1.setCookie(...customer);
            } catch (err) {
              console.log(err);
              return;
            }
    await page1.goto('https://assurgate.com/index.php?content=tarif_express_sante_indiv&action=new&typeresil=A&typeprospect=P&relnum=N',{waitUntil: 'domcontentloaded'})
    await page1.waitForSelector('#M_CP')
          
    await page1.waitForSelector('#M_CP');
    await page1.$eval('#M_CP', (el,value) => el.value= value, req.body.code_postal);
    await page1.waitForSelector('#date1');
    await page1.$eval('#date1', (el,value) => el.value= value, req.body.date);
    await page1.waitForSelector('#effet1');
    await page1.$eval('#effet1', (el,value) => el.value= value, req.body.date_effect);
    for(i=2;i<11;i++)
      await page1.click( '#C_'+i);
    
    await page1.click( '#tarification');
      var res1="";
        await page1.waitForResponse(async(response) => {
            if(response.url().startsWith('https://assurgate.com/fonctions/tarif_express_sante_indiv_traitement.php')&& response.status() === 200)
                {
                    res1=await response.json()
                    return await response.headers;
                }
           });
           var resulats={};
              var index=0;
              for(i=0;i<res1.length;i++)
              {
                var HospitalisationStriyng=res1[i].Hospitalisation.replaceAll(" ", '')
                HospitalisationStriyng=HospitalisationStriyng.replaceAll("%", '')
                var Hospitalisation=parseInt(HospitalisationStriyng);
                
                var DentaireStriyng=res1[i].Forfait_Dentaire.replaceAll(" ", '')
                DentaireStriyng=DentaireStriyng.replaceAll("%", '')
                var Dentaire=parseInt(DentaireStriyng);
                
                var Forfait_OptiqueStriyng=res1[i].Forfait_Optique.replaceAll(" ", '')
                Forfait_OptiqueStriyng=Forfait_OptiqueStriyng.replaceAll("%", '')
                var Forfait_Optique=parseInt(Forfait_OptiqueStriyng);
                
                var HonorairesStriyng=res1[i].Honoraires.replaceAll(" ", '')
                HospitalisationStriyng=HonorairesStriyng.replaceAll("%", '')
                var Honoraires=parseInt(HonorairesStriyng);
                
                if(Hospitalisation>(100*req.body.hospi) && Dentaire>(86*req.body.dentaire) && Forfait_Optique>(224*req.body.optic) && Honoraires>(74*req.body.consultation))
                {
                  var  ch={};
                ch['name']="assurgate : "+res1[i].Produit
                ch['image']='https://websrv.assurgate.com/images/millicourtage/logo.jpg'
                ch['prix']=res1[i].Tarif
                ch['date']=await page1.$eval('#effet1', (el) => el.value);
                resulats[ch.name+index]=ch;
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
function getOffresProtectionJuridique(req) {
    return new Promise((resolve, reject) => {
        (async () => {
          const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
});try{
            const page1 = await browser.newPage();
            try {
              const jsonString = await cookkie.find({ NomSite:'GATE' })
                const customer = JSON.parse(jsonString[0].ValueCookie);
              await page1.setCookie(...customer);
            } catch (err) {
              console.log(err);
              return;
            }
            await page1.goto('https://assurgate.com/index.php?content=tarif_express_pj&action=new&typeresil=A&typeprospect=S&relnum=O' ,{waitUntil: 'domcontentloaded'})
            
            await page1.waitForSelector('#M_CP');
            await page1.$eval('#M_CP', (el,value) => el.value= value, req.body.code_postal);
            await page1.waitForSelector('#date1');
            await page1.$eval('#date1', (el,value) => el.value= value, req.body.date);
            
            await page1.click( '#tarification');
              var res1="";
                await page1.waitForResponse(async(response) => {
                    if(response.url().startsWith('https://assurgate.com/fonctions/tarif_express_pj_traitement.php')&& response.status() === 200)
                        {
                            res1=await response.json()
                            return await response.headers;
                        }
                   });
    
                
                var resulats={};
                var index=0;
                for(i=0;i<res1.length;i++)
                {
                  var  ch={};
                  ch['name']="assurgate"
                  ch['image']='https://websrv.assurgate.com/images/millicourtage/logo.jpg'
                  ch['Formule']=res1[i].produit+" : "+res1[i].tarif
                  ch['date']=await page1.$eval('#X_Effet', (el) => el.value);
                  resulats[ch.name+index]=ch;
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
function getOffresPrevoyance(req) {
    return new Promise((resolve, reject) => {
      (async () => {
        const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
});//try{
            const page1 = await browser.newPage();
            try {
              const jsonString = await cookkie.find({ NomSite:'GATE' })
                const customer = JSON.parse(jsonString[0].ValueCookie);
              await page1.setCookie(...customer);
            } catch (err) {
              console.log(err);
              return;
            }
            await page1.goto('https://assurgate.com/index.php?content=tarif_express_gav_indiv&action=new&typeresil=A&typeprospect=P&relnum=O' ,{waitUntil: 'domcontentloaded'})
            await page1.waitForSelector('#M_CP')
            
            await page1.waitForSelector('#M_CP');
            await page1.$eval('#M_CP', (el,value) => el.value= value, req.body.code_postal);
            await page1.waitForSelector('#date1');
            await page1.$eval('#date1', (el,value) => el.value= value, req.body.date);
            await page1.waitForSelector('#effet1');
            await page1.$eval('#effet1', (el,value) => el.value= value, req.body.date_effect);
            for(i=2;i<11;i++)
              await page1.click( '#C_'+i);
            
            await page1.click( '#tarification');
              var res1="";
                await page1.waitForResponse(async(response) => {
                    if(response.url().startsWith('https://assurgate.com/fonctions/tarif_express_prevoyance_indiv_traitement2.php')&& response.status() === 200)
                        {
                            res1=await response.json()
                            head =await response.headers
                            return await response.headers;
                        }
                   });
    
                
                var form=[]
                var resulats={};
                var index=0;
                for(i=0;i<res1.length;i++)
                {
                  form.push(res1[i].formule+' : '+res1[i].tarif+' €')
                }
                var  ch={};
                  ch['name']="assurgate : GAV"
                  ch['image']='https://digital-assurance.eu/wp-content/uploads/2019/11/logo-millicourtage-sansbase.jpg'
                  ch['Formule']=form
                  ch['date']=await page1.$eval('#effet1', (el) => el.value);
                  resulats[ch.name+index]=ch;
                  index++;
                  /////////////////////////////////////////////////////////////////////////////////////
                  await page1.goto('https://assurgate.com/index.php?content=tarif_express_obseques_indiv&action=new&typeresil=A&typeprospect=P&relnum=O' ,{waitUntil: 'domcontentloaded'})
            await page1.waitForSelector('#M_CP')
            
            await page1.waitForSelector('#M_CP');
            await page1.$eval('#M_CP', (el,value) => el.value= value, req.body.code_postal);
            await page1.waitForSelector('#date1');
            await page1.$eval('#date1', (el,value) => el.value= value, req.body.date);
            await page1.waitForSelector('#effet1');
            await page1.$eval('#effet1', (el,value) => el.value= value, req.body.date_effect);
            
            await page1.click( '#tarification');
              var res1="";
                await page1.waitForResponse(async(response) => {
                    if(response.url().startsWith('https://assurgate.com/fonctions/tarif_express_prevoyance_indiv_traitement2.php')&& response.status() === 200)
                        {
                            res1=await response.json()
                            head =await response.headers
                            return await response.headers;
                        }
                   });
    
                
                form=[]
                for(i=0;i<res1.length;i++)
                {
                  form.push(res1[i].formule+' : '+res1[i].tarif+' €')
                }
                  ch={};
                  ch['name']="assurgate : obseques"
                  ch['image']='https://digital-assurance.eu/wp-content/uploads/2019/11/logo-millicourtage-sansbase.jpg'
                  ch['Formule']=form
                  ch['date']=await page1.$eval('#effet1', (el) => el.value);
                  resulats[ch.name+index]=ch;
                  index++;
                  /////////////////////////////////////////////////////////////////////////////////////
                  await page1.goto('https://assurgate.com/index.php?content=tarif_express_deces_indiv&action=new&typeresil=A&typeprospect=P&relnum=O' ,{waitUntil: 'domcontentloaded'})
            await page1.waitForSelector('#M_CP')
            
            await page1.waitForSelector('#M_CP');
            await page1.$eval('#M_CP', (el,value) => el.value= value, req.body.code_postal);
            await page1.waitForSelector('#date1');
            await page1.$eval('#date1', (el,value) => el.value= value, req.body.date);
            await page1.waitForSelector('#effet1');
            await page1.$eval('#effet1', (el,value) => el.value= value, req.body.date_effect);
            
            await page1.click( '#tarification');
              var res1="";
                await page1.waitForResponse(async(response) => {
                    if(response.url().startsWith('https://assurgate.com/fonctions/tarif_express_prevoyance_indiv_traitement2.php')&& response.status() === 200)
                        {
                            res1=await response.json()
                            head =await response.headers
                            return await response.headers;
                        }
                   });
    
                
                form=[]
                for(i=0;i<res1.length;i++)
                {
                  form.push(res1[i].Formule+' : '+res1[i].tarif+' €')
                }
                  ch={};
                  ch['name']="assurgate : Décès"
                  ch['image']='https://digital-assurance.eu/wp-content/uploads/2019/11/logo-millicourtage-sansbase.jpg'
                  ch['Formule']=form
                  ch['date']=await page1.$eval('#effet1', (el) => el.value);
                  resulats[ch.name+index]=ch;
                  index++;
                  /////////////////////////////////////////////////////////////////////////////////////
                  await page1.goto('https://assurgate.com/index.php?content=tarif_express_dependance_indiv&action=new&typeresil=A&typeprospect=P&relnum=O' ,{waitUntil: 'domcontentloaded'})
            await page1.waitForSelector('#M_CP')
            
            await page1.waitForSelector('#M_CP');
            await page1.$eval('#M_CP', (el,value) => el.value= value, req.body.code_postal);
            await page1.waitForSelector('#date1');
            await page1.$eval('#date1', (el,value) => el.value= value, req.body.date);
            await page1.waitForSelector('#effet1');
            await page1.$eval('#effet1', (el,value) => el.value= value, req.body.date_effect);
            
            await page1.click( '#tarification');
              var res1="";
                await page1.waitForResponse(async(response) => {
                    if(response.url().startsWith('https://assurgate.com/fonctions/tarif_express_prevoyance_indiv_traitement2.php')&& response.status() === 200)
                        {
                            res1=await response.json()
                            head =await response.headers
                            return await response.headers;
                        }
                   });
    
                
                form=[]
                for(i=0;i<res1.length;i++)
                {
                  form.push(res1[i].formule+' : '+res1[i].tarif+' €')
                }
                  ch={};
                  ch['name']="assurgate : Dépendance"
                  ch['image']='https://digital-assurance.eu/wp-content/uploads/2019/11/logo-millicourtage-sansbase.jpg'
                  ch['Formule']=form
                  ch['date']=await page1.$eval('#effet1', (el) => el.value);
                  resulats[ch.name+index]=ch;
                  index++;
                  /////////////////////////////////////////////////////////////////////////////////////
                  await page1.goto('https://assurgate.com/index.php?content=tarif_express_accident_indiv&action=new&typeresil=A&typeprospect=P&relnum=O' ,{waitUntil: 'domcontentloaded'})
            await page1.waitForSelector('#M_CP')
            
            await page1.waitForSelector('#M_CP');
            await page1.$eval('#M_CP', (el,value) => el.value= value, req.body.code_postal);
            await page1.waitForSelector('#date1');
            await page1.$eval('#date1', (el,value) => el.value= value, req.body.date);
            await page1.waitForSelector('#effet1');
            await page1.$eval('#effet1', (el,value) => el.value= value, req.body.date_effect);
            
            await page1.click( '#tarification');
              var res1="";
                await page1.waitForResponse(async(response) => {
                    if(response.url().startsWith('https://assurgate.com/fonctions/tarif_express_prevoyance_indiv_traitement2.php')&& response.status() === 200)
                        {
                            res1=await response.json()
                            head =await response.headers
                            return await response.headers;
                        }
                   });
    
                
                form=[]
                for(i=0;i<res1.length;i++)
                {
                  form.push(res1[i].formule+' : '+res1[i].tarif+' €')
                }
                  ch={};
                  ch['name']="assurgate : Accident"
                  ch['image']='https://digital-assurance.eu/wp-content/uploads/2019/11/logo-millicourtage-sansbase.jpg'
                  ch['Formule']=form
                  ch['date']=await page1.$eval('#effet1', (el) => el.value);
                  resulats[ch.name+index]=ch;
                  index++;
                  /////////////////////////////////////////////////////////////////////////////////////
                  await page1.goto('https://assurgate.com/index.php?content=tarif_express_ij_indiv&action=new&typeresil=A&typeprospect=P&relnum=O' ,{waitUntil: 'domcontentloaded'})
            await page1.waitForSelector('#M_CP')
            
            await page1.waitForSelector('#M_CP');
            await page1.$eval('#M_CP', (el,value) => el.value= value, req.body.code_postal);
            await page1.waitForSelector('#date1');
            await page1.$eval('#date1', (el,value) => el.value= value, req.body.date);
            await page1.waitForSelector('#effet1');
            await page1.$eval('#effet1', (el,value) => el.value= value, req.body.date_effect);
            
            await page1.click( '#tarification');
              var res1="";
                await page1.waitForResponse(async(response) => {
                    if(response.url().startsWith('https://assurgate.com/fonctions/tarif_express_prevoyance_indiv_traitement2.php')&& response.status() === 200)
                        {
                            res1=await response.json()
                            head =await response.headers
                            return await response.headers;
                        }
                   });
    
                
                form=[]
                for(i=0;i<res1.length;i++)
                {
                  form.push(res1[i].formule+' : '+res1[i].tarif+' €')
                }
                  ch={};
                  ch['name']="assurgate : Indemnités Journalières"
                  ch['image']='https://digital-assurance.eu/wp-content/uploads/2019/11/logo-millicourtage-sansbase.jpg'
                  ch['Formule']=form
                  ch['date']=await page1.$eval('#effet1', (el) => el.value);
                  resulats[ch.name+index]=ch;
                  index++;
            await browser.close();resolve(resulats);
          /*} catch (error) {
            await browser.close();
            resolve([])
          }*/
        })();
      
      });
  }
    module.exports = {
        getOffresPrevoyance,
        getOffresProtectionJuridique,
        getOffresSante
    }