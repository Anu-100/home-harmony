import User from "../models/user_model.js";
import bcryptjs from 'bcryptjs';
import error_handler from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, email, password } =req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })
    try {
        await newUser.save()
        res.status(201).json({message: "User created successfully!!"})
    } catch (error) {
        next(error)
    }
}


export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(error_handler(404, "User not found!"));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword){
            return next(error_handler(401, "Incorrect Password"));
        }
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET_KEY);
        const { password: pass, ...other_info } = validUser._doc;
        res.cookie('access_token', token, { httpOnly: true, maxAge: 3*24*60*60*1000 }).status(200).json(other_info);
    } catch (error) {
        next(error)
    }
}

export const googleSignIn = async(req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if(user){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY)
            const { password: pass, ...other_info } = user._doc
            res.cookie('access_token', token, { httpOnly: true }).status(200).json(other_info)
        }else{
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10)
            const newUser = new User({
                username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4),
                email: req.body.email, 
                password: hashedPassword,
                avatar: req.body.photo
            })
            await newUser.save()
            const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET_KEY)
            const { password: pass, ...other_info } = newUser._doc
            res.cookie('access_token', token, { httpOnly: true }).status(200).json(other_info)
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export const signout = async (req, res, next) => {
    try {
        res.clearCookie('access_token')
        res.status(200).json("User has been signed out!")
    } catch (error) {
        next(error)
    }
}