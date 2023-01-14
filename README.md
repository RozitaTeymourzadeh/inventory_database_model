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
* Adminer will be running at http://localhost:8080

# Entities

* [x] user
* [x] item
* [x] item_type
* [x] address
* [x] manufacturer
* [x] item_info
* [x] item_image

# Prerequisite 

- install docker compose : 
    Docker Desktop Installer.exe
https://docs.docker.com/desktop/install/windows-install/

Wsl_update_x64.msi

## Command in powershell
 - docker-compose up
 - docker ps
 - docker-compose down 

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
 * API installation
 - npm i express morgan compression helmet
 - npm i -D nodemon
 - npm i papaparse
 * Install test framework
 - npm i -D jest supertest
 - (optional) npm install jest --global // to overcome DEBUG error

 

