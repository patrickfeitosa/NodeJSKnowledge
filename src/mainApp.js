const express = require('express');
const mainApp = express();

//Setando a Engine de renderização e pasta padrão de views
mainApp.set('view engine', 'ejs');
mainApp.set('views', __dirname.replace('src', 'views'));

console.log(__dirname);

mainApp.get('/', (request, response) => {
    response.render('home/index');
});

mainApp.get('/admin/nova-noticia', (request, response) => {
    response.render('admin/form_add_noticia');
});

mainApp.get('/noticias', (request, response) => {
    response.render('noticias/noticias');
});

mainApp.listen(3000, () => {
    console.log('Servidor rodando com Express');
});