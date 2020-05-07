const mongoose = require('../database');

const bcrypt = require('bcryptjs');


const UserSchema = new mongoose.Schema({

    name:{
        type: String,
        require: true,


    },

    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,

    },

    password:{
        type: String,
        required:true,
        select: false, //quando buscarmos um usuario ou mais essa informação da senha não venha no array dos usuarios
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

//utilizando o bcrypt criamos um hash x10 para encryptar o nosso password
UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})


const User = mongoose.model('User', UserSchema);

module.exports = User;