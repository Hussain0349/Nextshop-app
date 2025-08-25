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
        maxlength: 20
    },
    role: {
        type: String,
        enum: ['user','admin'],

    },
    address: {
        type: String,
        required: true,

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