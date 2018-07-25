import {Book} from './Book';
export class Library{

    private _books: Book[];
    public get books(){
        return this._books;
    }

    public addBook(){
        console.log("book added");
    }
    public removeBook(){
        console.log("book removed");
    }
}
