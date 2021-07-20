# Cloudspeak Hasura Crash Course

This repository contains the code required to follow Cloudspeak's Hasura Crash Course on YouTube.  It is a partial implementation of a simple blog, using React for the frontend and Hasura for the backend.  The course will show you how to make the blog functional.

## `frontend`

The `frontend` directory contains a completed React web app for the blog.  The first video of the course will show you how to set up a simple Hasura backend which will make it functional.

You can start the frontend as follows:

```text
cd frontend
npm install
npm start
```

## `backend`

The `backend` directory contains the basic skeleton of an express.js API for implementing custom event and action handlers.  The second and third videos in the course will show you how to implement them.

You can start the backend as follows:

```text
cd backend
npm install
npm start
```


## `docker-compose.yaml`

`docker-compose.yaml` is a Docker Compose file describing the Hasura service and a Postgres database.  You must [install Docker](https://docs.docker.com/get-docker/) to run it.  If you are on Linux or WSL you will also need to [install Docker Compose](https://docs.docker.com/compose/install/) separately.  The first video of the course will show you how to get Hasura up and running.

You can start the service as follows:

```
docker-compose up
```