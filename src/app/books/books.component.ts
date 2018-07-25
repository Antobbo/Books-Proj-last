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

    deleteRecord($event, thisBook): void{
        console.log("Delete record n. " + thisBook.bookID + "; type " + typeof thisBook);
        for(var i = 0; i < this.books.length; i++){
          if(this.books[i].bookID == thisBook.bookID){
            console.log(this.books[i]);
            this.books.splice(i, 1);
          }
        }
    }
    editRecord($event,thisBook): void{
        console.log("Edit record n. " + thisBook.bookID);
        $event.preventDefault();
    }

    static createNewRecord($record): void{
        console.log("createNewRecord() called");
        console.log($record);
      //  this.books.push($record);
        console.log($record);
      //  $event.preventDefault();
    }

    printArray(){//test method to remove
      console.log(this.books);
    }
  constructor() { }

  ngOnInit() {
  }


}
