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


globalServer.on("connection", (socket) => {
    console.log("User connected", socket.id);
    socket.emit("userConnected", "Welcome to Chat App");
    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    });


    socket.on("message", (message) => {
        console.log("We received Message on Socket", message);
        globalServer.emit("receivedMessage", message);
    });
});
server.listen(4000, () => {
    console.log('Our server is running on http://localhost:4000');
});