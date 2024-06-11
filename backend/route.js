const express = require('express');
const router = express.Router();

const mongoTypes = require('mongoose').Types;
const Book = require('../backend/Models/Book.js');

router.get('/', (req, res) => {
    Book.find((err, doc) => {
        if(err) {
            console.log('Error occured while fetching data.' + err);
            res.status(400).send('Internal error:' + err);
        }
        else{
            res.send(doc);
        }
    })
})

router.post('/', (req, res) => {
    let book = new Book({
        title : req.body.title,
        author : req.body.author,
        genre : req.body.genre,
        price : req.body.price
    })

    book.save((err, doc) => {
        if(err) {
            console.log('Internal error: ' + err);
            res.status(400).send('Internal error:' + err);
        }
        else{
            res.send(doc);
        }
    })
})

router.post('/', (req, res) =>{
})

router.get('/:id', (req,res) => {
    if (mongoTypes.ObjectId.isValid(req.params.id)) {
        Book.findById(req.params.id, (err, doc) => {
            if(err) {
                console.log('Internal error: ' + err);
                res.status(400).send('Internal error: ' + err);
            }
            else{
                res.send(doc);
            }
        })
    }
    else {
        res.status(400).send('No record found with id: ' + id);
    }
})

router.delete('/:id', (req,res) => {
    if (mongoTypes.ObjectId.isValid(req.params.id)) {
        Book.findByIdAndRemove(req.params.id, (err, doc) => {
            if(err) {
                console.log('Internal error: ' + err);
                res.status(400).send('Internal error: ' + err);
            }
            else{
                res.send(doc);
            }
        })
    }
    else {
        res.status(400).send('No record found with id: ' + id);
    }
})

router.put('/:id', (req,res) => {
    let book = {
        title : req.body.title,
        author : req.body.author,
        genre : req.body.genre,
        price : req.body.price
    }

    if (mongoTypes.ObjectId.isValid(req.params.id)) {
        Book.findByIdAndUpdate(req.params.id, {$set : book}, {new :true}, (err, doc) => {
            if(err) {
                console.log('Internal error: ' + err);
                res.status(400).send('Internal error: ' + err);
            }
            else{
                res.send(doc);
            }
        })
    }
    else {
        res.status(400).send('No record found with id: ' + id);
    }
})

module.exports = router;