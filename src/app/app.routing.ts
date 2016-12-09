import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders} from '@angular/core';

import { BookListComponent } from './book-list/book-list.component';

export const routes: Routes = [{
  path: '',
  redirectTo: '/books',
  pathMatch: 'full'
}, {
  path: 'books',
  component: BookListComponent
}];

export const routing = RouterModule.forRoot(routes);
