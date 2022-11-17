import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { AboutComponent } from './about/about/about.component';
import { BooksModule } from './books/books/books.module';
import { CartComponent } from './cart/cart/cart.component';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTransferComponent } from './data-transfer/data-transfer.component';
import { ChildComponent } from './data-transfer/child/child.component';
import { ContactComponent } from './contact/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    AboutComponent,
    CartComponent,
    HomeComponent,
    BookListComponent,
    DataTransferComponent,
    ChildComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BooksModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
