# About The Project

Rick and Morty Serial Application is an application where users can review The Rich and Morty Serial location and characters and see their details.

DEMO: https://delightful-cannoli-89d633.netlify.app/
# Description

* The application is prepared using the Next.JS Framework.
* React library and React Hooks structures are used in the application.
* All features of the project are in working condition.
* The project looks responsive on all screens.
* https://rickandmortyapi.com/ Api is used for application data.
* MUI and SCSS are used as UI library.
* Loading Skeleton and content loader libraries are used.
* Using the relevant API, 4 locations are used on the home page.
* A total of 126 location screens in the relevant API are printed.
* At the bottom of the main page, forward and backward options are used as the pagination structure.
* In each forward or reverse state, the next/previous 4 loactions are listed.
* If any location is clicked, the characters in the location are printed on the screen.
* Forward and backward options are used as the pagination structure at the bottom of the page.
* For each forward or reverse, the next/previous 10 characters are listed.
* In the Characters page, the characters can be sorted according to their 4 different states.
* These are; they are all dead, alive and unknown, filtered by clicking any button.
* When a character card component is clicked, the character's detail page is reached and the data of the character details are listed.
* Other characters are listed on the character detail page.
* Other characters are listed by. If the clicked character is alive, dead or unknown, the characters with him are filtered to the screen and listed as 6 pieces.
* Application dependencies are managed with the yarn package manager.

# Project Outcome

![ezgif-5-25eb887ad5](https://user-images.githubusercontent.com/108489800/209237152-be9785dd-43bf-4285-8e95-82da25cf2d83.gif)

# Project Skeleton

`The Rich And Morty (folder)
|
├── app
│    └── store.js
|
│── assets
|    ├── 404error.jpg
│    ├── back.png
|    ├── noİmg.jpg
|    └── rickAndMort.png
|
│── buttons
|    ├── Button.module.scss
|    └── Buttons.jsx
|
|── component
|    ├── CharactersLoader.jsx
|    ├── Navbar.jsx
|    ├── OtherCharacters.jsx
|    ├── PaginationLocation.jsx
|    └── PaginationCharacters.jsx
|
├── featur
│    └── api.js
|
├── pages
│    ├── Characters.jsx
│    ├── CharactersDetails.jsx
│    ├── Location.jsx
│    └── NoCharacters404.jsx
|
├── Router
│    └── AppRouter.svg
|
├── scss
│    ├── _reset.scss
│    ├── _variables.scss
│    ├── Characters.module.scss
│    ├── CharactersDetails.module.scss
│    ├── Location.module.scss
│    ├── NoCharacters404.module.scss
│    ├── OtherCharacters.module.scss
|    ├── Pagination.module.scss
│    └── Style.scss
|
├── App.css
├── App.js
├── index.css
└── index.js`
# Getting Started

This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

### Installation

Below is an example of how you can instruct your audience on installing and setting up your app. This template does not rely on any external dependencies or services.

1. Clone the repo

`git clone https://github.com/Muhammet-Developer/task-app.git`

2. Install YARN packages

`yarn install`

3. The project is ready, you can start using it now. You can run:
  
  `yarn start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

# Project Development Process
* 1.: For Api `https://rickandmortyapi.com/api/location`
* 2.: Scss  was used as a css library for styling purposes in the project. MUI is used for pagination.
* 3.: The application is designed in a responsive structure that can run smoothly on mobile and desktop platforms.
* 4.: Developed using Redux in the project
* 5.: The application has been shared on Github. During the project preparation, the development phases were committed and pushed into the warehouse.
* 6.: Used yarn package manager during application development.
* 7.: The project was finally deployed using the netlify service.
