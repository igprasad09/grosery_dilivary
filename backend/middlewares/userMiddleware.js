const {z} = require('zod');
const { Users } = require('../db/mongo');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;

const zodChecker = z.object({
      email: z.string().email(),
      password: z.string().min(6)
});

async function userExistChecker(req, res, next){
        const body = req.body;
        const {success} = zodChecker.safeParse(body);
        if(!success){
            return res.status(400).json({
                    message:"Inpute is invalid"
            })
        }
        const userExist = await Users.findOne({
                           email: body.email
                        });
        if(userExist){
               return res.status(400).json({
                    message:"user Exists already"
               })
        }
        next();
}

async function handleuserExist(req, res, next){
        const {authorization} = req.headers;
        if(authorization){
             const head = authorization.split(' ');
             if(head[0] == "Bearer"){
                const decode = jwt.decode(head[1], jwtSecret);
                req.headers = decode
                return next();         
             }
        }
       return res.status(400).json({
          message: "Error"
       })
}

module.exports ={
       userExistChecker,
       handleuserExist
}