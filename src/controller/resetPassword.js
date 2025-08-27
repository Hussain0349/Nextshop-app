import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from '../model/user.model.js'
import bcrypt from 'bcrypt'
const resetPassword = asyncHandler(async(req, res) => {

    const {otp,password} = req.body

    if(!otp || !password){
        throw new apiError(400,'email and password required')
    }
    const user = await User.findOne({
        otp,
       otpExpires: { $gt: new Date() },
    })
    console.log(user)
    if(!user){
        throw new apiError(400,'Either otp is not correct or otp exprires')
    }
    user.password = await bcrypt.hash(password,10)
    user.otp = undefined
    user.otpExpires = undefined
    user.save()
    const response = new apiResponse(200,user,)

    res.status(response.statusCode).json({
        response
    })

    if(!user){
        throw new apiError(400,'User not found! ')
    }

})
export default resetPassword