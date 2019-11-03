# Contact manager

#ANGULAR JS CONTACT APP

#Develop REST APIs for assignment 9.

#Installation
1. Clone the repository git clone https://github.com/neu-mis-info6150-spring-2019/assignment-9-mansiagrawal25.git.
2. Navigate to project directory cd assignment-9-mansiagrawal25.
3. Run npm install.

# Build
1. Default build mode is production. This will build index.html , main.js and main.css files in the dist directory.

2. To build the app, run npm run build.
3. Launch the app by opening the file ./dist/index.html in a browser.
#Development Server
1. Follow below steps to lauch the app using webpack-dev-server.
2. Run npm start or npm run start.
3. This will open the app on a browser window.

======= #INFO6150 ASSIGNMENT 9

#User Requirements:
1. As a user, I should be able to see all existing contact information using a REST API.
2.  As a user, I should be able to click a contact and able to see its detailed view.
3.  As a user, I should be able to open add new contact view by clicking the add button.
4.  As a user, I should be able to add a contact by entering the first name, last name, email, and phone number.

#Technical Requirements:
1.  The goal of this assignment is to learn about Angular.
2. Use angular HTTP client module to fetch data from the Nodejs server.
3. You should use angular component and data binding features. You should use SCSS for CSS.
4. You should use angular-cli for building the project.
5. No JavaScript libraries should be used for this assignment.

#DESCRIPTION

The index page will display a table with a list of available contacts.
On clicking the ADD button, a new contact can be added into the table.
By clicking on an existing contact, the user can view the details of the contact.
By clicking the EDIT button, the user can modify an existing contact.
Clicking the DELETE button allows the user to delete a contact.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run "node server.js" from command prompt or a terminal to RUN the DB server.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).