# inventory_database_model


# Entities

* [x] item
* [x] item_info
* [x] manufacturer
* [x] item_type
* [x] address

# Prerequisite 

- install docker compose : 
    Docker Desktop Installer.exe
https://docs.docker.com/desktop/install/windows-install/

Wsl_update_x64.msi

# command in powershell
 - docker-compose up

To install knex
 - npm init -y 
 - npm i knex
 - optional:  npm install -g npm@9.2.0
 - npm i pg
 - npm i dotenv
 - npx knex init
 # set the knexfile.js
 - npm i -D eslint
 - npx eslint --init
 # create db/migrations folder
 - npx knex migrate:make initial

