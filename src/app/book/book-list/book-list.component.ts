import {
  Component,
  OnInit,
  OnChanges,
} from '@angular/core';

import {
  Book,
  BookDataService
} from '../shared';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(
    private bookData: BookDataService
  ) { }

  ngOnInit() {
    this.bookData
      .getBooks()
      .subscribe(
        (books) => { this.books = books; }
      );
  }

}
