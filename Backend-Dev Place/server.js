const express = require("express");
const app = express(); 
const bodyParser = require("body-parser");
const cors = require('cors');

var dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT || process.env.PORT_SERVER;
const indexRoutes = require("./routes/index.route");
require('./config/utils.db');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/upload', express.static('upload'));
app.use('/v0/',indexRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo por el puerto ${port}`);
})