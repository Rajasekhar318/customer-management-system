const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const customerRoutes = require('./routes/customerRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/customers', customerRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Customer Management System API');
});

// Sync Database
sequelize.sync();

module.exports = app;
