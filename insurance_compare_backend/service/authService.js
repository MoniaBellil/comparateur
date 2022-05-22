const User =require("../models/User")
const jwt= require('jsonwebtoken')
const client = require("../models/Client")
const signToken=id=>{return jwt.sign({id: id},process.env.JWT_SECRET,{
    expiresIn:process.env.JWT_EXPIRES_IN
})
}
function checkEmailAvailability(email) {
  //console.log("Checking availability!");
  return new Promise((resolve, reject) => {
    User.findOne(
      { email: { $regex: new RegExp("^" + email + "$", "i") } },
      (err, res) => {
        if (err) console.log(err);
        if (res === null) {
          resolve();
        } else {
          let err = new Error("Existant user with the same email!");
          reject(err);
        }
      }
    );
  });
}
function register(req){
    return new Promise((resolve, reject) => {
        checkEmailAvailability(req.body.email).then(() => {
            (async () => {
                await User.create(req.body).then(() => {
                    resolve();
                })
                .catch((err) => {
                    //Error hashing
                    reject(err);
                });
            })();
        })
        .catch((err) => {
            reject(err);
        });
    });
}
function login(req){
    return new Promise((resolve, reject) => {
        (async () => {
            const {email,password}=req.body
            if(!email|| !password)
            {
                let e = new Error("Please provide email and password!");
                reject(e);
            }
            const user=await User.findOne({email}).select('+password')
            if(!user || !(user.correctPassword(password,user.password)))
            {
                let e = new Error("Incorrect email or password!");
                reject(e);
            }
            var token = signToken(user.email)
            resolve({
                access_token: token,
              });
        })();
    });
}
function getRole(token){
    return new Promise((resolve, reject) => {
        (async () => {
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            const email=decoded.id
            await User.findOne({email}).then((value)=>{
                resolve(value.role)
            }).catch((e)=>{
                reject(e);
            })
        })();
    });
}
function getAllAdmin(token)
{
    return new Promise((resolve, reject) => {
        
            getRole(token).then((value)=>{
            if(value=="admin")
                reject("")
            else
                {
                    (async () => {var query = { role: /admin/ };
                    await User.find(query).then((value)=>{
                        resolve(value)
                    }).catch((e)=>{
                        reject(e);
                    })
                })();
                }
            })
        
    });
}
function deleteAdmin(req)
{
    return new Promise((resolve, reject) => {
            getRole(req.body.token).then((value)=>{
            if(value=="admin")
                reject("")
            else
                {
                    (async () => {
                    await User.deleteOne({ _id: req.body.id }).then((value)=>{
                        resolve(value)
                    }).catch((e)=>{
                        reject(e);
                    })
                })();
                }
            })
        
    });
}

module.exports = {
    register,
    checkEmailAvailability,
    login,
    getRole,
    getAllAdmin,
    deleteAdmin
  };