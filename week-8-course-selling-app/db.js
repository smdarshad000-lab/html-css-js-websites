const mongoose = require("mongoose");
console.log("connected to")
mongoose.connect(" ")  // mongoDB url


const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
        email: { type:String, unique: true},
        password: String,
        firstName:String,
        lastName: string

});

const adminSchema = new Schema({
              email: { type:String, unique: true},
        password: String,
        firstName:String,
        lastName: string
});

const courseSchema = new Schema({

            tittle: String,
            description: String,
            price: Number,
            imageUrl: String,
            creatorId: objectId
});

const purchaseSchema = new Schema({
            userId: ObjectId,
            courseId: ObjectId
});

const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

module.export = {
    userModel,
    adminModule,
    courseModule,
    purchaseModule
}