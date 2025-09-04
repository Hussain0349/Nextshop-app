import apiError from "../../utils/apiError.js";
import apiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

const logOut = asyncHandler(async (req, res) => {

    let options = {

        httpOnly: true,
        secure: true

    }

    const token = req.cookies.userToken

    if(!token){
        throw new apiError(401,'Token us not given')
    }
    const isClear = res.clearCookie('userToken',options)

    if(!isClear){
        throw new apiError(500,'something went wrong while logging out user')
    }
    const response = new apiResponse(200,'','user logout sucessfully!')

    res.status(response.statusCode).json({
        response
    })

})
export default logOut