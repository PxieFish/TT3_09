const express = require("express");

const connection = require("../database");

let router = express.Router();

router.get("/user/all", (request, response) => {
    connection.query("select * from user;", (error, records) => {
        if (error) {
            console.log(error);
            response.status(500).send("Some error occured while executing query")
        } else {
            response.status(200).send(records);
        }
    });
});

// router.get("/user/by-user-id", (request, response) => {
//     if (!request.query.uid) {
//         console.log("Received invalid user_id: " + request.query.userId)
//         response.send(400).send("Received invalid user id")
//     } else {
//         connection.query(`select * from user where uid=${request.query.uid}`, (error, records) => {
//             if(error){
//                 console.log(error);
//                 response.status(500).send("Error encountered while executing query");
//             } else {
//                 console.log(records.length)
//                 if (records.length==1){
//                     response.status(200).send(true);
//                 }
//             }
//         });
//     }
// });
module.exports = {router};