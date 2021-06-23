'use strict'
var mongoose = require ('mogose')
var Schema = mongoose.Schema

var livroScchema = Schema({
    titulo: {
        type: String
    },
    autor: {
        type:String
    }
})

module.exports = mongoose.model('livro' , livroScchema)