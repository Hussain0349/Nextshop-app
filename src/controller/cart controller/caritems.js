import asyncHandler from "../../utils/asyncHandler.js";
import User from '../../model/user.model.js'
import apiResponse from "../../utils/apiResponse.js";
import apiError from "../../utils/apiError.js";

const cardItems = asyncHandler(async (req,res) => {

    const userId = req.user._id

    const user = await User.findById(userId)

    const products = await user.populate("cart.items.productId");
    console.log(products.cart)
    const response = new apiResponse(200,products.cart,)

    res.status(response.statusCode).json({
        response
    })

})

export default cardItems