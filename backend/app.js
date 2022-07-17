const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { estrategiasAutenticacao } = require('./src/usuarios');
const cors = require('cors')
app.use(
    express.json(),
    cors()
);

module.exports = app;