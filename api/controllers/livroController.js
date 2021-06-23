'use strict'
var mongoose = require('mongoose')
var livro = mongose.model('livro')
// Get All
exports.lista_todos_os_livros = function(req, res) {
    livro.find({}, function( err, livros) {
        if(err) {
            res.send(err)
        }
        res.json(livros)
    })
}

//Get ID

exports.lista_um_livros = function(req, res) {
    livro.find({"_id" : req.params.livroId}, function( err, livro) {
        if(err) {
            res.send(err)
        }
        res.json(livro)
    })
}

//Post

exports.adiciona_um_livro = function(req, res) {
    novo_livro = new livro(req.body)
    novo_livro.save(function(err,livro){
        if(err) {
            res.send(err)
        }
        res.json(livro)
    
    })
}

exports.atualiza_um_livro = function(req,res) {
    livro.findOneAndUpadate({_id: req.params.livroId}, req.body,{new: true},
        function(err, livro) {
        if (err){
            res.send(err);
        }
         res.json(livro);

    });
}

//Delete
exports.remove_um_livro = function(req, res){
    livro.remove({_id: req.params.livroId}, function(err, livro){
        if(err) {
            res.send(err)
        }
        res.json({"Mensagem" : "Livro deletado com sucesso"})
    }
    )
}
