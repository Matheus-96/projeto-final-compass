const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sqlite');


const USUARIOS_SCHEMA = `
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    senhaHash VARCHAR(255) NOT NULL
  )
  `;

db.serialize(() => {
    db.run(USUARIOS_SCHEMA);

    db.each('SELECT * FROM usuarios', (err, usuario) => {
        console.log('Usuarios: ');
        console.log(usuario);
    });
});

process.on('SIGINT', () =>
    db.close(() => {
        process.exit(0);
    })
);

module.exports = db;