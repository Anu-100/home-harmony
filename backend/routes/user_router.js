import express from 'express'
import { test, updateUserInfo } from '../controllers/user_controller.js'
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router()

router.get("/test", test)
router.put("/update/:id", verifyToken, updateUserInfo)

export default router