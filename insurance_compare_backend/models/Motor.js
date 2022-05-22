var mongoose=require('mongoose');
  
var MotorSchema = new mongoose.Schema({
    cylindree:String,
    marque:String,
    modele:String,
});
  
module.exports = mongoose.model(
    'Motor', MotorSchema, 'Motor');