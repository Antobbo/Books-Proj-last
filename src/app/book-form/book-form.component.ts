import { Component, OnInit, Input } from '@angular/core';
import {BooksComponent} from '../books/books.component';
import {Book} from '../books/Book';
import {Library} from '../books/Library';
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

    library: Library =  new Library();
    triggerText: String = "Create record";
    isToggleForm: boolean = false;
    toggleForm():void{
        this.isToggleForm = !this.isToggleForm;
        this.isToggleForm ? this.triggerText = "Close form" : this.triggerText = "Create record" ;
        console.log("isToggleForm is " + this.isToggleForm + "; triggerText is " + this.triggerText);
    }
  constructor() { }

  ngOnInit() {
  }

   onSubmit(form: any):void{
       console.log(form.author);
       console.log(form.title);
       console.log(form.location);
       console.log(form.medium);
       console.log(form.notes);
      // this.generateBookId();
       let bookRecord:Book = new Book(this.generateBookId(), form.author, form.title, form.location, form.medium, form.notes );

       this.library.addBook(bookRecord);
       console.log(bookRecord);
       console.log( this.library.books);


       //stringify
       this.stringifyData(form);
   }

    stringifyData(theForm):void{
        var stringifiedForm = JSON.stringify(theForm);
       // console.log(stringifiedForm);
        //book:Book = new Book();
        BooksComponent.createNewRecord(stringifiedForm);
        //console.log(this.books);

    }
    generateBookId():number{
        let currentID: number;
        currentID = Math.floor(Math.random()*899999+100000);
        console.log(currentID);
        return currentID;
    }
}
