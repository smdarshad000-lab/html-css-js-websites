const { Router } = require("express");

const adminRouter = Router();

const { adminModel, courseModel } = require("../db");

const jwt = require("jsonwebtoken");

const { JWT_ADMIN_PASSWORD } = require("../config");

const { adminMiddleware } = require("../middleware");

adminRouter.post("/signup", async function(req, res) {
    const { email, password, firstname, lastname } = req.body;

    try {
        const user = await adminModel.create({
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

adminRouter.post("/signin", async function(req, res) {
    const { email, password } = req.body;

    const user = await adminModel.findOne({
        email,
        password,
    });

    if (user) {
        const token = jwt.sign({
            id: user._id,
        }, JWT_ADMIN_PASSWORD);

        res.json({ token });
    } else {
        res.status(403).json({ message: "Incorrect Credentials" });
    }
});

adminRouter.post("/course", adminMiddleware, async function(req, res) {
    const adminId = req.userId;
    const { title, description, imageUrl, price } = req.body;

    const course = await courseModel.create({
        title,
        description,
        imageUrl,
        price,
        creatorId: adminId,
    });

    res.json({
        message: "Course created",
        courseId: course._id,
    });
});

adminRouter.put("/course", adminMiddleware, async function(req, res) {
    const adminId = req.userId;
    const { title, description, imageUrl, price, courseId } = req.body;

   
    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId,
    }, {
        title,
        description,
        imageUrl,
        price,
        creatorId: adminId,
    });

    res.json({
        message: "Course updated",
        courseId: course._id,
    });
});

adminRouter.get("/course/bulk", adminMiddleware, async function(req, res) {
    const adminId = req.userId;

      const courses = await courseModel.updateOne({
        creatorId: adminId
    });

    res.json({
        message: "course updated",
        courses
    });

});

module.exports = {
    adminRouter,
};