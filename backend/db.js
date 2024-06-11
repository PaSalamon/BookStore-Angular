const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/BookStoreDB', (err) => {
    if(err) {
        console.log('Connection has ended with error' + err);
    }
    else {
        console.log('Connection is successful');
    }
});

module.exports = mongoose;