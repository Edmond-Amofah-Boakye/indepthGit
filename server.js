import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express()
const httpServer = createServer(app)

const io = new Server(httpServer, {
    cors: "*"
})

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("message", (data)=>{
        console.log(`this is totally from -- test --ASDTEF100G ${data}`);
    })
})

httpServer.listen(3000, () => console.log("server listening on port 3000"))