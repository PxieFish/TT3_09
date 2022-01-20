const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql2022",
    port: 3306,
    database: "socialmedia",
})

connection.connect((errors) => {
    if (errors) {console.log(errors);}
    else{ console.log("Connected to MySQL server!");}
});

module.exports = connection;