# Fulton Server Example

This is an example on how to use [Fulton-Server](https://github.com/swarmnyc/fulton/tree/master/fulton-server). It has a related [tutorial](https://swarmnyc.gitbooks.io/fulton/content/server/get-start.html). You can read the tutorial to get more detailed information.

## Get Started
There are three ways to run this project.

### 1. From this source code and run locally

**Requirements**
- Nodejs >= 7.0
- Mongodb >= 3.0

1. clone or download this project
2. Restore Northwind database
``` bash
mongorestore --gzip --archive=./database/northwind.agz
```
3. Install npm packages
``` bash
npm install
```

4. Build the script and Run
``` bash
# method 1, dev version, use ts-node
npm start

# method 2, production version
npm run build
npm run start:prod
```

### 2. From this source code, run in docker
**Requirements**
- Docker

The docker build script composes the mongo and node in a image. Use these commands to build a docker image and start a docker container.

1. clone or download this project

2. run these commands

``` bash
npm run build:docker
npm run start:docker
```

### 3. Use Our Pre-Built Docker Image

**Requirements**
- Docker

We have prepared a docker image in docker hub to cut the time for building the image. Use this command to start a docker container.

``` bash
docker run --rm -p 3000:3000 wadehuang36/fulton-server-example 
```

## API Documents
Visit http://localhost:3000/docs to see the API documentation. If you cannot see the api page, it means there is something wrong.

## Example API calls
We provided a series of API calls in Postman. Hit the button below to test:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/492498ddaab5a69c4d87) to test the APIs.
