require('custom-env').env();
const serverless = require('serverless-http')
const express = require('express') 
const app = express() 
const bodyParser = require("body-parser"); 
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
  
const { container, setup } = require('./src/infrastructure/config/di-setup');
setup()    

const {routers}=require("./src/infrastructure/router/index");
routers(app) 

// Create a Server
const port = process.env.PORT || 8080;
const server = app.listen(port, function () {
  const port = server.address().port; 
  console.log(`App listening on port ${port}`);
});

export let handler = serverless(app);