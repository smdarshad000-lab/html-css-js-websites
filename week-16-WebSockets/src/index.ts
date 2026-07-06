import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080});
 
wss.on("connection", function(socket){

    console.log("users connected")
    setInterval(() =>{
        socket.send("Current price of solana is" + Math.radom(());
    },500)

    socket.on("message", (e) => {
        console.log(e.tostring());
    })

})
