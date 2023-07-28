const express = require("express");
const indexRoutes = express.Router();
const MysqlLoginRoutes = require("./login.route");
const mysqlUsersRouter= require("./user.route");
const mysqlProductRouter= require("./product.route");
const mysqlCategoryRouter= require("./category.route");


indexRoutes.use('/users',mysqlUsersRouter);
indexRoutes.use('/login',MysqlLoginRoutes);
indexRoutes.use('/product',mysqlProductRouter);
indexRoutes.use('/category',mysqlCategoryRouter);

module.exports=indexRoutes;