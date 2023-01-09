const { Category } = require("../models/category.model");
const { Products } = require("../models/product.model");
const { User } = require("../models/user.model");
const databaseMysql = require("./mysql.config");


Category.sync();
User.sync();
Products.sync();
databaseMysql.sync();