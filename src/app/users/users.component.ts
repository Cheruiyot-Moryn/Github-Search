import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    
  users: Users;
  repositories!: any[];
  created_at:any;
  username!: string;

  constructor(private dataService: DataService) {
    this.users = new Users ("","","","","","","",0,false,new Date(),0,0);
    this.dataService.getUsers().subscribe((users: any) => {
      console.log(users);
      this.users = users;
    });

    this.dataService.getRepos().subscribe((repositories: any[]) => {
      console.log(repositories);
      this.repositories = repositories;
    })
   }

   searchUser(){
    this.dataService.updateUsers(this.username);
    this.dataService.getUsers().subscribe((users: any) => {
     console.log(users);
     this.users = users;
   });

   this.dataService.getRepos().subscribe((repositories: any[]) => {
     console.log(repositories);
     this.repositories = repositories;
   })
  }

  ngOnInit(): void {
  }

}
