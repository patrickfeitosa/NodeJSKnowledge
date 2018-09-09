const mainApp = require('./modules/config/MainServerConfig');

mainApp.listen(3000, () => {
    console.log('Servidor ON \nRodando na Porta 3000');
});