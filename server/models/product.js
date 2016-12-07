import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        single: { type: String },
        case: { type: String }
    },
    category: { type: String },
    image: {
        type: String,
        enum: ['restaurant', 'supplier'],
        default: 'restaurant'
    },
    supplier: { type: String },
     {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema)