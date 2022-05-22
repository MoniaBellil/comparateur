const mongoose = require('mongoose');
var bcrypt=require('bcrypt')
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Please enter a full name'],
        index: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        default: 'admin',
        enum: ['admin','superAdmin']
    },
}, {
    timestamps: true
});

userSchema.pre('save',async function(next)
{
    this.password=await bcrypt.hash(this.password,12)
})
userSchema.methods.correctPassword=async function(candidatPassword,userPassword)
{
    return await bcrypt.compare(candidatPassword,userPassword)
}
module.exports = mongoose.model('User', userSchema);