import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        tolower: true
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        tolower: true
    },
    image: {
        type: String,
        requred: true
    },
    category: {
        type: String,
        required: true,
        tolower: true
    },
    company: {
        type: String,
        required: true,
        tolower: true
    },
    numberOfReview: {
        type: Number,
        default: 0
    }
},{timestamps: true})

export default  mongoose.model('Product',productSchema) 