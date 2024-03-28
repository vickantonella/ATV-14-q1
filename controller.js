const livroModel = require('./livroModel');

function buscarLivroPorTitulo(req, res) {
  const { titulo } = req.query;

  if (!titulo) {
    return res.render('index', { resultado: [], error: 'Por favor, insira um título para a busca.' });
  }

  livroModel.buscarLivroPorTitulo(titulo, (err, resultado) => {
    if (err) {
      console.error('Erro ao buscar livro por título:', err);
      return res.render('index', { resultado: [], error: 'Erro ao buscar livro por título.' });
    }
    return res.render('index', { resultado });
  });
}

function buscarLivroPorAno(req, res) {
  const { ano } = req.params;

  if (!ano) {
    return res.render('index', { resultado: [], error: 'Por favor, insira um ano para a busca.' });
  }

  livroModel.buscarLivroPorAno(ano, (err, resultado) => {
    if (err) {
      console.error('Erro ao buscar livro por ano:', err);
      return res.render('index', { resultado: [], error: 'Erro ao buscar livro por ano.' });
    }
    if (resultado.length === 0) {
      return res.render('index', { resultado: [], error: `Nenhum livro encontrado para o ano ${ano}.` });
    }
    return res.render('index', { resultado });
  });
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
  buscarLivroPorTitulo,
  buscarLivroPorAno,
  mostrarTodosLivros,
  indexPage
};
