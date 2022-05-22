var mongoose=require('mongoose');

var partenaireSchema = new mongoose.Schema({
	Name:String,
	Image:String,
});

module.exports = mongoose.model(
	'partenaire', partenaireSchema, 'partenaires');
