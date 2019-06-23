'use strict'
const mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'foo',
    password : 'bar',
    database : 'sakila',
    ssl  : {
        rejectUnauthorized: false
      }
});




exports.db_connect=function(){
    connection.connect();
      /*  function(err) {
        if (err) throw err;
        console.log("Connected!");
        connection.query("CREATE DATABASE mydb1", function (err, result) {
          if (err) throw err;
          console.log("Database created");
      });*/
    }

exports.getData = function(){
    connection.query('select *from sakila.actor;',function(error, results, fields){
        if (error) throw error;
        console.log('The solution is: ', results[0].first_name);
    });
}

exports.db_close=function(){
    connection.end();
}

