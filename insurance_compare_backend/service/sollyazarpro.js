const puppeteer = require('puppeteer');
const cookkie = require("../models/cookkie")
function getOffresAnimal(req) {
    return new Promise((resolve, reject) => {
        (async () => {
         
            const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
}); try{
            const page1 = await browser.newPage();
            try {
                const jsonString = await cookkie.find({ NomSite:'sollyazarpro' })
                const customer = JSON.parse(jsonString[0].ValueCookie);
                await page1.setCookie(...customer);
              } catch (err) {
                console.log(err);
                return;
              }
              await page1.goto('https://www.sollyazarpro.com/produit/creer-contrat/quadrupaide',{waitUntil: 'domcontentloaded'})
         const data = await page1.$eval('#container_iframe',el=>el.src)
         await page1.goto(data,{waitUntil: 'domcontentloaded'})
         if(req.body.animalType=="Chien")
         {
           await page1.waitForSelector('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_type_0')
           await page1.click('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_type_0')
           await page1.$eval('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_type_0',el=>el.click())
           await page1.waitForSelector('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_tatouage_0')
           await page1.click('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_tatouage_0')
           await page1.$eval('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_tatouage_0',el=>el.click())
           await page1.waitForSelector('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_nom')
           await page1.$eval('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_nom',el=>el.value="bobo")
           await page1.select('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_race', "4");
           await page1.waitForSelector('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_dateNaissance')
           await page1.$eval('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_dateNaissance',(el,value)=>el.value=value,req.body.dateanimal)
           await page1.waitForSelector('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_sexe_0')
           await page1.click('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_sexe_0')
           await page1.$eval('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_sexe_0',el=>el.click())
         }
         else
         {
           await page1.waitForSelector('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_type_1')
           await page1.click('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_type_1')
           await page1.$eval('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_type_1',el=>el.click())
           await page1.waitForSelector('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_tatouage_0')
           await page1.click('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_tatouage_0')
           await page1.$eval('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_tatouage_0',el=>el.click())
           await page1.waitForSelector('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_nom')
           await page1.$eval('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_nom',el=>el.value="bobo")
           await page1.waitForSelector('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_dateNaissance')
           await page1.$eval('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_dateNaissance',(el,value)=>el.value=value,req.body.dateanimal)
           await page1.click('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_sexe_0')
           await page1.$eval('#sollyazarpro_produits_risques_divers_quadrupaidebundle_animauxtype_animaux_0_sexe_0',el=>el.click())
         }
        await page1.waitForSelector('#dateEffet')
        await page1.$eval('#dateEffet',(el,value)=>el.value=value,req.body.date_effect)
        await page1.waitForSelector('#div_form_footer > div.col-xs-12.col-sm-6.suiv > button')
        await page1.click('#div_form_footer > div.col-xs-12.col-sm-6.suiv > button')
        try{
            await page1.waitForNavigation({waitUntil: 'domcontentloaded'})
          }
          catch(e){
            await page1.waitForTimeout(100)
          }
            let res1= await page1.$$eval('div.panel-default', names => names.map(name =>
              { 
                var list=name.getElementsByTagName('span')
                var ch="";
                for(var i=0;i<list.length;i++)
                {
                  if(list[i].className=="libelleformulemobile")
                  {
                    var data120=list[i].innerHTML.replaceAll("\t","")
                    data120=data120.replaceAll("\n","")
                    data120=data120.replaceAll(" ","")
                    ch+=data120
                  }
                  if(list[i].className.indexOf("tarif_F")>-1)
                  {
                    var data12=list[i].innerHTML.replaceAll("&nbsp;"," ")
                    ch=ch+" : "+data12
                  }
                }
                return ch
              }));
              ch={};
              let resultats={}
                ch['name']="sollyazarpro"
                ch['image']='https://www.sollyazarpro.com/build/logo_sollyazar_quadri.svg'
                ch['Formule']=res1
                ch['date']=req.body.date_effect;
               resultats[ch.name]=ch
              await browser.close();
              resolve(resultats)
            }
            catch(error)
            {
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
            try {
                const jsonString = await cookkie.find({ NomSite:'sollyazarpro' })
                const customer = JSON.parse(jsonString[0].ValueCookie);
                await page1.setCookie(...customer);
              } catch (err) {
                console.log(err);
                return;
              }
            await page1.goto('https://www.sollyazarpro.com/produit/creer-contrat/sante-senior',{waitUntil: 'domcontentloaded'})
            const data = await page1.$eval('#container_iframe',el=>el.src)
            await page1.goto(data,{waitUntil: 'domcontentloaded'})
            await page1.waitForSelector('#dateNaissance1')
            await page1.$eval('#dateNaissance1',(el,value)=>el.value=value,req.body.date)
            await page1.select('#regime1', "SSOCIALE");
            await page1.waitForSelector('#codePostalLocal');
            await page1.focus('#codePostalLocal')
            await page1.keyboard.type(req.body.code_postal);
            await page1.waitForResponse(async(response) => {
              if(response.url().startsWith('https://sante.sollyazarpro.com/recherche-ville?codePostal=')&& response.status() === 200)
              {
                return await response;
              }
            });
            await page1.waitForSelector('#antecedentsAssurances_2')
            await page1.click('#antecedentsAssurances_2')
            await page1.$eval('#antecedentsAssurances_2',el=>el.click())
            await page1.waitForSelector('#dateEffet')
            await page1.$eval('#dateEffet',(el,value)=>el.value=value,req.body.date_effect)
            await page1.waitForSelector('#submitTarif1js')
            await page1.$eval('#submitTarif1js',el=>el.click())
            try{
              await page1.waitForNavigation({waitUntil: 'domcontentloaded'})
            }
            catch(e){
              await page1.waitForTimeout(100)
            }
            var ch={}
            var index=0
            var resulats={}
              ch['name']='sollyazarpro'+" : "+await page1.$eval('#libfor1',el=>el.innerHTML)
              ch['image']='https://www.sollyazarpro.com/build/logo_sollyazar_quadri.svg'
              ch['prix']=await page1.$eval('#libfor1',el=>el.innerHTML)+" : "+await page1.$eval('#ttc1',el=>el.innerHTML)
              ch['date']=req.body.date_effect;
              resulats[ch.name+index]=ch;
              index++
              ch={}
              ch['name']='sollyazarpro'+" : "+await page1.$eval('#libfor2',el=>el.innerHTML)
              ch['image']='https://www.sollyazarpro.com/build/logo_sollyazar_quadri.svg'
              ch['prix']=await page1.$eval('#libfor2',el=>el.innerHTML)+" : "+await page1.$eval('#ttc2',el=>el.innerHTML)
              ch['date']=req.body.date_effect;
              resulats[ch.name+index]=ch;
              index++
              ch={}
              ch['name']='sollyazarpro'+" : "+await page1.$eval('#libfor3',el=>el.innerHTML)
              ch['image']='https://www.sollyazarpro.com/build/logo_sollyazar_quadri.svg'
              ch['prix']=await page1.$eval('#libfor3',el=>el.innerHTML)+" : "+await page1.$eval('#ttc3',el=>el.innerHTML)
              ch['date']=req.body.date_effect;
              resulats[ch.name+index]=ch;
              index++
              ch={}
              await page1.waitForSelector('#collapse_3_1 > div > table:nth-child(5) > tbody > tr:nth-child(1) > th:nth-child(2) > span.pull-right > button')
              await page1.$eval('#collapse_3_1 > div > table:nth-child(5) > tbody > tr:nth-child(1) > th:nth-child(2) > span.pull-right > button',el=>el.click())
              ch['name']='sollyazarpro'+" : "+await page1.$eval('#libfor2',el=>el.innerHTML)
              ch['image']='https://www.sollyazarpro.com/build/logo_sollyazar_quadri.svg'
              ch['prix']=await page1.$eval('#libfor2',el=>el.innerHTML)+" : "+await page1.$eval('#ttc2',el=>el.innerHTML)
              ch['date']=req.body.date_effect;
              resulats[ch.name+index]=ch;
              index++
              ch={}
              ch['name']='sollyazarpro'+" : "+await page1.$eval('#libfor3',el=>el.innerHTML)
              ch['image']='https://www.sollyazarpro.com/build/logo_sollyazar_quadri.svg'
              ch['prix']=await page1.$eval('#libfor3',el=>el.innerHTML)+" : "+await page1.$eval('#ttc3',el=>el.innerHTML)
              ch['date']=req.body.date_effect;
              resulats[ch.name+index]=ch;
              index++
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
        try{ const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
});
          const page1 = await browser.newPage();
          try {
              const jsonString = await cookkie.find({ NomSite:'sollyazarpro' })
              const customer = JSON.parse(jsonString[0].ValueCookie);
              await page1.setCookie(...customer);
            } catch (err) {
              console.log(err);
              return;
            }
            await page1.goto('https://www.sollyazarpro.com/produit/creer-contrat/gav',{waitUntil: 'domcontentloaded'})
         const data = await page1.$eval('#container_iframe',el=>el.src)
         await page1.goto(data,{waitUntil: 'domcontentloaded'})
         await page1.waitForSelector('#dateNaissance')
         await page1.$eval('#dateNaissance',(el,value)=>el.value=value,req.body.date)
         await page1.waitForSelector('#codePostalLocal');
         await page1.focus('#codePostalLocal')
         await page1.keyboard.type(req.body.code_postal);
         await page1.waitForSelector('#communeLocal option')
            let tipusArray = await page1.evaluate(() => Array.from(document.querySelectorAll('#communeLocal option')).map(element=>{
              if(element.value!="")
              return element
            }));
            while(tipusArray[0]==null)
            {
              tipusArray = await page1.evaluate(() => Array.from(document.querySelectorAll('#communeLocal option')).map(element=>{
                if(element.value!="")
                return element
              }));
            }
         await page1.$eval( '#tab_1_2', form => form.click() );
         if(req.body.sport==false)
         {
          await page1.$eval( '#tab_3_2', form => form.click() );
          await page1.waitForSelector( '#declaration');
          await page1.$eval( '#declaration', form => form.click() );
         }
         else
         {
          await page1.$eval( '#tab_3_1', form => form.click() );
         }
         await page1.waitForSelector('#dateEffet')
         await page1.$eval('#dateEffet',(el,value)=>el.value=value,req.body.date_effect)
         await page1.waitForSelector('#submitTarif1js')
            await page1.$eval('#submitTarif1js',el=>el.click())
            await page1.waitForResponse(async(response) => {
              if(response.url().startsWith('https://gav.sollyazarpro.com/produit/gav/calcultarif')&& response.status() === 200)
              {
                return await response;
              }
            });
            var ch={}
            var index=0
            var resulats={}
              ch['name']='sollyazarpro'
              ch['image']='https://www.sollyazarpro.com/build/logo_sollyazar_quadri.svg'
              var form=[]
              form.push('Formule 1 : '+await page1.$eval('#ttc1',el=>el.innerHTML)+' € ')
              form.push('Formule 2 : '+await page1.$eval('#ttc2',el=>el.innerHTML)+' € ')
              ch['Formule']=form
              ch['date']=req.body.date_effect;
              resulats[ch.name+index]=ch;
              index++
        await browser.close();
        resolve(resulats);

  } catch (error) {
    await browser.close();
    resolve([])
  }
    })();
  });
    }
