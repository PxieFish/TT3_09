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

const checkUser = (request, response) => {
    connection.query(`SELECT * FROM user WHERE Email="${request.query.Email}" AND Birthday="${request.query.Birthday}";`, (error, records) => {
        if (error) {
            console.log(error);
            response.status(500).send("Some error occured while executing query")
        } else {
            if (records.length==1){
                response.status(200).send(true);
            } else {
                response.status(200).send(false);    
            }
        }
    })
};

// Checks user's login [CREATE]
router.get("/user/login", checkUser);

//  localhost:4000/user/login?Email=bmccreery0@bloomberg.com&Birthday=1993-03-01

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