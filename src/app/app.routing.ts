import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders} from '@angular/core';

import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const routes: Routes = [{
  path: '',
  redirectTo: '/books',
  pathMatch: 'full'
}, {
  path: 'books',
  component: BookListComponent
}, {
  path: 'books/:isbn',
  component: BookDetailComponent
}];

export const routing = RouterModule.forRoot(routes);
