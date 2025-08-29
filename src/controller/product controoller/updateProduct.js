import apiError from "../../utils/apiError.js";
import apiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import Product from '../../model/product.model.js'
const updateProduct = asyncHandler(async (req,res) => {

    const {id} = req.params

    if(!id){
        throw new apiError(400,'Id is not given')
    }

    const product = await Product.findById(id)

    if(!product){
        throw new apiError(400,'Product not found!')
    }

    const updatedProduct = await Product.findByIdAndUpdate(id,req.body, {new: true})

    if(!updatedProduct){
        throw new apiError(500,'Error caught while updating the item')
    }

    const response = new apiResponse(200,updatedProduct,'Product updated sucessfully!')

    res.status(response.statusCode).json({
        response
    })
})

export default updateProduct
