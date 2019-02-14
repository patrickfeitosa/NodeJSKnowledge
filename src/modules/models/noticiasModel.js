module.exports = () => {
    this.getNoticias = (connectionDatabase, callback) => {
        const queryString = 'select * from noticias'
        connectionDatabase.query(queryString, callback);
    };

    this.getNoticia = (connectionDatabase, callback) => {
        const queryString = 'select * from noticias where id=1';
        connectionDatabase.query(queryString, callback);
    };

    return this;
};