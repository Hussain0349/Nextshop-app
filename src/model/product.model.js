import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        requred: true
    },
    category: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    numberOfReview: {
        type: Number,
        default: 0
    }
},{timestamps: true})