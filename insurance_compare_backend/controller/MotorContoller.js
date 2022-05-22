const motorSerive = require("../service/motorSerive");
exports.checkMotor = (req, res) => {
    motorSerive
    .checkMotor(req)
    .then((result) => {
        return res.status(200).json(result);
    })
    .catch((err) => {
    });
  };