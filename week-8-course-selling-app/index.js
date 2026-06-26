require('dotenv').config()
console.log(process.env,MONGO_URL)

const express = require("express");
const mongoose = require("monfoose");


const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();
app.use(express.json());

app.use("/api/v1/user",userRouter);
app.use("api/v1/admin",)
app.use("/api/v1/course",courseRouter);

async function main(){
await mongoose.connect(process.env.MONGO_URL)

app.listen(4100);
console.log("listening on port 4100")

}

main()