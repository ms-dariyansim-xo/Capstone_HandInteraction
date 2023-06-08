//My intention of using MySQL is to utilize CRUD operations.
//CRUD will be applied to "User Profile Management", intended for History/Saved videos table.

//Connecting MySQL (used as DB) with Node.js as well.

//require is used to include modules from Node.js.
//In this instance, variable of mysql is created to connect DB to Javascript.
//Another way to do a connection is via VSC terminal.
var mysql = require('mysql');

//createConnection function was made available via require method.
var myconnection = mysql.createConnection({
    host: "localhost",
    user: "dxsim",
    password: "password"
});

//Using callbacks.
myconnection.connect(function(err){
    if(err) throw err;
    console.log("Connection successful.");
});

//Create CRUD operations for table to save/delete video contents-- used for purpose of user profile. 