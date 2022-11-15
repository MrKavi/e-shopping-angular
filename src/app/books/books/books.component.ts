import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  constructor(private booksService: BooksService) {}

  // cart: Book[] = [];

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
  // //getting from book ... parent to child
  // addToCard(book: Book) {
  //   console.log(book);
  // }
}
