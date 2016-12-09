import { Component, OnInit } from '@angular/core';

import { Book }  from '../shared';

@Component({
  selector: 'bm-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  /* tslint:disable */
  book: Book = {
    "title": "Eloquent JavaScript",
    "subtitle": "A Modern Introduction to Programming",
    "isbn": "978-1-59327-584-6",
    "abstract": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
    "numPages": 472,
    "author": "Marijn Haverbeke",
    "publisher": {
      "name": "No Starch Press",
      "url": "https://www.nostarch.com/"
    }
  };
  /* tslint:enable */

  constructor() { }

  ngOnInit() {
  }

}
