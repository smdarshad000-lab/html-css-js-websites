const express = require('express');

    const app = express();
    app.use(express.json());

    const users = [];

   function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
         'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
          'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

    app.post("/signup", (req, res) => {
        const username =  req.body.username;
        const password = req.body.password;
    
        

        user.push({
            username: username,
            password:password
        })

        res.json({
            message: " you are signed up"
        })

        console.log(users);
    })

      app.post("/signin", (req, res) => {

        const username =  req.body.username;
        const password = req.body.password;

        let foundUser = null;

        for(let i = 0; i < userlength; i++){
             if (users[i].username == username && users[i].password == password){
            founfUser = users[i]
        }
    }

        if (foundUser){
            const token = generateToken();
            foundUser.token = token;
            res.json({
                message: token
            })
        }else{
            res.status(403).send{
                message: " Invalid username or passwowrd";
            }
        }

        const foundUser = users.find(function(u){
            if(u.username == username && u.password == password){
                return true;
        }else{
            return false;
        }
        })

        console.log(users);
    })

    app.get("/me", (req,res) => {
        const token = req.headers.token
        const founder = null;

        for (let i = 0; i < users.length; i++ ){
            if (users[i].token == token){
                foundusers = users[i];
            }
        }
        if (foundUser){
            res.json({
                username: foundUser.username,
                password: foundUser.password
            })
        }else {
            res.json({
                message: "sorry token invalid"
            })
        }
    })

    app.listen(3300);
