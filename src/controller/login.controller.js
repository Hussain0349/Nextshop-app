import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import bcrypt from 'bcrypt'
import User from '../model/user.model.js'

import apiResponse from "../utils/apiResponse.js";
const login = asyncHandler(async (req,res) => {

    const options = {
        httpOnly:true,
        secure:true
    }

    const {email,password} = req.body 


    const user = await User.findOne({email})

    
    if(!user){
        throw new apiError(404,'user not found! ')
    }
    const checkUser = user.status
    console.log(checkUser)
    if(checkUser == 'block'){
        throw new apiError(401,'User blocked has been blocked! ')
    }
    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
        throw new apiError(404,'user is not authrized')
    }
    
    const jwtToken = jwt.sign({_id: user._id},process.env.JWT_TOKEN_SECRET,{expiresIn:'1d'})

    if(!jwtToken){
        throw new apiError(500,'Sorry token generated')
    }
    const response = new apiResponse(200,user,'Token added sucessfully!')

    res.status(response.statusCode).cookie('token',jwtToken,options).json({
        response
    })

})

export default login