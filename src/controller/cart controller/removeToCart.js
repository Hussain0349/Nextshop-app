import apiError from "../../utils/apiError.js";
import asyncHandler from "../../utils/asyncHandler";
import User from '../../model/user.model.js'
const removeToCart = asyncHandler(async (req,res) => {

    const {id} = req.params 
    const {userId} = req.user
    if(!id){
        throw new apiError(400,'Id is not given')
    }

    const user = await User.findOne({userId})

    if(!user){
        throw new apiError(400,'User is not Found!')
    }
    await user.findByIdAndDelete()




})

export default removeToCart