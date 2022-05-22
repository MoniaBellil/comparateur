const express=require('express')
const asurarController=require('../controller/asurarController')
const chatController=require('../controller/chatController')
const chienController=require('../controller/chien')
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()
const router=express.Router()

router.get('/getAllasurar',jsonParser, asurarController.getAllasurar)
router.get('/getAllchat',jsonParser, chatController.getAllchat)
router.get('/getAllchien',jsonParser, chienController.getAllchien)

module.exports=router
