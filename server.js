// instaciando o mysql
const mysql = require('mysql');

//chamando o metodo appConfig
var app = require('./config/appConfig');

//chamando o modulo produto controllers 
var controller = require('./controllers/controller');

//chamando as rotas da API
var route = require('./router/router');