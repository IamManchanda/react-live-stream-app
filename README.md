# Live Streaming App in React [Work in Progress]

## Credits

This Live Streaming App was made while learning from this below tutorial.

- [Modern React with Redux [2019 Update]](https://www.udemy.com/react-redux/)

That being said, lot of Styling is either mine or from [Foundation Framework](https://foundation.zurb.com/sites/docs/). Moreover all the codes in the source code (Logic and/or Styling) has been written with with my preferred coding style.

## Installation & Usage

1. Install [Node](https://nodejs.org/en/) (& `npm` that comes with it)
1. Please `cd` into `frontend/client-server` folder and then run `npm install`
1. Create an account at Google Cloud if you don't have it already. 
1. Visit this [link](https://console.cloud.google.com/home/dashboard) and create a new project.
1. Create a new Credential by visiting this [link](https://console.cloud.google.com/apis/credentials)
1. Copy the ClientID for that Credential given by them and update it [here](https://github.com/IamManchanda/react-live-stream-app/blob/master/frontend/client-server/auth-config-sample/google.js#L4).
1. Rename the `auth-config-sample` folder to `auth-config`. The `auth-config` is intentionally gitignored so that your (or my) private google credential for this project don't get hacked. Please don't remove the folder from your gitignore.
1. Run `npm start` to run this on your local server.
1. Open [http://localhost:3000](http://localhost:3000) to view the frontend part of the app within the browser.
1. Run `npm run build` if you want to build the frontend up for deployment. The folder for the deployment lives in `/frontend/client-server/build/` folder. We recommend it to serve it with a static server.
