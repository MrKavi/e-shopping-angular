import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books/books/books.component';
import { CartComponent } from './cart/cart/cart.component';
import { ContactComponent } from './contact/contact/contact.component';
import { DataTransferComponent } from './data-transfer/data-transfer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },

  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },

  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'book-list',
    component: BookListComponent,
  },
  {
    path: 'data-transfer',
    component: DataTransferComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
