
const express = require("express");
const connection = require("../database");


let router = express.Router();


const getUsers = (request, response) => {
    connection.query("select * from post;", (error, records) => {
        if (error) {
            console.log(error);
            response.status(500).send("Some error occured while executing query")
        } else {
            response.status(200).send(records);
        }
    })
};

router.get("/post/all", getUsers);

router.get("/post/insert", (request, response) => {
    connection.query(`INSERT INTO post (Post_Title, Post_Description, Post_image) values ("${request.query.postTitle}","${request.query.postDescription}","${request.query.postImage}");`, (error, records) => {
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