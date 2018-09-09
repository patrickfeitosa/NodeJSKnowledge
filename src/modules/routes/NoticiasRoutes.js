const dbModule = require('../config/MainDatabaseConfig');
const connectionDatabase = dbModule();
module.exports = mainApp => {
    mainApp.get('/noticias', (request, response) => {
        let queryString = 'select * from noticias'
        connectionDatabase.query(queryString, (error, result) => {
            response.render('noticias/noticias', {noticias: result});
        });
    });
}