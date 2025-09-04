import apiError from "../../utils/apiError.js";
import asyncHandler from "../../utils/asyncHandler.js";
import Product from '../../model/product.model.js'
import apiResponse from "../../utils/apiResponse.js";
const softDelete = asyncHandler(async (req,res) => {

    const { id } = req.params

    if(!id){
        throw new apiError(400,'id is not given')
    }

    const product = await Product.findById(id)

    if(!product){
        throw new apiError(400,'Product not found')
    }
    const softDelete = product.status = 'inactive'
    await product.save()
    if(!softDelete){
        throw new apiError(500,'Something went wrong while deleting item')
    }

    
    const response = new apiResponse(200,softDelete,"Product deactivated successfully! ")

    res.status(response.statusCode).json({
        response
    })

})
export default softDelete