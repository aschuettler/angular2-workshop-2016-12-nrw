import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';

import {
  Book,
  BookDataService,
}  from '../shared';

@Component({
  selector: 'bm-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookData: BookDataService
  ) { }

  ngOnInit() {
    this.route.params
      .map(params => params['isbn'])
      .distinctUntilChanged()
      .do(v => this.book = undefined) // reset the loaded book
      .switchMap(isbn => this.bookData.getBookByIsbn(isbn)) // send the request to the server
      .subscribe(
        book => this.book = book
      );
  }

}
