const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let activeTokens = {}; // Store tokens for validation

// Endpoint to generate a login token
app.post('/generate-token', (req, res) => {
    const userId = req.body.userId; // Assume you send user ID from the client
    const token = crypto.randomBytes(20).toString('hex'); // Generate a random token
    activeTokens[token] = userId; // Store the token associated with the user

    res.json({ token });
});

// Login endpoint to validate the token
app.get('/auth/login', (req, res) => {
    const token = req.query.token;

    if (activeTokens[token]) {
        // Token is valid; handle your session management here
        const userId = activeTokens[token]; // Get the user ID from the token
        delete activeTokens[token]; // Invalidate the token after use

        // Here you could implement your user session logic (e.g., create a session)
        res.json({ message: 'Logged in successfully!', userId });
    } else {
        res.status(401).send('Invalid or expired token');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
