const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const header = req.header("Authorization");

    if (!header) {
        return res.status(401).json({ msg: "No token provided" });
    }

    // Expect: "Bearer <token>"
    const token = header.split(" ")[1];

    if (!token) {
        return res.status(401).json({ msg: "Invalid token format" });
    }

    try {
        const decoded = jwt.verify(token, "SECRET_KEY");
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ msg: "Invalid token" });
    }
};

module.exports = authMiddleware;