# Live Streaming App in React [Completed]

## Credits

This Live Streaming App was made while learning from this below tutorial.

- [Modern React with Redux [2019 Update]](https://www.udemy.com/react-redux/)

That being said, lot of Styling is either mine or from [Foundation Framework](https://foundation.zurb.com/sites/docs/). Moreover all the codes in the source code (Logic and/or Styling) has been written with with my preferred coding style.

## Installation

1. Install [Node](https://nodejs.org/en/) (& `npm` that comes with it)
2. Clone this repo.
3. Install [Open Broadcaster Software](https://obsproject.com/) aka OBS for your operating system.

## Usage

### Backend - API Server

1. **Open New Terminal Window** & Please `cd` into `backend/api-server` folder and then run `npm install`
1. Run `npm start` to run this on your local server. This opens port `3005`.
1. Open [http://localhost:3005/streams](http://localhost:3005/streams) to view the fake api resource powered by `json-server`. We are using this API Server for interacting with our Frontend.

### Backend - RTMP Server

1. **Open New Terminal Window** & Please `cd` into `backend/rtmp-server` folder and then run `npm install`
1. Run `npm start` to run this on your local server. This opens port `1935` for rtmp and port `8000` for http.

### Frontend - Client Server

1. **Open New Terminal Window** & Please `cd` into `frontend/client-server` folder and then run `npm install`
1. Create an account at Google Cloud if you don't have it already. 
1. Visit this [link](https://console.cloud.google.com/home/dashboard) and create a new project.
1. Create a new Credential by visiting this [link](https://console.cloud.google.com/apis/credentials)
1. Copy the ClientID for that Credential given by them and update it [here](https://github.com/IamManchanda/react-live-stream-app/blob/master/frontend/client-server/auth-config-sample/google.js#L4).
1. Rename the `auth-config-sample` folder to `auth-config`. The `auth-config` is intentionally gitignored so that your (or my) private google credential for this project don't get hacked. Please don't remove the folder from your gitignore.
1. Run `npm start` to run this on your local server. This opens port `3000`.
1. Open [http://localhost:3000](http://localhost:3000) to view the frontend part of the app within the browser.
1. **Open New Terminal Window** & Run `npm run build` if you want to build the frontend up for deployment. The folder for the deployment lives in `/frontend/client-server/build/` folder. We recommend it to serve it with a static server.

## Streaming through OBS

1. Open OBS. For Live ScreenShare Recording, in the scenes sub window, click on "+" icon and create a new scene. After that on sources sub window, click on "+" icon multiple times and add "Audio Input Capture" & "Display Capture" respectively. For other types of streaming, consult Mr. Google!
1. Click on "Settings => Stream". Choose Streaming Type as custom streaming server. Set URL as `rtmp://localhost/live`.
1. For stream key, enter the stream id of the stream you want to play. For example, for URL `http://localhost:3000/streams/8` the stream id would be 8. Please insert that ID. Click Ok and then start streaming. Stream should be available at `http://localhost:3000/streams/:id` where id is your stream id and url to browse the same.
