const express=require('express')
const partenaireController=require('../controller/ClientController')
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()
const router=express.Router()

router.post('/deleteClient',jsonParser, partenaireController.deleteClient)
router.post('/GetListClient',jsonParser, partenaireController.GetListClient)
router.post('/GetUpdateClient',jsonParser, partenaireController.updateClient)
router.post('/sendEmail',jsonParser, partenaireController.sendEmail)

module.exports=router