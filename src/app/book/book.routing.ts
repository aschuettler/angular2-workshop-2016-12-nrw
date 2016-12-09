import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders} from '@angular/core';

import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const routes: Routes = [{
  path: 'books',
  component: BookComponent,
  children: [{
    path: '',
    component: BookListComponent,
  }, {
    path: ':isbn',
    component: BookDetailComponent
  }]
}];

export const routing = RouterModule.forChild(routes);
