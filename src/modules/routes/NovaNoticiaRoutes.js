module.exports = mainApp => {
    mainApp.get('/admin/nova-noticia', (request, response) => {
        response.render('admin/form_add_noticia');
    });

    mainApp.post('/admin/noticia/salvar')
}