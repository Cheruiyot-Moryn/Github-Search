import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GithubService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // Properties...
  public formData: {
    search: string;
  } = {
    search: '',
  };

  public repos: {
    html_url: string;
    full_name: string;
    forks_count: number;
    description: string;
    stargazers_count: number;
  }[] = [];

  public githubUser:
  {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    bio: string;
    location: string;
    followers: number;
    following: number;
  } |
   any = null;

  public searched: boolean = false;
  public searching: boolean = false;
  public notFound: boolean = false;

  public selectedTab: 'users' | 'repos' = 'repos';

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {}

  // Handle serached flag...
  onSearched(): void {
    // Update the searched flag...
    this.searched = true;
    setTimeout(() => {
      this.searched = false;
    }, 3000);
  }

  // Handle submit event...
  onSubmit(form: NgForm): void {
    // Get the form data...
    const { search } = form.value;
    // Reset the previous search...
    this.repos = [];
    // Check that the search field is not empty...
    if (search && search.length > 2) {
      // Set the searching flag...
      this.searching = true;
      if (this.selectedTab === 'repos') {
        // Get a user...
        this.githubService.getUserRepos(search).subscribe({
          next: (repos) => {
            // Update the repos...
            if (repos && repos.length > 0) {
              this.repos = repos;
              this.searching = false;
            } else {
              this.searching = false;
            }
            // Update the searched flag...
            this.onSearched();
          },
          error: (error) => {
            if (error.status === 404) {
              this.notFound = true;
              this.searching = false;
            }
            // Update the searched flag...
            this.onSearched();
          },
        });
      } else {
        // Reset previous search...
        this.githubUser = null;
        // Get a user...
        this.githubService.getUser(search).subscribe({
          next: (user) => {
            if (user) {
              // Update the user...
              this.githubUser = user;
              this.searching = false;
              console.log(user);
            }
            // Update the searched flag...
            this.onSearched();
          },
          error: (error) => {
            if (error.status === 404) {
              this.notFound = true;
              this.searching = false;
            }
            // Update the searched flag...
            this.onSearched();
          },
        });
      }
    }
  }

  // Handle tab change event...
  onTabChange(tab: 'users' | 'repos'): void {
    this.selectedTab = tab;
  }
}
