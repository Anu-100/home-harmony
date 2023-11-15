import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dqvpcvlxy/image/upload/v1700067232/real-estate-app/images_dojhwy.png"
    }
}, { timestamps: true })

const User = mongoose.model("User", UserSchema) 

export default User