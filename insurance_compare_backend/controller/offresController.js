const offreService = require("../service/offresService");
exports.getOffresSante = (req, res) => {
  offreService
    .getOffresSante(req)
    .then((result) => {
      if(result.length==0)
      return res.status(404).json("vérifier vos informations");
    else
      return res.status(200).json(result);
    })
    .catch((err) => {
    });
  };
  exports.getOffresProtectionJuridique = (req, res) => {
    offreService
    .getOffresProtectionJuridique(req)
    .then((result) => {
      if(result.length==0)
        return res.status(404).json("vérifier vos informations");
      else
        return res.status(200).json(result);
    })
    .catch((err) => {
    });
      //res.send('list1');  
  };
  exports.getOffresPrevoyance = (req, res) => {
    offreService
      .getOffresPrevoyance(req)
      .then((result) => {
        if(result.length==0)
        return res.status(404).json("vérifier vos informations");
      else
        return res.status(200).json(result);
      })
      .catch((err) => {
      });
  };
  exports.getMoto = (req, res) => {
    offreService
      .getMoto(req)
      .then((result) => {
        if(result.length==0)
            return res.status(404).json("vérifier vos informations");
        else
            return res.status(200).json(result);
      })
      .catch((err) => {
      });
  };
  exports.getEMPRUNTEUR = (req, res) => {
    offreService
      .getEMPRUNTEUR(req)
      .then((result) => {
        if(result.length==0)
        return res.status(404).json("vérifier vos informations");
      else
        return res.status(200).json(result);
      })
      .catch((err) => {
      });
  };
  exports.getOffresAnimmal = (req, res) => {
    offreService
      .getOffresAnimmal(req)
      .then((result) => {
        if(result.length==0)
        return res.status(404).json("vérifier vos informations");
      else
        return res.status(200).json(result);
      })
      .catch((err) => {
      });
  };

  exports.getRachat = (req, res) => {
    offreService
      .getRachat(req)
      .then((result) => {
          return res.status(200).json(result);
      })
      .catch((err) => {
      });
  };

  exports.getDefiscalisation = (req, res) => {
    offreService
      .getDefiscalisation(req)
      .then((result) => {
          return res.status(200).json(result);
      })
      .catch((err) => {
      });
  };

  exports.getEnergie = (req, res) => {
    offreService
      .getEnergie(req)
      .then((result) => {
          return res.status(200).json(result);
      })
      .catch((err) => {
      });
  };

  exports.getAUTO = (req, res) => {
    offreService
      .getAUTO(req)
      .then((result) => {
        if(result.length==0)
        return res.status(404).json("vérifier vos informations");
      else
        return res.status(200).json(result);
      })
      .catch((err) => {
      });
  };