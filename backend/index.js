const express = require('express');
const http = require('http');


const app = express();
const server = http.createServer(app);



const { Server } = require("socket.io");

const globalServer = new Server(server, {

    cors:{
        origin: "*", // allow all
        methods: ["GET", "POST"]
    }
});

server.listen(4000, () => {
    console.log('Our server is running on http://localhost:4000');
});