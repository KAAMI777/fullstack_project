const express = require('express')
const router = express.Router()
const User = require('../schema/user'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
router.use(express.json());


router.post('/register', async (req, res) => {
      try {const jwt = require('jsonwebtoken');
        const { email, password, role } = req.body;

        // 1. Basic validation
        if (!email || !password || !role) {
            return res.status(400).json({ msg: "All fields required" });
        }

        // 2. Check duplicate user
        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({ msg: "User already exists" });
        }
res.json({
            msg: `Login successful`,
            token
        });
        // 3. Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 4. Save user
        const user = await User.create({
            email,
            password: hashedPassword,
            role
        });

        res.status(201).json({
            msg: "User registered",
            user: {
                userId: user._id,
                email: user.email,
                role: user.role
            }
        });

    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});
router.post('/login', async (req, res) => {
    try {
        const { email, password} = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
        const token = jwt.sign(
            { id: user._id,email: user.email},
            "SECRET_KEY",
            { expiresIn: "1h" }
        );

        res.json({
            msg: `Login successful`,
            token
        });

    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
});
module.exports = router;
