import bcryptjs from 'bcryptjs'
import error_handler from "../utils/error.js"
import User from '../models/user_model.js'

export const test = (req, res) => {
    res.json({message: "Happy Coding..."})
}

export const updateUserInfo = async (req, res, next) => {
    if(req.user.id !== req.params.id) return next(error_handler(401, "You can only update your own account!"))
    try {
        if(req.body.password){
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                avatar: req.body.avatar
            }
        }, {new: true})
        const { password, ...other_info } = updatedUser._doc
        res.status(200).json(other_info)
    } catch (error) {
        next(error)
    }
}