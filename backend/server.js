require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Database connection
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'mainline.proxy.rlwy.net',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'ptslxzAgnuBttOcPLODxXamkjkZDLAXl',
    port: process.env.DB_PORT || 24863,
    database: process.env.DB_NAME || 'railway', // Assuming 'railway' is the database
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test connection on startup
(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Connected to Railway MySQL Database successfully!');
        connection.release();
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
    }
})();

// Endpoint to get machines
app.get('/api/machines', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT machine_id, name_machine, status, type_machine FROM Machine');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching machines:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to get count of machines
app.get('/api/machines/count', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT COUNT(*) AS total_machines FROM Machine');
        const total = rows[0].total_machines;
        if (total > 0) {
            // User requested: "si son 15 sale +14" (N-1 logic)
            const displayValue = total - 1;
            displayCount = `+${displayValue}`;
        } else {
            displayCount = '0';
        }

        // User requested: "si tengo 10 salga +9 o si tengo 11 +10"
        // Let's stick to the standard logic:
        // If > 50, show 50+.
        // If > 10, show floor(10).
        // Or just return the raw count and let frontend handle basic display, 
        // but the user logic was specific about "si tengo 11 +10".

        res.json({ total, displayCount });
    } catch (error) {
        console.error('Error fetching machine count:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
