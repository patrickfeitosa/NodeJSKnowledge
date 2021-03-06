const express = require('express');
const consign = require('consign');
const mainApp = express();

//Setando a Engine de renderização e pasta padrão de views
mainApp.set('view engine', 'ejs');
mainApp.set('views', '../views');

//Utilizando Consign para rotas
consign()
    .include('modules/routes')
    .then('modules/config/MainDatabaseConfig.js')
    .then('modules/models')
    .into(mainApp);

module.exports = mainApp;