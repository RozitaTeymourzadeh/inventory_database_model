# inventory_database_model

An application for inventory managament system. 
This application uses the following tools:
- PostGres as a database
- Node.js as aSQL query builder (`knex`)
- Docker build a model at scale

## Installation

* Install dependencies: `npm install`
* Create `env` with credentials
* Run the postgres db / adminer: `docker-compose up`
* Migrate the database: `npm run migrate`
* Add metadata/inital data in the table: `npm run seed`
* Rollback the tables to the previous migrate: `npm run rollback` 
* Adminer will be running at http://localhost:8080
* Front-end will be running at http://localhost:5050
* Run front-end: `npm run dev`

# Entities

* [x] user
* [x] item
* [x] item_type
* [x] address
* [x] manufacturer
* [x] item_info
* [x] item_image

# Implemented

* CRUD
    * Create
    * Read
    * Update
    * Delete
* Address Endpoints
* Company
* Items
* Item_info


# Prerequisite 

- install docker compose : 
    Docker Desktop Installer.exe
https://docs.docker.com/desktop/install/windows-install/

Wsl_update_x64.msi

- Knex.js // Query builder library to host node.js
- Objection.js // allows to generate relation in our tables (ORM) and it uses json schema

## Command in powershell
 - docker-compose up
 - docker ps
 - docker-compose down 

 * To create db for test 
 - docker exec -t -i backend-db-1 bash // command to go to the specific docker here is inventory app 
 - psql -Uadmin inventory_app
 - CREATE DATABASE inventory_app_test; // (optional): createdb inventory_app_test
 - exit
 - docker exec -t -i backend-db-1 bash
 - dropdb inventory_app_test



## To install knex and packages
 - npm init -y 
 - npm i knex
 - optional:  npm install -g npm@9.2.0
 - npm i pg
 - npm i dotenv
 - npx knex init
 * set the knexfile.js
 - npm i -D eslint
 - npx eslint --init
 
 * create db/migrations folder *
 - npx knex migrate:make initial
 
 * put in package.json script with the following as a option too : npx knex migrate:latest
 - npm run migrate 
 
 * set seeds:
 - npx knex seed:make initial
 - npm i bcrypt
 - node -e "console.log(require('crypto').randomBytes(30).toString('hex'))"
 - npm run seed
 - npx knex migrate:make item_table
 - npm run migrate -- --debug
 - DROP TABLE "address" CASCADE;
 
 * To start front-end server
 - npm run dev

 * API installation
 - npm i express morgan compression helmet
 - npm i -D nodemon
 - npm i papaparse
 
 * Install test framework
 - npm i -D jest supertest
 - (optional) npm install jest --global // to overcome DEBUG error
 - npm test
 - npx jest --init
 - npx knex migrate:rollback --env test

 * Objection.js
 - npm i
 - npm install objection
 
 * Password library
 - npm i jsonwebtoken


 - npm i yup // for login and password validation

 - 

