const express = require('express');
const {z} = require('zod');
const jwt = require('jsonwebtoken');
const { Users } = require('../db/mongo');
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;
const {userExistChecker} = require('../middlewares/userMiddleware')
const routes = express.Router();

const zodChecker = z.object({
      email: z.string().email(),
      password: z.string().min(6)
});

routes.post("/signup", userExistChecker, async(req, res)=>{
        const body = req.body;
        const user = await Users.create({
                    email: body.email,
                    password: body.password
                });
        const userId = user._id;
        const token = jwt.sign({userId},jwtSecret); 

    return res.json({
          token
        })

});

routes.post("/signin",async(req, res)=>{
        const body = req.body;
        const {success} = zodChecker.safeParse(body);
        if(success){
              const user = await Users.findOne({
                             email: body.email,
                             password: body.password
                           })
               if(user){
                      const userId = user._id;
                      const token = jwt.sign({userId},jwtSecret);
                      return res.json({
                         token
                      })
                }else{
                      return res.status(400).json({
                            message:"user not exists"
                      })
                }
        }
        return res.status(400).json({
             message:"invalid input"
        })
})

module.exports = routes;