const chatService = require("../service/chatService");
exports.getAllchat = (req, res) => {
    chatService
        .getAllchat()
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(200).json([]);
        });
};
