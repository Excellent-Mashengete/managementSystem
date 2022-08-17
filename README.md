# Employee Record System
Employee Record System is a platform  created by for keeping records of employees in a company 

## Dependencies

Sever third-party packages installed using npm i: bcrypt, body-parser, cors, dotenv, express, jsonwebtoken, jwt-decode, nodemailer, rand-token, pg

Client third-party packages installed using npm i:  DaisyUI, ngx-loading, ng2-search-filter, PrimeNG, PrimeIcons, rxjs, Tailwind
    
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

#### server: runs on nodejs16
<ol>
  <li>cd server</li>
  <li>npm install</li>
  <li>npm install -g nodemon</li>
  <li>nodemon server.js</li>
</ol>

<strong>N.B Backend is hosted on heroku</strong>

<strong>N.B Database we are using herku postgres</strong>

### Step 2 : go to node terminal session and run the following commands

#### client: runs on angular13
<ol>
  <li>cd ../client</li>
  <li>npm install</li>
  <li>ng server -o</li>
</ol>

<strong>N.B Frontend is hoated on netlify</strong>

## Run docker as follows:

step 1 : docker-compose build --no-cache

step 2 : docker-compose up

OR

Run : docker-compose up -d

## This will run the project locally
## To view the project that is hosted, visit: https://employeesystem.netlify.app
