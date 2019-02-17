require('dotenv').config();

const express = require('express');
const app = express();
const marker = require('@ajar/marker');
const exphbs = require('express-handlebars');

const db = require('./db/mongoose.connection');
const { API_PORT,API_HOST } = process.env;
const web_router = require('../routes/web');
const api_router = require('../routes/api');

//  routers
app.use('/home',web_router);
app.use('/api',api_router);

app.get('/',  (req, res) => {
  res.status(200).send('Hello Express!')
});

app.get('*',  (req, res) => {
  res.status(404).send('My 404 not found')
});

// set engine
app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');

//start the express api server
(async ()=> {
  //connect to mongo db
  await db.connect();  
  await app.listen(API_PORT,API_HOST);
  marker.magenta(`server is live on`,`  ✨  http://${API_HOST}:${API_PORT} ✨`);  
})().catch(error=> marker.error(error))


