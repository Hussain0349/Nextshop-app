import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    rating: {
        type: Number,
        default: 0,
        Range: [1-15],

    },
    comment: {
        type: String,
        default: 'No comment'

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',

    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    
},{timestamps: true})