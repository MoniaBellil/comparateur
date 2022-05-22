const req = require("express/lib/request");
const codePostal =require("../models/CodePostal")
function checkCodePostal(req){
    return new Promise((resolve, reject) => {
        (async () => {
            await codePostal.find({ CodePostal:req.body.code}).then((value)=>{
                resolve(value)
            }).catch((e)=>{
                resolve([])
            })
        })();
    });
}
module.exports = {
    checkCodePostal
  };