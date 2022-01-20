const mysql = require("mysql");
require("dotenv").config();


let connection = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: 3306,
    database: "socialmedia",
})

connection.connect((errors) => {
    if (errors) {console.log(errors);}
    else{ console.log("Connected to MySQL server!");}
});

module.exports = connection;
