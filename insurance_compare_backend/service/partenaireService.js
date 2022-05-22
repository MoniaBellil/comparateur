const partenaire =require("../models/partenaire")
function newPartenaire(req){
    return new Promise((resolve, reject) => {
            (async () => {
                await partenaire.create(req.body).then((value) => {
                    resolve(value);
                })
                .catch((err) => {
                    //Error hashing
                    reject(err);
                });
            })();
    });
}
function deletePartenaire(req){
    return new Promise((resolve, reject) => {
            (async () => {
                await partenaire.deleteOne({ _id: req.body.id }).then((value) => {
                    resolve(value);
                })
                .catch((err) => {
                    //Error hashing
                    reject(err);
                });
            })();
    });
}
function getAllPartenaire(){
    return new Promise((resolve, reject) => {
            (async () => {
                await partenaire.find().then((value) => {
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
    newPartenaire,
    deletePartenaire,
    getAllPartenaire
  };