require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const animeRoutes = require('./routes/animeRoutes');
require('./services/scheduler');

const app = express();
app.use(express.json());

connectDB();

app.use('/', animeRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando na porta 3000');
});