const puppeteer = require('puppeteer');
const cookkie = require("../models/cookkie")
function getAUTO(req) {
  return new Promise((resolve, reject) => {
  (async () => {
      
    const browser = await puppeteer.launch({
   headless: true,
   args: ['--no-sandbox']
});
try{
    const page1 = await browser.newPage();
    try{
        await page1.goto('https://www.netvox-assurances.fr/courtier/login-netvox/',{waitUntil: 'domcontentloaded'})
        await page1.waitForSelector('#modlgn_username');
        await page1.$eval('#modlgn_username', el => el.value = 'NETX19758');
        await page1.waitForSelector('#modlgn_passwd');
        await page1.$eval('#modlgn_passwd', el => el.value = '155228CH');
        await page1.$eval( '#form-login > div > div.down > input', form => form.click() );
    }
    catch(e)
    {
        await page1.goto('https://www.netvox-assurances.fr/courtier/login-netvox/',{waitUntil: 'domcontentloaded'})
        await page1.waitForSelector('#modlgn_username');
        await page1.$eval('#modlgn_username', el => el.value = 'NETX19758');
        await page1.waitForSelector('#modlgn_passwd');
        await page1.$eval('#modlgn_passwd', el => el.value = '155228CH');
        await page1.$eval( '#form-login > div > div.down > input', form => form.click() );
    }
        await page1.waitForResponse(async(response) => {
          if(response.url().startsWith('https://devis.netvox-assurances.fr/extranet/pages/accueil.aspx')&& response.status() === 200 || response.status() === 404)
          {
            return await response;
          }
        });
        const cookies = await page1.cookies()
    var idSession=""
    for(i=0;i<cookies.length;i++)
    {
      if(cookies[i].name=="ASP.NET_SessionId")
      idSession=cookies[i].value
    }
    await page1.setCookie(...cookies);
    await page1.$eval( '#ctl00_UC_HEADER_Menu1n8 > td > table > tbody > tr > td > a', form => form.click() );
    await page1.waitForTimeout(300)
    await page1.goto('https://devis.netvox-assurances.fr/produits/AUTO/classique/pages/devis.aspx?is='+idSession,{waitUntil: 'domcontentloaded'})
    await page1.waitForResponse(async(response) => {
      if(response.url().startsWith('https://devis.netvox-assurances.fr/WS/GlobalWS_Auto.asmx/getAutoMarquesConstructeur')&& response.status() === 200 || response.status() === 404)
      {
        return await response;
      }
    });
    if(req.body.type=="1")
    {
      await page1.$eval( '#ctl00_body_modeacquisition_0', form => form.click() );
      await page1.waitForSelector('#ctl00_body_date_misecirculation');
      await page1.$eval('#ctl00_body_date_misecirculation', (el,value) => el.value = value,req.body.dateCirculation);
      await page1.waitForSelector('#ctl00_body_date_acquisition');
      await page1.$eval('#ctl00_body_date_acquisition', (el,value) => el.value = value,req.body.dateAcquisition);
      await page1.waitForSelector('#ctl00_body_date_effet');
      await page1.$eval('#ctl00_body_date_effet', (el,value) => el.value = value,req.body.date_effect);
      if(req.body.assure=="1")
      {
        await page1.$eval( '#ctl00_body_veh_assure_sans_interruption_0', form => form.click() );
      }
      else
      {
        await page1.$eval( '#ctl00_body_veh_assure_sans_interruption_1', form => form.click() );
        await page1.waitForSelector('#ctl00_body_d_fin_assurance_vehicule');
        await page1.$eval('#ctl00_body_d_fin_assurance_vehicule', (el,value) => el.value = value,req.body.nonassuredate);
      }
      await page1.waitForSelector('#ctl00_body_modesFinancementAuto')
      await page1.select('#ctl00_body_modesFinancementAuto', req.body.mode);
    }else if(req.body.type=="2")
    {
      await page1.$eval( '#ctl00_body_modeacquisition_1', form => form.click() );
      await page1.waitForSelector('#ctl00_body_date_acquisition');
      await page1.$eval('#ctl00_body_date_acquisition', (el,value) => el.value = value,req.body.dateAcquisition);
      await page1.waitForSelector('#ctl00_body_date_effet');
      await page1.$eval('#ctl00_body_date_effet', (el,value) => el.value = value,req.body.date_effect);
      await page1.waitForSelector('#ctl00_body_modesFinancementAuto')
      await page1.select('#ctl00_body_modesFinancementAuto', req.body.mode);
    }
    else
    {
      await page1.$eval( '#ctl00_body_modeacquisition_2', form => form.click() );
      await page1.waitForSelector('#ctl00_body_date_misecirculation');
      await page1.$eval('#ctl00_body_date_misecirculation', (el,value) => el.value = value,req.body.dateCirculation);
      await page1.waitForSelector('#ctl00_body_date_acquisition');
      await page1.$eval('#ctl00_body_date_acquisition', (el,value) => el.value = value,req.body.dateAcquisition);
      await page1.waitForSelector('#ctl00_body_date_effet');
      await page1.$eval('#ctl00_body_date_effet', (el,value) => el.value = value,req.body.date_effect);
      await page1.waitForSelector('#ctl00_body_modesFinancementAuto')
      await page1.select('#ctl00_body_modesFinancementAuto', req.body.mode);
    }
    await page1.waitForSelector('#ctl00_body_Immatriculation');
      await page1.$eval('#ctl00_body_Immatriculation', (el,value) => el.value = value,req.body.matricule);
      await page1.$eval( '#btnImmat', form => form.click());
      await page1.waitForResponse(async(response) => {
        if(response.url().startsWith('https://devis.netvox-assurances.fr/WS/GlobalWS_Auto.asmx/getAutoImmatConstructeur')&& response.status() === 200 || response.status() === 404)
        {
          return await response;
        }
      });
      let res1= await page1.$$eval('input[name="choixvehicule"]', names => names.map(name =>
        {
          return name.id
        }));
        await page1.$eval( "#"+res1[0], form => form.click());
        await page1.$eval( "#validerChoix", form => form.click());
        await page1.waitForSelector('#ctl00_body_usagesAuto')
      await page1.select('#ctl00_body_usagesAuto', req.body.autoUse);
      await page1.waitForSelector('#ctl00_body_modesParkingAuto')
      await page1.select('#ctl00_body_modesParkingAuto', req.body.parkingMode);
      await page1.waitForSelector('#ctl00_body_cp');
    await page1.focus('#ctl00_body_cp')
    await page1.keyboard.type(req.body.code_postal)
    await page1.keyboard.press('Tab')
    await page1.waitForResponse(async(response) => {
      if(response.url().startsWith('https://devis.netvox-assurances.fr/WS/GlobalWS_Auto.asmx/checkCPVilleZonier')&& response.status() === 200)
      {
        return await response;
      }
    });
    await page1.keyboard.press('Tab')
    await page1.$eval( '#wizard > div.actionBar > a.buttonNext', form => form.click() );
    await page1.waitForSelector('#ctl00_body_conduitVehicule')
    await page1.select('#ctl00_body_conduitVehicule', req.body.conducteur);
    await page1.waitForSelector('#ctl00_body_titulaireCarteGrise')
    await page1.select('#ctl00_body_titulaireCarteGrise', req.body.titulaire);
    if(req.body.sexe="1")
    {
      await page1.$eval( '#ctl00_body_sexe_Conducteur_0', form => form.click() );
    }
    else
    {
      await page1.$eval( '#ctl00_body_sexe_Conducteur_1', form => form.click() );
    }
    await page1.waitForSelector('#ctl00_body_date_naissance_Conducteur');
    await page1.$eval('#ctl00_body_date_naissance_Conducteur', (el,value) => el.value = value,req.body.birthDate);
    await page1.waitForSelector('#ctl00_body_datepermis_Conducteur');
    await page1.$eval('#ctl00_body_datepermis_Conducteur', (el,value) => el.value = value,req.body.permiDate);
    await page1.waitForSelector('#ctl00_body_situationMatrimoniale_Conducteur')
    await page1.select('#ctl00_body_situationMatrimoniale_Conducteur', req.body.situation);
    await page1.waitForSelector('#ctl00_body_profession_Conducteur')
    await page1.select('#ctl00_body_profession_Conducteur', req.body.profession);
    if(req.body.acommpage="true")
    {
      await page1.$eval( '#ctl00_body_conduiteAccompagnee_Conducteur_0', form => form.click() );
    }
    await page1.waitForSelector('#ctl00_body_bonusMalus_Conducteur')
    await page1.select('#ctl00_body_bonusMalus_Conducteur', req.body.bonnus);
    await page1.$eval( '#ctl00_body_infractions_Conducteur_0', form => form.click() );
    switch(req.body.assureBefore)
    {
      case "1":
        await page1.waitForSelector('#ctl00_body_deja_assure_Conducteur')
        await page1.select('#ctl00_body_deja_assure_Conducteur', "1");
        await page1.waitForSelector('#ctl00_body_precedent_assureur_Conducteur');
        await page1.$eval('#ctl00_body_precedent_assureur_Conducteur', (el,value) => el.value = value,req.body.assureur);
        await page1.waitForSelector('#ctl00_body_resilieparassureur_Conducteur_0');
        if(req.body.contrat=="1")
          {
            await page1.$eval('#ctl00_body_resilieparassureur_Conducteur_0', (el) => el.click());
            if(req.body.motif=="1")
            {
              await page1.waitForSelector('#ctl00_body_motifresiliation_Conducteur');
              await page1.select('#ctl00_body_motifresiliation_Conducteur', req.body.motif);
              await page1.waitForSelector('#ctl00_body_nombre_assureur_Conducteur');
              await page1.select('#ctl00_body_nombre_assureur_Conducteur', req.body.nonPaiement);
              await page1.waitForSelector('#ctl00_body_resilierparassureur_Conducteur');
              await page1.$eval('#ctl00_body_resilierparassureur_Conducteur', (el,value) => el.value = value,req.body.companyName);
            }
            else{
              await page1.waitForSelector('#ctl00_body_motifresiliation_Conducteur');
              await page1.select('#ctl00_body_motifresiliation_Conducteur', req.body.motif);
              await page1.waitForSelector('#ctl00_body_resilierparassureur_Conducteur');
              await page1.$eval('#ctl00_body_resilierparassureur_Conducteur', (el,value) => el.value = value,req.body.companyName);
            }
          }
        else
          await page1.$eval('#ctl00_body_resilieparassureur_Conducteur_1', (el) => el.click());
        break;
      case "2":
        await page1.waitForSelector('#ctl00_body_deja_assure_Conducteur')
        await page1.select('#ctl00_body_deja_assure_Conducteur', "2");
        await page1.waitForSelector('#ctl00_body_interruption_date1_Conducteur');
        await page1.$eval('#ctl00_body_interruption_date1_Conducteur', (el,value) => el.value = value,req.body.du);
        await page1.waitForSelector('#ctl00_body_interruption_date2_Conducteur');
        await page1.$eval('#ctl00_body_interruption_date2_Conducteur', (el,value) => el.value = value,req.body.au);
        await page1.waitForSelector('#ctl00_body_nbr_mois_assurance_Conducteur');
        await page1.select('#ctl00_body_nbr_mois_assurance_Conducteur', req.body.nombreMois1);
        await page1.waitForSelector('#ctl00_body_precedent_assureur_Conducteur');
        await page1.$eval('#ctl00_body_precedent_assureur_Conducteur', (el,value) => el.value = value,req.body.assureur);
        await page1.waitForSelector('#ctl00_body_resilieparassureur_Conducteur_0');
        if(req.body.contrat=="1")
          {
            await page1.$eval('#ctl00_body_resilieparassureur_Conducteur_0', (el) => el.click());
            if(req.body.motif=="1")
            {
              await page1.waitForSelector('#ctl00_body_motifresiliation_Conducteur');
              await page1.select('#ctl00_body_motifresiliation_Conducteur', req.body.motif);
              await page1.waitForSelector('#ctl00_body_nombre_assureur_Conducteur');
              await page1.select('#ctl00_body_nombre_assureur_Conducteur', req.body.nonPaiement);
              await page1.waitForSelector('#ctl00_body_resilierparassureur_Conducteur');
              await page1.$eval('#ctl00_body_resilierparassureur_Conducteur', (el,value) => el.value = value,req.body.companyName);
            }
            else{
              await page1.waitForSelector('#ctl00_body_motifresiliation_Conducteur');
              await page1.select('#ctl00_body_motifresiliation_Conducteur', req.body.motif);
              await page1.waitForSelector('#ctl00_body_resilierparassureur_Conducteur');
              await page1.$eval('#ctl00_body_resilierparassureur_Conducteur', (el,value) => el.value = value,req.body.companyName);
            }
          }
        else
          await page1.$eval('#ctl00_body_resilieparassureur_Conducteur_1', (el) => el.click());
        break;
      case "4":
        await page1.waitForSelector('#ctl00_body_deja_assure_Conducteur')
        await page1.select('#ctl00_body_deja_assure_Conducteur', "4");
        break;
      case "5":
        await page1.waitForSelector('#ctl00_body_deja_assure_Conducteur')
        await page1.select('#ctl00_body_deja_assure_Conducteur', "5");
        await page1.waitForSelector('#ctl00_body_precedent_assureur_Conducteur');
        await page1.$eval('#ctl00_body_precedent_assureur_Conducteur', (el,value) => el.value = value,req.body.assureur);
        await page1.waitForSelector('#ctl00_body_resilieparassureur_Conducteur_0');
        if(req.body.contrat=="1")
          {
            await page1.$eval('#ctl00_body_resilieparassureur_Conducteur_0', (el) => el.click());
            if(req.body.motif=="1")
            {
              await page1.waitForSelector('#ctl00_body_motifresiliation_Conducteur');
              await page1.select('#ctl00_body_motifresiliation_Conducteur', req.body.motif);
              await page1.waitForSelector('#ctl00_body_nombre_assureur_Conducteur');
              await page1.select('#ctl00_body_nombre_assureur_Conducteur', req.body.nonPaiement);
              await page1.waitForSelector('#ctl00_body_resilierparassureur_Conducteur');
              await page1.$eval('#ctl00_body_resilierparassureur_Conducteur', (el,value) => el.value = value,req.body.companyName);
            }
            else{
              await page1.waitForSelector('#ctl00_body_motifresiliation_Conducteur');
              await page1.select('#ctl00_body_motifresiliation_Conducteur', req.body.motif);
              await page1.waitForSelector('#ctl00_body_resilierparassureur_Conducteur');
              await page1.$eval('#ctl00_body_resilierparassureur_Conducteur', (el,value) => el.value = value,req.body.companyName);
            }
          }
        else
          await page1.$eval('#ctl00_body_resilieparassureur_Conducteur_1', (el) => el.click());
        break;
      case "6":
        await page1.waitForSelector('#ctl00_body_deja_assure_Conducteur')
        await page1.select('#ctl00_body_deja_assure_Conducteur', "6");
        await page1.waitForSelector('#ctl00_body_deja_assure_Conducteur')
        await page1.select('#ctl00_body_deja_assure_Conducteur', req.body.nombreMois);
        await page1.waitForSelector('#ctl00_body_resilieparassureur_Conducteur_0');
        if(req.body.contrat=="1")
          {
            await page1.$eval('#ctl00_body_resilieparassureur_Conducteur_0', (el) => el.click());
            if(req.body.motif=="1")
            {
              await page1.waitForSelector('#ctl00_body_motifresiliation_Conducteur');
              await page1.select('#ctl00_body_motifresiliation_Conducteur', req.body.motif);
              await page1.waitForSelector('#ctl00_body_nombre_assureur_Conducteur');
              await page1.select('#ctl00_body_nombre_assureur_Conducteur', req.body.nonPaiement);
              await page1.waitForSelector('#ctl00_body_resilierparassureur_Conducteur');
              await page1.$eval('#ctl00_body_resilierparassureur_Conducteur', (el,value) => el.value = value,req.body.companyName);
            }
            else{
              await page1.waitForSelector('#ctl00_body_motifresiliation_Conducteur');
              await page1.select('#ctl00_body_motifresiliation_Conducteur', req.body.motif);
              await page1.waitForSelector('#ctl00_body_resilierparassureur_Conducteur');
              await page1.$eval('#ctl00_body_resilierparassureur_Conducteur', (el,value) => el.value = value,req.body.companyName);
            }
          }
        else
          await page1.$eval('#ctl00_body_resilieparassureur_Conducteur_1', (el) => el.click());
        break;
      case "7":
        await page1.waitForSelector('#ctl00_body_deja_assure_Conducteur')
        await page1.select('#ctl00_body_deja_assure_Conducteur', "7");
        await page1.waitForSelector('#ctl00_body_precedent_assureur_Conducteur');
        await page1.$eval('#ctl00_body_precedent_assureur_Conducteur', (el,value) => el.value = value,req.body.assureur);
        await page1.waitForSelector('#ctl00_body_resilieparassureur_Conducteur_0');
        if(req.body.contrat=="1")
          {
            await page1.$eval('#ctl00_body_resilieparassureur_Conducteur_0', (el) => el.click());
            if(req.body.motif=="1")
            {
              await page1.waitForSelector('#ctl00_body_motifresiliation_Conducteur');
              await page1.select('#ctl00_body_motifresiliation_Conducteur', req.body.motif);
              await page1.waitForSelector('#ctl00_body_nombre_assureur_Conducteur');
              await page1.select('#ctl00_body_nombre_assureur_Conducteur', req.body.nonPaiement);
              await page1.waitForSelector('#ctl00_body_resilierparassureur_Conducteur');
              await page1.$eval('#ctl00_body_resilierparassureur_Conducteur', (el,value) => el.value = value,req.body.companyName);
            }
            else{
              await page1.waitForSelector('#ctl00_body_motifresiliation_Conducteur');
              await page1.select('#ctl00_body_motifresiliation_Conducteur', req.body.motif);
              await page1.waitForSelector('#ctl00_body_resilierparassureur_Conducteur');
              await page1.$eval('#ctl00_body_resilierparassureur_Conducteur', (el,value) => el.value = value,req.body.companyName);
            }
          }
        else
          await page1.$eval('#ctl00_body_resilieparassureur_Conducteur_1', (el) => el.click());
        break;
    }
    await page1.waitForTimeout(300)
    await page1.waitForSelector( '#wizard > div.actionBar > a.buttonFinish');
    await page1.click( '#wizard > div.actionBar > a.buttonFinish');
    await page1.waitForNavigation({waitUntil: 'domcontentloaded'})
     res1= await page1.$$eval('td.cell.valeur.prime', names => names.map(name =>
      {
        var ch={}
        var list=name.getElementsByTagName('span')
        var prix="";
        for(i=1;i<list.length;i++)
        {
          prix+=list[i].innerHTML
        }
        ch['prix']=prix
        return ch['prix']
      }));
      var noms= await page1.$$eval('span.titreFormule', names => names.map(name =>
        {
          return name.innerHTML
        }));
      var resulats={}
      for(i=0;i<noms.length;i++)
      {
        var ch={}
        ch['image']="https://devis.netvox-assurances.fr/csf/logos/cpe/logo_mgard.jpg"
        ch['name']=noms[i]
        ch['prix']=res1[i]
        resulats[ch.name+i]=ch
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
    getAUTO
}