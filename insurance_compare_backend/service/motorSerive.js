const req = require("express/lib/request");
const codePostal =require("../models/Motor")
function checkMotor(req){
    return new Promise((resolve, reject) => {
        (async () => {
            await codePostal.find({ marque:req.body.marque}).then((value)=>{
                resolve(value)
            }).catch((e)=>{
                reject(e);
            })
        })();
    });
}
module.exports = {
    checkMotor
  };