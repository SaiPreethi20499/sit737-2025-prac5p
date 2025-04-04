# SIT737 – Task 5.1P: Containerisation of a Simple Web Application Using Docker

## Overview

This project demonstrates the containerisation of a simple Node.js web application using Docker and Docker Compose. The application is built into a Docker image and deployed as a container. Health checks are also implemented to ensure the container remains healthy during runtime.

## Technologies used:

- Git
- Visual Studio Code
- Node.js
- Docker
- Docker Compose

1. We first install the Docker Desktop from https://www.docker.com/products/docker-desktop

```sh
docker --version
```

2. We try to create a basic webpage and make sure its running correctly using Node.js

3. A Dockerfile was created to define the container image.

```sh
FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "simpleserver.js"]
```

4. The Docker image was built using the following command:

```sh 
docker build -t preethi597/node-web-app
```
5. The docker-compose.yml file was created to manage container deployment and a health check was also added to monitor the container.

6. We start the Docker Compose Environment using below command.

```sh
docker-compose
```
7. Push the image to Dockerhub

```sh
docker push preethi597/node-web-app:latest’
```