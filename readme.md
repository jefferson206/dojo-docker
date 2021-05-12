# https://github.com/Fabioh/todo-app

# Todo app

<!-- TOC -->

- [Todo app](#todo-app)
    - [1. About](#1-about)
    - [2. Run the application with docker compose](#2-run-the-application-with-docker-compose)
        - [2.1 Install Docker for your plataform](#21-install-docker-for-your-plataform)
        - [2.2 Install Docker-compose for your plataform](#22-install-docker-compose-for-your-plataform)
    - [3. Run the application](#3-run-the-application)

<!-- /TOC -->

## 1. About
 - A simple Todo List App that was done with [Reactjs](https://reactjs.org) a [Webpack](https://webpack.js.org) and [Redux](https://github.com/reduxjs/redux) in frontend;
 - The backend was did with [Nodejs](https://nodejs.org), [ExpressJS](https://github.com/expressjs/express), [Node-restful](https://github.com/baugarten/node-restful) and [MongoDB](https://www.mongodb.com/);
 - I trust in [Docker](https://www.docker.com) and [Docker-Compose](https://docs.docker.com/compose/) to run all application tiers as containers (frontend, backend and database).

## 2. Run the application with docker compose
### 2.1 Install Docker for your plataform
 - [Install docker instructions](https://www.docker.com/community-edition)

### 2.2 Install Docker-compose for your plataform
 - [Install docker-compose instructions](https://docs.docker.com/compose/)

## 3. Run the application

```bash
$ cd path/to/the/project/directory
```
 - Build and start all layers (MongoDB, Bakckend API and Frontend) as back ground containers
```bash
$ docker-compose up -d --build
```
 - Build, for production, and start all app layers (MongoDB, Backend API and Frontend) in containers running in background
```bash
$ docker-compose -f docker-compose.prod.yml up -d --build   
```

 - Open [http://localhost/](http://localhost/) in your browser
 
 - Stop all containers

```bash
$ docker-compose down
```