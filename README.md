### This project is a modified version of https://github.com/the-road-to-graphql/fullstack-apollo-express-postgresql-boilerplate


## Installation

* `git clone git@github.com:the-road-to-graphql/fullstack-apollo-express-postgresql-boilerplate.git`
* `cd fullstack-apollo-express-postgresql-boilerplate`
* `touch .env`
* `npm install`
* fill out *.env file* (see below)
* start PostgreSQL database
* `npm start`
* visit `http://localhost:8000` for GraphQL playground

#### .env file

Since this boilerplate project is using PostgreSQL, you have to install it for your machine and get a database up and running. You find everything for the set up over here: [Setup PostgreSQL with Sequelize in Express Tutorial](https://www.robinwieruch.de/postgres-express-setup-tutorial). After you have created a database and a database user, you can fill out the environment variables in the *server/.env* file.

```
GQL_DATABASE=mydatabase 

GQL_SECRET=asdlplplfwfwefwekwself.2342.dawasdq
```

The `SECRET` is just a random string for your authentication. Keep all these information secure by adding the *.env* file to your *.gitignore* file. No third-party should have access to this information.

