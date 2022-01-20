const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bobbysql1!",
    port: 3306,
    database: "socialmedia",
})

connection.connect((errors) => {
    if (errors) {console.log(errors);}
    else{ console.log("Connected to MySQL server!");}
});

module.exports = connection;