const chienService = require("../service/chienService");
exports.getAllchien = (req, res) => {
    chienService
        .getAllchien()
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(200).json([]);
        });
};
