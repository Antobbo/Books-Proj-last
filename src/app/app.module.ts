import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookFilterPipe } from './books/book-filter.pipe';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent, BookFilterPipe, BookFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
