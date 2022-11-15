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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    AboutComponent,
    CartComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AuthModule, BooksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
