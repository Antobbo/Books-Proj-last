import { Component, OnInit, Input } from '@angular/core';
import {IBook} from './ibook';
import {Book} from '../books/Book';
import {Library} from '../books/Library';
import {LibraryService} from '../library.service';

@Component({
  selector: 'app-books',
  moduleId: module.id,//allows to use relative URLs
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']

})
export class BooksComponent implements OnInit {
    pageTitle: string = "Book list";
    listFilter: string = "";
    bookList: Book[];
    //get the booklist and then we can use it to loop through it in the html file

    //this will need to come from the database eventually
    books: IBook[] = [
        {
            "bookID":356,
            "bookAuthor":"John Beck",
            "bookTitle":"The story of my life",
            "location":"Shelf downstairs",
            "medium":"paper",
            "notes":""
        },
        {
            "bookID":900,
            "bookAuthor":"Jack Mills",
            "bookTitle":"They",
            "location":"Shelf downstairs",
            "medium":"PDF",
            "notes":"This is on my laptop and phone"
        }
    ];

    static createNewRecord($record): void{
        console.log("createNewRecord() called");
        //console.log($record);
      //  this.books.push($record);
       // console.log($record);
      //  $event.preventDefault();
    }


  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
  }


}
