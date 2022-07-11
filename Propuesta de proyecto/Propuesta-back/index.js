'use strict'

const mongoConfig = require('./config/mongo');
const app = require('./config/app');

mongoConfig.init();
app.initServer();