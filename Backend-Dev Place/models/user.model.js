var Sequelize = require('sequelize');
var sequelize = require('../config/mysql.config');
const Joi = require('joi');
const validateRequest = require('../middlewares/validateRequest');

var User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: Sequelize.STRING,

    last_name: Sequelize.STRING,

    email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: {
                msg: "Must be a valid email address",
            }
        }
    },

    password: Sequelize.STRING,

    status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },

    admin:  Sequelize.BOOLEAN
        

},
    {
        indexes: [{
            fields: ['email'],
            unique: true,
        }],
        defaultScope: {
            attributes: {
                // exclude: ['password']
            }
        }
    });


    const ValidateUser = (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string().min(5).max(50).required()
                .messages({
                    'string.empty': "Ingresa el Nombre",
                    'string.min': "El nombre debe ser mayor a 5 caracteres",
                    'any.required': "Ingresa el Nombre"
                }),
            last_name: Joi.string().min(4).max(50).required()
                .messages({
                    'string.empty': "Ingresa el Apellido",
                    'string.min': "El Apellido debe ser mayor a 4 caracteres",
                    'any.required': "Ingresa el Apellido"
                }),
            email:Joi.string().email().required().messages({
                'email.empty': "Ingresa el email",
                'any.required': "Ingresa el email"
            }),
            password: Joi.string().min(8).max(15).required().pattern(new RegExp('^[a-zA-Z0-9]{8,15}$'))
                .messages({
                    'password.empty': "Ingresa el password",
                    'password.min': "El password debe ser mayor a 8 caracteres",
                    'password.pattern': 'Minimo 8 caracteres, Maximo 15, Al menos una letra mayúscula, Al menos una letra minucula, Al menos un dígito, No espacios en blanco, Al menos 1 caracter especial',
                    'password.required': "Ingresa el password"
                }),
            admin: Joi.required().messages({
                'admin.empty': "Ingresa el admin",
                'admin.required': "Ingresa el admin"
            }),
    
        });
        
        validateRequest(req, res, next, schema);
    };

    

module.exports = {
    User,
    ValidateUser
}