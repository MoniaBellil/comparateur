var mongoose=require('mongoose');
  
var asurarSchema = new mongoose.Schema({
    id_assureur:String,
    etat:String,
    assureur:String,
    ID:String,
	NewObject:String,
    Dirty:String,
    Deleted:String,
    Key:String,
});
  
module.exports = mongoose.model(
    'asurar', asurarSchema, 'asurar');