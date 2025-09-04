import jwt from "jsonwebtoken";
import apiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import Supplier from '../model/supplier.js'
import apiResponse from '../utils/apiResponse.js'
const supplierAuth = asyncHandler(async (req,res,next) => {

    let options = {
        httpOnly: true,
        secure: true
    }
    const token = req.cookies.supplierToken
    console.log(token)
    if(!token){
        throw new apiError(402 , 'Token is not given')
    }
    
    const decodedToken = jwt.verify(token , process.env.JWT_TOKEN_SECRET)

    const supplier = await Supplier.findById(decodedToken._id).select('-password')

    if(supplier.status == 'block'){
      res.clearCookie('supplierToken',options)

      throw new apiError(403, 'User has been blocked!')
    }

    if(!decodedToken){
        throw new apiError(401 , 'Token is not matched')
    }

    
    req.user = supplier
    next()

})

export default supplierAuth
