import apiError from "../../utils/apiError.js";
import asyncHandler from "../../utils/asyncHandler.js";
import User from '../../model/user.model.js'
import Supplier from '../../model/supplier.js'
import apiResponse from "../../utils/apiResponse.js";
const blockedUser = asyncHandler(async (req,res) => {

    const {id,role} = req.params 

    if(!id || !role){
        throw new apiError(400,'id is not given! or role is not given')
    }
    if(role == 'user'){
            const user = await User.findByIdAndUpdate(id,{status:'block'})
            if(!user){
                throw new apiError(500,'Erro caught while blocking user')
            }

            const response = new apiResponse(200,user)

            res.status(response.statusCode).json({
                response
            })
    }
    else if(role == 'supplier'){
         const user = await Supplier.findByIdAndUpdate(id,{status:'block'})
            if(!user){
                throw new apiError(500,'Error caught while blocking Supplier')
            }

            const response = new apiResponse(200,user)

            res.status(response.statusCode).json({
                response
            })

    }
    else {
        throw new apiError(404,'role is defined')
    }


})
export default blockedUser