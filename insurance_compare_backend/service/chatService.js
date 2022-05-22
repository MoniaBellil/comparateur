const chat =require("../models/chat")
function getAllchat(){
    return new Promise((resolve, reject) => {
        (async () => {
            await chat.find().then((value) => {
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
    getAllchat
};
