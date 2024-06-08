const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    effectivePrice: {
        type: Number, // Assuming this is a numerical value
        required: true
    },
    giftCardValue: {
        type: Number, // Assuming this is a numerical value
        required: true
    }
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    coupons: [couponSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
