const { Router } = require("express");

const { usermodel, purchaseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

const userRouter = Router();

userRouter.post("/signup", async function (req, res) {
    const { email, password, firstname, lastname } = req.body;

    try {
        const user = await usermodel.create({
            email,
            password,
            firstname,
            lastname,
        });

        res.json({ message: "signup successful", user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

userRouter.post("/signin", async function (req, res) {
    const { email, password } = req.body;

    try {
        const user = await usermodel.findOne({
            email,
            password,
        });

        if (user) {
            const token = jwt.sign({ id: user._id }, JWT_USER_PASSWORD);
            res.json({ token });
        } else {
            res.status(403).json({ message: "Incorrect Credentials" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

userRouter.get("/purchases", async function (req, res) {
    const userId = req.userId;
    const purchases = await purchaseModel.find({ userId });

    res.json({ purchases });
});

module.exports = {
    userRouter,
};