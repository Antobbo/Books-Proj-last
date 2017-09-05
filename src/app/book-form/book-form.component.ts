import { Component, OnInit } from '@angular/core';
import {BooksComponent} from '../books/books.component';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
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
       console.log(form);
       //stringify
       this.stringifyData(form);
   }

    stringifyData(theForm):void{
        var stringifiedForm = JSON.stringify(theForm);
        console.log(stringifiedForm);

    }
}
