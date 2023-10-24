# REST API Demo - Fall 2023

This is a simple REST API from our "Backend Basics" workshop. This API is a fake social media service, where users can create, read, update, and delete text posts. 

While this project is a simple demonstration, feel free to use it as a starting point if you're new to writing backends in TypeScript. Check out the workshop on our YouTube for a walkthrough of this entire project!

## Setup && Running the Project
* Install [NodeJS](https://nodejs.org/en) and [MongoDB](https://www.mongodb.com/try/download/community) on your device.
* In a terminal window, run `mongod` to launch a local database.
* Run `git clone https://github.com/ufssd/restapi-fall23.git` in your terminal to download this project.
* Copy `.env.example` into a new file called `.env`
* CD into the project folder and run `npm install`.
* Run `npm run dev` to start the server on `localhost:4000`. If you want, you can change the port number in `.env`
* We also recommend using [Postman](https://www.postman.com/downloads/) to send HTTP requests to the server.

If you want to customize any project settings, check out our [JavaScript/TypeScript workshop](https://youtu.be/d1jhrYy2vFU?si=vznBJd22ysGPuHnN) to learn more about Node, TypeScript, and NPM!

## Project Structure && Architecture
All code is inside `src`, and the backend's entry point is `src/main.ts`.

The `posts` folder contains all the code for the post features.

* `postRoutes.ts` is where API routes are defined, and where HTTP requests and responses are handled.
* `postDAO.ts` handles database interaction (DAO stands for Data Access Object).
* `postModel.ts` defines a data model for posts in our database. This deals with differences in how posts are represented in our code and how they're respresented in the database.


