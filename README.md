# Github-Search

The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Description

Github-Search is a web application that uses the GitHub API to perform searches on GitHub and display the results to the user.

## Features

1. Uses the Github API to perform searches on Github, and display the results to the users.
2. Users page searches for user profile strictly using the user name.
3. Repositories page searches for repositories strictly using the repository name.
4. Repository page loads 10  searches and one can click `load more` to view more pages.

## Behaviour Driven Development

| Behaviour | Input | Output |
| --------- | ------| ------ |
|Show github profile|Enter the Username in the search box and cick `search`|Displays name, username, bio, number of repositories, Hireable, date of creating the repo, followers, following and public gists|
|Search gitub repositories | Navigate to Repos page click on `Repositories` and type the name of repository.|Displays a list of 10 repositories based on the query|
|Load more search Results|Click `Load More` button on the Find Repos page |Adds 10 more results in the search results|
|Redirect to github profile on Github website | Click the `view on github` button of a Github user | Opens the profile on the Github website|
|Redirect to a specific Github Repository | Click the `view on github` button of a repository on repositories page | Opens the Repository on Github website |

## Live Website

View the complete site [here](https://cheruiyot-moryn.github.io/Github-Search/)

## Technologies Used

It is built using Angular JS, HTML, Bootstrap.
The website uses components, custom directives, custom pipes, routing modules.
The components in the application are:

## Contributors

Moureen Chepkoech Cheruiyot

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## License

### MIT License

Copyright (c) [2022] [Cheruiyot Moureen]

### Contact Information

ctotomc98@gmail.com

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).