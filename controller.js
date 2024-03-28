const livroModel = require('./livroModel');

function buscarLivro(req, res) {
  const { titulo, ano, tipoBusca } = req.query;

  // Verifica se o tipo de busca foi selecionado
  if (!tipoBusca) {
    return res.render('index', { resultado: [], error: 'Por favor, selecione o tipo de busca.' });
  }

  if (tipoBusca === 'titulo' && titulo) {
    livroModel.buscarLivroPorTitulo(titulo, (err, resultado) => {
      if (err) {
        console.error('Erro ao buscar livro por título:', err);
        return res.render('index', { resultado: [], error: 'Erro ao buscar livro por título.' });
      }
      return res.render('index', { resultado });
    });
  } else if (tipoBusca === 'ano' && ano) {
    livroModel.buscarLivroPorAno(ano, (err, resultado) => {
      if (err) {
        console.error('Erro ao buscar livro por ano:', err);
        return res.render('index', { resultado: [], error: 'Erro ao buscar livro por ano.' });
      }
      return res.render('index', { resultado });
    });
  } else {
    // Se o tipo de busca foi selecionado, mas o campo correspondente está vazio
    return res.render('index', { resultado: [], error: 'Por favor, insira um valor para o campo correspondente ao tipo de busca.' });
  }
}

function mostrarTodosLivros(req, res) {
  livroModel.mostrarTodos((err, resultado) => {
    if (err) {
      console.error('Erro ao buscar todos os livros:', err);
      return res.render('index', { resultado: [], error: 'Erro ao buscar todos os livros.' });
    }
    res.render('index', { resultado });
  });
}

function indexPage(req, res) {
  res.render('index', { resultado: [], error: null });
}

module.exports = {
  buscarLivro,
  mostrarTodosLivros,
  indexPage
};
