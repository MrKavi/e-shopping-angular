import { Component, OnInit } from '@angular/core';
import { BookListService } from '../services/book-list.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  bookList: any;
  bookApi: any;
  constructor(private bookListService: BookListService) {
    this.bookList = this.bookListService.getBookData();
    this.bookListService.getBookApi().subscribe((result) => {
      this.bookApi = result;
    });
  }

  ngOnInit(): void {}
}
