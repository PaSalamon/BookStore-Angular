import { Component } from '@angular/core';
import { Book } from '../../model/book';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrl: './bookstore.component.css'
})
export class BookstoreComponent {

  book : Book = {
    _id : '',
    title : '',
    author : '',
    genre : '',
    price : 0
  }

  _id : string = '';
  title : string = '';
  author : string = '';
  genre : string = '';
  price : number = 0;

  allBooks : Book[] = [];

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this._id = '';
    this.title = '';
    this.author = '';
    this.genre = '';
    this.price = 0;
    this.allBooks = [];
    this.getAllBooks();
  }

  getAllBooks() {
    this.dataService.getAllBooks().subscribe(res => {
      this.allBooks = res;
    }, err => {
      console.log(err);
    })
  }

  getBookById(book : Book) {
    this.dataService.getBookById(book._id).subscribe(res => {
      book = res;
    }, err => {
      console.log(err);
    })
  }

  deleteBookById(book : Book) {
    if(window.confirm('Are you sure you want to delete the book with id: ' + book._id)) {
      this.dataService.deleteBookById(book._id).subscribe(res => {
        this.allBooks = [];
        this.getAllBooks();
      }, err => {
        console.log(err);
      })
    }
  }

  addBook() {
    if(this.title == '' || this.author == '' || this.genre == '' || this.price == 0 || this.price == null){
      alert('Please fill all values')
    }

    this.book.title = this.title;
    this.book.author = this.author;
    this.book.genre = this.genre;
    this.book.price = this.price;
    this.dataService.addBook(this.book).subscribe(res => {
      this.ngOnInit();
    }, err => {
      console.log(err);
    })
  }

  editBook(book : Book) {
    this.getBookById(book);
    this._id = book._id;
    this.title = book.title;
    this.author = book.author;
    this.genre = book.genre;
    this.price = book.price;
  }

  updateBook() {
    if(this.title == '' || this.author == '' || this.genre == '' || this.price == 0 || this.price == null){
      alert('Please fill all values')
    }

    this.book._id = this._id;
    this.book.title = this.title;
    this.book.author = this.author;
    this.book.genre = this.genre;
    this.book.price = this.price;

    this.dataService.updateBook(this.book).subscribe(res => {
      this.ngOnInit();
    }, err => {
      console.log(err);
    })
  }
}
