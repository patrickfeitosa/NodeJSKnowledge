const mainApp = require ('./modules/config/MainServerConfig');

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
    console.log('Servidor ON \nRodando na Porta 3000');
});