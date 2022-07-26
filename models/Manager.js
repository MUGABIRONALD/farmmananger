const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const ManagerSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    role:{
        type:String,
    },
    gender:{
        type:String,
    },
    branch:{
        type:String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    telno:{
        type:Number,
    },

    password: {
        type: String,
    },
    passconf:{
        type:String,
    },
});

// Export Model
ManagerSchema.plugin(passportLocalMongoose, { usernameField: "email" }); //used for auth
module.exports = mongoose.model("Manager", ManagerSchema);
