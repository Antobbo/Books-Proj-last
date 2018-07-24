export class Book{
    private _bookID: number;
    private _bookAuthor: string;
    private _bookTitle: string;
    private _location: string;
    private _medium: string;
    private _notes: string;

    public set bookID(bookID: number){
        this._bookID = bookID;
    }

    public set bookAuthor(bookAuthor: string) {
        this._bookAuthor = bookAuthor;
    }

    public set bookTitle(bookTitle: string){
        this._bookTitle = bookTitle;
    }

    public set location(location : string){
        this._location = location;
    }

    public set medium(medium : string){
        this._medium = medium;
    }
    public set notes(notes: string){
        this._notes = notes;
    }

    public get bookID(){
        return this._bookID;
    }
    public get bookAuthor(){
        return this._bookAuthor;
    }
    public get bookTitle(){
        return this._bookTitle;
    }
    public get location(){
        return this._location;
    }
    public get medium(){
        return this._medium;
    }
    public get notes(){
        return this._notes;
    }

}