import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { UsersComponent } from "./users/users.component";
import { RepositoriesComponent } from "./repositories/repositories.component";
import { ErrorComponent } from "./error/error.component";

const routes:Routes=[
    {path:"users",component:UsersComponent},
    {path:"repos",component:RepositoriesComponent},
    {path:"",redirectTo:"/users",pathMatch:"full"},
    {path:'**',component:ErrorComponent}
  ]

  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    exports:[RouterModule],
    declarations: []
  })
  
export class RoutingModule {
}
