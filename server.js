'use strict'
var express = require('express');
var morgan = require('morgan');
//var path = require('path');
//var crypto = require('crypto');
var bodyParser = require('body-parser');
const app = express();
app.use(morgan('combined'));
app.set("title","My First App");
app.use(bodyParser.json());
const config = require('./config/config.js');
const db = require('./config/db_connect.js');





app.get('/', (req, res) => {
    res.json(global.gConfig.node_port);
    db.db_connect();
    db.getData();
    db.db_close();
});

app.listen(global.gConfig.node_port,()=>{
    console.log(`Server is running in Port ${global.gConfig.node_port}!`);
});