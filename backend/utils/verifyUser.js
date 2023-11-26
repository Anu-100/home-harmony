import jwt from "jsonwebtoken"
import error_handler from "./error.js"

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token

    if(!token) return next(error_handler(401, "Unauthorized access!"))

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if(err) return next(error_handler(403, "Forbidden"))

        req.user = user
        next()
    })
}