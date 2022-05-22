const asurar = require("../models/asurar");
const Motor = require("../models/Motor");
const CodePostal = require("../models/CodePostal");
const chien = require("../models/chien");
const chat = require("../models/chat");
const fs = require('fs');
module.exports = async () => {
    var data = fs.readFileSync('./importsFile/asurar.json');
    var docs = JSON.parse(data.toString());
    await asurar.remove()
    await asurar.insertMany(docs)
     data = fs.readFileSync('./importsFile/Motor.json');
     docs = JSON.parse(data.toString());
    await Motor.remove()
    await Motor.insertMany(docs)
     data = fs.readFileSync('./importsFile/code_postals.json');
     docs = JSON.parse(data.toString());
    await CodePostal.remove()
    await CodePostal.insertMany(docs)
    data = fs.readFileSync('./importsFile/chat.json');
    docs = JSON.parse(data.toString());
    await chat.remove()
    await chat.insertMany(docs)
    data = fs.readFileSync('./importsFile/chien.json');
    docs = JSON.parse(data.toString());
    await chien.remove()
    await chien.insertMany(docs)
};
