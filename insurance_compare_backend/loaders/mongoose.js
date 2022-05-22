const mongoose = require('mongoose');
const config = require('../config/index');

module.exports = async () => {
    const connection = mongoose.connection;
    console.log(config.db);
    mongoose.connect(config.db.uri, {
        'useNewUrlParser': true,
        'useUnifiedTopology': true
    });

    connection.on('error', console.error.bind(console, 'connection error:'));
    connection.once('open', function () {
        console.info("Connected to MongoDB.");
    });

    return connection.db;
};