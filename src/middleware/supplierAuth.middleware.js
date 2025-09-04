import jwt from "jsonwebtoken";
import apiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import Supplier from '../model/supplier.js'
const supplierAuth = asyncHandler(async (req,res,next) => {


    const token = req.cookies.supplierToken
    
    if(!token){
        throw new apiError(400 , 'Token is not given')
    }

    const verifyToken = jwt.verify(token , process.env.JWT_TOKEN_SECRET)

    if(!verifyToken){
        throw new apiError(401 , 'Token is not matched')
    }

    const supplier = await Supplier.findById(verifyToken._id).select('-password')

    if(!supplier){
        throw new apiError(401, 'User not found!')
    }
    req.user = supplier
    next()

})

export default supplierAuth
