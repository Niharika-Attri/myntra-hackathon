const { mongoose } = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    images: [{
        type: String,
        required: true
    }],
    price: {
        type: Number,
        required: true
    }, 
    condition: {
        type: String,
        enum: ['new', 'like new','good','fair','poor'],
        required: true 
    }
})