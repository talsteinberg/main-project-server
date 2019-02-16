require('dotenv').config();

const express = require('express');
const marker = require('@ajar/marker');
const db = require('./db/mongoose.connection')
const { API_PORT,API_HOST } = process.env;

const app = express();

//start the express api server
(async ()=> {
  //connect to mongo db
  await db.connect();  
  await app.listen(API_PORT,API_HOST);
  marker.magenta(`api is live on`,`  ✨  http://${API_HOST}:${API_PORT} ✨`);  
})().catch(error=> marker.error(error))