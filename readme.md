# Fulton Server Example

This is an example to show you how to use Fulton Server. It has a related [tutorial](https://swarmnyc.gitbooks.io/fulton/content/server/get-start.html). You can read the tutorial to get more detailed information.

# Requirements
- Nodejs >= 7.0
- Mongodb >= 2.0

# Installation

1. Restore Northwind database
``` bash
mongorestore --gzip --archive=./database/northwind.agz
```

2. Install npm packages
``` bash
npm install
```

3. Build the script and Run
``` bash
# method 1
npm run build
npm run start

# method 2
npm run start:dev
```

4. Visits http://localhost:3000/docs to see the API documentation.

5. Run in Postman

   we provided series of API calls in Postman, you can hit this button

   [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/492498ddaab5a69c4d87)

   to test the APIs.
