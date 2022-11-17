import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookListService {
  bookInfo = [
    { name: 'Angular', price: 520 },
    { name: 'React', price: 420 },
    { name: 'Python', price: 820 },
  ];

  apiurl = 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8';
  bookApi: any;
  constructor(private http: HttpClient) {}
  //usign service
  getBookData() {
    return this.bookInfo;
  }
  //using api   import http client
  getBookApi() {
    return this.http.get(this.apiurl);
  }
}
