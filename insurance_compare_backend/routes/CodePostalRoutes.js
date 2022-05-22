const express=require('express')
const codePostalController=require('../controller/CodePostalController')
const MotorContoller=require('../controller/MotorContoller')
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()
const router=express.Router()

router.post('/checkCodePostal',jsonParser, codePostalController.checkCodePostal)
router.post('/checkMotor',jsonParser, MotorContoller.checkMotor)

module.exports=router