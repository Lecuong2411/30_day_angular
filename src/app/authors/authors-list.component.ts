import { Component } from '@angular/core';
import { authors } from '../authors.model';

@Component({
  selector: 'author-list',
  template: `
  <author-details *ng-For="let author of authors"  [author]="author"></author-details>`,
})
export class AuthorListComponent {
  authors = authors;
}
