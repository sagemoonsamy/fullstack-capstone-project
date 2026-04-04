/*jshint esversion: 8 */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pinoHttp = require('pino-http');
const logger = require('./logger');

const connectToDatabase = require('./models/db');
const { loadData } = require("./util/import-mongo/index");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(pinoHttp({ logger }));

const port = 3060;

// Connect to MongoDB
connectToDatabase().then(() => {
    logger.info('Connected to DB');
})
.catch((e) => {
    logger.error('Failed to connect to DB', e);
});

// --- Route Files ---
// Gift API: Import the giftRoutes
const giftRoutes = require('./routes/giftRoutes');

// Search API: Import the searchRoutes
const searchRoutes = require('./routes/searchRoutes');

// Step 3 - Task 1: Import the authRoutes
const authRoutes = require('./routes/authRoutes');

// --- Use Routes ---
// Gift API: add the giftRoutes to the server
app.use('/api/gifts', giftRoutes);

// Search API: add the searchRoutes to the server
app.use('/api/search', searchRoutes);

// Step 3 - Task 2: Use authRoutes for the /api/auth path
app.use('/api/auth', authRoutes);


// Root Endpoint
app.get("/", (req, res) => {
    res.send("Inside the server");
});

// Global Error Handler
app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).send('Internal Server Error');
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});