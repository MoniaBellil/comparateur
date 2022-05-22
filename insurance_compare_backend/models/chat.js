var mongoose=require('mongoose');

var chatSchema = new mongoose.Schema({
    Race_court:String,
    Race_long:String,
});

module.exports = mongoose.model(
    'chat', chatSchema, 'chat');
