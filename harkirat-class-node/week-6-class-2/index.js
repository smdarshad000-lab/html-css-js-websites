const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "harkirat123";

const app = express();
app.use(express.json());

const users = [];

app.post("/signup", logger, function(req,res){
            const username = req.body.username
            const password = req.body.password
            users.push({
                username: username,
                password: password
            })

            res.json({
                message: "you are signed in"
            })
})

app.get("/", function(reqq,res){
    res.sendFile(__dirname + "/public/index.html");
})


app.post("/signin", logger, function(req,res){
            const username = req.body.username
            const password = req.body.password
    
            let founUser = null;
           

            for (let i = 0; i< users.length; i++){
                if (users[i].username === username && users[i].password === password){
                        foundUser = users[i]
                }
                     if (!foundUser){
                        res.json({
                            message: "Credentials is incorrect"
                        })
                        return
                     }else{
                        const token = jwt.sign({
                            username: users[i].username
                        }, JWT_SECRET);
                         res.header("jwt",token)

                          res.header("random harkirat");

                        res.json({
                            token : token
                        })
                     }
                    
                }
})

function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.username){
        next()
    }else{
        res.json({
            message: "You are not logged in"
        })
    }
    next()
}

function logger(req,res,next){

    console.log(req.method + " request came");
    next();
}

app.get("/me", auth, logger, function(req,res){

        const token = req.headers.token;

        const decodedData= jwt.verify(token, JWT_SECRET);

        if(decodedData.username){

             let founUser = null;

            for (let i = 0; i< users.length; i++){
                if (users[i].username === req.username ){
                        foundUser = users[i]
                }
            }

            res.json({
                username: foundUser.username,
                password: foundUser.password
            })
        }else {
            res.json({
                message: "Your are not logged in"
            })
        }
})

app.get("/todo", auth, function(req,res){
    
        if(decodedData.username){


        }else {
            res.json({
                message: "Your are not logged in"
            })
        

        }

})

app.get("/todo", auth, function(req,res){
    
})

app.get("/todo", auth, function(req,res){
    
})


app.listen(4000)