import asyncHandler from '../utils/asyncHandler.js'
import apiError from '../utils/apiError.js'
import User from '../model/user.model.js'

const adminAuth = asyncHandler(async (req,res,next) => {

    const token = req.cookies.accessToken
    console.log(token)
    if(!token){
        throw new apiError(400,'token is not given! ')
    }

    const admin = await User.findOne(token._id).select('-password')

    if(!admin){
        throw new apiError(400,'admin user is not authrized! ')
    }
    res.user = admin
    next()


})
export default adminAuth