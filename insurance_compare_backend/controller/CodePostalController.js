const codePostalService = require("../service/codePostalService");
exports.checkCodePostal = (req, res) => {
    codePostalService
    .checkCodePostal(req)
    .then((result) => {
        return res.status(200).json(result);
    })
    .catch((err) => {
        return res.status(200).json([]);
    });
  };