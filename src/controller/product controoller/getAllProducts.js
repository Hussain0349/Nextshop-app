import asyncHandler from '../../utils/asyncHandler.js'
import apiResponse from '../../utils/apiResponse.js'
import apiError from '../../utils/apiError.js'
import Product from '../../model/product.model.js'
const getAllProducts = asyncHandler(async (req,res) => {

    const products = await Product.find({})
    if(!products){
        throw new apiError(500,'something went wrong')
    }
    if(products.length > 0){
        const response = new apiResponse(200,products,)
        res.status(response.statusCode).json({
            products
        })
    }
    const response = new apiResponse(200,products,'Not Product added yet')
    res.status(response.statusCode).json({
        response
    })

})
export default getAllProducts