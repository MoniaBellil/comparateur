const asurar =require("../models/asurar")
function getAllasurar(){
    return new Promise((resolve, reject) => {
            (async () => {
                await asurar.find().then((value) => {
                    resolve(value);
                })
                .catch((err) => {
                    //Error hashing
                    reject(err);
                });
            })();
    });
}
module.exports = {
    getAllasurar
  };