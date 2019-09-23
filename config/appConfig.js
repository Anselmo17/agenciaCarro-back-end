
const logger = require('../helpers/logger');
const cors = require('cors');
const express = require('express');

//iniciando o modo do express
const app = module.exports = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8082;

//iniciando a porta do servidor
app.listen(port, () => {
  logger.debug(`Servidor rodando na porta http://localhost:${port}`)
});

//configurar o body  para aceitar os dados
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//configurar os cors para nao ter erros na requisições
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Acess-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With', 'Accept', 'Content-Type', 'Authorization');
  next();
})

