const express=require('express')
const partenaireController=require('../controller/partenaireController')
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()
const router=express.Router()

router.post('/newPartenaire',jsonParser, partenaireController.newPartenaire)
router.post('/deletePartenaire',jsonParser, partenaireController.deletePartenaire)
router.get('/getAllPartenaire',jsonParser, partenaireController.getAllPartenaire)

module.exports=router