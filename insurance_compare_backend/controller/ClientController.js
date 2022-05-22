const clientService = require("../service/clientService");
exports.GetListClient=async (req,res)=>{
    clientService
    .GetListClient(req.body.token)
    .then((result) => {
      if (result === null) {
        //Not found or invalid
        return res
          .status(401)
          .json({ msg: "No account associated with this token!" });
      } else {
        return res.status(200).json(result);
      }
    })
    .catch((err) => {
        //Another error
        return res.status(500).json({ msg: err.message });
    });
  }
  exports.deleteClient=async (req,res)=>{
    clientService
    .deleteClient(req)
    .then((result) => {
      if (result === null) {
        //Not found or invalid
        return res
          .status(401)
          .json({ msg: "No account associated with this token!" });
      } else {
        return res.status(200).json(result);
      }
    })
    .catch((err) => {
        //Another error
        return res.status(500).json({ msg: err.message });
    });
  }
  exports.updateClient=async (req,res)=>{
    clientService
    .updateClient(req)
    .then((result) => {
        return res.status(200).json(result);
    })
    .catch((err) => {
        //Another error
        return res.status(500).json({ msg: err.message });
    });
  }
  exports.sendEmail=async (req,res)=>{
    clientService
    .sendEmail(req)
    .then((result) => {
        return res.status(200).json(result);
    })
    .catch((err) => {
        //Another error
        return res.status(500).json({ msg: err.message });
    });
  }