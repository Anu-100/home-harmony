import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import userRouter from './routes/user_router.js'
import authRouter from './routes/auth_router.js'

dotenv.config()

const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database connected successfully")
    })
    .catch((err) => {
        console.log(err)
    })

app.use("/api/users", userRouter)
app.use("/api/auth", authRouter)

app.listen(5000, () => {
    console.log("Running on port 5000...")
})
