import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {


  private username!: string;
  private repositoriesname!: string;
  private show!: number;
  

  constructor(private http:HttpClient) { 
    console.log('service is ready');
    this.username = 'Cheruiyot-Moryn';
    this.repositoriesname = 'Quotes';
    this.show = 10;
  }

  getUsers(){
    return this.http.get(environment.apiUrl+'users/'+ this.username + "?access_token=" + environment.accessToken)
  }

  getRepos(){
   return this.http.get(environment.apiUrl+ 'users/' + this.username + "/repos?order=created&sort=asc?access_token=" + environment.accessToken)}

 getRepoInfo(){
   return this.http.get( environment.apiUrl + 'search/repositories?q={' + this.repositoriesname +'}&per_page='+this.show+'&sort=forks&order=asc?' + environment.accessToken)
 }

 updateUsers(username:string){
   this.username = username;
 }


 updateRepos(reponame:string){
   this.repositoriesname = reponame;
 }

 updateShow(show:number){
   this.show = this.show+10;
 }
}
