const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');

const app = express();

// Configuração do template engine e do middleware body-parser
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rotas
app.get('/', controller.indexPage);
app.get('/buscar', controller.buscarLivro);
app.get('/mostrar-todos', controller.mostrarTodosLivros);

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
