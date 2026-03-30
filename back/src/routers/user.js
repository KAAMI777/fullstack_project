const express = require("express");
const router = express.Router();
const User = require("../schema/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.use(express.json());

router.post("/register", async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ msg: "All fields required" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
      role,
    });

    const secret = process.env.JWT_SECRET || "SECRET_KEY";
    const token = jwt.sign({ id: user._id, email: user.email }, secret, {
      expiresIn: "1h",
    });

    res.status(201).json({
      msg: "User registered",
      token,
      user: {
        userId: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const secret = process.env.JWT_SECRET || "SECRET_KEY";
    const token = jwt.sign({ id: user._id, email: user.email }, secret, {
      expiresIn: "1h",
    });

    res.json({
      msg: `Login successful`,
      token,
      user,
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
