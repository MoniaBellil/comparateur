const serviceAuth = require("../service/authService");
const jwt= require('jsonwebtoken')
exports.signup=async (req,res)=>{
    if (
        req.body.email === null ||
        req.body.fullname === null ||
        req.body.password === null 
      ) {
        return res
          .status(422)
          .json({ msg: "Username,fullname and password are required !" });
      }
    serviceAuth.register(req).then(() => {
        return res
          .status(200)
          .json({ msg: "Admin registered successfully!" });
      })
      .catch((err) => {
        console.log('err :>> ', err);
        return res.status(500).json({ msg: err.message });
      });
}

exports.getRole=async (req,res)=>{
    serviceAuth
    .getRole(req.body.token)
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

exports.getAllAdmin=async (req,res)=>{
    serviceAuth
    .getAllAdmin(req.body.token)
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
exports.deleteAdmin=async (req,res)=>{
  serviceAuth
  .deleteAdmin(req)
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

exports.login=async (req,res)=>{
    serviceAuth
    .login(req)
    .then((result) => {
      if (result === null) {
        //Not found or invalid
        return res
          .status(401)
          .json({ msg: "No account associated with this username !" });
      } else {
        return res.status(200).json(result);
      }
    })
    .catch((err) => {
      console.log(err.message);
      if (err.message === "Invalid password !") {
        return res.status(401).json({ msg: err.message });
      } else {
        //Another error
        return res.status(500).json({ msg: err.message });
      }
    });
}
exports.verify = (req,res)=>{
  jwt.verify(req.body.token, process.env.JWT_SECRET, (err, authData) => {
      if (err) {return res.status(200).json("Token has expired ! ");
      }
      // No problem with the token !
      return res.status(200).json("Valide Token");
  });
};