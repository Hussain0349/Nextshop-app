import mongoose from 'mongoose'

const supplierSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['active','inactive','block'],
        default: 'inactive'
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    // products: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Product'
    //     }
    // ]


},{timestamps: true})

export default mongoose.model('Supplier',supplierSchema)