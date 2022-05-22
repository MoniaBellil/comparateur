var mongoose=require('mongoose');
const { object } = require('underscore');
  
var ClientSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    phonenumber:String,
    email:String,
	Type:String,
    time:String,
    call:String,
    BirthDate:String
});
  
module.exports = mongoose.model(
    'Client', ClientSchema, 'Clients');