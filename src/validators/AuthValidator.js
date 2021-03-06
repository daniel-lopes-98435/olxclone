const { checkSchema } = require('express-validator');

module.exports = {
    signup: checkSchema({
        name: {
            trim: true,
            isLength:{
                options: { min: 3}
            },
            errorMessage: 'Nome precisa ter pelo menos 3 caracteres'
        },
        email:{
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail inválido'
        },
        password:{
            isLength:{
                options: { min: 6 }
            },
            errorMessage: 'Senha precisa ter pelo menos 6 caracteres'
        },
        state:{
            notEmpty: true,
            errorMessage: 'Estado não prenchido'
        }
    }),

    singin: checkSchema({
        email:{
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail inválido'
        },
        password:{
            isLength:{
                options: { min: 6 }
            },
            errorMessage: 'Senha precisa ter pelo menos 6 caracteres'
        },        
    })

}