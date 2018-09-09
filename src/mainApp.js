const mainApp = require('./modules/config/MainServerConfig');
const baseRoutes = require('./modules/routes/Routes__base-index');
baseRoutes(mainApp);

mainApp.listen(3000, () => {
    console.log('Servidor ON \nRodando na Porta 3000');
});