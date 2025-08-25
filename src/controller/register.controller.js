import mongoose from "mongoose";
import asyncHandler from "../utils/asyncHandler.js";
import User from '../model/user.model.js'
import bcrypt from 'bcrypt'
import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";


const register = asyncHandler(async (req,res,next) => {

    const {name,email,address,password,role,} = req.body


    const existUser = await User.findOne({email})

    if(existUser){
        throw new apiError(400,'User already Exist')
    }

    const hashedPassword = await bcrypt.hash(password,10)
    if(!hashedPassword){
        throw new apiError(500,'error caught while hasing the password')
    }
    const createsUser = await User.create({
        name,
        email,
        address,
        password: hashedPassword,
        role
    })
    if(!createsUser){
        throw new apiError(500,'error caught while')
    }
    const selectedUser = await User.findById(createsUser._id).select("-password")

    const response = new apiResponse(200,selectedUser)
    res.status(response.statusCode).json({
        response
    })
    
})

export default register