import apiError from "../../utils/apiError.js";
import asyncHandler from "../../utils/asyncHandler.js";
import Product from '../../model/product.model.js'
import apiResponse from "../../utils/apiResponse.js";
const deleteProduct = asyncHandler(async (req,res) => {

    const { id } = req.params

    if(!id){
        throw new apiError(400,'Name is not given')
    }

    const product = await Product.findById(id)

    if(!product){
        throw new apiError(400,'Product not found')
    }
    const deletedItem = await Product.findByIdAndDelete(id)

    if(!deletedItem){
        throw new apiError(500,'Something went wrong while deleting item')
    }
    const response = new apiResponse(200,deletedItem,"Product deleted successfully! ")

    res.status(response.statusCode).json({
        response
    })

})
export default deleteProduct