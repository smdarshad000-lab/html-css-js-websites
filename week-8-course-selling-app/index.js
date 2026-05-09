const express = require("express");
const mongoose = require("monfoose");


const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use("/api/v1/user",userRouter);
app.use("api/v1/admin",)
app.use("/api/v1/course",courseRouter);

async function main(){
await mongoose.connect("")

app.listen(4100);
console.log("listening on port 3000")

}