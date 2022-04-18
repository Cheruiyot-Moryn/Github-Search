import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UsersComponent } from './users/users.component';
import { ErrorComponent } from './error/error.component';
import { NamePipe } from './name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    UsersComponent,
    ErrorComponent,
    NamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
