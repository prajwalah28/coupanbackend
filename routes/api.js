const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Ensure this path is correct

// Middleware to get user by ID
async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.user = user;
    next();
}

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new user
router.post('/users', async (req, res) => {
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber,
        address: req.body.address,
        coupons: req.body.coupons
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get a single user
router.get('/users/:id', getUser, (req, res) => {
    res.json(res.user);
});

// Update a user
router.patch('/users/:id', getUser, async (req, res) => {
    if (req.body.name != null) {
        res.user.name = req.body.name;
    }
    if (req.body.age != null) {
        res.user.age = req.body.age;
    }
    if (req.body.email != null) {
        res.user.email = req.body.email;
    }
    if (req.body.mobileNumber != null) {
        res.user.mobileNumber = req.body.mobileNumber;
    }
    if (req.body.address != null) {
        res.user.address = req.body.address;
    }
    if (req.body.coupons != null) {
        res.user.coupons = req.body.coupons;
    }

    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a user
router.delete('/users/:id', getUser, async (req, res) => {
    try {
        await res.user.remove();
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
