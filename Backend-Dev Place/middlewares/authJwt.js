

const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model');

verifyToken = (req,res,next)=>{
    let token = req.headers["x-access-token"];
    if(!token){
        return res.status(403).send({message:"Error not Token Access"});
    }
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decode)=>{
        if(err){
            return res.status(403).send({message:"Error Token Access not Found"});
        }
        req.userId = decode.id;
        next();
    })
}

isRolComun = (req,res,next)=>{
    let id = req.userId;
    User.findByPk(id,{ include: ['rols']}).then( (user)=>{
        if(user.role==1){
            next();
            return;
        }
        return res.status(403).send({message:"Not Rol Comun"});
        
    });
    return;   
}

isRolPremium = (req,res,next)=>{
    let id = req.userId;
    User.findByPk(id,{ include: ['rols']}).then( (user)=>{
        if(user.role==2){
            next();
            return;
        }
        return res.status(403).send({message:"Not Rol Comun"});
    
    });
    return;   
}

module.exports = verifyToken;