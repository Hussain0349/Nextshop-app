import apiError from "../../utils/apiError.js";
import asyncHandler from "../../utils/asyncHandler.js";
import Product from '../../model/product.model.js'
import User from '../../model/user.model.js'
import apiResponse from '../../utils/apiResponse.js'
const addToCart = asyncHandler(async (req,res) => {

    const userId = req.user._id
    const {id} = req.body

    if(!id){
        throw new apiError(400,'Prduct id is not given')
    }
    const product = await Product.findById(id)

    if(!product){
        throw new apiError(400,'Product not found! ')
    }
    const productQuantity = product.quantity 
    if(productQuantity <=0){
        throw new apiError(400,'Product is out of stock! ')
    }

    const user = await User.findById(userId)
    console.log(user.cart.items)
    const productExist = user.cart.items.findIndex(
            (item) => item.productId.toString() === id
        );

    if(productExist >= 0){
        user.cart.items[productExist].quantity +=1
        product.quantity -= 1;
        product.save()
        user.save()

        const response = new apiResponse(200,'','Product exist the quantity added to card')

        res.status(response.statusCode).json({
        response
    })

    }
    else{
            user.cart.items.push({ productId: id, quantity: 1 });
            await user.save();

    const response = new apiResponse(
      200,
      user.cart,
      "Product added to cart"
    );

    res.status(response.statusCode).json({ response });
    }
            
})
export  default addToCart