function getEMPRUNTEUR(req) {
  return new Promise((resolve, reject) => {
    (async () => {
      const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
});try{
      const page1 = await browser.newPage();
      try {
          const jsonString = await cookkie.find({ NomSite:'sollyazarpro' })
          const customer = JSON.parse(jsonString[0].ValueCookie);
          await page1.setCookie(...customer);
        } catch (err) {
          console.log(err);
          return;
        }
        await page1.goto('https://www.sollyazarpro.com/produit/creer-contrat/empruntea',{waitUntil: 'domcontentloaded'})
        await page1.$eval( '#contenu > div.row > div:nth-child(1) > div.card.card-main.card-activite > div > div > div > div.form-group > a', form => form.click() );
        if(req.body.civilite=="Monsieur")
        {
          await page1.waitForSelector('#vtCivE0-switch-0')
          await page1.click('#vtCivE0-switch-0')
          await page1.$eval('#vtCivE0-switch-0',el=>el.click())
        }
        else
        {
          await page1.waitForSelector('#vtCivE0-switch-1')
          await page1.click('#vtCivE0-switch-1')
          await page1.$eval('#vtCivE0-switch-1',el=>el.click())
        }
        await page1.waitForSelector('#vtNomE0');
        await page1.focus('#vtNomE0')
        await page1.keyboard.type(req.body.lastname);
        await page1.$eval('#vtPnomE0',(el,value)=>el.value=value,req.body.lastname)
        await page1.waitForSelector('#vtPnomE0');
        await page1.focus('#vtPnomE0')
        await page1.keyboard.type(req.body.firstname);
        await page1.$eval('#vtPnomE0',(el,value)=>el.value=value,req.body.firstname)
        await page1.waitForSelector('#vtDateNaissanceE0')
        await page1.focus('#vtDateNaissanceE0')
        await page1.keyboard.type(req.body.date);
        await page1.$eval('#vtDateNaissanceE0',(el,value)=>el.innerHTML=value,req.body.date)
        if(req.body.fumeur=="true")
        {
          await page1.waitForSelector('#vtFumeurE0')
          await page1.waitForSelector('#vtFumeurE0')
            await page1.select('#vtFumeurE0', "2355");
        }
        switch(req.body.Statut){
          case "1":
            await page1.waitForSelector('#vtProfE0')
            await page1.select('#vtProfE0', "2392");
            break;
          case "3":
            await page1.waitForSelector('#vtProfE0')
            await page1.select('#vtProfE0', "2379");
            break;
          case "11":
            await page1.waitForSelector('#vtProfE0')
            await page1.select('#vtProfE0', "2381");
            break;
          case "8":
            await page1.waitForSelector('#vtProfE0')
            await page1.select('#vtProfE0', "2389");
            break;
          case "20":
          case "21":
            await page1.waitForSelector('#vtProfE0')
            await page1.select('#vtProfE0', "2390");
            break;
          case "99":
          case "10":
            await page1.waitForSelector('#vtProfE0')
            await page1.select('#vtProfE0', "2393");
            break;
          default:
            await page1.waitForSelector('#vtProfE0')
            await page1.select('#vtProfE0', "2391");
        }
        if(req.body.Deplacements=="false")
        {
          await page1.waitForSelector('#vtDepFreqE0')
          await page1.select('#vtDepFreqE0', "2357");
        }
        else
        {
          await page1.waitForSelector('#vtDepFreqE0')
          await page1.select('#vtDepFreqE0', "2359");
        }
        if(req.body.handling=="false")
        {
          await page1.waitForSelector('#vtTravManE0')
          await page1.select('#vtTravManE0', "2369");
        }
        else
        {
          await page1.waitForSelector('#vtTravManE0')
          await page1.select('#vtTravManE0', "2370");
        }
        await page1.focus('#vtDebutGarantie')
        await page1.$eval('#vtDebutGarantie',(el,value)=>el.value=value,req.body.date_effect)
        switch(req.body.loan)
        {
          case "Amortissable":
            await page1.waitForSelector('#vtTypeDuPret0')
            await page1.select('#vtTypeDuPret0', "74")
            break;
          case "In Fine":
            await page1.waitForSelector('#vtTypeDuPret0')
            await page1.select('#vtTypeDuPret0', "75")
            break;
          case "relais":
            await page1.waitForSelector('#vtTypeDuPret0')
            await page1.select('#vtTypeDuPret0', "77")
            break;
          default:
            await page1.waitForSelector('#vtTypeDuPret0')
            await page1.select('#vtTypeDuPret0', "80")
        }
        
        await page1.focus('#vtMontant0')
        await page1.keyboard.type(req.body.amount);
        await page1.focus('#vtTaux0')
        await page1.keyboard.type(req.body.rate);
        await page1.focus('#vtDuree0')
        await page1.keyboard.type(req.body.duration);
        await page1.focus('#vtDureeDif0')
        await page1.keyboard.type(req.body.delay);
        await Promise.all([
          page1.$eval( '#tarificateur_express_validation > input', form => form.click() ),
          page1.waitForNavigation({waitUntil: 'networkidle2'})
        ]);
         let res1= await page1.$$eval('div.card-body.p-2-5', names => names.map(name =>
          {
            var ch={}
            var list=name.getElementsByTagName('img')
            ch['image']=list[0].src
            list=name.getElementsByTagName('h6')
            var nom=list[0].innerHTML.replaceAll(/\n/g,'');
            ch['name']="sollyazarpro : "+nom.replaceAll(/\t/g,'');
            list=name.getElementsByTagName('input')
            var prix;
            for(i=0;i<list.length;i++)
            {
              if(list[i].getAttribute('type')=="hidden")
                prix=list[i].value.replaceAll(" ",'')+" €"
            }
            ch['prix']=prix
            return ch
          }));
          await browser.close();
          var resulats={}
          for(i=0;i<res1.length;i++)
          {
            resulats[res1[i].name+i]=res1[i]
          }

          resolve(resulats);
        
    } catch (error) {
      await browser.close();
      resolve([])
    }
      })();
    });
      }
    module.exports = {
        getOffresAnimal,
        getOffresSante,
        getOffresPrevoyance,
        getEMPRUNTEUR
      };