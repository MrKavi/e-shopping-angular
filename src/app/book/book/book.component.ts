import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart/cart.service';
import { Book } from 'src/app/types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book; // for parent to child
  //  @Output() BookEmitter = new EventEmitter<Book>(); // for child to parent
  isInCart: boolean = false;

  constructor(private cartService: CartService) {}

  // click send book info from child  to parent
  addToCart() {
    this.isInCart = true;
    this.cartService.add(this.book);
    //    this.BookEmitter.emit(this.book);   output
  }
  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
  ngOnInit(): void {}
}
