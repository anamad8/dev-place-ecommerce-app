
const { User } = require("../models/user.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var dotenv = require('dotenv');
dotenv.config()

const login = async (req, res) => {
    // console.log(req.body)
    User.findOne({
        where:{
            email : req.body.email
        }
    }).then( (user)=>{
        
        if(!user){
            return  res.status(401).send({message:"Erro user not foundo"})
        }

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if(!passwordIsValid){
            
            return  res.status(401).send({message:"Error user not found"})
        }

        var tokenAccess= jwt.sign({id:user.id},process.env.ACCESS_TOKEN_SECRET,{
            expiresIn:86400
        });
        user.token=tokenAccess;
        res.status(200).send({
            user,
            tokenAccess
        })

    })
}
module.exports = login