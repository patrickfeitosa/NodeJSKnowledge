module.exports = mainApp => {
    mainApp.get('/noticias', (request, response) => {
        
        //Recuperando a rota de conexão com o Banco de Dados
        const connectionDatabase = mainApp.modules.config.MainDatabaseConfig();
        let queryString = 'select * from noticias'
        
        connectionDatabase.query(queryString, (error, result) => {
            response.render('noticias/noticias', { noticias: result });
        });
    });
}