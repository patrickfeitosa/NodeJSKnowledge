const httpLib = require('http');

const serverHandler = httpLib.createServer((request, response) => {

    let categoryTerm = request.url;
    let mainMessage = ''
    if (categoryTerm.toLowerCase() == '/tecnologia') {
        mainMessage = 'Notícias de Tecnologia'
    } else if (categoryTerm.toLowerCase() == '/moda') {
        mainMessage = 'Notícias de Moda'
    } else if (categoryTerm.toLowerCase() == '/beleza') {
        mainMessage = 'Notícias de Beleza'
    } else {
        mainMessage = 'Portal de Notícias'
    }
    response.end(`<html><body>${mainMessage}</body></html>`);
});

serverHandler.listen(3000);