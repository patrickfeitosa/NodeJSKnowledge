module.exports = mainApp => {
    mainApp.get('/noticias', (request, response) => {

        //Recuperando a rota de conexão com o Banco de Dados
        const connectionDatabase = mainApp.modules.config.MainDatabaseConfig();
        const noticiasModel = mainApp.src.models.noticiasModel;

        noticiasModel.getNoticias(connectionDatabase, (error, result) => {
            response.render('noticias/noticias', { noticias: result });
        });

    });
}