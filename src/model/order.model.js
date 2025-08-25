import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    shippingAdress: {
        city: {
            type: String,
            required: true
        },
        county: {
            type: String,
            required: true
        }

    },
    taxPrice: {
        type: Number,
        required: true,
        default: 100
    },
    shippingPrce: {
        type: Number,
        default: 500,
    },
    paidAt: {
        type: Date,
        default: Date.now()
    },
    delivedAt: {
        type: Date
        
    }

},{timestamps:true})