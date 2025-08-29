import asyncHandler from '../../utils/asyncHandler.js'
import apiResponse from '../../utils/apiResponse.js'
import apiError from '../../utils/apiError.js'
import Product from '../../model/product.model.js'

const getProduct = asyncHandler(async (req,res) => {

    const {name} = req.params

    if(!name){
        throw new apiError(400,'Name is not given')
    }

    const product = await Product.findOne({name})

    if(!product){
        throw new apiError(400,'No match found')
    }
    const response = new apiResponse(200,product,'Your desired product')
     res.status(response.statusCode).json({
        product
     })
})
export default getProduct