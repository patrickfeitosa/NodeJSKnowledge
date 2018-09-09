const express = require('express');
const mainApp = express();

//Setando a Engine de renderização e pasta padrão de views
mainApp.set('view engine', 'ejs');
mainApp.set('views', __dirname.replace('src', 'views'));

console.log(__dirname);

mainApp.get('/', (request, response) => {
    response.send(`<html><body>Portal de Notícias</body></html>`);
});

mainApp.get('/tecnologia', (request, response) => {
    response.render('secao/tecnologia');
});

mainApp.listen(3000, () => {
    console.log('Servidor rodando com Express');
});