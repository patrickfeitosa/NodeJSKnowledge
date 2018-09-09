const express = require('express');
const mainApp = express();

mainApp.get('/', (request, response) => {
    response.send(`<html><body>Portal de Notícias</body></html>`);
});

mainApp.get('/tecnologia', (request, response) => {
    response.send(`<html><body>Notícias de Tecnologia</body></html>`);
});

mainApp.listen(3000, () => {
    console.log('Servidor rodando com Express');
});