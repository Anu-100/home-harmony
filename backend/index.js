import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database connected successfully")
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(5000, () => {
    console.log("Running on port 5000...")
})