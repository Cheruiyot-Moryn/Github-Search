import { Component, OnInit } from '@angular/core';
import { Repositories} from './repositories.component.spec'
import { DataService } from '../data.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repositories: Repositories;
  reponame!: string;
  show!: number;

  constructor(private dataService: DataService) { 
    this.repositories = new Repositories ("","","",new Date());
    this.dataService.getRepoInfo().subscribe((repositories: any) => {
      console.log(repositories);
      this.repositories = this.repositories;
  });

}


searchRepo(){
  this.dataService.updateRepos(this.reponame);
  this.dataService.getRepoInfo().subscribe((repositories: any) => {
   console.log(repositories);
   this.repositories = repositories;
 });
 
}

loadMore(){
  this.dataService.updateShow(this.show);
  this.dataService.getRepoInfo().subscribe((repositories: any) => {
   console.log(repositories);
   this.repositories = repositories;
 });
 
}


  ngOnInit(): void {
  }

}
