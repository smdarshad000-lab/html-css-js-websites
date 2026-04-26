const express = require("express");
// const cors = require("cors");


const app = express();

app.use(express.json());
// app.use(cors{});

app.get("/",function(req,res){
    res.sendFile("./public/index.html");
})

app.post("/sum",function (req,res) {
    const a = parseInt (req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        answer: a + b
    })

})

app.lsiten(3000);