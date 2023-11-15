import express from "express";
import { signup, signin, googleSignIn } from "../controllers/auth_controller.js";

const router = express.Router()

router.post("/sign-up", signup)
router.post("/sign-in", signin)
router.post("/google", googleSignIn)

export default router