//File to increase and index all routes from our application
const homeRoute = require('./HomeRoutes');
const noticiasRoute = require('./NoticiasRoutes');
const novaNoticiaRoute = require('./NovaNoticiaRoutes');

module.exports = mainApp =>{
    homeRoute(mainApp);
    noticiasRoute(mainApp);
    novaNoticiaRoute(mainApp);
}