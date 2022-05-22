var mongoose=require('mongoose');

var chienSchema = new mongoose.Schema({
    Race_court:String,
    Race_long:String,
});

module.exports = mongoose.model(
    'chien', chienSchema, 'chien');
