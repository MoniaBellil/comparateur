const bodyParser = require("body-parser");

module.exports = (expressApp) => {
    expressApp.use(
        bodyParser.urlencoded({
            extended: false,
        })
    );
    expressApp.use(bodyParser.json());
    // expressApp.use(require('../routes/auth'));
    expressApp.get("/", (req, res) => {
        res.send("<h1> Up and running </h1>");
    });
};
