const express = require("express");

const user_mapping = require("./mappings/user");
const post_mapping = require("./mappings/post");

var cors = require('cors');

let server = express();

server.use(express.json());
server.use(cors());
server.use(user_mapping.router);
server.use(post_mapping.router);

var PORT = process.env.PORT || 4000;

server.listen(PORT, (error)=>{
  if (error){
    console.log(error);
    } else {
      console.log("Server started at port 4000");
    }
})