const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const createDefaultUser = async () => {
    try {
        const existingUser = await User.findOne({ username: 'user' });
        
        if (existingUser) {
            console.log("Default user already exists");
            return;
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('123123123', salt);

        // Create new user
        const newUser = new User({
            username: 'user',
            password: hashedPassword
        });

        await newUser.save();
        console.log("Default user created successfully");

    } catch (error) {
        console.error("Error creating default user:", error.message);
    }
};

module.exports = { createDefaultUser };