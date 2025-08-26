import jwt from 'jsonwebtoken'
import asyncHandler from '../utils/asyncHandler.js'
import apiError from '../utils/apiError.js'
import User from '../model/user.model.js'

const auth = asyncHandler(async (req,res,next) => {
    console.log(req.cookies)
    const tokens = req.cookies.token

    if(!tokens){
        throw new apiError(400,'token is not found!')
    }
    const verifyToken = jwt.verify(tokens,process.env.JWT_TOKEN_SECRET)

    if(!verifyToken){
        throw new apiError(400,'token is not matched')
    }
    const user = await User.findById(verifyToken._id).select('-password')

    if(!user){
        throw new apiError(400,'user not found! ')

    }
    req.user = user
    next()
    
})

export default auth
