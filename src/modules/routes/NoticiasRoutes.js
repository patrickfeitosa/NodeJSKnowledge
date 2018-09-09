module.exports = mainApp => {
    mainApp.get('/noticias', (request, response) => {
        response.render('noticias/noticias');
    });
}