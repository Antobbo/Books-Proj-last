import { Component, OnInit } from '@angular/core';
import {IBook} from './ibook';
@Component({
  selector: 'app-books',
  moduleId: module.id,//allows to use relative URLs
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']

})
export class BooksComponent implements OnInit {
    pageTitle: string = "Book list";
    listFilter: string = "";

    //this will need to come from the database eventually
    books: IBook[] = [
        {
            "bookID":1,
            "bookAuthor":"John Beck",
            "bookTitle":"The story of my life",
            "location":"Shelf downstairs",
            "medium":"paper",
            "notes":""
        },
        {
            "bookID":2,
            "bookAuthor":"Jack Mills",
            "bookTitle":"They",
            "location":"Shelf downstairs",
            "medium":"PDF",
            "notes":"This is on my laptop and phone"
        }
    ];

    deleteRecord($event, thisBook): void{
        console.log("Delete record n. " + thisBook.bookID);
        $event.preventDefault();
    }
    editRecord($event,thisBook): void{
        console.log("Edit record n. " + thisBook.bookID);
        $event.preventDefault();
    }

    createNewRecord($event): void{
        console.log("createNewRecord() called");
        $event.preventDefault();
    }

  constructor() { }

  ngOnInit() {
  }


}
