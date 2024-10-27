const express = require('express');
const app = express();
const crypto = require('crypto');

let activeTokens = {}; // Store tokens for validation (this should ideally be in a database)

// Endpoint to generate a login token
app.post('/generate-token', (req, res) => {
    const userId = req.body.userId; // Assuming you have a way to identify the user
    const token = crypto.randomBytes(20).toString('hex'); // Generate a random token
    activeTokens[token] = userId; // Store the token associated with the user

    res.json({ token });
});

// Login endpoint to validate the token
app.get('/auth/login', (req, res) => {
    const token = req.query.token;

    if (activeTokens[token]) {
        // Token is valid, log the user in (handle your session management here)
        // Example: req.session.userId = activeTokens[token];
        delete activeTokens[token]; // Invalidate the token after use

        res.redirect('/dashboard'); // Redirect to the main application page
    } else {
        res.status(401).send('Invalid or expired token');
    }
});
