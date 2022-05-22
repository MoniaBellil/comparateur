const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    NomSite: {
        type: String,
        unique: true,
    },
    ValueCookie: {
        type: String,
    },
});
module.exports = mongoose.model('cookie', userSchema);