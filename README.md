# KlaScrumPoker

This project was created using the Angular cli, Ionic cli and Firebase cli

# Angular Web App (project director = /web)

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
* From the project directory install node_modules `cd kla-scrum-poker | npm install`

## Configure firebase for your project
* From your firebase console overview page, click **Add Firebase to your web app**
* Copy the contents of the config var and paste it into the firebase const in **src/configs/firebase.ts** 
* Update git to not track the changes to this file 
  `git update-index --assume-unchanged src/configs/firebase.ts`
  we do this so that you are not accidentally exposing your apps security information.

## Set up google authentication for your app
* From the firebase console overview, **authentication** > **sign-in method** > **google** > **enable** > **save**

## Now you can build and run the app!
* From the project directory `ng serve`
* Point your favorite browser to localhost:4200 

## Set up firebase via cli
* From the project directory `fireabse login` > login with your google account as prompted
* `firebase init` > when prompted, select Database, Functions and Hosting using arrow keys and the spacebar
* Select your project as the default project when prompted. 

### A series of prompts will come up
* File for Database Rules? database.rules.json
* Any prompt that asks you to overwrite a file: No
* Do you want to install npm dependencies? Yes
* What do you want to use as your public directory? dist 
(this is the folder that will be deployed to the hosting server)
* Configure as a single-page app (...)? Yes

## Set firebase cli to use this project and deploy to hosting server
* From the project directory `firebase use`
* `firebase deploy` > this will give you a hosting URL where your app is located

# Ionic mobile app (project directory = /mobile)

## To run you will need
* Ionic cli and cordova `npm install -g cordova ionic`

## Build and run the app!
* From the project directory run `npm install` followed by `ionic serve` to serve the app to http://localhost:8100

## (Coming soon) Link to Ionic Pro for mobile deploys.
