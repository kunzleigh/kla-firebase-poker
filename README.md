# KlaScrumPoker

This project was created using the Angular cli, Ionic cli and Firebase cli

Go here to check out our presentation https://docs.google.com/presentation/d/1HEZjWivdL5ZgXuX-pKKu0PORoqRkbS4mWRkc_tWJ3OM/edit#slide=id.g2b0bfeec64_0_3

# Angular Web App (project directory = /web)

## To run you will need
* Node, we used 7.10, but any up to date version should work fine. https://nodejs.org/en/
* npm, comes with Node, no installation needed. 
* Angular cli (command line tools) `npm install -g @angular/cli`
* Firebase cli `npm install -g firebase-tools`
* git, our instructions will include using the command line, 
  but feel free to use your favorite git GUI client. https://git-scm.com/downloads

## Next set up the firebase project
* https://console.firebase.google.com/
* **Add project** > **Create project**
* Name it whatever you want, the project id will be created for you based on the name, but you can edit it if you like

## Set up the project locally
* Clone the repository `git clone https://github.com/kunzleigh/kla-scrum-poker.git`
* From the project directory install node_modules `cd kla-scrum-poker/web | npm install`

## Configure firebase for your project
* From your firebase console overview page, click **Add Firebase to your web app**
* Copy the contents of the config var and paste it into the firebase const in **shared/configs/firebase.ts** 
* Update git to not track the changes to this file 
  `git update-index --assume-unchanged src/configs/firebase.ts`
  we do this so that you are not accidentally exposing your apps security information

## Set up google authentication for your app
* From the firebase console overview, **DEVELOP** > **authentication** > **sign-in method** > **google** > **enable** > **save**

## Set up firebase via cli
* From the project directory `fireabse login` > login with your google account as prompted
* `firebase init` > when prompted, select Database, Functions, Hosting and Storage using arrow keys and the spacebar
* Select your project as the default project when prompted. 

### A series of prompts will come up
* Cheat sheet: [enter], n, n, n, y, dist, y, [enter]
* More specifically:
* File for Database Rules? database.rules.json (just hit enter for the default)
* Any prompt that asks you to overwrite a file: No
* Do you want to install npm dependencies? Yes
* What do you want to use as your public directory? dist 
(this is the folder that will be deployed to the hosting server)
* Configure as a single-page app (...)? Yes
* File for Storage Rules? storage.rules (just hit enter for the default)
* ^ Note if you find that you are having trouble uploading a picture in your app you may have to remove `if request.auth!=null`     from storage.rules. This is not ideal, and we will hope to have an updated fix for this soon!

## Set firebase cli to use this project and deploy to hosting server
* From the project directory `firebase use`
* `ng build | firebase deploy` > this will give you a hosting URL where your app is located
* If your deploy does not work correctly in any way, make sure that you selected the dist directory as the public directory in the   cli setup step, if you did not set the value in firebase.json `hosting: { public: "dist" ...}`. This tells firebase what to       deploy to the hosting server, for angular this is the dist folder! If you do not have a dist directory, run `ng build` in the     project directory.

# Ionic mobile app (project directory = /mobile)

## To run you will need
* Ionic cli and cordova `npm install -g cordova ionic`

## Build and run the app!
* From the project directory run `npm install | ionic serve` to install dependencies and serve the app to http://localhost:8100

## (Coming soon) Link to Ionic Pro for mobile deploys.
