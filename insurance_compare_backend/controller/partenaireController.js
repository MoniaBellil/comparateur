const partenaireService = require("../service/partenaireService");
exports.newPartenaire = (req, res) => {
    partenaireService
    .newPartenaire(req)
    .then((result) => {
        return res.status(200).json(result);
    })
    .catch((err) => {
    });
  };
  exports.deletePartenaire = (req, res) => {
    partenaireService
    .deletePartenaire(req)
    .then((result) => {
        return res.status(200).json(result);
    })
    .catch((err) => {
    });
  };
  exports.getAllPartenaire = (req, res) => {
    partenaireService
    .getAllPartenaire()
    .then((result) => {
        return res.status(200).json(result);
    })
    .catch((err) => {
    });
  };