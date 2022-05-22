const express=require('express')
const authController=require('../controller/authController')
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()
const router=express.Router()

router.post('/signup',jsonParser, authController.signup)
router.post('/login',jsonParser, authController.login)
router.post('/getRole',jsonParser, authController.getRole)
router.post('/getAllAdmin',jsonParser, authController.getAllAdmin)
router.post('/deleteAdmin',jsonParser, authController.deleteAdmin)
router.post('/verify',jsonParser, authController.verify)

module.exports=router