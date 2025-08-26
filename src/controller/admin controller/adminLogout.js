import apiError from "../../utils/apiError.js";
import apiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

const adminLogout = asyncHandler(async (req,res) => {

    const options = {
        httmpOnly: true,
        secure: true
    }
    const token = req.cookies.adminToken

    if(!token){
        throw new apiError(400,'token not provided')
    }
    const response = new apiResponse(200,token,'User logout sucessfully! ')

    res.status(response.statusCode).clearCookie('adminToken',options).json({
        message: response.message
    })
})
export default adminLogout