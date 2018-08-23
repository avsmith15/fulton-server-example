#!/bin/bash

mongod & 
mongorestore --gzip --archive=database/northwind.agz
npm run start:prod