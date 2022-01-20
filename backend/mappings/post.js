
const express = require("express");
const connection = require("../database");


let router = express.Router();

const getPost = (request, response) => {
    connection.query(`select * from post where Post_ID = ${request.query.postID} ;`, (error, records) => {
        if (error) {
            console.log(error);
            response.status(500).send("Some error occured while executing query")
        } else {
            response.status(200).send(records);
        }
    })
};

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

const insertUsers = (request, response) => {
    connection.query(`INSERT INTO post (Post_Title, Post_Description, Post_image) values 
    ("${request.query.postTitle}","${request.query.postDescription}","${request.query.postImage}");`, 
    (error, records) => {
        if (error) {
            console.log(error);
            response.status(500).send("Some error occured while executing query")
        } else {
            response.status(200).send(records);
        }
    });
}

const updatePost = (request, response) => {
    //var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
    // need to find a way to get postID and search up post from DB
    var postID = request.query.postID
    var postTitle 
    var postDesc
    var postImg
    connection.query(`UPDATE post (Post_Title, Post_Description, Post_image) values 
    ("${request.query.postTitle}","${request.query.postDescription}","${request.query.postImage}");`, 
    (error, records) => {
        if (error) {
            console.log(error);
            response.status(500).send("Some error occured while executing query")
        } else {
            response.status(200).send(records);
        }
    });
}

/* 

http://localhost:4000/post/insert?postTitle=Jogging&postDescription=Run&postImage=https://preview.redd.it/21ghjyhnjmb81.gif?width=960&format=mp4&s=69ae3f05ee59793703165d1b726159dcc1205f1f

*/

const delPost = (request, response) => {
    //var sql = request
    var sql = `DELETE FROM post WHERE Post_Title = "${request.query.postTitle}"`;
    connection.query(sql, (error, records) => {
        if (error) {
            console.log(error);
            response.status(500).send("Some error occured while executing query")
        } else {
            response.status(200).send(records);
        }
    })
};

// Create a user [CREATE]
router.get("/post/insert", insertUsers);
// get all users [READ]
router.get("/post/all", getUsers);

// get 1 post [READ]
router.get("/post/single", getPost);

// Update a user [UPDATE]
router.get("/post/update", updatePost);

// Delete a user [DELETE]
router.get("/post/delete", delPost);

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