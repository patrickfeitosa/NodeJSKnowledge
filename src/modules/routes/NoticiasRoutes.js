module.exports = mainApp => {
    mainApp.get('/noticias', (request, response) => {
        const mysql = require('mysql');
        const connectionDatabase = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'porta_noticias'
        });

        let queryString = 'select * from noticias'
        connectionDatabase.query(queryString, (error, result) => {
            response.render('noticias/noticias', {noticias: result});
        });
    });
}