const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key"; // Use environment variable for security

// Hardcoded credentials (Consider moving these to .env for better security)
const USERNAME = process.env.ADMIN_USERNAME || "admin";
const PASSWORD = process.env.ADMIN_PASSWORD || "password123";

app.use(bodyParser.json()); // Middleware to parse JSON request bodies

// Login Route
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === USERNAME && password === PASSWORD) {
        // Generate JWT token
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
        return res.json({ token });
    } else {
        return res.status(401).json({ message: "Invalid credentials" });
    }
});

// Verify Route
app.post("/verify", (req, res) => {
    const token = req.body.token; // Expecting token in the request body

    if (!token) {
        return res.status(400).json({ message: "Token is required" });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return res.json({ message: "Success", user: decoded });
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
