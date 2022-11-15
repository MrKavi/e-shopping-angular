import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';
import { BookComponent } from 'src/app/book/book/book.component';
import { StarComponent } from 'src/app/svg/star/star.component';

@NgModule({
  declarations: [BooksComponent, BookComponent, StarComponent],
  providers: [BooksService],
  imports: [CommonModule],
  exports: [BooksComponent],
})
export class BooksModule {}
