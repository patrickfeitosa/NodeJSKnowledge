const mysql = require('mysql');
const createMySqlConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
}
module.exports = () => {
    return createMySqlConnection;
}
