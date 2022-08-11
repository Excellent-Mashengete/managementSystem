# HR Management System
HR Management system is a platform  created by for keeping records of employees in a company 

backend third-party packages installed using npm i: bcrypt, body-parser, cors, dotenv, express, jsonwebtoken, jwt-decode, nodemailer, rand-token, pg

## Steps to run application 

### Prerequisites
You must have installed the following
<ol>
  <li>nodeJS(expressjs)</li>
  <li>Angular CLI</li>
</ol>
<ul>
  <li>To install nodeJS, visit this site: https://nodejs.org/en/ choose the LTS version</li>
  <li>To install Angular, run the command "npm install -g @angular/cli" in the terminal</li>
</ul>

### Step 1 : After cloning the project , go to your terminal and run the following commands  

#### Backend(node)
<ol>
  <li>cd server</li>
  <li>npm install</li>
  <li>npm install -g nodemon</li>
  <li>nodemon server.js</li>
</ol>

<strong>N.B Backend is hosted on heroku</strong>

<strong>N.B Database we are using herku postgres</strong>

### Step 2 : go to node terminal session and run the following commands

#### Frontend(angular)
<ol>
  <li>cd ../client</li>
  <li>npm install</li>
  <li>ng server -o</li>
</ol>


## Run docker as follows:

step 1 : docker-compose build --no-cache

step 2 : docker-compose up

OR

Run : docker-compose up -d

## This will run the project locally
## To view the project that is hosted, visit: https://sneakerwear.netlify.app/