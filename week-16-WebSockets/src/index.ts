const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080 });
 
wss.on("connection", function(socket){

    console.log("users connected")
   

    socket.on("message", (e) => {
        if(e.toString() === "ping"){
            socket.send("pong");
        }
    })

})
