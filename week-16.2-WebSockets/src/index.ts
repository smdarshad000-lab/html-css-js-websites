const { WebSocketServer, WebSocket } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

let allSockets: WebSocket[] = [];

wss.on("connection", (socket: WebSocket) => {
   
    allSockets.push(socket);

    console.log("user connected #");

    socket.on("message", (message: any) => {
        console.log("message received " + message.toString())
        for (let i = 0; i < allSockets.length; i++ ){
            const s = allSockets[i];
            s.send(message.toString() + ": sent from the server")
        }

    })
    
})

socket.on("disconnct")



export {};

