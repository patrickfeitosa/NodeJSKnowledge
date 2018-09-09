const express = require('express');
const mainApp = express();

//Setando a Engine de renderização e pasta padrão de views
mainApp.set('view engine', 'ejs');
mainApp.set('views', '../views');

module.exports = mainApp;