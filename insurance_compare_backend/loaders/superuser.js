const config = require('../config/index');
const authService = require('../service/authService');
const User = require("../models/User");

module.exports = async () => {
    const superUser = config.superuser;
    authService.checkEmailAvailability(superUser.email).then(() => {
        (async () => {
            await User.create(superUser).then(() => {
                console.log("Superuser registered successfully!");
            })
            .catch((err) => {
                //Error hashing
                console.log(err.message);
            });
        })();
    })
    .catch((err) => {
        console.log(err.message);
    });
};