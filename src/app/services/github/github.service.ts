import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  // Get a github user...
  getUser(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}`);
  }

  // Get a github user's repos...
  getUserRepos(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }
}
