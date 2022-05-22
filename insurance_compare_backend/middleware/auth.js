const jwt = require("jsonwebtoken");
const config = require("../config/index");

//A middleware function to check whether the token is included in the request or not
verifyRequestToken = (req, res, next) => {
    //GetAuthHeaderValue format Authorization : Bearer <access_token>
    const bearerHeader = req.headers["authorization"]; //Actual token
    if (typeof bearerHeader !== "undefined") {
        //extracting the token
        const bearer = bearerHeader.split(" ");
        // Get token
        const bearerToken = bearer[1];
        //Set the token into the request
        req.token = bearerToken;
        next();
    } else {
        return res.sendStatus(403);
        // we don't call next to not execute the callback
    }
};

//A middleware function to check whether the token is valid and not expired or not
verifyTokenValidity = (req, res, next) => {
    jwt.verify(req.token, config.auth.key, (err, authData) => {
        if (err) {
            if (err.name === "TokenExpiredError") {
                return res.status(401).json({
                    msg: "Token has expired ! "
                });
            } else {
                //invalid token delivered in the request
                return res.send(err);
            }
        }
        // No problem with the token !
        next();
    });
};

module.exports = {
    verifyRequestToken,
    verifyTokenValidity
};