# POKEDEX

This is a pokedex project that allows to search pokemon from created
using JSON server fake REST API.

## Requirements

- make sure you have Node.js and npm installed.

## How to run in a nutshell

In order to run this project in a standard mode you need to respectively:

- go to the root folder of this project
- install required dependencies by typing in the terminal `npm install`
- run `npm run json:server` command in the terminal to run fake REST API
- run `npm start` command to start local server
- go to the [http://localhost:3000](http://localhost:3000) in the browser to view the project

**Remember: you can't run pokedex aplication without running JSON server first**

## Running JSON server

Running JSON server using standard command given in [JSON server documentaion](https://github.com/typicode/json-server) (`json-server --watch db.json`) will run it on port 3000. Since "create react app" development server is also running on port 3000, we recommend to use `npm run json:server` command which will run the server on port 4000.

If your port 4000 is already taken, you can change it to another port by:

- changing content of package.json file (lines 25 and 26) and setting number 4000 occuring after -p tag to another port number
- going to src/redux/actions/actions.js and changing the constant `port` to desired port number

### Running fake REST API with delay

In order to simulate delay of connection with real API, JSON server provides delay option. If you are interested with this option, you should

- first, make sure that you are not runnig JSON-server already
- then, run `npm run json:server:delay` command in your terminal

Default delay is set to 2000ms. You can change it in the package.json file by altering the number in line 26 after the -d tag.

### Altering the content provided by JSON server

In order to add or remove pokemons from API, you need to change the content of db.json file.
