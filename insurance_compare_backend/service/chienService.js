const chien =require("../models/chien")
function getAllchien(){
    return new Promise((resolve, reject) => {
        (async () => {
            await chien.find().then((value) => {
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
    getAllchien
};
