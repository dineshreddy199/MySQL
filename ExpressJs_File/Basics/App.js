// Import Express
const express = require('express');
const app = express();
const PORT=5000;

// Define a route
app.get('/', (req, res) => {
    res.send('Welcome to the Express.js Tutorial');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});