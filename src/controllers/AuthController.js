const { validationResult, matchedData } = require('express-validator');
const mongoose = require('mongoose');
const User = require('../models/User');
const State = require('../models/State');
const bcrypt = require('bcrypt');

module.exports = {
    signin: async (req, res) =>{

    },
    signup: async (req, res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.json({error: errors.mapped()});
            return;
        }
        const data = matchedData(req)

        const user = await User.findOne({
            email: data.email
        })

        if(user){
            res.json({
                error: { email: { msg: 'E-mail já existe' }}
            });
            return;
        }

        if(mongoose.Types.ObjectId.isValid(data.state)){
            const stateItem = await State.findById(data.state)
            if(!stateItem){
                res.json({
                    error:{ state:{ msg: 'Estado não existe' }}
                });
                return;
            }
        }  else{
            res.json({
                erro:{ state:{ msg: 'Código de estado inválido' }}
            })
            return;
       } 

        const passwordHash = await bcrypt.hash(data.password,10);

        const payload = (Date.now()+ Math.random()).toString();
        const token = await bcrypt.hash(payload,10);

        const newUser = new User({
            name: data.name,
            email: data.email,
            passwordHash: passwordHash,
            token,
            state: data.state
        });

        await newUser.save();
        res.json({token})
        //res.json({ok: true})
    }
}