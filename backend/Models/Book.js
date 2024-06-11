const mongoose = require('mongoose');

const Book = mongoose.model('Book', {
    title : {type : String},
    author : {type : String},
    genre : {type : String},
    price : {type : Number}
});

module.exports = Book;