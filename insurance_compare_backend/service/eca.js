const puppeteer = require('puppeteer');
const cookkie = require("../models/cookkie")
function getOffresProtectionJuridique(req) {
    return new Promise((resolve, reject) => {
      (async () => {
            try{
              const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
})
            const page1 = await browser.newPage();
            try {
              const jsonString = await cookkie.find({ NomSite:'ECA' })
              const customer = JSON.parse(jsonString[0].ValueCookie);
              await page1.setCookie(...customer);
            } catch (err) {
              console.log(err);
              return;
            }
            await page1.goto('https://courtage.eca-partenaires.com/particulier/nouveauDevis/PJ',{waitUntil: 'domcontentloaded'})
            
            await page1.waitForSelector('#date_effet_pj');
            await page1.$eval('#date_effet_pj', (el,value) => el.value= value, req.body.date_effect);
            await page1.waitForSelector('#dn_assure');
            await page1.$eval('#dn_assure',(el,value) => el.value= value, req.body.date);
            await page1.waitForSelector('#prop_residence_secondaire-1');
            await page1.$eval('#prop_residence_secondaire-1', el => el.setAttribute("aria-invalid", false));
            await page1.click( '#prop_residence_secondaire-1');
            await page1.waitForSelector('#prop_residence_principal-1');
            await page1.$eval('#prop_residence_principal-1', el => el.setAttribute("aria-invalid", false));
            await page1.click( '#prop_residence_principal-1');
            
            await page1.click( '#calculer_tarif');
            await page1.waitForResponse(
              (response) =>
                response.url() === 'https://courtage.eca-partenaires.com/particulier/choixFormule' && response.status() === 302
            );
            await page1.waitForResponse(
              (response) =>
                response.url() === 'https://courtage.eca-partenaires.com/particulier/tarificateur' && response.status() === 200
            );
            
            var ch={}
            await page1.waitForSelector('#date_effet_pj');
            ch['name']="ECA";
            ch['date']=await page1.$eval('#date_effet_pj', el => el.value)
            ch["image"]='https://courtage.eca-partenaires.com/media/photos/logo-eca-particuliers.png';
            ch['Formule']="Essentielle : "+await page1.$eval('#ESSENTIELLE_pj', el => el.innerHTML);
            var resulats={};
            resulats[0]=ch
            var ch1={}
            ch1['name']="ECA";
            ch1['date']=await page1.$eval('#date_effet_pj', el => el.value)
            ch1["image"]='https://courtage.eca-partenaires.com/media/photos/logo-eca-particuliers.png';
            ch1['Formule']="Confort : "+await page1.$eval('#CONFORT_pj', el => el.innerHTML)
            resulats[1]=ch1
            
            await browser.close();resolve(resulats);
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
      
      const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
});try{
      const page1 = await browser.newPage();
      var today = new Date();
      var birthDate = new Date(req.body.date);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      var parcoursList=[]
      indexP=0
      if(age>=18)
        {
          parcoursList[indexP]=6
          indexP++
        }
        if(age>=20 && age<55)
        {
          parcoursList[indexP]=85
          indexP++
        }
        if(age>=55)
        {
          parcoursList[indexP]=5
          indexP++
          parcoursList[indexP]=93
          indexP++
          parcoursList[indexP]=81
          indexP++
        }
        var resulat=[]
        for(l=0;l<parcoursList.length;l++)
      {
        try {
          const jsonString = await cookkie.find({ NomSite:'ECA' })
          const customer = JSON.parse(jsonString[0].ValueCookie);
          await page1.setCookie(...customer);
        } catch (err) {
          console.log(err);
          return;
        }
      await page1.goto('https://courtage.eca-partenaires.com/particulier/presentation/SANTE' ,{waitUntil: 'domcontentloaded'})
      
      await page1.$eval( '#main-container > div > div.col-xl-12.text-center > a', form => form.click() );
      
      await page1.waitForSelector('#date_effet_sante');
      await page1.$eval('#date_effet_sante', (el,value) => el.value= value, req.body.date_effect);
      await page1.waitForSelector('#dn_assure');
      await page1.$eval('#dn_assure',(el,value) => el.value= value, req.body.date);
      await page1.waitForSelector('#code_postal');
      await page1.$eval('#code_postal',(el,value) => el.value= value, req.body.code_postal);
      await page1.waitForSelector('#has_conjoint_sante-1');
      await page1.$eval('#has_conjoint_sante-1', el => el.setAttribute("aria-invalid", false));
      await page1.click( '#has_conjoint_sante-1');
      await page1.$eval('#produit_sante', el => el.setAttribute("aria-invalid", false));
      await page1.select('#produit_sante', parcoursList[l].toString());
      await page1.$eval('#regime_social_sante', el => el.setAttribute("aria-invalid", false));
      if(req.body.regime=="2" || req.body.regime=="5")
              {
                await page1.select('#regime_social_sante', 'INDEPENDANT');
              }
              else if(req.body.regime=="12")
              {
                await page1.select('#regime_social_sante', 'SALARIE_AGRICOLE');
              }
              else if(req.body.regime=="8")
              {
                await page1.select('#regime_social_sante', 'ALSACE_MOSELLE');
              }
              else if(req.body.regime=="3")
              {
                await page1.select('#regime_social_sante', 'EXPLOITANTS_AGRICOLES');
              }
              else{
                await page1.select('#regime_social_sante', 'SECURITE_SOCIALE');
              }
              await page1.screenshot({ path: 'example.png' });
      await page1.waitForSelector( '#calculer_tarif');
      
      await Promise.all([
        page1.click('#calculer_tarif'),
        page1.waitForNavigation({waitUntil: 'networkidle2'})
      ]);
      const arr= await page1.$$eval(
        '.col-12',
        nodes => nodes.map(n =>{
          var list=n.getElementsByTagName('div')
          var resulats={}
              for(var i=0;i<list.length ;i++)
              {
                if(list[i].className=="row")
                {
                  var listPrix=list[i].getElementsByTagName('span')
                  for(var h=0;h<listPrix.length ;h++)
                  {
                    resulats['prix']=listPrix[h].innerHTML;
                  }
                  var listPrix=list[i].getElementsByTagName('div')
                  var name=listPrix[0].innerHTML
                  name=name.replaceAll(' ','')
                  name=name.replaceAll('\n','')
                  resulats['name']=name;
                  resulats['date']=document.getElementById('date_effet_sante').value;
                  resulats['image']="https://courtage.eca-partenaires.com/media/photos/logo-eca-particuliers.png";
                }
              }
              return resulats
        })
      );
      for(i=0;i<arr.length;i++)
        if(i>1)
        resulat.push(arr[i])
        
      }
      await browser.close();
      resolve(resulat)
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
try{ const page1 = await browser.newPage();
      try {
        const jsonString = await cookkie.find({ NomSite:'ECA' })
        const customer = JSON.parse(jsonString[0].ValueCookie);
        await page1.setCookie(...customer);
      } catch (err) {
        console.log(err);
        return;
      }
      await page1.goto('https://courtage.eca-partenaires.com/particulier/nouveauDevis/ASSURAXI' ,{waitUntil: 'domcontentloaded'})
      
      await page1.waitForSelector('#date_effet_assuraxi');
      await page1.$eval('#date_effet_assuraxi', (el,value) => el.value= value, req.body.date_effect);
      await page1.waitForSelector('#dn_assure');
      await page1.$eval('#dn_assure',(el,value) => el.value= value, req.body.date);
      await page1.$eval('#situation_familiale', el => el.setAttribute("aria-invalid", false));
      await page1.select('#situation_familiale', "SEPARE");
      await page1.$eval('#formule_choisi_assuraxi', el => el.setAttribute("aria-invalid", false));
      await page1.select('#formule_choisi_assuraxi', "10000");
      await page1.waitForSelector( '#calculer_tarif');
        await Promise.all([
          page1.click('#calculer_tarif'),
          page1.waitForNavigation({waitUntil: 'networkidle2'})
      ]);
      var resulats=[]
        const arr= await page1.$$eval(
          '.col-12',
          nodes => nodes.map(n =>{
            var list=n.getElementsByTagName('div')
            var form = null;
                for(var i=0;i<list.length ;i++)
                {
                  if(list[i].className=="row")
                  {
                    var listPrix=list[i].getElementsByTagName('div')
                        var name=listPrix[0].innerHTML
                        name=name.replaceAll(' ','')
                        name=name.replaceAll('\n','')
                    var listPrix=list[i].getElementsByTagName('span')
                    for(var h=0;h<listPrix.length ;h++)
                    {
                      if(listPrix[h].innerHTML=="-")
                        form=null
                      else
                      {
                        return 'Formule '+name+' : '+listPrix[h].innerHTML
                      }
                    }
                  }
                }
          })
        );
        var res1={}
        var arr5=[]
            for( var i = 0; i < arr.length; i++){ 
              if ( arr[i] == null) { 
                arr.splice(i, 1); 
              }
              else
              {
                arr5.push(arr[i])
              }
            }
        if(arr5!=null)
        {
          res1['name']='ECA ASSURAXI';
          res1['date']=await page1.$eval('#date_effet_assuraxi',(el) => el.value);
          res1['image']="https://courtage.eca-partenaires.com/media/photos/logo-eca-particuliers.png";
          res1['Formule']=arr5
          resulats.push(res1)
        }
          
          /////////////////////////////////////////////////////////////////////////////////////////////////////
          await page1.goto('https://courtage.eca-partenaires.com/particulier/nouveauDevis/IJH' ,{waitUntil: 'domcontentloaded'})
          
          await page1.waitForSelector('#date_effet_ijh');
          await page1.$eval('#date_effet_ijh', (el,value) => el.value= value, req.body.date_effect);
          await page1.waitForSelector('#dn_assure');
          await page1.$eval('#dn_assure',(el,value) => el.value= value, req.body.date);
          await page1.$eval('#situation_familiale', el => el.setAttribute("aria-invalid", false));
          await page1.select('#situation_familiale', "SEPARE");
          await page1.$eval('#formule_choisi_ijh', el => el.setAttribute("aria-invalid", false));
          await page1.select('#formule_choisi_ijh', "20");
          await page1.waitForSelector( '#calculer_tarif');
          await Promise.all([
            page1.$eval('#calculer_tarif',(el)=>el.click()),
            page1.waitForNavigation({waitUntil: 'networkidle2'})
        ]);
            res1={}
          
            const arr1= await page1.$$eval(
              '.col-12',
              nodes => nodes.map(n =>{
                var list=n.getElementsByTagName('div')
                var form = null;
                    for(var i=0;i<list.length ;i++)
                    {
                      if(list[i].className=="row")
                      {
                        var listPrix=list[i].getElementsByTagName('div')
                            var name=listPrix[0].innerHTML
                            name=name.replaceAll(' ','')
                            name=name.replaceAll('\n','')
                        var listPrix=list[i].getElementsByTagName('span')
                        for(var h=0;h<listPrix.length ;h++)
                        {
                          if(listPrix[h].innerHTML=="-")
                            form=null
                          else
                          {
                            return 'Formule '+name+' : '+listPrix[h].innerHTML
                          }
                        }
                      }
                    }
              })
            );
            var arr4=[]
            for( var i = 0; i < arr1.length; i++){ 
              if ( arr1[i] == null) { 
                arr1.splice(i, 1); 
              }
              else
              {
                arr4.push(arr1[i])
              }
            }
            if(arr4!=null)
            {
              res1['name']='ECA IJH';
              res1['date']=await page1.$eval('#date_effet_ijh',(el) => el.value);
              res1['image']="https://courtage.eca-partenaires.com/media/photos/logo-eca-particuliers.png";
              res1['Formule']=arr4
              resulats.push(res1)
            }
              

      /////////////////////////////////////////////////////////////////////////////////////////////////////
      await page1.goto('https://courtage.eca-partenaires.com/particulier/nouveauDevis/OBSEQUES' ,{waitUntil: 'domcontentloaded'})
      
      await page1.waitForSelector('#date_effet_obseques');
      await page1.$eval('#date_effet_obseques', (el,value) => el.value= value, req.body.date_effect);
      await page1.waitForSelector('#dn_assure');
      await page1.$eval('#dn_assure',(el,value) => el.value= value, req.body.date);
      await page1.$eval('#capital_assure_obseques', el => el.setAttribute("aria-invalid", false));
      await page1.select('#capital_assure_obseques', "1000");
      await page1.waitForSelector( '#calculer_tarif');
      await Promise.all([
        page1.click('#calculer_tarif'),
        page1.waitForNavigation({waitUntil: 'networkidle2'})
    ]);
      
      res1={}
      const arr2= await page1.$$eval(
          '.col-12',
          nodes => nodes.map(n =>{
            var list=n.getElementsByTagName('div')
            var form=null
                for(var i=0;i<list.length ;i++)
                {
                  if(list[i].className=="row")
                  {
                    var listPrix=list[i].getElementsByTagName('div')
                        var name=listPrix[0].innerHTML
                        name=name.replaceAll(' ','')
                        name=name.replaceAll('\n','')
                    var listPrix=list[i].getElementsByTagName('span')
                    for(var h=0;h<listPrix.length ;h++)
                    {
                      if(listPrix[h].innerHTML=="-")
                         form=null
                      else
                      {
                        form= 'Formule '+name+' : '+listPrix[h].innerHTML
                      }
                    }
                  }
                }
                return form
          })
        );
        var arr3=[]
        for( var i = 0; i < arr2.length; i++){ 
          if ( arr2[i] == null) { 
            arr2.splice(i, 1); 
          }
          else
          {
            arr3.push(arr2[i])
          }
        }
        if(arr3!=null)
        {
          res1['name']='ECA OBSEQUES';
          res1['date']=await page1.$eval('#date_effet_obseques',(el) => el.value);
          res1['image']="https://courtage.eca-partenaires.com/media/photos/logo-eca-particuliers.png";
          res1['Formule']=arr3
          resulats.push(res1)
        }
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////
      await page1.goto('https://courtage.eca-partenaires.com/particulier/nouveauDevis/GAV' ,{waitUntil: 'domcontentloaded'})
      
      await page1.waitForSelector('#date_effet_gav');
      await page1.$eval('#date_effet_gav', (el,value) => el.value= value, req.body.date_effect);
      await page1.$eval('#formule_choisi_gav', el => el.setAttribute("aria-invalid", false));
      await page1.select('#formule_choisi_gav', "INDIVIDUELLE");
      await page1.$eval('#taux_dincapacite_choisi_gav', el => el.setAttribute("aria-invalid", false));
      await page1.select('#taux_dincapacite_choisi_gav', "IPP_10");
      if(req.body.sport==true)
      {
        await page1.$eval('#licence_sport_amateur_oui', el => el.setAttribute("aria-invalid", false));
        await page1.click( '#licence_sport_amateur_oui');
      }
      await page1.waitForSelector( '#calculer_tarif');
      await Promise.all([
        page1.click('#calculer_tarif'),
        page1.waitForNavigation({waitUntil: 'networkidle2'})
    ]);
      
      res1={}
      const arr8= await page1.$$eval(
          '.col-12',
          nodes => nodes.map(n =>{
            var list=n.getElementsByTagName('div')
            var form=null
                for(var i=0;i<list.length ;i++)
                {
                  if(list[i].className=="row")
                  {
                    var listPrix=list[i].getElementsByTagName('div')
                        var name=listPrix[0].innerHTML
                        name=name.replaceAll(' ','')
                        name=name.replaceAll('\n','')
                    var listPrix=list[i].getElementsByTagName('span')
                    for(var h=0;h<listPrix.length ;h++)
                    {
                      if(listPrix[h].innerHTML=="-")
                         form=null
                      else
                      {
                        form= 'Formule '+name+' : '+listPrix[h].innerHTML
                      }
                    }
                  }
                }
                return form
          })
        );
        var arr6=[]
        for( var i = 0; i < arr8.length; i++){ 
          if ( arr8[i] == null) { 
            arr8.splice(i, 1); 
          }
          else
          {
            arr6.push(arr8[i])
          }
        }
        if(arr6!=null)
        {
          res1['name']='ECA GAV';
          res1['date']=await page1.$eval('#date_effet_gav',(el) => el.value);
          res1['image']="https://courtage.eca-partenaires.com/media/photos/logo-eca-particuliers.png";
          res1['Formule']=arr6
          resulats.push(res1)
        }
        
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
        const jsonString = await cookkie.find({ NomSite:'ECA' })
        const customer = JSON.parse(jsonString[0].ValueCookie);
        await page1.setCookie(...customer);
      } catch (err) {
        console.log(err);
        return;
      }
      await page1.goto('https://courtage.eca-partenaires.com/particulier/nouveauDevis/CALINIA' ,{waitUntil: 'domcontentloaded'})
      
      await page1.waitForSelector('#date_effet_assuraxi');
      await page1.$eval('#date_effet_calinia', (el,value) => el.value= value, req.body.date_effect);
      
      var resulats=[]
      if(req.body.animalType=="Chien")
      {
        await page1.waitForSelector('#chien');
        await page1.click('#chien');
        await page1.waitForSelector('#nom_chien_0');
        await page1.$eval('#nom_chien_0', (el) => el.value= 'bb');
        await page1.$eval('#date_chien_0', (el,value) => el.value= value, req.body.dateanimal);
        await page1.waitForSelector('#croise_chien_0');
        await page1.select('#croise_chien_0', "PURE");
        await page1.waitForSelector('#race_chien_0');
        await page1.select('#race_chien_0', "Affenpinscher");
        await page1.$eval('#select2-race_chien_0-container', (el) => el.title= "Affenpinscher");
        await page1.$eval('#select2-race_chien_0-container', (el) => el.innerHTML= "Affenpinscher");
        if(req.body.LOF==true)
        {
          await page1.waitForSelector('#inscr_lof_oui_0');
          await page1.click('#inscr_lof_oui_0');
        }
        else
        {
          await page1.waitForSelector('#inscr_lof_non_0');
          await page1.click('#inscr_lof_non_0');
        }
        if(req.body.bonneSante==true)
        {
          await page1.waitForSelector('#bonne_sante_oui_chien_0');
          await page1.click('#bonne_sante_oui_chien_0');
        }
        else
        {
          await page1.waitForSelector('#bonne_sante_non_chien_0');
          await page1.click('#bonne_sante_non_chien_0');
        }
        await page1.waitForSelector( '#calculer_tarif');
      
        await Promise.all([
          page1.click('#calculer_tarif'),
          page1.waitForNavigation({waitUntil: 'networkidle2'})
      ]);
       
        var res1={}
        var arr5=[]
        arr5.push('Réduite : '+await page1.$eval('#REDUITE_chien_0',(el) => el.innerHTML) )
        arr5.push('Confort : '+await page1.$eval('#CONFORT_chien_0',(el) => el.innerHTML) )
        arr5.push('Complète : '+await page1.$eval('#COMPLETE_chien_0',(el) => el.innerHTML) )
        arr5.push('Premium : '+await page1.$eval('#PREMIUM_chien_0',(el) => el.innerHTML) )
        arr5.push('Premium plus : '+await page1.$eval('#PREMIUM_PLUS_chien_0',(el) => el.innerHTML) )
        if(arr5!=null)
        {
          res1['name']='ECA';
          res1['date']=await page1.$eval('#date_effet_calinia',(el) => el.value);
          res1['image']="https://courtage.eca-partenaires.com/media/photos/logo-eca-particuliers.png";
          res1['Formule']=arr5
          resulats.push(res1)
        }
      }
      else if(req.body.animalType=="Chat")
      {
        await page1.waitForSelector('#chat');
        await page1.click('#chat');
        await page1.waitForSelector('#nom_chat_0');
        await page1.$eval('#nom_chat_0', (el) => el.value= 'bb');
        await page1.$eval('#date_chat_0', (el,value) => el.value= value, req.body.dateanimal);
        await page1.waitForSelector('#croise_chat_0');
        await page1.select('#croise_chat_0', "PURE");
        await page1.waitForSelector('#race_chat_0');
        await page1.select('#race_chat_0', "Abyssin");
        await page1.$eval('#select2-race_chat_0-container', (el) => el.title= "Abyssin");
        await page1.$eval('#select2-race_chat_0-container', (el) => el.innerHTML= "Abyssin");
        if(req.body.bonneSante==true)
        {
          await page1.waitForSelector('#bonne_sante_oui_chat_0');
          await page1.click('#bonne_sante_oui_chat_0');
        }
        else
        {
          await page1.waitForSelector('#bonne_sante_non_chat_0');
          await page1.click('#bonne_sante_non_chat_0');
        }
        await page1.waitForSelector( '#calculer_tarif');
      
        await Promise.all([
          page1.click('#calculer_tarif'),
          page1.waitForNavigation({waitUntil: 'networkidle2'})
      ]);
        var res1={}
        var arr5=[]
        await page1.waitForSelector('#REDUITE_chat_0')
          arr5.push('Réduite : '+await page1.$eval('#REDUITE_chat_0',(el) => el.innerHTML) )
          arr5.push('Confort : '+await page1.$eval('#CONFORT_chat_0',(el) => el.innerHTML) )
          arr5.push('Complète : '+await page1.$eval('#COMPLETE_chat_0',(el) => el.innerHTML) )
          arr5.push('Premium : '+await page1.$eval('#PREMIUM_chat_0',(el) => el.innerHTML) )
          arr5.push('Premium plus : '+await page1.$eval('#PREMIUM_PLUS_chat_0',(el) => el.innerHTML) )
        if(arr5!=null)
        {
          res1['name']='ECA';
          res1['date']=await page1.$eval('#date_effet_calinia',(el) => el.value);
          res1['image']="https://courtage.eca-partenaires.com/media/photos/logo-eca-particuliers.png";
          res1['Formule']=arr5
          resulats.push(res1)
        }
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
      getOffresPrevoyance,
      getOffresSante,
      getOffresProtectionJuridique,
      getOffresAnimal
  }