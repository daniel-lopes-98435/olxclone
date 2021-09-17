const { checkSchema } = require('express-validator');

module.exports = {
    editAction : checkSchema({
        token: {
            notEmpty: true
        },
        name: {
            optional: true,
            trim: true,
            isLength:{
                options: { min: 3}
            },
            errorMessage: 'Nome precisa ter pelo menos 3 caracteres'
        },
        email:{
            optional: true,
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail inválido'
        },
        password:{
            optional: true,
            isLength:{
                options: { min: 6 }
            },
            errorMessage: 'Senha precisa ter pelo menos 6 caracteres'
        },
        state:{
            optional: true,
            notEmpty: true,
            errorMessage: 'Estado não prenchido'
        }
    })

}

