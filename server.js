var express = require('express');

app = express();
port = process.env.PORT || 3000;
mongoose = require('mongoose')
livro = require('./api/models/livroModel');
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongosedb+srv://youtube:youtube@cluster0.k')