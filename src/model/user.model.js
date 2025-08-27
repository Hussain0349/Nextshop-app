import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
    },
    role: {
        type: String,
        default: 'user'

    },
    address: {
        type: String,
        required: true,

    },
    otp: {
        type: String
    },
    otpExpires: {
        type: Date
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart',
    },
    wiishList: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }

},{timestamps:true})


export default mongoose.model('User',userSchema)