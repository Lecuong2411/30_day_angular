import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthorListComponent } from './authors/authors-list.component';
import { AuthorDetailsComponent } from './authors/authors-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
