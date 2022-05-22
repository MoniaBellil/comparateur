const neoliane = require("../service/neoliane");
const fma = require("../service/fma");
const eca = require("../service/eca");
const gate = require("../service/assurgate");
const wazari=require("../service/wazari");
const sollyazarpro=require("../service/sollyazarpro");
const { Worker } = require('worker_threads');
const _ = require('underscore')
const netvox=require('../service/netvox')
const simulassur=require('../service/simulassur')
const mongoose = require('../loaders/mongoose');
function getOffresProtectionJuridique(req) {
    //console.log("Checking availability!");
    return new Promise(async(resolve, reject) => {
      /*var list3={}
      var res3=new Promise((resolve, reject) => {Worker.on(req,gate
        .getOffresProtectionJuridique(req).then((result) => {
          //console.log(result);
          resolve(result)
      })
      .catch((err) => {
        reject(err)
      }))})
       list3 =await res3*/
      var list2={}
      var res2=new Promise((resolve, reject) => {Worker.on(req,eca
        .getOffresProtectionJuridique(req).then((result) => {
          //console.log(result);
          resolve(result)
      })
      .catch((err) => {
        reject(err)
      }))})
       list2 =await res2
        var list={}
      var list1={}
      var res=new Promise((resolve, reject) => {Worker.on(req,fma
        .getOffresProtectionJuridique(req).then((result) => {
          //console.log(result);
          resolve(result)
      })
      .catch((err) => {
        reject(err)
      }))})
      list =await res
      var res1=new Promise((resolve, reject) => {Worker.on(req,neoliane
        .getOffresProtectionJuridique(req)
            .then((result) => {
                resolve(result)
      })
      .catch((err) => {
        reject(err)
      }))})
       list1 =await res1
       var listeFinal=_.extend(list2,list,list1)
       if(listeFinal.length==0)
     {
const db=await mongoose ();
        await db.collection('Clients').insertOne(req.body);
        resolve([])
     }
     else
     {
        const db=await mongoose ();
        const client=await db.collection('Clients').insertOne(req.body);
        var resultats={}
        resultats['liste']=listeFinal
        resultats['client']=client["insertedId"]
        resolve(resultats)
    }
    });
  }
  function getOffresSante(req) {
    //console.log("Checking availability!");
    return new Promise(async(resolve, reject) => {
      var list={}
      var list9={}
    /*var res9=new Promise((resolve, reject) => {Worker.on(req,gate
      .getOffresSante(req)
          .then((result) => {
              resolve(result)
    })
    .catch((err) => {
      reject(err)
    }))})
     list9 =await res9*/
    var list1={}
    var res1=new Promise((resolve, reject) => {Worker.on(req,sollyazarpro
      .getOffresSante(req)
          .then((result) => {
              resolve(result)
    })
    .catch((err) => {
      reject(err)
    }))})
     list1 =await res1
     var res=new Promise((resolve, reject) => {Worker.on(req,neoliane
      .getOffresSante(req).then((result) => {
        //console.log(result);
        resolve(result)
    })
    .catch((err) => {
      reject(err)
    }))})
    list =await res
    var res2=new Promise((resolve, reject) => {Worker.on(req,fma
        .getOffresSante(req).then((result) => {
          //console.log(result);
          resolve(result)
      })
      .catch((err) => {
        reject(err)
      }))})
      list2 =await res2
      var res3=new Promise((resolve, reject) => {Worker.on(req,wazari
        .getOffresSante(req).then((result) => {
          //console.log(result);
          resolve(result)
      })
      .catch((err) => {
        reject(err)
      }))})
      list3 =await res3
      var res4=new Promise((resolve, reject) => {Worker.on(req,eca
        .getOffresSante(req).then((result) => {
          //console.log(result);
          resolve(result)
      })
      .catch((err) => {
        reject(err)
      }))})
      const list4 =await res4
      var listeFinal=_.extend(list, list1,list2,list3,list4,list9)
      if(listeFinal.length==0)
      {
       resolve([])
      }
      else
      {
         const db=await mongoose ();
         const client=await db.collection('Clients').insertOne(req.body);
         var resultats={}
         resultats['liste']=listeFinal
         resultats['client']=client["insertedId"]
         resolve(resultats)
     }
  });
  }
  function getOffresPrevoyance(req) {
    //console.log("Checking availability!");
    return new Promise(async(resolve, reject) => {
      var list={}
     /* var list4={}
    var res4=new Promise((resolve, reject) => {Worker.on(req,wazari
      .getOffresPrevoyance(req)
          .then((result) => {
              resolve(result)
    })
    .catch((err) => {
      reject(err)
    }))})
     list4 =await res4*/
      var list3={}
    var res3=new Promise((resolve, reject) => {Worker.on(req,fma
      .getOffresPrevoyance(req)
          .then((result) => {
              resolve(result)
    })
    .catch((err) => {
      reject(err)
    }))})
     list3 =await res3
    var list1={}
    var res1=new Promise((resolve, reject) => {Worker.on(req,eca
      .getOffresPrevoyance(req)
          .then((result) => {
              resolve(result)
    })
    .catch((err) => {
      reject(err)
    }))})
     list1 =await res1
     var res=new Promise((resolve, reject) => {Worker.on(req,neoliane
      .getOffresPrevoyance(req).then((result) => {
        //console.log(result);
        resolve(result)
    })
    .catch((err) => {
      reject(err)
    }))})
    list =await res
    /*var res2=new Promise((resolve, reject) => {Worker.on(req,gate
        .getOffresPrevoyance(req).then((result) => {
          //console.log(result);
          resolve(result)
      })
      .catch((err) => {
        reject(err)
      }))})
      list2 =await res2*/
      var res6=new Promise((resolve, reject) => {Worker.on(req,sollyazarpro
        .getOffresPrevoyance(req).then((result) => {
          resolve(result)
      })
      .catch((err) => {
        reject(err)
      }))})
      var list6 =await res6
      var listeFinal=_.extend(list, list1,list3,list2,list6)
      if(listeFinal.length==0)
     {
const db=await mongoose ();
        await db.collection('Clients').insertOne(req.body);
        resolve([])
     }
     else
     {
        const db=await mongoose ();
        const client=await db.collection('Clients').insertOne(req.body);
        var resultats={}
        resultats['liste']=listeFinal
        resultats['client']=client["insertedId"]
        resolve(resultats)
    }
  });
  }
  function getOffresAnimmal(req) {
    return new Promise(async(resolve, reject) => {
    var list1={}
    var res1=new Promise((resolve, reject) => {Worker.on(req,fma
      .getOffresAnimal(req)
          .then((result) => {
              resolve(result)
    })
    .catch((err) => {
      reject(err)
    }))})
     list1 =await res1
     var res=new Promise((resolve, reject) => {Worker.on(req,eca
      .getOffresAnimal(req).then((result) => {
        //console.log(result);
        resolve(result)
    })
    .catch((err) => {
      reject(err)
    }))})
    list =await res
    var res2=new Promise((resolve, reject) => {Worker.on(req,neoliane
        .getOffresAnimal(req).then((result) => {
          resolve(result)
      })
      .catch((err) => {
        reject(err)
      }))})
      list2 =await res2
      var res6=new Promise((resolve, reject) => {Worker.on(req,sollyazarpro
        .getOffresAnimal(req).then((result) => {
          resolve(result)
      })
      .catch((err) => {
        reject(err)
      }))})
      var list6 =await res6
      var listeFinal=_.extend(list1,list,list2,list6)
      if(listeFinal.length==0)
      {
       resolve([])
      }
      else
      {
         const db=await mongoose ();
         const client=await db.collection('Clients').insertOne(req.body);
         var resultats={}
         resultats['liste']=listeFinal
         resultats['client']=client["insertedId"]
         resolve(resultats)
     }
  });
  }
  function getMoto(req) {
    return new Promise(async(resolve, reject) => {
      
      var list3={}
    var res3=new Promise((resolve, reject) => {Worker.on(req,fma
      .getMoto(req)
          .then((result) => {
              resolve(result)
    })
    .catch((err) => {
      reject(err)
    }))})
     list3 =await res3
     var listeFinal=_.extend(list3)
     if(listeFinal.length==0)
     {
const db=await mongoose ();
        await db.collection('Clients').insertOne(req.body);
        resolve([])
     }
     else
     {
        const db=await mongoose ();
        const client=await db.collection('Clients').insertOne(req.body);
        var resultats={}
        resultats['liste']=listeFinal
        resultats['client']=client["insertedId"]
        resolve(resultats)
    }
     
  });
  }
  function getEMPRUNTEUR(req) {
    return new Promise(async(resolve, reject) => {
      var list3={}
    var res3=new Promise((resolve, reject) => {Worker.on(req,simulassur
      .getEMPRUNTEUR(req)
          .then((result) => {
              resolve(result)
    })
    .catch((err) => {
      reject(err)
    }))})
     list3 =await res3
     var list2={}
     var res2=new Promise((resolve, reject) => {Worker.on(req,sollyazarpro
       .getEMPRUNTEUR(req)
           .then((result) => {
               resolve(result)
     })
     .catch((err) => {
       reject(err)
     }))})
      list2 =await res2
      var listeFinal=_.extend(list3,list2)
      if(listeFinal.length==0)
     {
const db=await mongoose ();
        await db.collection('Clients').insertOne(req.body);
        resolve([])
     }
     else
     {
        const db=await mongoose ();
        const client=await db.collection('Clients').insertOne(req.body);
        var resultats={}
        resultats['liste']=listeFinal
        resultats['client']=client["insertedId"]
        resolve(resultats)
    }
  });
  }
  function getEnergie(req) {
    return new Promise(async(resolve, reject) => {
        const db=await mongoose ();
        const client=await db.collection('Clients').insertOne(req.body);
      resolve(client)
  });
  }
  function getAUTO(req) {
    return new Promise(async(resolve, reject) => {
      var list1={}
    var res1=new Promise((resolve, reject) => {Worker.on(req,wazari
      .getAUTO(req)
          .then((result) => {
              resolve(result)
    })
    .catch((err) => {
      reject(err)
    }))})
     list1=await res1
        var list3={}
    var res3=new Promise((resolve, reject) => {Worker.on(req,netvox
      .getAUTO(req)
          .then((result) => {
              resolve(result)
    })
    .catch((err) => {
      reject(err)
    }))})
     list3 =await res3
     
     var listeFinal=_.extend(list3,list1)
     if(listeFinal.length==0)
     {
        const db=await mongoose ();
        await db.collection('Clients').insertOne(req.body);
        resolve([])
     }
     else
     {
        const db=await mongoose ();
        const client=await db.collection('Clients').insertOne(req.body);
        var resultats={}
        resultats['liste']=listeFinal
        resultats['client']=client["insertedId"]
        resolve(resultats)
    }
  });
  }
  function getDefiscalisation(req) {
    return new Promise(async(resolve, reject) => {
        const db=await mongoose ();
        const client=await db.collection('Clients').insertOne(req.body);
      resolve(client)
  });
  }
  function getRachat(req) {
    return new Promise(async(resolve, reject) => {
        const db=await mongoose ();
        const client=await db.collection('Clients').insertOne(req.body);
      resolve(client)
  });
  }

  module.exports = {
    getOffresProtectionJuridique,
    getOffresSante,
    getOffresPrevoyance,
    getOffresAnimmal,
    getMoto,
    getEnergie,
    getDefiscalisation,
    getRachat,
    getEMPRUNTEUR,
    getAUTO
}
