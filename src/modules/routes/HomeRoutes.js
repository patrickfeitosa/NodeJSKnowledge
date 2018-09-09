module.exports = mainApp => {
    mainApp.get('/', (request, response) => {
        response.render('home/index');
    });
}