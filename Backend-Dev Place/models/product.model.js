var Sequelize = require('sequelize');
var sequelize = require('../config/mysql.config');
const Joi = require('joi')
const validateRequest = require('../middlewares/validateRequest');

var Products = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    price: Sequelize.INTEGER,
    image: Sequelize.TEXT,
    gender:  Sequelize.STRING,

    category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id'
        }
    }
},
    {
        classMethods: {
            associate: models => {
                Products.belongsTo(models.category, {
                    foreignKey: {
                        fieldName: 'category',
                        allowNull: true,
                        require: true
                    },
                    targetKey: 'id'
                });
            }
        }
    }
);


const ValidateProducts = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required()
            .messages({
                'string.empty': "Ingresa el Nombre  del producto",
                'string.min': "El nombre del producto debe ser mayor a 5 caracteres",
                'any.required': "Ingresa el Nombre  del producto"
            }),
        price: Joi.number().integer().required()
            .message({
                'number.empty': "Ingresa el precio del producto",
                'number.integer': "Ingresa el precio del producto",
                'any.required': "Ingresa el precio del producto"
            }),
        category: Joi.number().integer().required()
            .messages({
                'number.empty': "Ingresa la categoria del producto",
                'number.integer': "Ingresa la categoria del producto",
                'any.required': "Ingresa la categoria del producto"
            })
    });
    validateRequest(req, res, next, schema);
};

module.exports = {
    Products,
    ValidateProducts,
}