const cors = require('cors');

const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:8000',
    credentials: true,
    optionsSuccessStatus: 200
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware; 