const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const mongoConnect = require('./util/database').mongoConnect;
//const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
//const { isMainThread } = require('worker_threads');

app.listen(5000);