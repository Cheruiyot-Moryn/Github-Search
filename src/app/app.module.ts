import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { RoutingModule } from './routing-module'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UsersComponent } from './users/users.component';
import { ErrorComponent } from './error/error.component';
import { NamePipe } from './name.pipe';
import { FontDirective } from './font-directive';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RepositoriesComponent,
    ErrorComponent,
    FontDirective,
    NamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RoutingModule
  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
