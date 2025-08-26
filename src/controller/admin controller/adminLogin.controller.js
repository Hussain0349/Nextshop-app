import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import asyncHandler from "../../utils/asyncHandler.js";
import User from '../../model/user.model.js'
import apiError from '../../utils/apiError.js'
import apiResponse from "../../utils/apiResponse.js";
const adminLogin = asyncHandler( async (req,res) => {

    const {email,password} = req.body

    const admin = await User.findOne({email})

    if(!admin){
        throw new apiError(400,'admin user not found')
    }
    const decoded_pass = await bcrypt.compare(password,admin.password)

    if(!decoded_pass){
        throw new apiError(400,'invalid credentials')
    }

    const generateToken = jwt.sign({_id: admin._id},process.env.JWT_TOKEN_SECRET, {expiresIn: '10d'})

    if(!generateToken){
        throw new apiError(500,'something went wrong while generating the token')
    }
    const response = new apiResponse(200,admin,'admin log in sucessfully!')

    res.status(response.statusCode).cookie('adminToken',generateToken).json({
        response
    })



})

export default adminLogin