require('dotenv').config();

exports.db = {
    uri: process.env.DATABASE
  };

  exports.superuser = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    fullname: process.env.FULLNAME,
    email : process.env.EMAIL,
    role :process.env.ROLE,
    
  };