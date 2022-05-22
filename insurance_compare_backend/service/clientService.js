const UserService =require("../service/authService")
const client = require("../models/Client")
const mongoose = require('../loaders/mongoose');
const {ObjectId} = require("mongodb");
const nodemailer = require('nodemailer');
require('dotenv').config();
function GetListClient(token){
    return new Promise((resolve, reject) => {
                    client.find().then((value)=>{
                            resolve(value)
                        }).catch((e)=>{
                            reject(e);
                        })
                    })
}

function deleteClient(req){
    return new Promise((resolve, reject) => {
        UserService.getRole(req.body.token).then((value)=>{
                    client.deleteOne({ _id: req.body.id }).then((value)=>{
                            resolve(value)
                        }).catch((e)=>{
                            reject(e);
                        })
                    })
    });
}
function updateClient(req){
    return new Promise(async(resolve, reject) => {
        const db=await mongoose ();
        var clientAct=await db.collection('Clients').find({_id: new ObjectId(req.body.id)})
            clientAct=await clientAct.forEach(async(doc)=>{
                var list=[]
                if(doc.devis==null)
                {
                    list.push(req.body.devis)
                }
                else
                {
                    list=doc.devis
                    list.push(req.body.devis)
                }
                var clients =await db.collection('Clients').updateOne({ _id: new ObjectId(req.body.id)},
            {
              $set: {
                "devis": list
              }
            },
            {
              multi: true
            })
            })
           var res=await client.find({ _id: new ObjectId(req.body.id)})
        resolve(res.devis)
    });
}
function sendEmail(req){
    return new Promise(async(resolve, reject) => {
    let transporter = nodemailer.createTransport({
        host:  "ssl0.ovh.net",
        port: "587",
        secure: false,
        auth: {
                user: "bachir@naza.dev",
                pass: "28161946bb"
        },
        tls:{
            rejectUnauthorized:false
        }
});
let mailOptions = {
        from: req.body.from,
        to: "bachir@naza.dev",
        subject: req.body.subject,
        html: req.body.content
};
transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        console.log(error);
        reject(error)
        } else {
        resolve(info);}
});
    })
}
module.exports = {
    GetListClient,
    deleteClient,
    updateClient,
    sendEmail
  };