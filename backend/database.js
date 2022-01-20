const mysql = require("mysql2");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "socialmedia",
})

connection.connect((errors) => {
    if (errors) {console.log(errors);}
    else{ console.log("Connected to MySQL server!");}
});

module.exports = connection;
