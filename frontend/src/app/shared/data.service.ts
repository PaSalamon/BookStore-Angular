import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url : string = 'http://localhost:3000/bookstore'
  constructor(private http : HttpClient) { }

  getAllBooks() : Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  getBookById(id : string) : Observable<Book> {
    return this.http.get<Book>(this.url + '/' + id);
  }

  deleteBookById(id : string) : Observable<Book> {
    return this.http.delete<Book>(this.url + '/' + id);
  }

  updateBook(book : Book) : Observable<Book> {
    console.log(this.url + '/' + book._id);
    return this.http.put<Book>(this.url + '/' + book._id, book);
  }

  addBook(book : Book) : Observable<Book> {
    return this.http.post<Book>(this.url, book);
  }
}
