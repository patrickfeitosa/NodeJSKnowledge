module.exports = mainApp => {
    mainApp.get('/noticias', (request, response) => {

        //Recuperando a rota de conexão com o Banco de Dados
        const connectionDatabase = mainApp.modules.config.MainDatabaseConfig();
        const noticiasModel = mainApp.modules.model.noticiasModel;

        noticiasModel.getNoticia(connectionDatabase, (error, result) => {
            response.render('noticias/noticia', { noticia: result[0] });
        })
    });
}