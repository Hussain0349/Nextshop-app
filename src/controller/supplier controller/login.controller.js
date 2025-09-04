import asyncHandler from "../../utils/asyncHandler.js";
import apiError from '../../utils/apiError.js'
import apiResponse from '../../utils/apiResponse.js'
import jwt from 'jsonwebtoken'
import bcrytp from 'bcrypt'
import Supplier from "../../model/supplier.js";

const loginSupplier = asyncHandler(async (req,res) => {

     const options = {
        httpOnly: true,
        secure: true
    }

    const {email,password} = req.body

    if(!email || !password){
        throw new apiError(400, 'Email and Password required! ')
    }

    const user = await Supplier.findOne({email})

    if(!user){
        throw new apiError(404,'Supplier is not exist')
    }
    const checkUser = user.status
    console.log(checkUser)
    if(checkUser == 'block'){
        throw new apiError(401,'User blocked has been blocked! ')
    }

    const isMatch = bcrytp.compare(password, user.password)

    if(!isMatch){
        throw new apiError(401,'Credential incorrect!')
    }

    const jwtToken = jwt.sign({_id: user._id}, process.env.JWT_TOKEN_SECRET, {expiresIn:'2d'})

    if(!jwtToken){
        throw new apiError(500,'Failed to generat the token')
    }


    const response = new apiResponse(200,'');

    res.status(response.statusCode).cookie('supplierToken',jwtToken,options).json({
        response
    })
    
   
})

export default loginSupplier