import { Injectable } from '@angular/core';
import {Book} from './books/Book';

@Injectable()
export class LibraryService {

    constructor() { }

    private _books: Book[] = new Array();
    public get books(){
        return this._books;
    }

    public addBook(book:Book){
//        console.log(book);
//        console.log(this._books);
        this._books.push(book);
        console.log("Book added");


    }
    public removeBook(book:Book){
        console.log("book removed");
    }

    public editBook(book:Book){
        console.log("Book edited");
    }

}
