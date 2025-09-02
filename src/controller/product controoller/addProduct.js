import asyncHandler from "../../utils/asyncHandler.js"
import multer from "multer";
import cloudinary from '../../utils/cloudinary.js'
import fs from "fs";
import apiError from '../../utils/apiError.js'
import apiResponse from '../../utils/apiResponse.js'
import Product from '../../model/product.model.js'
const addProduct = asyncHandler(async(req,res) => {

    const {name,price,description,category,company,quantity} = req.body
    const imagePath = req.file.path;

    if(!name || !price || !description || !category || !company || !quantity ){
        throw new apiError(400,'detailed not given either name price descripton')
    }
    
    if(!imagePath){
        throw new apiError(400,'path is not given')
    }
    const uploadImage = await cloudinary.uploader.upload(imagePath,{
         folder: "uploads"
     });

    if(!uploadImage){
        throw new apiError(500,'something went wrong! ')
    }
    const product = await Product.create({
    name,
    price,
    description,
    category,
    company,
    quantity,
    image: uploadImage.url, 

    })
    if(!product){
        throw new apiError(500,'Data not saved! ')
    }
    const response = new apiResponse(200,{
    name,
    price,
    description,
    category,
    quantity,
    company,
    imageUrl: uploadImage.url, 
  })
    res.status(response.statusCode).json({
        response,
        message: 'product added sucessfully'
    })
})
export default addProduct