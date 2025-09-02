import apiError from "../../utils/apiError.js";
import apiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import Supplier from '../../model/supplier.js'
import bcrypt from 'bcrypt'


const registerSupplier = asyncHandler(async (req,res) => {

const {name,email,contact,address,password} = req.body


    if(!name || !email || !contact || !address || !password){
        throw new apiError(400,'Info not given')
    }

    const supplier = await Supplier.finOne({email})

    if(supplier){
        throw new apiError(409, 'Supplier already exist! ')
    }

    const hashedPassword = bcrypt.hash(password,10)

    if(!hashedPassword){
        throw new apiError(500,'Password is not hashed')
    }

    const  user = await Supplier.create({
        name,
        email,
        contact,
        address,
        password: hashedPassword
    })

    if(!user){
        throw new apiError(500,'Supplier is not added! ')
    }

    const selectedUser = await user.findById(user._id).select('-password')

    const response = new apiResponse(201, selectedUser, 'Supplier added sucessfully! ')

    res.status(response.statusCode).json({
        response
    })

    
})
export default registerSupplier