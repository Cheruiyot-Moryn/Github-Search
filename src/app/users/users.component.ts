import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Users} from '../class/users';

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
