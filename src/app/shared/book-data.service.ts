import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Book } from './book';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookDataService {

  constructor(
    private http: Http
  ) { }

  getBooks(): Observable<Book[]> {
    return this.http
      .get('http://localhost:4730/books')
      .map(response => response.json());
  }

}
