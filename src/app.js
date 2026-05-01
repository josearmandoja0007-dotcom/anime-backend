const express = require('express');
require('./services/scheduler'); // inicia o cronjob

const app = express();
app.use(express.json());

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));