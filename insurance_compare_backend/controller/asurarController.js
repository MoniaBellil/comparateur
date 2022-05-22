const asurarService = require("../service/asurarService");
exports.getAllasurar = (req, res) => {
    asurarService
    .getAllasurar()
    .then((result) => {
        return res.status(200).json(result);
    })
    .catch((err) => {
        return res.status(200).json([]);
    });
  };