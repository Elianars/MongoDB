'use strict'
module.exports = function(app){
    var livrocontroller = require('../controllers/livroController')

    app.route('/livro')
        .get(livrocontroller.lista_todos_os_livros)
        .post(livrocontroller.adiciona_um_livro)

    app.route('/livro/:livroId')
        .get(livrocontroller.lista_um_livros)
        .put(livrocontroller.atualiza_um_livro) 
        .delete(livrocontroller.remove_um_livro)

}