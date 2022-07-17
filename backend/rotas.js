const usuarios = require('./src/usuarios');

module.exports = app => {
    app.get('/', (req, res) => { res.send('API projeto final Compass') });

    usuarios.rotas(app);
};