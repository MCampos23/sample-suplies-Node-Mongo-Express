const mongoose = require('mongoose')

const saleSchema = mongoose.Schema({
    saleDate:{
        type: Date,
        default: Date.now()
    },
    items:[{
        name: String,
        tags:[String],
        price: Number,
        quantity: Number
    }],
    storeLocation: {
        type: String,
        required: true,
    },
    customer: {
        gender:{
            type: String,
            required:true
        },
        age:{
            type: Number,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        satisfaction: Number
    },
    couponUsed: {
        type: Boolean,
        required: true,
    },
    purchaseMethod: String
})

exports.Sale = mongoose.model('Sale', saleSchema)