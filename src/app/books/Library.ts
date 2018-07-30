import {Book} from './Book';
export class Library{

    private _books: Book[] = new Array();
    constructor(){};
    public get books(){
        return this._books;
    }

    public addBook(book:Book){
        console.log(book);
        console.log(this._books);
        this._books.push(book);


    }
    public removeBook(book:Book){
        console.log("book removed");
    }
}
