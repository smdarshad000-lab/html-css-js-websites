const bcrypt = require("bcrypt");

const express = require("express");

const { UserModel, TodoModel } = require("./db");

const { z } = require("zod");

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://100xdevs:VWaTao0509mb90YX@cluster0.assjd.mongodb.net/todo-harkirat-2222");

const app = express();  

app.use(express.json());

const jwt = require("jsonwebtoken");
const JWT_SECRET = "arshad123@123";

app.post("/signup", async function(req,res){
    const requireBody = z.object({
        email: z.string().email().min(3).max(100),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(30)
    })

    // const parsedData = require.parse(req.body);
    const parsedDataWithSuccess = requireBody.safeParse(req.body);

    if (!parsedDataWithSuccess.success) {
        res.status(400).json({
            message: "Incorrect format"
        });
        return;
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserModel.create({
        name: name,
        password: hashedPassword,
        email: email
    });

    res.json({
        message: "you are signed up"
    });
});

app.post("/signin", async function(req,res){
        const email = req.body.email;
        const password = req.body.password;

        const user = await UserModel.findOne({
            email: email,

        });

        if(!user) {
            res.status(403).json({
                message: "User does not exist in our db"
            });
            return;
        }
        const passwordMatch = await bcrypt.compare(password, user.password);

        if(passwordMatch){
            const token = jwt.sign({
                id: user._id.toString()
            }, JWT_SECRET);
            res.json({
                token: token
            });
        }else{
            res.status(403).json({
                message: "Incorrect credentials"
            });
        }
});

app.post("/todo", auth, function(req,res){
    const userId = req.userId;
    const title = req.body.title;
    TodoModel.create({
        title,
        userId
    }).then(() => {
        res.json({
            message: "Todo created"
        });
    }).catch((e) => {
        res.status(500).json({
            message: "Error creating todo"
        });
    });
});

app.post("/todos", auth, async function(req,res){

    const userId = req.userId;
    const todos = await TodoModel.find({
        userId: userId
    });

    res.json({
        todos
    });
});

function auth(req,res,next){
    const token = req.headers.token;

    try {
        const decodedData = jwt.verify(token, JWT_SECRET);

        if(decodedData){
            req.userId = decodedData.id;
            next();
        }else{
            res.status(403).json({
                message: "Incorrect credentials"
            });
        }
    } catch(e) {
        res.status(403).json({
            message: "Invalid token"
        });
    }
}



app.listen(4550);