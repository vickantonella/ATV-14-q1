const db = require('./db');

function buscarLivroPorTitulo(titulo, callback) {
  db.query('SELECT * FROM livros WHERE titulo LIKE ?', [`%${titulo}%`], callback);
}

function buscarLivroPorAno(ano, callback) {
  db.query('SELECT * FROM livros WHERE ano = ?', [ano], callback);
}

function mostrarTodos(callback) {
  db.query('SELECT * FROM livros', callback);
}

module.exports = {
  buscarLivroPorTitulo,
  buscarLivroPorAno,
  mostrarTodos
};